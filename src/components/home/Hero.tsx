import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ShieldCheck, Workflow, Code2 } from 'lucide-react'
import Button from '@/components/ui/Button'

const disciplines = [
  { icon: ShieldCheck, label: 'IT & security' },
  { icon: Workflow, label: 'Business systems' },
  { icon: Code2, label: 'AI & software' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 dark-grid opacity-70" />
      <div className="absolute -right-48 -top-40 w-[620px] h-[620px] rounded-full bg-signal/10 blur-3xl" />
      <div className="absolute left-[38%] bottom-[-300px] w-[520px] h-[520px] rounded-full bg-signal2/10 blur-3xl" />
      <div className="container-a relative py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.08fr_.92fr] gap-12 lg:gap-20 items-center">
          <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.65}}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3.5 py-2 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-signal" />
              <span className="font-mono text-[10px] tracking-[.18em] uppercase text-white/55">Technology partner · Australia</span>
            </div>
            <h1 className="h-display text-balance text-[3.1rem] leading-[.98] sm:text-6xl lg:text-[5.15rem] max-w-4xl">
              Make technology feel <span className="text-signal">simpler.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base sm:text-lg leading-8 text-white/60">
              Accent brings the people, systems and technical skills behind your business together — from everyday IT support to automation, software delivery and security.
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              <Button to="/contact">Tell us what you need</Button>
              <Button to="/solutions" variant="ghostLight">See our capabilities</Button>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 mt-12 max-w-2xl">
              {disciplines.map(({icon: Icon,label}) => (
                <div key={label} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[.035] px-3.5 py-3 text-sm text-white/65">
                  <Icon size={16} className="text-signal" />{label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} transition={{duration:.75,delay:.1}} className="relative">
            <div className="rounded-[28px] border border-white/10 bg-white/[.045] p-4 shadow-2xl shadow-black/25">
              <div className="rounded-[22px] bg-[#0d1527] border border-white/10 overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                  <span className="font-mono text-[10px] uppercase tracking-[.18em] text-white/40">One connected team</span>
                  <span className="flex items-center gap-2 text-[10px] text-signal"><span className="w-1.5 h-1.5 rounded-full bg-signal" />Working</span>
                </div>
                <div className="p-5 sm:p-7">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      ['01','Keep running','IT · Cloud · Support'],
                      ['02','Keep secure','Security · Backup'],
                      ['03','Work smarter','CRM · Automation · AI'],
                      ['04','Ship better','QA · Testing · Engineering'],
                    ].map(([n,t,d]) => (
                      <div key={n} className="rounded-2xl border border-white/10 bg-white/[.025] p-4 min-h-[128px] flex flex-col justify-between">
                        <span className="font-mono text-[10px] text-signal">{n}</span>
                        <div><p className="font-display text-white text-base">{t}</p><p className="text-xs leading-5 text-white/35 mt-1">{d}</p></div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 rounded-2xl bg-signal p-5 text-ink flex items-center justify-between gap-5">
                    <div><p className="font-mono text-[10px] uppercase tracking-[.18em] opacity-60">The point</p><p className="font-display text-xl mt-1">Fewer gaps between technology and the people using it.</p></div>
                    <ArrowRight className="shrink-0" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-2 rounded-full bg-paper text-ink px-4 py-2.5 shadow-xl">
              <CheckCircle2 size={16} className="text-signal2" /><span className="text-xs font-medium">Clear ownership, practical delivery</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
