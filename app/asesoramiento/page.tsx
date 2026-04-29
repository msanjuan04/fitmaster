import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, X, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Asesoramiento Fitness con Pablo Álvarez — Entrenador Personal Gijón',
  description:
    'Asesoramiento fitness personalizado con Pablo Álvarez, Campeón de España de Culturismo. Plan de entrenamiento, nutrición y seguimiento real en Gijón. Resultados medibles.',
  keywords: [
    'asesoramiento fitness gijón',
    'entrenador personal gijón',
    'pablo álvarez entrenador personal',
    'plan de entrenamiento personalizado gijón',
    'plan nutricional gijón',
    'seguimiento fitness asturias',
    'transformación física gijón',
  ],
  openGraph: {
    title: 'Asesoramiento Fitness con Pablo Álvarez — Entrenador Personal Gijón | Fitmaster',
    description:
      'Pablo Álvarez, Campeón de España. Plan de entrenamiento, plan nutricional y seguimiento real. Deja de avanzar a ciegas.',
    url: 'https://fitmaster.es/asesoramiento',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asesoramiento Fitness con Pablo Álvarez — Entrenador Personal Gijón | Fitmaster',
    description:
      'Pablo Álvarez, Campeón de España. Plan de entrenamiento, nutrición y seguimiento real. Deja de improvisar.',
    images: ['/opengraph-image'],
  },
  alternates: { canonical: 'https://fitmaster.es/asesoramiento' },
}

const benefits = [
  { title: 'Claridad', text: 'Sabes qué hacer, cómo hacerlo y por qué. Dejas de improvisar.' },
  { title: 'Estructura', text: 'Un sistema para que tu entrenamiento y alimentación no dependan de rachas.' },
  { title: 'Seguimiento real', text: 'Tu proceso se revisa, corrige y ajusta en función de tu evolución real.' },
  { title: 'Personalización', text: 'Adaptado a tu punto de partida, objetivo, contexto y capacidad de adherencia.' },
  { title: 'Resultados sostenibles', text: 'Progreso real que puedas mantener en el tiempo, no parches temporales.' },
]

const includes = [
  'Plan de entrenamiento adaptado a tu objetivo y nivel',
  'Plan nutricional estructurado y aplicable',
  'Seguimiento continuado del proceso',
  'Ajustes en función de tu evolución',
  'Resolución de dudas ilimitadas',
  'Corrección de ejercicios mediante videos, ilimitada',
  'Recomendación de suplementación personalizada',
  'Acompañamiento constante para asegurar adherencia y resultados',
  'Descuento del -10% en toda la tienda Fitmaster',
]

const steps = [
  { num: '01', title: 'Valoración inicial', text: 'Analizamos tu situación actual, tu objetivo, tus hábitos y tu contexto para entender desde dónde partes.' },
  { num: '02', title: 'Diseño del plan', text: 'Creamos una estrategia personalizada de entrenamiento, nutrición y organización adaptada a tu vida real.' },
  { num: '03', title: 'Seguimiento y ajustes', text: 'Cada dos semanas revisamos tu evolución presencial u online, valoramos avances y hacemos los cambios necesarios.' },
]

const fitYes = [
  'Quieres estructura en tu entrenamiento y en tu nutrición',
  'Necesitas claridad sobre qué hacer y cómo hacerlo',
  'Valoras seguimiento, criterio y personalización',
  'Buscas resultados reales, no parches temporales',
  'Estás dispuesto a seguir un sistema con consistencia',
]

const fitNo = [
  'Buscas soluciones rápidas sin compromiso',
  'Quieres resultados sin seguir un proceso',
  'Solo buscas motivación puntual',
  'No estás dispuesto a ajustar hábitos para avanzar',
]

const faqs = [
  { q: '¿Necesito experiencia previa?', a: 'No. El servicio se adapta tanto a personas que empiezan como a quienes ya entrenan pero no están avanzando como deberían.' },
  { q: '¿Es online o presencial?', a: 'Ofrecemos las dos posibilidades. Si eres de Gijón siempre aconsejamos presencial.' },
  { q: '¿Y si tengo horarios complicados?', a: 'El plan se adapta a la realidad de tu día a día. No buscamos una teoría perfecta, sino un sistema que puedas cumplir.' },
  { q: '¿Incluye suplementación?', a: 'Incluye asesoramiento cuando sea útil. Además tienes un -10% en toda la tienda Fitmaster.' },
  { q: '¿Cómo puedo saber precios y condiciones?', a: 'Solicita información y te explicamos la opción que mejor encaja contigo.' },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://fitmaster.es/asesoramiento#service',
  name: 'Asesoramiento Fitness Personalizado',
  description:
    'Asesoramiento fitness personalizado que incluye plan de entrenamiento, plan nutricional, seguimiento periódico y acceso directo al entrenador. Presencial en Gijón y online en toda España.',
  provider: { '@id': 'https://fitmaster.es/#pablo' },
  areaServed: [
    { '@type': 'City', name: 'Gijón' },
    { '@type': 'AdministrativeArea', name: 'Asturias' },
    { '@type': 'Country', name: 'España' },
  ],
  serviceType: 'Entrenamiento Personal',
  url: 'https://fitmaster.es/asesoramiento',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'EUR',
      description: 'Consultar precio según plan y duración',
    },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de asesoramiento Fitmaster',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Plan de entrenamiento personalizado',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Plan nutricional adaptado',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Seguimiento periódico con revisiones y ajustes',
        },
      },
    ],
  },
}

