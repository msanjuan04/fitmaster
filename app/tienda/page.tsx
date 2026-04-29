import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MessageCircle, ShieldCheck, Star, Smile, Beaker } from 'lucide-react'
import tiendaFitmaster from '@/assets/tienda_fitmaster.webp'

export const metadata: Metadata = {
  title: 'Tienda de Suplementación Deportiva en Gijón',
  description:
    'Suplementación Life Pro seleccionada con criterio en Gijón. Recomendación personalizada y posibilidad de probar sabores antes de comprar. Sin comisiones ocultas.',
  keywords: [
    'tienda suplementos gijón',
    'suplementación deportiva gijón',
    'proteína gijón',
    'life pro gijón',
    'creatina gijón',
    'pre entreno gijón',
    'suplementos culturismo asturias',
    'comprar suplementos gijón',
  ],
  openGraph: {
    title: 'Tienda de Suplementación Deportiva en Gijón | Fitmaster',
    description:
      'Productos Life Pro seleccionados con criterio. Recomendación personalizada y posibilidad de probar sabores antes de comprar.',
    url: 'https://fitmaster.es/tienda',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tienda de Suplementación Deportiva en Gijón | Fitmaster',
    description:
      'Productos Life Pro seleccionados con criterio. Prueba sabores antes de comprar.',
    images: ['/opengraph-image'],
  },
  alternates: { canonical: 'https://fitmaster.es/tienda' },
}

const whyBuy = [
  { icon: <ShieldCheck size={24} className="text-fitgreen" />, title: 'Calidad asegurada', text: 'Solo trabajamos productos contrastados que cumplan con los mayores estándares de calidad.' },
  { icon: <Star size={24} className="text-fitgreen" />, title: 'Recomendación real', text: 'Te orientamos según lo que necesitas de verdad. Sin comisiones ocultas ni productos empujados sin criterio.' },
  { icon: <ShieldCheck size={24} className="text-fitgreen" />, title: 'Compra más segura', text: 'Resolveremos todas tus dudas para ayudarte a decidir. Nunca saldrás con un producto que no encaje contigo.' },
  { icon: <Smile size={24} className="text-fitgreen" />, title: 'Prueba antes de comprar', text: 'Te ofrecemos probar los sabores de las proteínas antes de comprarlas. Decides con más seguridad y sin sorpresas.' },
]

