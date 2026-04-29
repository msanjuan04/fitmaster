import type { Metadata } from 'next'
import { MapPin, Clock, Mail, Phone, Instagram, MessageCircle } from 'lucide-react'
import ContactoForm from './ContactoForm'

export const metadata: Metadata = {
  title: 'Contacto — Asesoramiento y Suplementación en Gijón',
  description:
    'Contacta con Fitmaster en Gijón. Solicita asesoramiento, consulta productos o resuelve dudas. Formulario, WhatsApp, teléfono y ubicación en Avd Portugal 9.',
  keywords: [
    'contacto fitmaster',
    'fitmaster gijón contacto',
    'tienda suplementos gijón dirección',
    'entrenador personal gijón contacto',
    'asesoramiento fitness gijón',
  ],
  openGraph: {
    title: 'Contacto — Asesoramiento y Suplementación en Gijón | Fitmaster',
    description:
      'Escríbenos, llámanos o visítanos en Avd Portugal 9, Gijón. Respuesta rápida por WhatsApp.',
    url: 'https://fitmaster.es/contacto',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto — Gijón | Fitmaster',
    description:
      'Escríbenos, llámanos o visítanos en Avd Portugal 9, Gijón. Respuesta rápida por WhatsApp.',
    images: ['/opengraph-image'],
  },
  alternates: { canonical: 'https://fitmaster.es/contacto' },
}

const hours = [
  { day: 'Lunes', time: '10:30–13:30 / 17:30–20:30', open: true },
  { day: 'Martes', time: '10:30–13:30 / 17:30–20:30', open: true },
  { day: 'Miércoles', time: '10:30–13:30 / 17:30–20:30', open: true },
  { day: 'Jueves', time: '10:30–13:30 / 17:30–20:30', open: true },
  { day: 'Viernes', time: '10:30–13:30 / 17:30–20:30', open: true },
  { day: 'Sábado', time: 'Cerrado', open: false },
  { day: 'Domingo', time: 'Cerrado', open: false },
]

const canDo = [
  'Solicitar asesoramiento personalizado',
  'Consultar productos de la tienda',
  'Resolver dudas sobre suplementación',
  'Colaborar o patrocinar con la marca',
]

export default function ContactoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[50vh] bg-black pt-20 grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] overflow-hidden">
        <div className="flex flex-col justify-end px-8 lg:px-12 py-16 lg:py-20 relative">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]"
              style={{ background: '#D7FB04', clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }} />
          </div>
          <div className="relative z-10">
            <span className="section-label block mb-6">Contacto</span>
            <h1 className="font-heading font-black text-white uppercase leading-[0.88] text-[clamp(44px,7vw,80px)] tracking-tight mb-6">
              Da el<br />
              <span className="text-fitgreen">siguiente paso.</span>
            </h1>
            <p className="font-body text-white/50 text-base leading-relaxed max-w-md">
              Si quieres información, asesoramiento o resolver una duda, contacta con Fitmaster.
            </p>
          </div>
        </div>
        <div className="hidden lg:block bg-[#1a1a1a]" />
        {/* WhatsApp highlight */}
        <div className="hidden lg:flex items-center bg-fitgreen px-12"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 6% 100%)' }}>
          <div>
            <p className="font-heading font-black text-black text-2xl uppercase leading-tight tracking-tight mb-4">
              Respuesta más rápida<br />por WhatsApp
            </p>
            <a href="https://wa.me/34722624740" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-fitgreen font-heading font-black text-xs uppercase tracking-widest px-6 py-3 hover:bg-[#111] transition-colors"
              style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }}>
              <MessageCircle size={14} /> Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="bg-[#050505] diagonal-bottom py-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-0">

            {/* FORMULARIO */}
            <div className="lg:pr-16">
              <h2 className="font-heading font-black text-white uppercase text-[clamp(28px,3.5vw,44px)] leading-[0.9] tracking-tight mb-10">
                Escríbenos
              </h2>
              <ContactoForm />
            </div>

            <div className="hidden lg:block bg-[#1a1a1a]" />

            {/* INFO */}
            <div className="mt-10 lg:mt-0 lg:pl-16 space-y-8">

              {/* Datos */}
              <div className="card-dark p-5 md:p-8">
                <h3 className="font-heading font-black text-white text-lg uppercase tracking-tight mb-6">
                  Cómo encontrarnos
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <MapPin size={16} className="text-fitgreen mt-0.5 shrink-0" />
                    <div>
                      <p className="font-body text-white/70 text-sm">Avd Portugal, 9, Bajo</p>
                      <p className="font-body text-white/70 text-sm">33207 Gijón, Asturias</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <Phone size={16} className="text-fitgreen shrink-0" />
                    <a href="tel:+34722624740" className="font-body text-white/70 text-sm hover:text-fitgreen transition-colors">
                      722 624 740
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <Mail size={16} className="text-fitgreen shrink-0" />
                    <a href="mailto:fitmastergijon@gmail.com" className="font-body text-white/70 text-sm hover:text-fitgreen transition-colors">
                      fitmastergijon@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <Instagram size={16} className="text-fitgreen shrink-0" />
                    <a href="https://instagram.com/fitmastergijon" target="_blank" rel="noopener noreferrer"
                      className="font-body text-white/70 text-sm hover:text-fitgreen transition-colors">
                      @fitmastergijon
                    </a>
                  </li>
                </ul>
              </div>

              {/* Horario */}
              <div className="card-dark p-5 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock size={16} className="text-fitgreen" />
                  <h3 className="font-heading font-black text-white text-lg uppercase tracking-tight">Horario</h3>
                </div>
                <ul className="space-y-3">
                  {hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between">
                      <span className="font-body text-white/40 text-sm">{h.day}</span>
                      <span className={`font-body text-sm ${h.open ? 'text-white/70' : 'text-white/20'}`}>
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mapa */}
              <div className="aspect-video bg-[#111] border border-[#1a1a1a] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2927.0!2d-5.675!3d43.535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAvenida+de+Portugal+9+Gij%C3%B3n!5e0!3m2!1ses!2ses!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Fitmaster — Avd Portugal 9, Gijón"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ PUEDES HACER */}
      <section className="bg-black diagonal-top pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label block mb-4">Motivos</span>
            <h2 className="font-heading font-black text-white uppercase text-[clamp(28px,4vw,48px)] leading-[0.9] tracking-tight">
              Qué puedes hacer desde aquí
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {canDo.map((item, i) => (
              <div key={i} className="card-dark p-6 text-center"
                style={{ clipPath: i % 2 === 1 ? 'polygon(0 3%, 100% 0, 100% 97%, 0 100%)' : 'none' }}>
                <div className="w-8 h-8 bg-fitgreen mx-auto mb-4 flex items-center justify-center"
                  style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }}>
                  <span className="font-heading font-black text-black text-xs">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="font-body text-white/60 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="py-16 bg-fitgreen">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-heading font-black text-black text-3xl md:text-4xl uppercase leading-[0.9] tracking-tight mb-6">
            No sigas dándole vueltas.
          </h2>
          <p className="font-body text-black/50 text-base mb-8">
            Contacta con Fitmaster y te ayudamos a ver cuál es el paso correcto para ti.
          </p>
          <a href="https://wa.me/34722624740" target="_blank" rel="noopener noreferrer"
            className="btn-black-on-green inline-flex items-center gap-2">
            <MessageCircle size={14} /> Hablar por WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
