import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pablo Álvarez — Entrenador Personal, Campeón de España',
  description:
    'Pablo Álvarez, Campeón de España de Culturismo y fundador de Fitmaster Gijón. Más de 250 personas transformadas con un método basado en criterio y seguimiento real.',
  keywords: [
    'pablo álvarez entrenador gijón',
    'pablo álvarez fitmaster',
    'campeón españa culturismo',
    'entrenador personal gijón',
    'mr olympia asturias',
    'transformación física gijón',
  ],
  openGraph: {
    title: 'Pablo Álvarez — Entrenador Personal, Campeón de España | Fitmaster',
    description:
      'Campeón de España de Culturismo, más de 250 personas transformadas. Fitmaster nace de un recorrido real.',
    url: 'https://fitmaster.es/sobre-nosotros',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pablo Álvarez — Entrenador Personal, Campeón de España | Fitmaster',
    description:
      'Campeón de España de Culturismo, +250 personas transformadas. El método Fitmaster nace de un recorrido real.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://fitmaster.es/sobre-nosotros',
  },
}

const milestones = [
  { year: '15 años', label: 'El inicio', text: 'Empieza a entrenar buscando cambiar un físico que no le gustaba.' },
  { year: 'Formación', label: 'Certificación', text: 'Se forma, se certifica como entrenador y empieza a ayudar a otras personas a transformar su cuerpo.' },
  { year: 'Competición', label: 'Campeón de España', text: 'Compite y consigue el título de Campeón de España junto a títulos internacionales.' },
  { year: 'Élite', label: 'Mr. Olympia', text: 'Viaja acompañando a uno de sus atletas al Mr. Olympia, manteniéndose vinculado a la élite del fitness.' },
  { year: 'Hoy', label: 'Fitmaster · +250', text: 'Más de 250 personas han mejorado su físico con este enfoque. El equipo suma títulos en competiciones nacionales e internacionales.' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://fitmaster.es' },
    { '@type': 'ListItem', position: 2, name: 'Sobre mí', item: 'https://fitmaster.es/sobre-nosotros' },
  ],
}

