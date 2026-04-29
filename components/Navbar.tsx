'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import logoFit from '@/assets/logo_fit.webp'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/asesoramiento', label: 'Asesoramiento' },
  { href: '/tienda', label: 'Tienda' },
  { href: '/equipo', label: 'Equipo' },
  { href: '/sobre-nosotros', label: 'Sobre mí' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-[#1a1a1a]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src={logoFit}
            alt="Fitmaster logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="font-heading font-black text-white text-lg uppercase tracking-wider group-hover:text-fitgreen transition-colors">
            Fitmaster
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className={`font-body text-xs uppercase tracking-widest transition-colors duration-200 relative ${
                pathname === link.href ? 'text-fitgreen' : 'text-white/60 hover:text-white'
              }`}>
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-px bg-fitgreen" />
              )}
            </Link>
          ))}
          <Link href="/contacto" className="btn-primary text-xs py-3 px-6">
            Solicitar info
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-black border-t border-[#1a1a1a] px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className={`font-heading font-black text-2xl uppercase tracking-wider transition-colors ${
                pathname === link.href ? 'text-fitgreen' : 'text-white'
              }`}>
              {link.label}
            </Link>
          ))}
          <Link href="/contacto" className="btn-primary justify-center mt-4">
            Solicitar información
          </Link>
        </div>
      )}
    </header>
  )
}
