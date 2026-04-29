import Link from 'next/link'
import { MapPin, Clock, Mail, Phone, Instagram } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/asesoramiento', label: 'Asesoramiento' },
  { href: '/tienda', label: 'Tienda' },
  { href: '/equipo', label: 'Equipo de competición' },
  { href: '/sobre-nosotros', label: 'Sobre mí' },
  { href: '/pablo-alvarez', label: 'Pablo Álvarez — Entrenador' },
  { href: '/contacto', label: 'Contacto' },
]

const hours = [
  { day: 'Lunes — Viernes', time: '10:30–13:30 / 17:30–20:30' },
  { day: 'Sábado', time: 'Cerrado' },
  { day: 'Domingo', time: 'Cerrado' },
]

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Marca */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-fitgreen flex items-center justify-center">
                <span className="font-heading font-black text-black text-xs">FM</span>
              </div>
              <span className="font-heading font-black text-white text-xl uppercase tracking-wider">
                Fitmaster
              </span>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed mb-6">
              Ecosistema fitness que une asesoramiento profesional, suplementación estratégica y seguimiento personalizado.
            </p>
            <p className="font-heading font-black text-fitgreen text-xs uppercase tracking-widest">
              Método · Disciplina · Resultados
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-heading font-black text-white text-sm uppercase tracking-widest mb-6">
              Páginas
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-white/50 text-sm hover:text-fitgreen transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-heading font-black text-white text-sm uppercase tracking-widest mb-6">
              Contacto
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-fitgreen mt-0.5 shrink-0" />
                <span className="font-body text-white/50 text-sm">
                  Avd Portugal, 9, Bajo<br />
                  33207 Gijón, Asturias
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-fitgreen shrink-0" />
                <a
                  href="https://wa.me/34722624740"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white/50 text-sm hover:text-fitgreen transition-colors"
                >
                  722 624 740
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-fitgreen shrink-0" />
                <a
                  href="mailto:fitmastergijon@gmail.com"
                  className="font-body text-white/50 text-sm hover:text-fitgreen transition-colors"
                >
                  fitmastergijon@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={16} className="text-fitgreen shrink-0" />
                <a
                  href="https://instagram.com/fitmastergijon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white/50 text-sm hover:text-fitgreen transition-colors"
                >
                  @fitmastergijon
                </a>
              </li>
            </ul>
          </div>

          {/* Horario */}
          <div>
            <h3 className="font-heading font-black text-white text-sm uppercase tracking-widest mb-6">
              Horario
            </h3>
            <ul className="flex flex-col gap-3">
              {hours.map((h) => (
                <li key={h.day}>
                  <p className="font-body text-white/30 text-xs uppercase tracking-wider mb-0.5">{h.day}</p>
                  <p className="font-body text-white/70 text-sm">{h.time}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a1a1a] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/30 text-xs">
            © {new Date().getFullYear()} Fitmaster by PabloAlv. Todos los derechos reservados.
          </p>
          <p className="font-body text-white/20 text-xs">
            Si no hay sistema, no hay progreso.
          </p>
        </div>

        {/* Powered by */}
        <div className="border-t border-[#1a1a1a] mt-4 pt-4 text-center">
          <p className="font-heading font-black text-[10px] uppercase tracking-[0.3em] text-white/15">
            Powered by{' '}
            <a
              href="https://gnerai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/25 hover:text-fitgreen transition-colors"
            >
              Gnerai
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