export default function SobreNosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO */}
      <section className="relative min-h-[75vh] bg-black pt-20 grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] overflow-hidden">
        <div className="flex flex-col justify-end px-8 lg:px-12 py-16 lg:py-20 relative">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]"
              style={{ background: '#D7FB04', clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }} />
          </div>
          <div className="relative z-10">
            <span className="section-label block mb-6">Sobre mí</span>
            <h1 className="font-heading font-black text-white uppercase leading-[0.88] text-[clamp(44px,7vw,80px)] tracking-tight mb-8">
              Fitmaster nace<br />de una forma real<br />de vivir la<br />
              <span className="text-fitgreen">transformación.</span>
            </h1>
            <p className="font-body text-white/50 text-base leading-relaxed max-w-md mb-10">
              Detrás de la marca hay años de entrenamiento, formación, competición y trabajo directo con personas reales.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/asesoramiento" className="btn-primary">
                Conocer el asesoramiento <ArrowRight size={14} />
              </Link>
              <Link href="/contacto" className="btn-secondary">
                Contactar
              </Link>
            </div>
          </div>
        </div>
        {/* Stats móvil — solo visible en <lg */}
        <div className="lg:hidden grid grid-cols-3 border-t border-[#1a1a1a]">
          {[
            { num: '+250', label: 'Clientes' },
            { num: 'Campeón', label: 'de España' },
            { num: 'Olympia', label: 'Experiencia' },
          ].map((s, i) => (
            <div key={s.label} className={`py-5 px-3 text-center ${i < 2 ? 'border-r border-[#1a1a1a]' : ''}`}>
              <p className="font-heading font-black text-fitgreen text-lg leading-none mb-1">{s.num}</p>
              <p className="font-body text-white/30 text-[10px] uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="hidden lg:block bg-[#1a1a1a]" />
        {/* Foto personal */}
        <div className="hidden lg:flex flex-col bg-[#050505]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 6% 100%)' }}>
          <div className="flex-1 relative flex items-end overflow-hidden">
            <div className="absolute inset-0"
              style={{ backgroundImage: 'url(/pablo1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 35%' }}
              role="img" aria-label="Pablo Álvarez — Fundador de Fitmaster" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="relative z-10 p-8">
              <div className="border-l-4 border-fitgreen pl-6">
                <p className="font-heading font-black text-white text-2xl uppercase tracking-tight">Pablo Álvarez</p>
                <p className="font-body text-fitgreen text-xs uppercase tracking-widest mt-1">Fundador · Fitmaster</p>
                <p className="font-body text-white/30 text-xs mt-2">Campeón de España · Entrenador Personal</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 border-t border-[#1a1a1a]">
            {[
              { num: '+250', label: 'Clientes' },
              { num: 'Campeón', label: 'de España' },
              { num: 'Olympia', label: 'Experiencia' },
            ].map((s, i) => (
              <div key={s.label} className={`py-6 px-4 text-center ${i < 2 ? 'border-r border-[#1a1a1a]' : ''}`}>
                <p className="font-heading font-black text-fitgreen text-xl leading-none mb-1">{s.num}</p>
                <p className="font-body text-white/30 text-[10px] uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="bg-[#050505] diagonal-bottom py-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1px_1fr] items-start">
            <div className="hidden lg:flex items-start pt-2">
              <span className="text-vertical">La historia</span>
            </div>
            <div className="lg:pr-16">
              <span className="section-label block mb-6 lg:hidden">La historia</span>
              <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight mb-10">
                La historia detrás<br />de Fitmaster
              </h2>
              <div className="space-y-5 font-body text-white/50 text-base leading-relaxed">
                <p>Fitmaster no nace de una moda ni de una idea vacía. Nace de un recorrido real.</p>

                <p>Empecé a entrenar con 15 años buscando cambiar un físico que no me gustaba. Con el tiempo, ese proceso me llevó a formarme, certificarme como entrenador y ayudar a otras personas a transformar su cuerpo con criterio.</p>

                {/* Foto antes de Pablo */}
                <div className="relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/antespablo.jpg" alt="Pablo — transformación física"
                    className="w-full h-auto" />
                </div>

                <p>Años después, llevé ese camino al máximo nivel: competí, fui campeón de España y conseguí títulos internacionales.</p>
                <p>Desde que dejé la competición, he seguido vinculado a la élite del fitness acompañando a mis atletas en cada escenario, hasta viajar con uno al Mr. Olympia.</p>
              </div>
            </div>
            <div className="hidden lg:block bg-[#1a1a1a] self-stretch mx-8" />
            <div className="mt-10 lg:mt-0">
              <div className="border-l-4 border-fitgreen pl-5 md:pl-8 py-4 mb-8">
                <p className="font-heading font-black text-white text-[clamp(22px,3vw,32px)] uppercase leading-[0.92] tracking-tight mb-4">
                  Fitmaster nace de la experiencia, de haber vivido el proceso en primera persona.
                </p>
                <p className="font-body text-white/50 text-base leading-relaxed">
                  Por eso hoy Fitmaster une asesoramiento, suplementación estratégica y una cultura de trabajo real para ayudarte a dejar de improvisar y empezar a avanzar con criterio.
                </p>
              </div>
              <div className="bg-fitgreen p-6" style={{ clipPath: 'polygon(0 4%, 100% 0, 100% 96%, 0 100%)' }}>
                <p className="font-heading font-black text-black text-xl uppercase leading-tight tracking-tight">
                  +250 personas ya han mejorado su físico con este enfoque.
                </p>
              </div>

              {/* Pablo con cliente — resultados reales */}
              <div className="mt-6 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/pablo2.jpg" alt="Pablo con cliente — resultados Fitmaster"
                  className="w-full h-auto" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-3 py-2">
                  <p className="font-heading font-black text-fitgreen text-[10px] uppercase tracking-widest">Resultados reales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-black diagonal-top pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="section-label block mb-4">Trayectoria</span>
            <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight">El recorrido</h2>
          </div>
          <div className="relative">
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-[#1a1a1a]" />
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div key={i} className={`relative flex items-stretch ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="absolute left-0 lg:left-1/2 w-3 h-3 bg-fitgreen -translate-x-1/2 mt-6 z-10"
                    style={{ clipPath: 'polygon(2px 0, 100% 0, calc(100% - 2px) 100%, 0 100%)' }} />
                  <div className={`ml-6 lg:ml-0 lg:w-1/2 p-4 md:p-8 border border-[#1a1a1a] hover:border-fitgreen/20 transition-colors mb-px ${
                    i % 2 === 0 ? 'lg:pr-20' : 'lg:pl-20'}`}
                    style={{ clipPath: i % 2 === 1 ? 'polygon(0 3%, 100% 0, 100% 97%, 0 100%)' : 'none' }}>
                    <span className="font-heading font-black text-fitgreen text-xs uppercase tracking-widest block mb-2">{m.year}</span>
                    <h3 className="font-heading font-black text-white text-xl uppercase tracking-tight mb-2">{m.label}</h3>
                    <p className="font-body text-white/40 text-sm leading-relaxed">{m.text}</p>
                    {/* Foto Campeón de España */}
                    {i === 2 && (
                      <div className="mt-4 overflow-hidden aspect-video relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/pablo1.jpg" alt="Campeón de España — Fitmaster"
                          className="w-full h-full object-cover"
                          style={{ objectPosition: 'center 35%' }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    )}
                    {/* Foto Mr. Olympia en ese hito */}
                    {i === 3 && (
                      <div className="mt-4 overflow-hidden aspect-video relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/pablo4.jpeg" alt="Mr. Olympia — Fitmaster"
                          className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    )}
                  </div>
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENLACE PERFIL PABLO */}
      <section className="bg-[#050505] py-12 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-heading font-black text-white text-sm uppercase tracking-tight mb-1">
              Perfil profesional de Pablo Álvarez
            </p>
            <p className="font-body text-white/40 text-sm">
              Formación, credenciales, filosofía y modalidades de asesoramiento.
            </p>
          </div>
          <Link href="/pablo-alvarez" className="btn-secondary shrink-0">
            Ver perfil completo <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fitgreen diagonal-top py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-heading font-black text-black uppercase text-[clamp(36px,5vw,56px)] leading-[0.9] tracking-tight mb-6">
            Más de 250 personas<br />ya han dado el paso.<br />¿Y tú?
          </h2>
          <p className="font-body text-black/60 text-lg mb-10">El sistema funciona. Solo tienes que comprometerte.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/asesoramiento" className="btn-black-on-green">
              Conocer el asesoramiento <ArrowRight size={14} />
            </Link>
            <Link href="/contacto"
              className="inline-flex items-center gap-2 border-2 border-black text-black font-heading font-black text-xs uppercase tracking-widest px-10 py-5 hover:bg-black hover:text-fitgreen transition-colors"
              style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}>
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
