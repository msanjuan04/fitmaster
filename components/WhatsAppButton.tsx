import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34722624740"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-fitgreen flex items-center justify-center shadow-lg shadow-fitgreen/20 hover:scale-110 transition-transform duration-200"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} className="text-black" fill="black" />
    </a>
  )
}
