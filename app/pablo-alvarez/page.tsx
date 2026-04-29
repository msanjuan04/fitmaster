import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Award, CheckCircle, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pablo Álvarez — Entrenador Personal Gijón, Campeón de España Culturismo',
  description:
    'Pablo Álvarez: entrenador personal en Gijón, Campeón de España de Culturismo y fundador de Fitmaster. Certificado de Profesionalidad. Más de 250 personas transformadas en Asturias y toda España.',
  keywords: [
    'pablo álvarez',
    'pablo álvarez entrenador gijón',
    'pablo álvarez fitmaster',
    'pablo álvarez campeón españa culturismo',
    'entrenador personal gijón',
    'entrenador personal asturias',
    'campeón españa culturismo gijón',
    'preparador físico gijón',
    'certificado profesionalidad fitness',
  ],
  openGraph: {
    title: 'Pablo Álvarez — Entrenador Personal Gijón, Campeón de España | Fitmaster',
    description:
      'Campeón de España de Culturismo, certificado de profesionalidad y fundador de Fitmaster Gijón. Más de 250 personas transformadas.',
    url: 'https://fitmaster.es/pablo-alvarez',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pablo Álvarez — Entrenador Personal Gijón, Campeón de España | Fitmaster',
    description:
      'Campeón de España de Culturismo, certificado de profesionalidad, +250 personas transformadas.',
    images: ['/opengraph-image'],
  },
  alternates: { canonical: 'https://fitmaster.es/pablo-alvarez' },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://fitmaster.es/#pablo',
  name: 'Pablo Álvarez',
  givenName: 'Pablo',
  familyName: 'Álvarez',
  jobTitle: 'Entrenador Personal y Fundador de Fitmaster',
  description:
    'Pablo Álvarez es entrenador personal en Gijón (Asturias), Campeón de España de Culturismo y fundador de Fitmaster. Cuenta con el Certificado de Profesionalidad en Actividades de Fitness y más de 250 personas transformadas.',
  url: 'https://fitmaster.es/pablo-alvarez',
  image: 'https://fitmaster.es/pablo1.jpg',
  sameAs: [
    'https://www.instagram.com/fitmastergijon',
    'https://fitmaster.es/sobre-nosotros',
  ],
  worksFor: {
    '@type': 'LocalBusiness',
    '@id': 'https://fitmaster.es/#business',
    name: 'Fitmaster',
    url: 'https://fitmaster.es',
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'Certificado de Profesionalidad — Actividades de Fitness',
    credentialCategory: 'Professional Certification',
    recognizedBy: {
      '@type': 'Organization',
      name: 'SEPE — Servicio Público de Empleo Estatal',
    },
  },
  award: 'Campeón de España de Culturismo',
  knowsAbout: [
    'Entrenamiento de fuerza',
    'Culturismo natural',
    'Nutrición deportiva',
    'Preparación para competición',
    'Transformación física',
    'Suplementación deportiva',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gijón',
    addressRegion: 'Asturias',
    addressCountry: 'ES',
  },
}

const credentials = [
  {
    icon: Award,
    title: 'Campeón de España de Culturismo',
    text: 'Títulos nacionales e internacionales en culturismo. Un palmarés que respalda cada consejo de entrenamiento y cada plan diseñado.',
  },
  {
    icon: CheckCircle,
    title: 'Certificado de Profesionalidad',
    text: 'Formación oficial en Actividades de Fitness acreditada por el SEPE, que combina con años de experiencia práctica en el campo.',
  },
  {
    icon: Users,
    title: '+250 Personas Transformadas',
    text: 'Clientes en Gijón, Asturias y toda España que han transformado su físico con el método Fitmaster de forma presencial y online.',
  },
]

