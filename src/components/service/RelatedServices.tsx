import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getServicesByCategory, getServiceImage, categoryMeta, type Service } from '@/data/services'
import SafeImage from '@/components/ui/SafeImage'

export default function RelatedServices({ service }: { service: Service }) {
  const related = getServicesByCategory(service.category).filter((s) => s.slug !== service.slug).slice(0, 4)
  if (!related.length) return null
  return (
    <section className="bg-paper py-20 border-t border-lineDark">
      <div className="container-a">
        <p className="eyebrow mb-8">MORE IN {categoryMeta[service.category].label.toUpperCase()}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((r) => (
            <Link key={r.slug} to={`/solutions/${r.slug}`} className="group border border-lineDark rounded-xl overflow-hidden card-hover hover:border-ink bg-paper">
              <div className="relative aspect-[16/10] overflow-hidden">
                <SafeImage src={getServiceImage(r)} alt={r.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              </div>
              <div className="p-6">
                <p className="font-display text-lg mb-2 group-hover:text-signal transition-colors">{r.shortName}</p>
                <p className="text-mutedDark text-sm mb-4 line-clamp-2">{r.tagline}</p>
                <ArrowRight size={16} className="text-mutedDark group-hover:text-signal group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
