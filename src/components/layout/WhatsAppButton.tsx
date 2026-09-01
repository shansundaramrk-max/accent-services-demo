import { MessageCircle } from 'lucide-react'
import { site } from '@/data/site'

export default function WhatsAppButton() {
  const message = encodeURIComponent(`Hi Ascent Services, I'd like to learn more about your IT and business solutions.`)
  const href = `https://wa.me/${site.whatsapp}?text=${message}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ascent Services on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-black/20 transition-transform hover:scale-105"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  )
}
