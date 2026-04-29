'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const teamImages = [
  '/equipo/1.jpg',
  '/equipo/2.jpg',
  '/equipo/3.jpg',
  '/equipo/4.jpg',
  '/equipo/5.jpg',
  '/equipo/6.jpg',
  '/equipo/7.jpg',
  '/equipo/8.jpg',
  '/equipo/9.jpg',
  '/equipo/10.jpg',
  '/equipo/11.jpg',
]

export default function EquipoHeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % teamImages.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div className="flex-1 relative overflow-hidden">
      {teamImages.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={index === 0}
          className={`object-contain object-center transition-opacity duration-700 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/20" />

      <div className="absolute top-6 right-6 z-10 flex items-center gap-2">
        {teamImages.map((image, index) => (
          <span
            key={image}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === activeIndex ? 'w-8 bg-fitgreen' : 'w-3 bg-white/35'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