export default function AsesoramientoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO editorial split */}
      <section className="relative min-h-[75vh] bg-black pt-20 grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] overflow-hidden">
        <div className="flex flex-col justify-end px-8 lg:px-12 py-16 lg:py-20">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]"
              style={{ background: '#D7FB04', clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }} />
          </div>
          <div className="relative z-10">
            <span className="section-label block mb-6">Asesoramiento</span>
            <h1 className="font-heading font-black text-white uppercase leading-[0.88] text-[clamp(44px,7vw,80px)] tracking-tight mb-8">
              Tu cambio físico<br />necesita algo más<br />que ganas:<br />
              <span className="text-fitgreen">necesita estructura.</span>
            </h1>
            <p className="font-body text-white/50 text-base leading-relaxed max-w-md mb-10">
              El asesoramiento Fitmaster está diseñado para ayudarte a entrenar, comer y progresar con un sistema claro, seguimiento real y decisiones con criterio.
            </p>
            <Link href="/contacto" className="btn-primary">
              Quiero empezar con asesoramiento <ArrowRight size={14} />
            </Link>
          </div>
        </div>
        <div className="hidden lg:block bg-[#1a1a1a]" />
        <div className="hidden lg:flex flex-col items-center justify-center bg-[#050505] px-12"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 6% 100%)' }}>
          <div className="border-l-4 border-fitgreen pl-8">
            <p className="font-heading font-black text-[clamp(28px,3.5vw,44px)] text-white uppercase leading-[0.92] tracking-tight mb-4">
              El problema no es<br />esforzarte poco.
            </p>
            <p className="font-heading font-black text-[clamp(28px,3.5vw,44px)] text-fitgreen uppercase leading-[0.92] tracking-tight">
              Es avanzar<br />sin sistema.
            </p>
          </div>
        </div>
      </section>

      {/* EL PROBLEMA */}
      <section className="bg-[#050505] diagonal-bottom py-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1px_1fr] items-start">
            <div className="hidden lg:flex items-start pt-2">
              <span className="text-vertical">El problema</span>
            </div>
            <div className="lg:pr-16">
              <span className="section-label block mb-6 lg:hidden">El problema</span>
              <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight mb-8">
                Mucha gente entrena y aun así<br />
                <span className="text-fitgreen">no progresa como debería.</span>
              </h2>
              <div className="space-y-4 font-body text-white/50 text-base leading-relaxed">
                <p>No porque le falten ganas. Porque le falta estructura.</p>
                <p className="font-semibold text-white/80">Sin un sistema claro aparecen las dudas, el estancamiento y la sensación de estar haciendo mucho para avanzar poco.</p>
                <p>Entrenas, pruebas cosas, cambias detalles, pero no sabes con certeza qué está funcionando y qué deberías ajustar.</p>
                <p>Estás invirtiendo tiempo, esfuerzo y dinero sin saber si vas en la dirección correcta.</p>
              </div>
            </div>
            <div className="hidden lg:block bg-[#1a1a1a] self-stretch mx-8" />
            <div className="mt-10 lg:mt-0">
              <div className="bg-fitgreen p-8" style={{ clipPath: 'polygon(0 4%, 100% 0, 100% 96%, 0 100%)' }}>
                <p className="font-heading font-black text-black text-2xl uppercase leading-tight tracking-tight">
                  Ahí es donde un proceso<br />bien diseñado marca<br />la diferencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ ES + QUÉ OBTIENES */}
      <section className="bg-black diagonal-top pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-0 items-start">
            <div className="lg:pr-16">
              <span className="section-label block mb-6">El servicio</span>
              <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight mb-8">
                Qué es el<br />asesoramiento Fitmaster
              </h2>
              <p className="font-body text-white/50 text-base leading-relaxed mb-5">
                No consiste en darte una dieta y una rutina sin más. Consiste en convertir tu objetivo en un plan claro, aplicable y sostenible, con seguimiento real y ajustes según tu evolución.
              </p>
              <p className="font-body text-white/70 text-base leading-relaxed font-semibold">
                Que sepas qué hacer, por qué hacerlo y cómo sostenerlo en tu vida real para siempre.
              </p>
            </div>
            <div className="hidden lg:block bg-[#1a1a1a] self-stretch mx-8" />
            <div className="mt-10 lg:mt-0">
              <h3 className="font-heading font-black text-fitgreen text-sm uppercase tracking-widest mb-6">Qué obtienes</h3>
              <div className="space-y-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex gap-4 p-4 border border-[#1a1a1a] hover:border-fitgreen/30 transition-colors"
                    style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }}>
                    <div className="w-5 h-5 bg-fitgreen shrink-0 mt-0.5 flex items-center justify-center"
                      style={{ clipPath: 'polygon(3px 0, 100% 0, calc(100% - 3px) 100%, 0 100%)' }}>
                      <Check size={11} className="text-black" strokeWidth={3} />
                    </div>
                    <div>
                      <p className="font-heading font-black text-white text-sm uppercase mb-1">{b.title}</p>
                      <p className="font-body text-white/40 text-sm leading-relaxed">{b.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="bg-[#050505] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="section-label block mb-4">Para quién</span>
            <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight">Para quién es este servicio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
            <div className="bg-[#050505] p-5 md:p-8">
              <h3 className="font-heading font-black text-fitgreen text-sm uppercase tracking-widest mb-6">Encaja contigo si:</h3>
              <div className="space-y-3">
                {fitYes.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={14} className="text-fitgreen shrink-0" strokeWidth={3} />
                    <p className="font-body text-white/60 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#050505] p-8">
              <h3 className="font-heading font-black text-white/30 text-sm uppercase tracking-widest mb-6">No encaja contigo si:</h3>
              <div className="space-y-3">
                {fitNo.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <X size={14} className="text-white/25 shrink-0" strokeWidth={2} />
                    <p className="font-body text-white/30 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE — diagonal (B) */}
      <section className="bg-black diagonal-both py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1px_1fr] items-start">
            <div className="hidden lg:flex items-start pt-2">
              <span className="text-vertical">Incluye</span>
            </div>
            <div className="lg:pr-16">
              <span className="section-label block mb-6 lg:hidden">Incluye</span>
              <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight mb-6">
                Qué incluye<br />exactamente
              </h2>
              <p className="font-body text-white/40 text-base leading-relaxed">
                Sin letra pequeña. Sin servicios ocultos.
              </p>
            </div>
            <div className="hidden lg:block bg-[#1a1a1a] self-stretch mx-8" />
            <div className="mt-10 lg:mt-0 space-y-2">
              {includes.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 border border-[#1a1a1a] hover:border-fitgreen/40 transition-colors"
                  style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }}>
                  <CheckCircle size={16} className="text-fitgreen shrink-0" />
                  <p className="font-body text-white/60 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="bg-[#050505] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="section-label block mb-4">Proceso</span>
            <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight">Cómo funciona</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
            {steps.map((step, i) => (
              <div key={step.num} className={`p-6 md:p-10 ${i === 1 ? 'bg-fitgreen' : 'bg-[#050505]'}`}
                style={{ clipPath: i === 1 ? 'polygon(0 3%, 100% 0, 100% 97%, 0 100%)' : 'none' }}>
                <span className={`font-heading font-black text-5xl leading-none block mb-8 ${i === 1 ? 'text-black/15' : 'text-fitgreen/15'}`}>
                  {step.num}
                </span>
                <h3 className={`font-heading font-black text-xl uppercase tracking-tight mb-4 ${i === 1 ? 'text-black' : 'text-white'}`}>
                  {step.title}
                </h3>
                <p className={`font-body text-sm leading-relaxed ${i === 1 ? 'text-black/60' : 'text-white/40'}`}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black py-24">
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-label block mb-4 text-center">FAQ</span>
          <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight text-center mb-16">
            Preguntas frecuentes
          </h2>
          <div className="space-y-px">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-[#1a1a1a] p-5 md:p-8 hover:border-fitgreen/20 transition-colors">
                <h3 className="font-heading font-black text-white text-sm uppercase tracking-tight mb-3">{faq.q}</h3>
                <p className="font-body text-white/40 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-fitgreen diagonal-top py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-heading font-black text-black uppercase text-[clamp(36px,5vw,64px)] leading-[0.9] tracking-tight mb-6">
            Si quieres un plan claro,<br />seguimiento real y resultados,<br />este es el momento.
          </h2>
          <p className="font-body text-black/60 text-lg mb-10">Deja de improvisar.</p>
          <Link href="/contacto" className="btn-black-on-green">
            Pedir información <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
