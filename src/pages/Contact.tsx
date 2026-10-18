import { Mail, MessageSquareText, SearchCheck, Rocket } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import ContactForm from '@/components/ContactForm'
import { site } from '@/data/site'

const nextSteps = [
  { icon: MessageSquareText, title: 'Tell us the problem', detail: 'A few lines on what is not working or what you are planning.' },
  { icon: SearchCheck, title: 'We review it properly', detail: 'An Ascent specialist reads your enquiry and prepares relevant questions, not a generic pitch.' },
  { icon: Rocket, title: 'You get a clear next step', detail: 'We reply by email with a practical recommendation and, if useful, a time to talk.' },
]

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

            <a
              href={`mailto:${site.email}`}
              className="group mt-10 flex max-w-md items-center gap-4 rounded-2xl border border-lineDark bg-white p-5 shadow-[0_10px_35px_rgba(10,15,29,.06)] transition-all hover:-translate-y-0.5 hover:border-signal/60 hover:shadow-[0_18px_50px_rgba(10,15,29,.10)]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink text-signal">
                <Mail size={20} aria-hidden="true" />
              </span>
              <span>
                <span className="block font-mono text-[10px] tracking-[.18em] text-mutedDark">
                  EMAIL US DIRECTLY
                </span>
                <span className="mt-1 block font-display text-lg transition-colors group-hover:text-signal">
                  {site.email}
                </span>
              </span>
            </a>

            <ol className="mt-10 max-w-md space-y-6">
              {nextSteps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-lineDark bg-white text-ink">
                    <step.icon size={16} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] tracking-[.18em] text-mutedDark">STEP 0{i + 1}</p>
                    <p className="font-display text-base mt-0.5">{step.title}</p>
                    <p className="text-sm leading-6 text-mutedDark mt-1">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative overflow-hidden rounded-[28px] bg-[#11192b] p-5 sm:p-8 lg:p-10 shadow-2xl shadow-ink/10 ring-1 ring-white/[0.06]">
            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-signal/10 blur-3xl pointer-events-none" />
            <div className="relative mb-8">
              <p className="eyebrow">02 / YOUR REQUIREMENTS</p>

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
