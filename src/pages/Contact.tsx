import SectionLabel from '@/components/ui/SectionLabel'
import ContactForm from '@/components/ContactForm'
import { site } from '@/data/site'

export default function Contact() {
  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="container-a">
        <div className="grid lg:grid-cols-[.75fr_1.25fr] gap-12 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-28">
            <SectionLabel index="01">START A CONVERSATION</SectionLabel>

            <h1 className="h-display text-5xl sm:text-6xl text-balance">
              Tell us what needs to work better.
            </h1>

            <p className="text-mutedDark leading-7 mt-6 max-w-md">
              A few useful details are enough. We will use them to understand
              the shape of the problem before recommending anything.
            </p>

            <div className="mt-10 space-y-6 text-sm">
              <div>
                <p className="font-mono text-[10px] tracking-[.18em] text-mutedDark">
                  MOBILE
                </p>

                <a
                  href={`tel:${site.phone.replace(/\s/g, '')}`}
                  className="font-display text-lg mt-1 inline-block hover:text-signal transition-colors"
                >
                  {site.phone}
                </a>
              </div>

              <div>
                <p className="font-mono text-[10px] tracking-[.18em] text-mutedDark">
                  WHATSAPP
                </p>

                <a
                  href={`https://wa.me/${site.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-lg mt-1 inline-block hover:text-signal transition-colors"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] bg-[#11192b] p-5 sm:p-8 lg:p-10 shadow-2xl shadow-ink/10 ring-1 ring-white/[0.06]">
            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-signal/10 blur-3xl pointer-events-none" />
            <div className="relative mb-8">
              <p className="eyebrow">02 / YOUR BRIEF</p>

              <h2 className="font-display text-white text-3xl mt-3">
                What are you trying to solve?
              </h2>

              <p className="text-white/45 text-sm leading-6 mt-2">
                Share enough context for a useful first conversation.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
