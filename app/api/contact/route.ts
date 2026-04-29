import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const RECIPIENT_EMAIL = 'fitmastergijon@gmail.com'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'noreply@fitmaster.es'
const SITE_URL = 'https://fitmaster.es'
const LOGO_URL = `${SITE_URL}/logo_fit.webp`

/** Escapa caracteres HTML para evitar inyecciones en el cuerpo del email */
function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\n/g, '<br>')
}

/** Bloque de cabecera compartido entre los dos emails */
function emailHeader(): string {
  return `
    <!-- HEADER -->
    <tr>
      <td style="padding:32px 40px 28px;background-color:#000000;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="width:52px;vertical-align:middle;">
              <img
                src="${LOGO_URL}"
                alt="Fitmaster"
                width="52"
                height="52"
                style="display:block;width:52px;height:52px;object-fit:cover;"
              />
            </td>
            <td style="padding-left:14px;vertical-align:middle;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:20px;font-weight:900;color:#ffffff;text-transform:uppercase;letter-spacing:0.06em;line-height:1;">FITMASTER</p>
              <p style="margin:5px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#D7FB04;text-transform:uppercase;letter-spacing:0.22em;line-height:1;">Método&nbsp;·&nbsp;Disciplina&nbsp;·&nbsp;Resultados</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <!-- GREEN BAR -->
    <tr>
      <td height="3" style="background-color:#D7FB04;font-size:0;line-height:0;">&nbsp;</td>
    </tr>
  `
}

/** Pie de email compartido */
function emailFooter(): string {
  return `
    <!-- FOOTER -->
    <tr>
      <td style="padding:24px 40px;background-color:#080808;border-top:1px solid #1a1a1a;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td>
              <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;color:#ffffff;text-transform:uppercase;letter-spacing:0.08em;">Fitmaster Gijón</p>
              <p style="margin:0 0 2px;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#555555;">Avenida de Portugal, 9, Bajo · 33207 Gijón · Asturias</p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;">
                <a href="mailto:fitmastergijon@gmail.com" style="color:#D7FB04;text-decoration:none;">fitmastergijon@gmail.com</a>
                &nbsp;·&nbsp;
                <a href="${SITE_URL}" style="color:#D7FB04;text-decoration:none;">fitmaster.es</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `
}