const philosophy = [
  {
    num: '01',
    title: 'Criterio sobre intuición',
    text: 'Cada plan se construye con datos reales: punto de partida, objetivo, contexto y capacidad de adherencia. No hay dos planes iguales.',
  },
  {
    num: '02',
    title: 'Seguimiento real',
    text: 'El proceso no termina cuando se entrega un plan. Se revisa cada dos semanas, se ajusta según la evolución y se adapta a la vida real del cliente.',
  },
  {
    num: '03',
    title: 'Resultados sostenibles',
    text: 'La meta no es un cambio temporal. El objetivo es que el cliente entienda su cuerpo y pueda mantener los resultados de forma indefinida.',
  },
  {
    num: '04',
    title: 'Experiencia vivida en primera persona',
    text: 'Haber competido al máximo nivel y haber pasado por todas las fases de una transformación marca una diferencia real en cómo se diseña y comunica cada proceso.',
  },
]

export default function PabloAlvarezPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* HERO */}
      <section className="relative min-h-[80vh] bg-black pt-20 grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] overflow-hidden">
        <div className="flex flex-col justify-end px-8 lg:px-12 py-16 lg:py-20 relative">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]"
              style={{ background: '#D7FB04', clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }}
            />
          </div>
          <div className="relative z-10">
            <span className="section-label block mb-6">Entrenador Personal · Gijón</span>
            <h1 className="font-heading font-black text-white uppercase leading-[0.88] text-[clamp(44px,7vw,80px)] tracking-tight mb-4">
              Pablo<br />
              <span className="text-fitgreen">Álvarez</span>
            </h1>
            <p className="font-body text-white/50 text-base leading-relaxed max-w-md mb-3">
              Campeón de España de Culturismo. Certificado de Profesionalidad en Actividades de Fitness. Entrenador personal en Gijón y fundador de Fitmaster.
            </p>
            <p className="font-body text-white/70 font-semibold text-base leading-relaxed max-w-md mb-10">
              Más de 250 personas transformadas en Gijón, Asturias y toda España.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/asesoramiento" className="btn-primary">
                Ver el asesoramiento <ArrowRight size={14} />
              </Link>
              <Link href="/contacto" className="btn-secondary">
                Contactar
              </Link>
            </div>
          </div>
        </div>

        {/* Stats strip — mobile */}
        <div className="lg:hidden grid grid-cols-3 border-t border-[#1a1a1a]">
          {[
            { num: '+250', label: 'Transformados' },
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
        {/* Photo panel */}
        <div
          className="hidden lg:flex flex-col bg-[#050505]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 6% 100%)' }}
        >
          <div className="flex-1 relative flex items-end overflow-hidden">
            <div
              className="absolute inset-0"
              style={{ backgroundImage: 'url(/pablo1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 35%' }}
              role="img"
              aria-label="Pablo Álvarez — Entrenador Personal y Campeón de España, fundador de Fitmaster Gijón"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="relative z-10 p-8">
              <div className="border-l-4 border-fitgreen pl-6">
                <p className="font-heading font-black text-white text-2xl uppercase tracking-tight">Pablo Álvarez</p>
                <p className="font-body text-fitgreen text-xs uppercase tracking-widest mt-1">Fundador · Fitmaster Gijón</p>
                <p className="font-body text-white/30 text-xs mt-2">Campeón de España · Entrenador Personal Certificado</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 border-t border-[#1a1a1a]">
            {[
              { num: '+250', label: 'Transformados' },
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

      {/* CREDENCIALES */}
      <section className="bg-[#050505] diagonal-bottom py-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="section-label block mb-4">Formación y palmarés</span>
            <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight">
              Por qué confiar<br />en Pablo Álvarez
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
            {credentials.map((c) => {
              const Icon = c.icon
              return (
                <div key={c.title} className="bg-[#050505] p-8 flex flex-col gap-6">
                  <div
                    className="w-10 h-10 bg-fitgreen flex items-center justify-center shrink-0"
                    style={{ clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)' }}
                  >
                    <Icon size={18} className="text-black" />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-white text-base uppercase tracking-tight mb-3">
                      {c.title}
                    </h3>
                    <p className="font-body text-white/50 text-sm leading-relaxed">{c.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section className="bg-black diagonal-top pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1px_1fr] items-start">
            <div className="hidden lg:flex items-start pt-2">
              <span className="text-vertical">Filosofía</span>
            </div>
            <div className="lg:pr-16">
              <span className="section-label block mb-6 lg:hidden">Filosofía</span>
              <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight mb-8">
                El método Pablo Álvarez:<br />
                <span className="text-fitgreen">criterio, seguimiento,<br />resultados.</span>
              </h2>
              <div className="space-y-4 font-body text-white/50 text-base leading-relaxed">
                <p>
                  Como entrenador personal en Gijón, Pablo Álvarez trabaja con un principio claro: el progreso no depende del esfuerzo aislado, sino de tener un sistema bien construido y un seguimiento constante que lo haga funcionar.
                </p>
                <p className="font-semibold text-white/80">
                  Cada cliente que trabaja con Pablo recibe un plan diseñado específicamente para su situación, no una plantilla adaptada.
                </p>
                <p>
                  La experiencia como Campeón de España y como preparador de atletas de competición se traduce en un nivel de detalle y criterio que marca la diferencia en cada plan.
                </p>
              </div>
            </div>
            <div className="hidden lg:block bg-[#1a1a1a] self-stretch mx-8" />
            <div className="mt-10 lg:mt-0 space-y-px bg-[#1a1a1a]">
              {philosophy.map((p) => (
                <div key={p.num} className="bg-[#050505] p-6 hover:bg-[#080808] transition-colors">
                  <div className="flex gap-4 items-start">
                    <span className="font-heading font-black text-fitgreen text-xs tracking-widest shrink-0 pt-1">
                      {p.num}
                    </span>
                    <div>
                      <h3 className="font-heading font-black text-white text-sm uppercase tracking-tight mb-2">
                        {p.title}
                      </h3>
                      <p className="font-body text-white/40 text-sm leading-relaxed">{p.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DÓNDE TRABAJA */}
      <section className="bg-[#050505] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label block mb-6">Ubicación y modalidades</span>
              <h2 className="font-heading font-black text-white uppercase text-[clamp(28px,3.5vw,44px)] leading-[0.9] tracking-tight mb-6">
                Asesoramiento presencial<br />en Gijón y online<br />en toda España
              </h2>
              <div className="space-y-3 font-body text-white/50 text-base leading-relaxed mb-8">
                <p>
                  Pablo Álvarez ofrece asesoramiento fitness personalizado de forma presencial en <strong className="text-white/80">Fitmaster, Avenida de Portugal 9, Gijón (Asturias)</strong>, y de forma online para clientes en cualquier punto de España.
                </p>
                <p>
                  El sistema es el mismo independientemente de la modalidad: plan de entrenamiento, plan nutricional, seguimiento periódico y acceso directo al entrenador.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/asesoramiento" className="btn-primary">
                  Ver el asesoramiento <ArrowRight size={14} />
                </Link>
                <Link href="/contacto" className="btn-secondary">
                  Contactar
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[#1a1a1a]">
              {[
                { num: 'Gijón', label: 'Asturias · Presencial' },
                { num: 'Online', label: 'Toda España' },
                { num: '+250', label: 'Clientes activos' },
                { num: '5★', label: 'Valoración Google' },
              ].map((s, i) => (
                <div key={s.label} className="bg-[#050505] py-10 px-6 text-center">
                  <p className="font-heading font-black text-fitgreen text-2xl leading-none mb-2">{s.num}</p>
                  <p className="font-body text-white/30 text-[10px] uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fitgreen diagonal-top py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-heading font-black text-black uppercase text-[clamp(36px,5vw,56px)] leading-[0.9] tracking-tight mb-6">
            Trabaja con Pablo Álvarez.<br />Empieza a avanzar con criterio.
          </h2>
          <p className="font-body text-black/60 text-lg mb-10">
            Asesoramiento personalizado en Gijón y online. Entrenamiento, nutrición y seguimiento real.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/asesoramiento" className="btn-black-on-green">
              Ver el asesoramiento <ArrowRight size={14} />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 border-2 border-black text-black font-heading font-black text-xs uppercase tracking-widest px-10 py-5 hover:bg-black hover:text-fitgreen transition-colors"
              style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
