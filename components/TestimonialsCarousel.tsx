'use client'

import { useState, useEffect, useCallback } from 'react'

type Review = {
  initials: string
  name: string
  tag: string
  review: string
}

const groups: Review[][] = [
  [
    {
      initials: 'AL',
      name: 'Alex',
      tag: 'Asesoramiento · Tienda',
      review: 'Muy buena tienda y mejor asesoría. Pablo es un crack: cercano, atento y se nota que sabe de lo que habla. Desde que sigo sus recomendaciones he notado una mejora brutal. Totalmente recomendable.',
    },
    {
      initials: 'PF',
      name: 'Pablo Fernández',
      tag: 'Asesoramiento Fitmaster',
      review: 'Llevo 6 meses de asesoramiento deportivo con él y no he parado de mejorar. Trato profesional, siempre atento a los ajustes para que puedas sacar tu máximo rendimiento. Un 10, muy recomendable.',
    },
    {
      initials: 'JE',
      name: 'Javier Egüen',
      tag: 'Asesoramiento · Tienda',
      review: 'Llevo 3 meses con Pablo y el cambio ha sido brutal. Como sigas todo lo que te dice no hay fallo. Gran profesional y atento. Productos buenísimos con buenos precios. ¡Eres un fenómeno!',
    },
  ],
  [
    {
      initials: 'TZ',
      name: 'Tanya Zv',
      tag: 'Asesoramiento Fitmaster',
      review: 'Pablo es un amor de profesional, te explica todo con paciencia y dedicación. Transmite energía y pasión por lo que hace. Muy detallista, siempre da muestras y cosillas. 10 sobre 10.',
    },
    {
      initials: 'JD',
      name: 'Jonathan Díaz',
      tag: 'Asesoramiento Fitmaster',
      review: 'Conocí a Pablo gracias a amigos que ya habían probado su método. Si sigues lo que él te dice y pones de tu parte, sin duda conseguirás tus resultados. Trato amable y super flexible.',
    },
    {
      initials: 'MG',
      name: 'Marcos García',
      tag: 'Asesoramiento · Tienda',
      review: 'Excelente experiencia. Pablo es muy cercano, un lujo poder contar con su asesoramiento. Muy buenos productos. Sin duda, un referente en la suplementación aquí en Gijón.',
    },
  ],
  [
    {
      initials: 'MM',
      name: 'Maria Méndez',
      tag: 'Asesoramiento · Tienda',
      review: 'Pablo increíble, el trato inmejorable, súper atento. Gran profesional con productos de primera calidad. Poca gente hay que te asesore como lo hace él. De lo mejor.',
    },
    {
      initials: 'MI',
      name: 'Migui Migui',
      tag: 'Asesoramiento · Tienda',
      review: 'Muy buena asesoría nutricional y preparación para objetivos. Pablo es un profesional como la copa de un pino. Un buen sitio para elegir suplementación deportiva.',
    },
    {
      initials: 'AN',
      name: 'Ana Núñez',
      tag: 'Asesoramiento Fitmaster',
      review: 'Cómo se nota cuando a alguien le gusta lo que hace. Pablo es un gran profesional y nos ha dado un trato de 10.',
    },
  ],
]

export default function TestimonialsCarousel() {
  const [page, setPage] = useState(0)
  const [fading, setFading] = useState(false)

  const goTo = useCallback((next: number) => {
    setFading(true)
    setTimeout(() => {
      setPage(next)
      setFading(false)
    }, 250)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      goTo((page + 1) % groups.length)
    }, 5000)
    return () => clearInterval(id)
  }, [page, goTo])

  return (
    <div>
      {/* Cards */}
      <div
        className="transition-opacity duration-300"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
          {groups[page].map((t) => (
            <div key={t.name} className="bg-[#050505] p-5 md:p-8 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2.5 h-2.5 bg-fitgreen"
                    style={{ clipPath: 'polygon(2px 0, 100% 0, calc(100% - 2px) 100%, 0 100%)' }}
                  />
                ))}
              </div>
              {/* Review text */}
              <p className="font-body text-white/50 text-sm leading-relaxed mb-6 italic flex-1">
                &ldquo;{t.review}&rdquo;
              </p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#1a1a1a]">
                <div
                  className="w-9 h-9 bg-[#111] flex items-center justify-center shrink-0"
                  style={{ clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)' }}
                >
                  <span className="font-heading font-black text-fitgreen text-xs">{t.initials}</span>
                </div>
                <div>
                  <p className="font-heading font-black text-white text-sm uppercase">{t.name}</p>
                  <p className="font-body text-white/30 text-xs">{t.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center items-center gap-3 mt-8">
        {groups.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Página de reseñas ${i + 1}`}
            className={`h-1.5 rounded-none transition-all duration-300 ${
              i === page ? 'w-8 bg-fitgreen' : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
