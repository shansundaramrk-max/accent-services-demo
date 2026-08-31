import Button from '@/components/ui/Button'
import type { Service } from '@/data/services'

export default function ServiceCTA({ service }: { service: Service }) {
  return (
    <section className="bg-ink py-24 border-t border-line">
      <div className="container-a text-center">
        <p className="eyebrow mb-6 justify-center flex">GET STARTED</p>
        <h2 className="h-display text-white text-3xl md:text-5xl max-w-2xl mx-auto mb-10">
          Ready to talk about {service.shortName.toLowerCase()}?
        </h2>
        <div className="flex justify-center">
          <Button to="/contact">Talk to an Expert</Button>
        </div>
      </div>
    </section>
  )
}
