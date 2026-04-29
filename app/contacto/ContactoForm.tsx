'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ContactoForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        const data = await res.json()
        setErrorMsg(data.error || 'Error al enviar el mensaje.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Error de conexión. Inténtalo de nuevo.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-fitgreen/30 bg-fitgreen/5 p-10 text-center"
        style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}>
        <div className="w-14 h-14 bg-fitgreen mx-auto mb-6 flex items-center justify-center"
          style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }}>
          <Send size={20} className="text-black" />
        </div>
        <h3 className="font-heading font-black text-white text-2xl uppercase tracking-tight mb-4">
          Mensaje enviado
        </h3>
        <p className="font-body text-white/50 text-sm leading-relaxed mb-8">
          Hemos recibido tu mensaje. Te contestamos lo antes posible.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-outline-green">
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="section-label block mb-2" htmlFor="name">Nombre *</label>
          <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange}
            placeholder="Tu nombre"
            className="w-full bg-[#111] border border-[#1a1a1a] text-white font-body text-sm px-5 py-4 focus:outline-none focus:border-fitgreen transition-colors placeholder:text-white/20"
            style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }} />
        </div>
        <div>
          <label className="section-label block mb-2" htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange}
            placeholder="tu@email.com"
            className="w-full bg-[#111] border border-[#1a1a1a] text-white font-body text-sm px-5 py-4 focus:outline-none focus:border-fitgreen transition-colors placeholder:text-white/20"
            style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="section-label block mb-2" htmlFor="phone">Teléfono</label>
          <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange}
            placeholder="600 000 000"
            className="w-full bg-[#111] border border-[#1a1a1a] text-white font-body text-sm px-5 py-4 focus:outline-none focus:border-fitgreen transition-colors placeholder:text-white/20"
            style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }} />
        </div>
        <div>
          <label className="section-label block mb-2" htmlFor="subject">Motivo *</label>
          <select id="subject" name="subject" required value={formData.subject} onChange={handleChange}
            className="w-full bg-[#111] border border-[#1a1a1a] text-white font-body text-sm px-5 py-4 focus:outline-none focus:border-fitgreen transition-colors appearance-none"
            style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }}>
            <option value="" disabled className="text-white/30">Selecciona un motivo</option>
            <option value="asesoramiento">Solicitar asesoramiento</option>
            <option value="tienda">Consulta sobre productos</option>
            <option value="equipo">Unirme al equipo</option>
            <option value="patrocinio">Colaboración / Patrocinio</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>

      <div>
        <label className="section-label block mb-2" htmlFor="message">Mensaje *</label>
        <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange}
          placeholder="Cuéntanos qué necesitas..."
          className="w-full bg-[#111] border border-[#1a1a1a] text-white font-body text-sm px-5 py-4 focus:outline-none focus:border-fitgreen transition-colors resize-none placeholder:text-white/20"
          style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }} />
      </div>

      {status === 'error' && (
        <p className="font-body text-red-400 text-sm">{errorMsg}</p>
      )}

      <button type="submit" disabled={status === 'loading'}
        className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
        {status === 'loading' ? (
          <>
            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
            Enviando...
          </>
        ) : (
          <>Enviar mensaje <Send size={14} /></>
        )}
      </button>

      <p className="font-body text-white/25 text-xs">
        Al enviar este formulario aceptas que nos pongamos en contacto contigo para atender tu consulta.
      </p>
    </form>
  )
}
