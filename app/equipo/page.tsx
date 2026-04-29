import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FmtTeamLogo from '@/components/FmtTeamLogo'

const athleteImages = [
  '/equipo/cf1.jpeg',
  '/equipo/cf2.jpeg',
  '/equipo/cf3.jpeg',
  '/equipo/cf10.jpeg',
  '/equipo/cf4.jpeg',
  '/equipo/cf5.jpeg',
  '/equipo/cf6.jpeg',
  '/equipo/cf7.jpeg',
  '/equipo/cf8.jpeg',
  '/equipo/cf9.jpeg',
]

// 1.jpg removed, 2.jpg corrupt (3.5 KB), 3.jpg duplicate — excluded until replaced
const galleryImages = [4, 5, 6, 7, 8, 9, 10, 11].map((n) => `/equipo/${n}.jpg`)

export const metadata: Metadata = {
  title: 'Equipo de Competición — Atletas Gijón',
  description:
    'Atletas de culturismo y artes marciales que representan la cultura Fitmaster: método, disciplina y resultados al máximo nivel competitivo en Gijón.',
  keywords: [
    'equipo competición fitness gijón',
    'atletas culturismo asturias',
    'culturismo gijón',
    'competición fitness asturias',
    'patrocinio deportivo gijón',
    'sponsor fitness asturias',
  ],
  openGraph: {
    title: 'Equipo de Competición — Atletas Gijón | Fitmaster',
    description:
      'Atletas que representan la cultura Fitmaster: método, disciplina y resultados al máximo nivel.',
    url: 'https://fitmaster.es/equipo',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Equipo de Competición — Atletas Gijón | Fitmaster',
    description:
      'Atletas que representan la cultura Fitmaster: método, disciplina y resultados al máximo nivel.',
    images: ['/opengraph-image'],
  },
  alternates: { canonical: 'https://fitmaster.es/equipo' },
}

const sponsorValues = [
  'Compromiso real con la disciplina y el entrenamiento',
  'Coherencia entre lo que dicen y lo que hacen',
  'Presencia en competición o deporte activo',
  'Alineación con los valores de Fitmaster',
  'Proyección y crecimiento como atleta',
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://fitmaster.es' },
    { '@type': 'ListItem', position: 2, name: 'Equipo de Competición', item: 'https://fitmaster.es/equipo' },
  ],
}

