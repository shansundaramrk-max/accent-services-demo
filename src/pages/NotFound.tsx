import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="bg-paper py-32">
      <div className="container-a text-center">
        <p className="eyebrow mb-6 justify-center flex">404</p>
        <h1 className="h-display text-4xl md:text-5xl mb-8">That page doesn't exist.</h1>
        <div className="flex justify-center">
          <Button to="/">Back to home</Button>
        </div>
      </div>
    </section>
  )
}
