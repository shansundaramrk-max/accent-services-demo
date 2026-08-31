import SectionLabel from '@/components/ui/SectionLabel'
import type { LucideIcon } from 'lucide-react'
import { Gauge, ShieldCheck, Workflow, Users, LineChart } from 'lucide-react'

const outcomes: [LucideIcon, string, string][] = [
  [
    Gauge,
    'Less friction',
    'Fewer small technology problems stealing time from the team.',
  ],
  [
    ShieldCheck,
    'Lower risk',
    'Security, access and recovery treated as everyday operations.',
  ],
  [
    Workflow,
    'Better flow',
    'Systems connected so information moves without re-keying.',
  ],
  [
    Users,
    'Better adoption',
    'Tools introduced with the people using them in mind.',
  ],
  [
    LineChart,
    'More visibility',
    'Clearer information for the people making decisions.',
  ],
]

export default function Outcomes() {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="container-a">
        <SectionLabel index="02">
          WHAT GOOD LOOKS LIKE
        </SectionLabel>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-7 mb-14">
          <h2 className="h-display text-white text-4xl sm:text-5xl max-w-2xl">
            Technology should make the business easier to run.
          </h2>

          <p className="text-white/45 max-w-sm leading-6">
            The tools matter. The difference is whether they quietly help
            people do their jobs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {outcomes.map(([Icon, title, body]) => {
            const I = Icon

            return (
              <div
                key={title}
                className="bg-[#10182b] p-7 min-h-[250px] flex flex-col"
              >
                <I
                  size={23}
                  className="text-signal"
                  strokeWidth={1.5}
                />

                <div className="mt-auto">
                  <p className="font-display text-white text-xl">
                    {title}
                  </p>

                  <p className="text-white/45 text-sm leading-6 mt-2">
                    {body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}