/** Email de notificación interna al equipo */
function buildTeamEmail(opts: {
  name: string
  email: string
  phone?: string
  subjectLabel: string
  message: string
}): string {
  const { name, email, phone, subjectLabel, message } = opts
  const replyHref = `mailto:${email}?subject=Re:%20Tu%20mensaje%20a%20Fitmaster`

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Nuevo mensaje — Fitmaster</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0a0a0a;">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <!-- CARD -->
        <table width="600" cellpadding="0" cellspacing="0" border="0"
          style="max-width:600px;width:100%;background-color:#000000;border:1px solid #1a1a1a;">

          ${emailHeader()}

          <!-- BADGE + TITLE -->
          <tr>
            <td style="padding:36px 40px 0;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:#D7FB04;padding:5px 14px;">
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;color:#000000;text-transform:uppercase;letter-spacing:0.15em;">${esc(subjectLabel)}</p>
                  </td>
                </tr>
              </table>
              <h1 style="margin:14px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:26px;font-weight:900;color:#ffffff;text-transform:uppercase;letter-spacing:0.02em;line-height:1.1;">Nuevo mensaje<br>de&nbsp;<span style="color:#D7FB04;">${esc(name)}</span></h1>
            </td>
          </tr>

          <!-- SEPARATOR -->
          <tr>
            <td style="padding:28px 40px 0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td height="1" style="background-color:#1a1a1a;font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
            </td>
          </tr>

          <!-- DATA ROWS -->
          <tr>
            <td style="padding:0 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">

                <!-- Nombre -->
                <tr>
                  <td style="padding:18px 0;border-bottom:1px solid #111111;">
                    <p style="margin:0 0 5px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#555555;text-transform:uppercase;letter-spacing:0.15em;">Nombre</p>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#ffffff;">${esc(name)}</p>
                  </td>
                </tr>

                <!-- Email -->
                <tr>
                  <td style="padding:18px 0;border-bottom:1px solid #111111;">
                    <p style="margin:0 0 5px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#555555;text-transform:uppercase;letter-spacing:0.15em;">Email</p>
                    <p style="margin:0;">
                      <a href="mailto:${esc(email)}" style="font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#D7FB04;text-decoration:none;">${esc(email)}</a>
                    </p>
                  </td>
                </tr>

                ${phone ? `
                <!-- Teléfono -->
                <tr>
                  <td style="padding:18px 0;border-bottom:1px solid #111111;">
                    <p style="margin:0 0 5px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#555555;text-transform:uppercase;letter-spacing:0.15em;">Teléfono</p>
                    <p style="margin:0;">
                      <a href="tel:${esc(phone)}" style="font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#ffffff;text-decoration:none;">${esc(phone)}</a>
                    </p>
                  </td>
                </tr>` : ''}

                <!-- Motivo -->
                <tr>
                  <td style="padding:18px 0;border-bottom:1px solid #111111;">
                    <p style="margin:0 0 5px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#555555;text-transform:uppercase;letter-spacing:0.15em;">Motivo</p>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#ffffff;">${esc(subjectLabel)}</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- MENSAJE -->
          <tr>
            <td style="padding:28px 40px 0;">
              <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#555555;text-transform:uppercase;letter-spacing:0.15em;">Mensaje</p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:#0d0d0d;border-left:3px solid #D7FB04;padding:20px 24px;">
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#cccccc;line-height:1.75;">${esc(message)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA REPLY -->
          <tr>
            <td style="padding:36px 40px;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:#D7FB04;">
                    <a href="${replyHref}"
                      style="display:inline-block;padding:16px 36px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:900;color:#000000;text-decoration:none;text-transform:uppercase;letter-spacing:0.12em;">
                      Responder a ${esc(name)} →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- SEPARATOR -->
          <tr>
            <td style="padding:0 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td height="1" style="background-color:#1a1a1a;font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
            </td>
          </tr>

          ${emailFooter()}

        </table>
        <!-- /CARD -->

      </td>
    </tr>
  </table>
</body>
</html>`
}

/** Email de confirmación para el usuario */
function buildUserEmail(opts: {
  name: string
  subjectLabel: string
  message: string
}): string {
  const { name, subjectLabel, message } = opts

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Hemos recibido tu mensaje — Fitmaster</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0a0a0a;">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <!-- CARD -->
        <table width="600" cellpadding="0" cellspacing="0" border="0"
          style="max-width:600px;width:100%;background-color:#000000;border:1px solid #1a1a1a;">

          ${emailHeader()}

          <!-- HERO TEXT -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <h1 style="margin:0 0 16px;font-family:Arial,Helvetica,sans-serif;font-size:28px;font-weight:900;color:#ffffff;text-transform:uppercase;letter-spacing:0.02em;line-height:1.1;">
                Mensaje recibido,<br><span style="color:#D7FB04;">${esc(name)}.</span>
              </h1>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#888888;line-height:1.7;">
                Gracias por contactar con Fitmaster. Hemos recibido tu mensaje y te responderemos lo antes posible.
              </p>
            </td>
          </tr>

          <!-- SEPARATOR -->
          <tr>
            <td style="padding:0 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td height="1" style="background-color:#1a1a1a;font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
            </td>
          </tr>

          <!-- RESUMEN DE CONSULTA -->
          <tr>
            <td style="padding:28px 40px 0;">
              <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#555555;text-transform:uppercase;letter-spacing:0.15em;">Tu consulta</p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background-color:#0d0d0d;border:1px solid #1a1a1a;">
                <tr>
                  <td style="padding:20px 24px;border-bottom:1px solid #1a1a1a;">
                    <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#555555;text-transform:uppercase;letter-spacing:0.12em;">Motivo</p>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;color:#ffffff;">${esc(subjectLabel)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 24px;border-left:3px solid #D7FB04;">
                    <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#555555;text-transform:uppercase;letter-spacing:0.12em;">Tu mensaje</p>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#999999;line-height:1.7;">${esc(message)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ¿NECESITAS RESPUESTA URGENTE? -->
          <tr>
            <td style="padding:24px 40px 0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background-color:#0d0d0d;border:1px solid #1a1a1a;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;color:#ffffff;text-transform:uppercase;letter-spacing:0.08em;">¿Necesitas respuesta urgente?</p>
                    <p style="margin:0 0 20px;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#666666;line-height:1.6;">Escríbenos directamente por WhatsApp y te respondemos en minutos.</p>
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="background-color:#D7FB04;">
                          <a href="https://wa.me/34722624740"
                            style="display:inline-block;padding:14px 30px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:900;color:#000000;text-decoration:none;text-transform:uppercase;letter-spacing:0.12em;">
                            WhatsApp · 722 624 740 →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- DATOS DE TIENDA -->
          <tr>
            <td style="padding:24px 40px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background-color:#080808;border:1px solid #1a1a1a;">
                <tr>
                  <td style="padding:20px 24px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width:50%;padding-right:16px;vertical-align:top;">
                          <p style="margin:0 0 5px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#555555;text-transform:uppercase;letter-spacing:0.12em;">Dónde estamos</p>
                          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#888888;line-height:1.6;">Avd Portugal, 9, Bajo<br>33207 Gijón · Asturias</p>
                        </td>
                        <td style="width:50%;vertical-align:top;">
                          <p style="margin:0 0 5px;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#555555;text-transform:uppercase;letter-spacing:0.12em;">Horario</p>
                          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#888888;line-height:1.6;">Lunes — Viernes<br>10:30–13:30 / 17:30–20:30</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- SEPARATOR -->
          <tr>
            <td style="padding:0 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td height="1" style="background-color:#1a1a1a;font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
            </td>
          </tr>

          ${emailFooter()}

        </table>
        <!-- /CARD -->

      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const body = await req.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios.' },
        { status: 400 }
      )
    }

    const subjectLabels: Record<string, string> = {
      asesoramiento: 'Solicitar asesoramiento',
      tienda: 'Consulta sobre productos',
      equipo: 'Unirme al equipo',
      patrocinio: 'Colaboración / Patrocinio',
      otro: 'Otro',
    }

    const subjectLabel = subjectLabels[subject] || subject

    // Resend v3 devuelve { data, error } en lugar de lanzar excepciones
    const { error: teamError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      reply_to: email,
      subject: `[Fitmaster] ${subjectLabel} — ${name}`,
      html: buildTeamEmail({ name, email, phone, subjectLabel, message }),
    })

    if (teamError) {
      console.error('[Resend] Error email equipo:', JSON.stringify(teamError))
      return NextResponse.json(
        { error: `Error al enviar: ${teamError.message}` },
        { status: 500 }
      )
    }

    // Confirmación al usuario — si falla no bloquea (el equipo ya recibió el aviso)
    const { error: userError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `Hemos recibido tu mensaje, ${name} — Fitmaster`,
      html: buildUserEmail({ name, subjectLabel, message }),
    })

    if (userError) {
      console.error('[Resend] Error email confirmación usuario:', JSON.stringify(userError))
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Contact API] Error inesperado:', error)
    return NextResponse.json(
      { error: 'Error interno al enviar el mensaje.' },
      { status: 500 }
    )
  }
}