export default function EquipoPage() {
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
            <span className="section-label block mb-6">Equipo de competición</span>
            <h1 className="font-heading font-black text-white uppercase leading-[0.88] text-[clamp(44px,7vw,80px)] tracking-tight mb-8">
              La cultura<br />Fitmaster<br />
              <span className="text-fitgreen">al máximo nivel.</span>
            </h1>
            <p className="font-body text-white/50 text-base leading-relaxed max-w-md mb-10">
              El equipo de competición representa la parte más exigente de la marca: ambición, enfoque, compromiso, dedicación, competitividad y resultados reales.
            </p>
            <div className="flex gap-3 flex-wrap mb-10">
              {['Método', 'Disciplina', 'Resultados'].map((t) => (
                <span key={t} className="font-heading font-black text-[10px] uppercase tracking-[0.2em] text-fitgreen border border-fitgreen/30 px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>
            <Link href="/contacto" className="btn-primary">
              Quiero formar parte <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Mobile counter strip — visible only on < lg */}
        <div className="lg:hidden grid grid-cols-3 border-t border-[#1a1a1a]">
          {[
            { num: '4+', label: 'Atletas' },
            { num: '10+', label: 'Títulos' },
            { num: '3', label: 'Disciplinas' },
          ].map((s, i) => (
            <div key={s.label} className={`py-5 px-3 text-center ${i < 2 ? 'border-r border-[#1a1a1a]' : ''}`}>
              <p className="font-heading font-black text-fitgreen text-2xl leading-none mb-1">{s.num}</p>
              <p className="font-body text-white/30 text-[10px] uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="hidden lg:block bg-[#1a1a1a]" />
        <div className="hidden lg:flex flex-col items-center justify-center relative bg-[#050505]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 6% 100%)' }}>
          {/* subtle grid texture */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(#D7FB04 1px, transparent 1px), linear-gradient(90deg, #D7FB04 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              opacity: 0.03,
            }} />
          <FmtTeamLogo className="w-3/5 max-w-[280px] relative z-10" />
          {/* counter strip at bottom */}
          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 border-t border-[#1a1a1a] bg-[#050505]">
            {[
              { num: '4+', label: 'Atletas' },
              { num: '10+', label: 'Títulos' },
              { num: '3', label: 'Disciplinas' },
            ].map((s, i) => (
              <div key={s.label} className={`py-5 px-4 text-center ${i < 2 ? 'border-r border-[#1a1a1a]' : ''}`}>
                <p className="font-heading font-black text-fitgreen text-2xl leading-none mb-1">{s.num}</p>
                <p className="font-body text-white/30 text-[10px] uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUÉ ES */}
      <section className="bg-[#050505] diagonal-bottom pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1px_1fr] items-start">
            <div className="hidden lg:flex items-start pt-2">
              <span className="text-vertical">El equipo</span>
            </div>
            <div className="lg:pr-16">
              <span className="section-label block mb-6 lg:hidden">El equipo</span>
              <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight mb-8">
                Qué es el equipo<br />
                <span className="text-fitgreen">de competición</span>
              </h2>
              <p className="font-body text-white/50 text-base leading-relaxed mb-5">
                Es la expresión más exigente de nuestra forma de trabajar. Atletas de diferentes deportes que entienden la cultura del esfuerzo, representan nuestra filosofía y lo demuestran con su entrega día tras día.
              </p>
              <p className="font-body text-white/50 text-base leading-relaxed">
                Cada atleta del equipo compite con el espíritu de lucha que define a Fitmaster: sin humo, sin excusas, con método.
              </p>
            </div>
            <div className="hidden lg:block bg-[#1a1a1a] self-stretch mx-8" />
            <div className="mt-10 lg:mt-0">
              <div className="grid grid-cols-3 gap-px bg-[#1a1a1a]">
                {[
                  { label: 'Método', text: 'Todo tiene protocolo, lógica y medición.' },
                  { label: 'Disciplina', text: 'La constancia es un código, no una emoción.' },
                  { label: 'Resultados', text: 'Lo que no se mide, no mejora.' },
                ].map((v, i) => (
                  <div key={v.label} className={`p-6 text-center ${i === 1 ? 'bg-fitgreen' : 'bg-[#050505]'}`}
                    style={{ clipPath: i === 1 ? 'polygon(0 4%, 100% 0, 100% 96%, 0 100%)' : 'none' }}>
                    <p className={`font-heading font-black text-xs uppercase tracking-wider mb-2 ${i === 1 ? 'text-black' : 'text-fitgreen'}`}>{v.label}</p>
                    <p className={`font-body text-xs leading-relaxed ${i === 1 ? 'text-black/60' : 'text-white/30'}`}>{v.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATLETAS */}
      <section className="bg-black diagonal-top pt-14 pb-10 md:pt-24 md:pb-24 overflow-hidden">
        {/* heading */}
        <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12">
          <span className="section-label block mb-4">Atletas</span>
          <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight">
            Atletas Fitmaster
          </h2>
        </div>

        {/* ── MÓVIL: scroll horizontal ── */}
        <div
          className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory px-6 pb-3"
          style={{ scrollbarWidth: 'none' }}
        >
          {athleteImages.map((src, i) => (
            <div key={src} className="group snap-start shrink-0 w-[240px] overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-fitgreen z-20" />
              <div className="relative h-[300px] bg-black overflow-hidden">
                <Image
                  src={src}
                  alt=""
                  aria-hidden="true"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="240px"
                  priority={i < 4}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          ))}
          <div className="shrink-0 w-3" aria-hidden="true" />
        </div>

        {/* ── DESKTOP: grid 5 columnas con alturas escalonadas ── */}
        <div className="hidden md:grid grid-cols-5 gap-px bg-[#1a1a1a] mx-6">
          {athleteImages.map((src, i) => {
            // Fila 1 (i 0–4): posiciones pares = alto, impares = bajo
            // Fila 2 (i 5–9): patrón invertido
            const posInRow = i % 5
            const row = Math.floor(i / 5)
            const isTall = row === 0 ? posInRow % 2 === 0 : posInRow % 2 === 1
            return (
              <div
                key={src}
                className={`group relative bg-black overflow-hidden ${isTall ? 'h-[460px]' : 'h-[320px]'}`}
              >
                {/* green top accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-fitgreen z-20" />
                <Image
                  src={src}
                  alt=""
                  aria-hidden="true"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1280px) 20vw, 25vw"
                  priority={i < 5}
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                {/* athlete number */}
                <span className="absolute bottom-3 right-3 font-heading font-black text-white/20 text-5xl leading-none z-10 select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            )
          })}
        </div>
      </section>

      {/* GALERÍA */}
      <section className="bg-[#050505] py-10 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="px-6 mb-10 flex items-end justify-between">
            <div>
              <span className="section-label block mb-4">Galería</span>
              <h2 className="font-heading font-black text-white uppercase text-[clamp(28px,3.5vw,44px)] leading-[0.9] tracking-tight">
                El equipo<br />
                <span className="text-fitgreen">en acción</span>
              </h2>
            </div>
            <FmtTeamLogo className="hidden lg:block w-28 opacity-60" />
          </div>

          {/* MÓVIL — scroll horizontal con snap */}
          <div className="flex sm:hidden gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 pb-4"
            style={{ scrollbarWidth: 'none' }}>
            {galleryImages.map((src) => (
              <div key={src} className="snap-start shrink-0 w-[72vw]">
                <Image
                  src={src}
                  alt=""
                  aria-hidden="true"
                  width={600}
                  height={900}
                  className="w-full h-auto block"
                  sizes="72vw"
                />
              </div>
            ))}
          </div>

          {/* TABLET / DESKTOP — masonry */}
          <div className="hidden sm:block px-6">
            <div className="columns-3 lg:columns-4 gap-3">
              {galleryImages.map((src, i) => (
                <div key={src} className="break-inside-avoid mb-3">
                  <Image
                    src={src}
                    alt=""
                    aria-hidden="true"
                    width={600}
                    height={900}
                    className="w-full h-auto block"
                    sizes="(min-width: 1024px) 25vw, 33vw"
                    priority={i < 4}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PATROCINIO */}
      <section className="bg-[#050505] py-14 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1px_1fr] items-start">
            <div className="hidden lg:flex items-start pt-2">
              <span className="text-vertical">Patrocinio</span>
            </div>
            <div className="lg:pr-16">
              <span className="section-label block mb-6 lg:hidden">Patrocinio</span>
              <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight mb-8">
                Colaboraciones<br />
                <span className="text-fitgreen">y patrocinio</span>
              </h2>
              <p className="font-body text-white/50 text-base leading-relaxed mb-5">
                A través del programa de patrocinados, Fitmaster apoya a deportistas locales con proyección real que encajan con la filosofía de la marca.
              </p>
              <p className="font-heading font-black text-white text-sm uppercase mb-3">No buscamos visibilidad vacía.</p>
              <p className="font-body text-white/50 text-base leading-relaxed mb-10">
                Buscamos perfiles que representen trabajo, disciplina y coherencia. Si crees que encajas, puedes plantear tu propuesta.
              </p>
              <Link href="/contacto" className="btn-primary">
                Quiero colaborar con Fitmaster <ArrowRight size={14} />
              </Link>
            </div>
            <div className="hidden lg:block bg-[#1a1a1a] self-stretch mx-8" />
            <div className="mt-10 lg:mt-0">
              <div className="border border-[#1a1a1a] p-5 md:p-8">
                <div className="w-8 h-1 bg-fitgreen mb-6" />
                <h3 className="font-heading font-black text-white text-lg uppercase tracking-tight mb-6">Buscamos perfiles con:</h3>
                <div className="space-y-3">
                  {sponsorValues.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-fitgreen rounded-full mt-2 shrink-0" />
                      <p className="font-body text-white/50 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fitgreen diagonal-top py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-heading font-black text-black uppercase text-[clamp(36px,5vw,56px)] leading-[0.9] tracking-tight mb-6">
            Si quieres formar parte<br />o conectar con la marca,<br />este es el lugar.
          </h2>
          <Link href="/contacto" className="btn-black-on-green">
            Contactar <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
