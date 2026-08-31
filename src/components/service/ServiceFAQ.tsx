import { useState } from 'react'
import { Plus } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import type { FAQ } from '@/data/services'

export default function ServiceFAQ({ faq }: { faq: FAQ[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-a max-w-3xl">
        <SectionLabel index="03">FAQ</SectionLabel>
        <h2 className="h-display text-3xl md:text-4xl mb-12">Common questions</h2>
        <div className="border-t border-lineDark">
          {faq.map((f, i) => {
            const isOpen = openIdx === i
            return (
              <div key={f.q} className="border-b border-lineDark">
                <button
                  className="w-full flex items-center justify-between py-6 text-left gap-6"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg md:text-xl">{f.q}</span>
                  <Plus size={20} className={`shrink-0 text-signal transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                </button>
                {isOpen && <p className="text-mutedDark leading-relaxed pb-6 pr-10">{f.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
