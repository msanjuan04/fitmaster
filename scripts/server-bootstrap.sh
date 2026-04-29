#!/usr/bin/env bash
#
# Ejecutar EN EL SERVIDOR (Ubuntu/Debian) como root o con sudo.
# Crea el directorio, instala Node 20 si hace falta, clona el repo,
# construye la app y opcionalmente systemd + nginx como reverse proxy.
#
# Uso:
#   chmod +x server-bootstrap.sh
#   sudo ./server-bootstrap.sh
#
# Antes del build, crea tus secretos en el servidor:
#   nano /var/www/fitmaster/.env.production
# (RESEND_* según .env.local.example — sin commitear nunca ese archivo desde local con secretos reales.)

set -euo pipefail

INSTALL_DIR="${FITMASTER_INSTALL_DIR:-/var/www/fitmaster}"
REPO_URL="${FITMASTER_REPO_URL:-https://github.com/msanjuan04/fitmaster.git}"
BRANCH="${FITMASTER_BRANCH:-main}"
BIND_HOST="${FITMASTER_BIND:-127.0.0.1}"
PORT="${FITMASTER_PORT:-3000}"
# Dominio público (para Nginx server_name); con DNS Nominalia → IP del VPS antes de usar HTTPS.
FITMASTER_DOMAIN="${FITMASTER_DOMAIN:-fitmaster.es}"

if [[ "$(id -u)" -ne 0 ]]; then
  echo "Ejecuta con sudo/root." >&2
  exit 1
fi

export DEBIAN_FRONTEND=noninteractive
apt-get update -qq
apt-get install -y -qq curl ca-certificates git nginx

if ! command -v node >/dev/null 2>&1 || [[ "$(node -v 2>/dev/null | tr -dc '0-9' | head -c2 || true)" -lt 18 ]]; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y -qq nodejs
fi

mkdir -p "$INSTALL_DIR"
if [[ ! -d "$INSTALL_DIR/.git" ]]; then
  git clone --depth 1 --branch "$BRANCH" "$REPO_URL" "$INSTALL_DIR"
else
  git -C "$INSTALL_DIR" fetch origin "$BRANCH"
  git -C "$INSTALL_DIR" reset --hard "origin/$BRANCH"
fi

cd "$INSTALL_DIR"

if [[ ! -f .env.production ]]; then
  if [[ -f .env.local.example ]]; then
    cp .env.local.example .env.production
  else
    touch .env.production
  fi
  chmod 640 .env.production || true
  echo ""
  echo ">>> Edita $INSTALL_DIR/.env.production con RESEND_* y otros valores antes de confiar el contacto/email."
fi

npm ci
npm run build

chown -R www-data:www-data "$INSTALL_DIR"

SERVICE=/etc/systemd/system/fitmaster.service
tee "$SERVICE" >/dev/null <<EOF
[Unit]
Description=Fitmaster (Next.js)
After=network.target

[Service]
Type=simple
User=www-data
Group=www-data
WorkingDirectory=$INSTALL_DIR
Environment=NODE_ENV=production
EnvironmentFile=-$INSTALL_DIR/.env.production
ExecStart=/usr/bin/node $INSTALL_DIR/node_modules/next/dist/bin/next start -H $BIND_HOST -p $PORT
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

NGINX_SITE=/etc/nginx/sites-available/fitmaster
tee "$NGINX_SITE" >/dev/null <<NGINX_EOF
server {
    listen 80;
    listen [::]:80;

    server_name ${FITMASTER_DOMAIN} www.${FITMASTER_DOMAIN};

    location / {
        proxy_pass http://127.0.0.1:${PORT};
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host \$host;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    }
}
NGINX_EOF

if [[ -L /etc/nginx/sites-enabled/default ]]; then
  mv /etc/nginx/sites-enabled/default "/etc/nginx/sites-enabled/default.backup.$(date +%s)"
fi
ln -sf "$NGINX_SITE" /etc/nginx/sites-enabled/fitmaster

nginx -t
systemctl daemon-reload
systemctl enable --now fitmaster nginx
systemctl restart nginx

if command -v ufw >/dev/null 2>&1; then
  ufw allow OpenSSH >/dev/null 2>&1 || true
  ufw allow 'Nginx Full' >/dev/null 2>&1 || true
  ufw --force enable >/dev/null 2>&1 || true
fi

echo ""
echo "Listo. App en ${INSTALL_DIR}, Next escuchando ${BIND_HOST}:${PORT}; Nginx (80) sirve fitmaster.es."
echo "Logs: journalctl -u fitmaster -f"
echo ""
echo "Si el DNS ya apunta este servidor, activa HTTPS (Let's Encrypt):"
echo "  sudo apt install -y certbot python3-certbot-nginx"
echo "  sudo certbot --nginx -d ${FITMASTER_DOMAIN} -d www.${FITMASTER_DOMAIN}"
echo ""
echo "Actualizaciones rápidas (en el servidor):"
echo "  cd ${INSTALL_DIR} && git pull && npm ci && npm run build && systemctl restart fitmaster"