export default function TiendaPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] bg-black pt-20 grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] overflow-hidden">
        <div className="flex flex-col justify-end px-8 lg:px-12 py-16 lg:py-20 relative">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]"
              style={{ background: '#D7FB04', clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }} />
          </div>
          <div className="relative z-10">
            <span className="section-label block mb-6">Tienda</span>
            <h1 className="font-heading font-black text-white uppercase leading-[0.88] text-[clamp(44px,7vw,80px)] tracking-tight mb-8">
              Supleméntate<br />
              <span className="text-fitgreen">con criterio.</span>
            </h1>
            <p className="font-body text-white/50 text-base leading-relaxed max-w-md mb-10">
              Productos seleccionados con lógica, recomendación personalizada y una experiencia de compra pensada en ayudarte de verdad.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.lifepronutrition.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Ver catálogo <ArrowRight size={14} />
              </a>
              <a href="https://wa.me/34722624740" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <MessageCircle size={14} /> Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block bg-[#1a1a1a]" />
        <div className="hidden lg:flex relative items-end bg-[#050505] p-12 overflow-hidden"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 6% 100%)' }}>
          <Image
            src={tiendaFitmaster}
            alt="Exterior de la tienda Fitmaster"
            fill
            priority
            className="object-cover object-[72%_center] opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-[#050505]/30 to-transparent" />
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 border-l-4 border-fitgreen pl-8 max-w-[32rem]">
            <p className="font-heading font-black text-[clamp(24px,3vw,36px)] text-white uppercase leading-[0.92] tracking-tight mb-3">
              A Fitmaster no vienes<br />a comprar por comprar.
            </p>
            <p className="font-heading font-black text-[clamp(24px,3vw,36px)] text-fitgreen uppercase leading-[0.92] tracking-tight">
              Vienes a elegir mejor.
            </p>
          </div>
        </div>
      </section>

      {/* POR QUÉ COMPRAR AQUÍ */}
      <section className="bg-[#050505] diagonal-bottom py-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="section-label block mb-4">Diferencial</span>
            <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight">
              Por qué comprar<br />
              <span className="text-fitgreen">en Fitmaster</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
            {whyBuy.map((item, i) => (
              <div key={i} className="bg-[#050505] p-5 md:p-8 flex gap-4 md:gap-6">
                <div className="shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-heading font-black text-white text-base uppercase tracking-tight mb-2">{item.title}</h3>
                  <p className="font-body text-white/40 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFE PRO */}
      <section className="bg-black diagonal-top pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1px_1fr] items-center">
            <div className="hidden lg:flex items-start pt-2">
              <span className="text-vertical">Proveedor</span>
            </div>
            <div className="lg:pr-16">
              <span className="section-label block mb-6 lg:hidden">Proveedor</span>
              <h2 className="font-heading font-black text-white uppercase text-[clamp(32px,4vw,52px)] leading-[0.9] tracking-tight mb-8">
                Productos de<br />
                <span className="text-fitgreen">máxima calidad</span>
              </h2>
              <p className="font-body text-white/50 text-base leading-relaxed mb-5">
                En Fitmaster trabajamos con Life Pro porque cumple con los estándares que exigimos: calidad, fiabilidad y coherencia.
              </p>
              <p className="font-body text-white/50 text-base leading-relaxed mb-8">
                Su enfoque en la formulación y la selección de materias primas nos permite recomendar sus productos con criterio dentro de un sistema real de mejora física.
              </p>
              <div className="p-6 border-l-4 border-fitgreen bg-fitgreen/5 mb-8">
                <p className="font-heading font-black text-fitgreen text-xs uppercase tracking-wider mb-2">Precio garantizado</p>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  Cualquier producto de LifePro lo encontrarás en nuestra tienda al mismo precio que en su tienda online.
                </p>
              </div>
              <a href="https://www.lifepronutrition.com" target="_blank" rel="noopener noreferrer" className="btn-outline-green">
                Consultar catálogo Life Pro <ArrowRight size={14} />
              </a>
            </div>
            <div className="hidden lg:block bg-[#1a1a1a] self-stretch mx-8" />
            <div className="mt-10 lg:mt-0">
              <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-6 md:p-12 flex flex-col items-center justify-center text-center"
                style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 97%, 0 100%)' }}>
                <Beaker size={48} className="text-fitgreen mb-6" />
                <p className="font-heading font-black text-white text-4xl uppercase tracking-tight mb-2">Life Pro</p>
                <p className="font-body text-white/30 text-sm mb-8">Nuestro proveedor de confianza</p>
                <div className="grid grid-cols-2 gap-4 w-full">
                  {[
                    { label: 'Calidad', val: 'Premium' },
                    { label: 'Garantía', val: '100%' },
                    { label: 'Precio', val: 'Igualado' },
                    { label: 'Stock', val: 'Completo' },
                  ].map(s => (
                    <div key={s.label} className="border border-[#1a1a1a] p-3 text-center">
                      <p className="font-heading font-black text-fitgreen text-lg">{s.val}</p>
                      <p className="font-body text-white/30 text-[10px] uppercase tracking-widest">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-fitgreen diagonal-top py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_auto] items-center gap-0">
            <div className="lg:pr-16">
              <h2 className="font-heading font-black text-black uppercase text-[clamp(36px,5vw,56px)] leading-[0.9] tracking-tight mb-4">
                Si quieres suplementarte<br />con más criterio y<br />menos dudas, ven.
              </h2>
              <p className="font-body text-black/60 text-lg">O consúltanos directamente.</p>
            </div>
            <div className="hidden lg:block bg-black/20 self-stretch mx-16" />
            <div className="mt-10 lg:mt-0 flex flex-col gap-4">
              <Link href="/contacto" className="btn-black-on-green justify-center">
                Ven a la tienda <ArrowRight size={14} />
              </Link>
              <a href="https://www.lifepronutrition.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-black text-black font-heading font-black text-xs uppercase tracking-widest px-10 py-5 hover:bg-black hover:text-fitgreen transition-colors"
                style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}>
                Ver productos LifePro
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
