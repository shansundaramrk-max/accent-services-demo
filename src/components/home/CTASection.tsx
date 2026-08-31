import Button from '@/components/ui/Button'

export default function CTASection() {
  return (
    <section className="bg-signal py-24 lg:py-28">
      <div className="container-a grid lg:grid-cols-[1fr_auto] gap-10 items-end">
        <div>
          <p className="font-mono text-[10px] tracking-[.2em] uppercase text-ink/55 mb-5">READY WHEN YOU ARE</p>
          <h2 className="h-display text-4xl sm:text-5xl lg:text-6xl max-w-4xl">Start with the problem. We will work out the technology.</h2>
        </div>
        <Button to="/contact" variant="ghost">Start a conversation</Button>
      </div>
    </section>
  )
}
