import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Check } from 'lucide-react'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'

export const metadata: Metadata = {
  // absolute bypasses the layout template to evitar doble "Fitmaster"
  title: {
    absolute: 'Fitmaster Gijón — Asesoramiento Fitness y Suplementación · Pablo Álvarez',
  },
  description:
    'Asesoramiento fitness personalizado con Pablo Álvarez, Campeón de España de Culturismo. Suplementación Life Pro y seguimiento real en Gijón. Transforma tu físico con criterio.',
  openGraph: {
    title: 'Fitmaster Gijón — Asesoramiento Fitness y Suplementación · Pablo Álvarez',
    description:
      'Asesoramiento personalizado con Pablo Álvarez, Campeón de España. Suplementación Life Pro y seguimiento real en Gijón.',
    url: 'https://fitmaster.es',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fitmaster Gijón — Asesoramiento Fitness y Suplementación · Pablo Álvarez',
    description:
      'Pablo Álvarez, Campeón de España. Asesoramiento personalizado, suplementación Life Pro y seguimiento real en Gijón.',
    images: ['/opengraph-image'],
  },
  alternates: { canonical: 'https://fitmaster.es' },
}

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Fitmaster Gijón — Asesoramiento Fitness y Suplementación',
  description:
    'Fitmaster es el ecosistema fitness en Gijón fundado por Pablo Álvarez, Campeón de España de Culturismo. Asesoramiento personalizado, suplementación Life Pro y seguimiento real.',
  thumbnailUrl: 'https://fitmaster.es/opengraph-image',
  uploadDate: '2024-01-01',
  contentUrl: 'https://fitmaster.es/videohome.mp4',
  embedUrl: 'https://fitmaster.es',
  publisher: { '@id': 'https://fitmaster.es/#organization' },
}

const services = [
  {
    num: '01',
    label: 'Asesoramiento',
    title: 'Asesoramiento',
    text: 'Entrenamiento, nutrición y seguimiento personalizado para personas que quieren dejar de ir a ciegas y empezar a progresar con criterio.',
    href: '/asesoramiento',
  },
  {
    num: '02',
    label: 'Tienda',
    title: 'Tienda',
    text: 'Suplementación seleccionada con lógica, recomendación personalizada y una experiencia de compra pensada para ayudarte de verdad.',
    href: '/tienda',
  },
  {
    num: '03',
    label: 'Equipo',
    title: 'Equipo de competición',
    text: 'Disciplina, rendimiento y cultura de esfuerzo llevadas al máximo por atletas que representan los valores de Fitmaster.',
    href: '/equipo',
  },
]

const differentials = [
  { title: 'Método antes que ruido', text: 'No trabajamos desde modas ni consejos contradictorios, sino desde una estructura clara orientada a tu objetivo.' },
  { title: 'Seguimiento real', text: 'No se trata solo de darte pautas, sino de revisar, ajustar y sostener el proceso para que haya progreso de verdad.' },
  { title: 'Recomendación personalizada', text: 'Cada recomendación se adapta a tu objetivo, tu nivel, tu contexto y tu presupuesto.' },
  { title: 'Experiencia de compra útil', text: 'Prueba los sabores antes de comprar. Decides con más seguridad y sin sorpresas.' },
]

const forYou = [
  'Quieres estructura en tu entrenamiento y en tu nutrición',
  'Necesitas claridad sobre qué hacer y cómo hacerlo',
  'Valoras seguimiento, criterio y personalización',
  'Buscas resultados reales, no parches temporales',
  'Estás dispuesto a seguir un sistema con consistencia',
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      {/* ── HERO: layout editorial dos columnas (D) ── */}
      <section className="relative min-h-screen bg-black pt-20 grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] overflow-hidden">

        {/* ── Vídeo de fondo — solo móvil (< lg) ── */}
        <div className="absolute inset-0 lg:hidden">
          <video
            src="/videohome.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Overlay: oscuro arriba, más transparente en el centro, negro sólido en la zona inferior */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
        </div>

        {/* Columna izquierda */}
        <div className="flex flex-col justify-between px-8 lg:px-12 pt-16 pb-24 lg:py-20 relative z-10">
          {/* Diagonal bg accent — solo desktop */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
            <div className="absolute bottom-0 right-0 w-2/3 h-1/2 opacity-[0.04]"
              style={{
                background: '#D7FB04',
                clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)',
              }} />
          </div>

          {/* Badge */}
          <div className="flex items-center gap-4 mb-0">
            <div className="w-8 h-px bg-fitgreen" />
            <span className="section-label">Fitmaster · Gijón</span>
          </div>

          {/* Headline */}
          <div>
            <h1 className="font-heading font-black text-white uppercase leading-[0.88] text-[clamp(52px,8vw,96px)] tracking-tight mb-8">
              Deja de<br />
              <span className="text-fitgreen">entrenar</span><br />
              sin<br />
              dirección.
            </h1>
            <p className="font-body text-white/70 lg:text-white/50 text-base leading-relaxed max-w-sm mb-10">
              Sistema estructurado, seguimiento real y decisiones con criterio para transformar tu físico de verdad.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contacto" className="btn-primary">
                Quiero empezar <ArrowRight size={14} />
              </Link>
              <Link href="/asesoramiento" className="btn-secondary">
                Descubrir Fitmaster
              </Link>
            </div>
          </div>

          {/* Tagline pills */}
          <div className="flex gap-3 flex-wrap mt-12">
            {['Método', 'Disciplina', 'Resultados'].map((t) => (
              <span key={t} className="font-heading font-black text-[10px] uppercase tracking-[0.2em] text-fitgreen border border-fitgreen/30 px-3 py-1.5">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Stats strip móvil — pegado al fondo del hero, visible solo < lg */}
        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 border-t border-white/10 lg:hidden z-10">
          {[
            { num: '+250', label: 'Transformados' },
            { num: '100%', label: 'Personalizado' },
            { num: '5★', label: 'Valoración' },
          ].map((s, i) => (
            <div key={s.label} className={`py-5 px-3 text-center ${i < 2 ? 'border-r border-white/10' : ''}`}>
              <p className="font-heading font-black text-fitgreen text-2xl leading-none mb-1">{s.num}</p>
              <p className="font-body text-white/40 text-[10px] uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Divisor vertical editorial */}
        <div className="hidden lg:block bg-[#1a1a1a]" />

        {/* Columna derecha — vídeo + stats (solo desktop) */}
        <div className="hidden lg:flex flex-col">
          {/* Video hero */}
          <div className="flex-1 bg-black relative overflow-hidden"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 92%, 5% 100%)' }}>
            <video
              src="/videohome.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
          </div>
          {/* Stats editoriales */}
          <div className="grid grid-cols-3 border-t border-[#1a1a1a]">
            {[
              { num: '+250', label: 'Transformados' },
              { num: '100%', label: 'Personalizado' },
              { num: '5★', label: 'Valoración' },
            ].map((s, i) => (
              <div key={s.label} className={`py-6 px-6 text-center ${i < 2 ? 'border-r border-[#1a1a1a]' : ''}`}>
                <p className="font-heading font-black text-fitgreen text-3xl leading-none mb-1">{s.num}</p>
                <p className="font-body text-white/30 text-[10px] uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUÉ ES: sección diagonal (B) + editorial (D) ── */}
      <section className="bg-[#050505] diagonal-bottom pb-32 pt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1px_1fr] gap-0 items-start">
            {/* Label vertical */}
            <div className="hidden lg:flex items-start pt-2">
              <span className="text-vertical">Qué es Fitmaster</span>
            </div>
            {/* Texto */}
            <div className="lg:pr-16">
              <span className="section-label block mb-6 lg:hidden">Qué es Fitmaster</span>
              <h2 className="font-heading font-black text-white uppercase text-[clamp(36px,5vw,60px)] leading-[0.9] tracking-tight mb-8">
                Un ecosistema<br />fitness construido<br />
                <span className="text-fitgreen">con criterio.</span>
              </h2>
              <p className="font-body text-white/50 text-base leading-relaxed mb-5">
                Fitmaster une asesoramiento profesional, suplementación estratégica y seguimiento personalizado para ayudarte a mejorar tu físico con estructura y resultados medibles.
              </p>
              <p className="font-body text-white/50 text-base leading-relaxed mb-10">
                Aquí no trabajamos con motivación vacía, sino con método, disciplina y análisis real del progreso.
              </p>
              <Link href="/sobre-nosotros" className="btn-outline-green">
                Conocer la historia <ArrowRight size={14} />
              </Link>
            </div>
            {/* Divisor */}
            <div className="hidden lg:block bg-[#1a1a1a] self-stretch mx-8" />
            {/* Quote */}
            <div className="mt-12 lg:mt-0">
              <div className="border-l-4 border-fitgreen pl-8 py-2">
                <p className="font-heading font-black text-[clamp(28px,4vw,44px)] text-white uppercase leading-[0.92] tracking-tight mb-3">
                  Si no hay sistema,<br />no hay progreso.
                </p>
                <p className="font-heading font-black text-[clamp(28px,4vw,44px)] text-fitgreen uppercase leading-[0.92] tracking-tight">
                  Y si no se mide,<br />no mejora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS: grid diagonal (B) ── */}
      <section className="bg-black diagonal-top pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16 gap-8 flex-wrap">
            <div>
              <span className="section-label block mb-4">Servicios</span>
              <h2 className="font-heading font-black text-white uppercase text-[clamp(36px,5vw,60px)] leading-[0.9] tracking-tight">
                Tres formas<br />de avanzar.
              </h2>
            </div>
            <p className="font-body text-white/40 text-sm max-w-xs leading-relaxed">
              Cada servicio está diseñado para una necesidad concreta dentro del proceso de transformación física.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
            {services.map((s, i) => (
              <div key={s.num}
                className={`p-6 md:p-10 flex flex-col group transition-colors ${i === 1 ? 'bg-fitgreen' : 'bg-black hover:bg-[#0a0a0a]'}`}
                style={{ clipPath: i === 1 ? 'polygon(0 3%, 100% 0, 100% 97%, 0 100%)' : 'none' }}>
                <div className="flex items-start justify-between mb-8">
                  <span className={`font-heading font-black text-5xl leading-none ${i === 1 ? 'text-black/15' : 'text-fitgreen/15'}`}>
                    {s.num}
                  </span>
                  <span className={`font-body text-[10px] uppercase tracking-[0.25em] font-semibold ${i === 1 ? 'text-black/60' : 'text-fitgreen'}`}>
                    {s.label}
                  </span>
                </div>
                <h3 className={`font-heading font-black text-2xl uppercase tracking-tight mb-4 ${i === 1 ? 'text-black' : 'text-white'}`}>
                  {s.title}
                </h3>
                <p className={`font-body text-sm leading-relaxed flex-1 mb-8 ${i === 1 ? 'text-black/70' : 'text-white/40'}`}>
                  {s.text}
                </p>
                <Link href={s.href}
                  className={`inline-flex items-center gap-2 font-heading font-black text-[11px] uppercase tracking-widest group-hover:gap-4 transition-all ${i === 1 ? 'text-black' : 'text-fitgreen'}`}>
                  Ver más <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIALES: verde diagonal (B) ── */}
      <section className="bg-fitgreen diagonal-both py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-0 items-center">
            <div className="lg:pr-16 py-8">
              <span className="font-body text-[10px] uppercase tracking-[0.3em] text-black/60 font-semibold block mb-6">Diferenciales</span>
              <h2 className="font-heading font-black text-black uppercase text-[clamp(36px,5vw,56px)] leading-[0.9] tracking-tight">
                Por qué<br />Fitmaster<br />es diferente.
              </h2>
            </div>
            <div className="hidden lg:block bg-black/20 self-stretch" />
            <div className="lg:pl-16 py-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentials.map((d, i) => (
                <div key={i} className="border border-black/10 p-6 bg-black/5">
                  <h3 className="font-heading font-black text-black text-sm uppercase tracking-tight mb-2">{d.title}</h3>
                  <p className="font-body text-black/60 text-sm leading-relaxed">{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN: editorial (D) ── */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1px_1fr] gap-0 items-start">
            <div className="hidden lg:flex items-start pt-2">
              <span className="text-vertical">Para quién</span>
            </div>
            <div className="lg:pr-16">
              <span className="section-label block mb-6 lg:hidden">Para quién</span>
              <h2 className="font-heading font-black text-white uppercase text-[clamp(36px,5vw,60px)] leading-[0.9] tracking-tight mb-8">
                Fitmaster es<br />
                <span className="text-fitgreen">para ti si...</span>
              </h2>
              <p className="font-body text-white/40 text-base leading-relaxed mb-10">
                Para personas con responsabilidades reales que quieren sentirse fuertes y con más control sobre su vida. No es para todo el mundo. Es para quien está comprometido con su cambio físico.
              </p>
              <Link href="/contacto" className="btn-primary">
                Solicitar información <ArrowRight size={14} />
              </Link>
            </div>
            <div className="hidden lg:block bg-[#1a1a1a] self-stretch mx-8" />
            <div className="mt-10 lg:mt-0 flex flex-col gap-2">
              {forYou.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 border border-[#1a1a1a] hover:border-fitgreen/40 transition-colors group"
                  style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }}>
                  <div className="w-5 h-5 bg-fitgreen shrink-0 flex items-center justify-center"
                    style={{ clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)' }}>
                    <Check size={11} className="text-black" strokeWidth={3} />
                  </div>
                  <p className="font-body text-white/60 text-sm group-hover:text-white transition-colors">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section className="bg-[#050505] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16 gap-8 flex-wrap">
            <div>
              <span className="section-label block mb-4">Resultados</span>
              <h2 className="font-heading font-black text-white uppercase text-[clamp(36px,5vw,56px)] leading-[0.9] tracking-tight">
                Resultados reales.<br />
                <span className="text-fitgreen">Procesos sostenibles.</span>
              </h2>
            </div>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ── CTA FINAL: diagonal (B) ── */}
      <section className="bg-fitgreen diagonal-top py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_auto] gap-0 items-center">
            <div className="lg:pr-16">
              <h2 className="font-heading font-black text-black uppercase text-[clamp(36px,5vw,64px)] leading-[0.9] tracking-tight mb-6">
                Si buscas un sistema<br />claro para mejorar<br />tu físico, este es<br />el siguiente paso.
              </h2>
              <p className="font-body text-black/60 text-lg">Deja de avanzar a ciegas. Empieza hoy.</p>
            </div>
            <div className="hidden lg:block bg-black/20 self-stretch mx-16" />
            <div className="mt-10 lg:mt-0 flex flex-col gap-4">
              <Link href="/contacto" className="btn-black-on-green justify-center">
                Solicitar información <ArrowRight size={14} />
              </Link>
              <a href="https://wa.me/34722624740" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-black text-black font-heading font-black text-xs uppercase tracking-widest px-10 py-5 hover:bg-black hover:text-fitgreen transition-colors"
                style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}>
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
