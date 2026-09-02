import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Check, ChevronDown, RotateCcw, ShieldCheck } from 'lucide-react'
import { assessmentDomains, assessmentQuestions, getQuestionsByDomain } from '@/data/assessment'
import Button from '@/components/ui/Button'

type Answers = Record<string, number>

function scoreLabel(score: number) {
  if (score < 40) return 'Foundational'
  if (score < 60) return 'Developing'
  if (score < 80) return 'Managed'
  return 'Optimized'
}

function calculate(answers: Answers) {
  const domainScores = assessmentDomains.map(domain => {
    const qs = getQuestionsByDomain(domain.name)
    const answered = qs.filter(q => answers[q.id])
    const denominator = qs.reduce((sum, q) => sum + q.weight, 0)
    const weighted = qs.reduce((sum, q) => sum + (answers[q.id] ?? 0) * q.weight, 0)
    const score5 = answered.length ? weighted / denominator : 0
    return { ...domain, score5, score100: score5 ? ((score5 - 1) / 4) * 100 : 0, answered: answered.length, total: qs.length }
  })
  const totalWeight = assessmentDomains.reduce((s, d) => s + d.weight, 0)
  const overall5 = domainScores.reduce((s, d) => s + d.score5 * d.weight, 0) / totalWeight
  return { domainScores, overall5, overall100: ((overall5 - 1) / 4) * 100 }
}

export default function CyberRiskAssessment() {
  const [answers, setAnswers] = useState<Answers>({})
  const [step, setStep] = useState(0)
  const [showMethod, setShowMethod] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const result = useMemo(() => calculate(answers), [answers])
  const domain = assessmentDomains[step]
  const questions = getQuestionsByDomain(domain.name)
  const allAnswered = assessmentQuestions.every(q => answers[q.id])

  const setAnswer = (id: string, score: number) => setAnswers(prev => ({ ...prev, [id]: score }))

  const reset = () => { setAnswers({}); setStep(0); setShowResults(false); setShowMethod(false) }

  if (showResults) {
    return (
      <main className="bg-paper min-h-screen">
        <section className="bg-ink text-white relative overflow-hidden">
          <div className="absolute inset-0 dark-grid opacity-60" />
          <div className="container-a relative py-20 lg:py-28">
            <p className="eyebrow mb-5">CYBERSECURITY BASELINE ASSESSMENT</p>
            <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-end">
              <div><h1 className="h-display text-5xl sm:text-6xl max-w-3xl">Your security maturity, made explainable.</h1><p className="text-white/55 max-w-2xl mt-6 leading-7">This is a directional maturity baseline — not a breach probability forecast. Every score can be traced back to your answers, question weights and domain weights.</p></div>
              <div className="rounded-3xl border border-white/10 bg-white/[.04] p-7 text-center"><div className="font-mono text-xs text-white/45">OVERALL SCORE</div><div className="text-7xl font-display mt-2">{Math.round(result.overall100)}</div><div className="text-white/50">/ 100 · {scoreLabel(result.overall100)}</div></div>
            </div>
          </div>
        </section>

        <section className="container-a py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1.25fr_.75fr] gap-10">
            <div>
              <p className="eyebrow mb-6">01 / DOMAIN BREAKDOWN</p>
              <div className="space-y-4">
                {result.domainScores.map(d => <div key={d.name} className="rounded-2xl border border-lineDark bg-white p-6">
                  <div className="flex justify-between gap-4"><div><p className="font-display text-xl">{d.name}</p><p className="text-mutedDark text-sm mt-1">{d.description}</p></div><div className="font-mono text-sm">{Math.round(d.score100)}%</div></div>
                  <div className="h-2 bg-paperDim rounded-full mt-5 overflow-hidden"><div className="h-full bg-signal rounded-full" style={{ width: `${d.score100}%` }} /></div>
                  <div className="flex justify-between mt-3 text-xs text-mutedDark"><span>Weight: {d.weight}%</span><span>{d.answered}/{d.total} answered</span></div>
                </div>)}
              </div>
            </div>
            <aside className="lg:sticky lg:top-28 h-fit rounded-3xl bg-[#11192b] text-white p-7 lg:p-8">
              <p className="eyebrow mb-5">02 / WHAT THIS MEANS</p>
              <h2 className="h-display text-3xl">Prioritize the lowest-scoring domains first.</h2>
              <p className="text-white/50 text-sm leading-6 mt-5">The index is a maturity signal. It does not claim that a 70 score means “30% risk.” Use the domain gaps to decide where investment, remediation or a deeper assessment is warranted.</p>
              <div className="mt-7 border-t border-white/10 pt-6"><p className="text-xs uppercase tracking-widest text-white/35">Top improvement area</p><p className="font-display text-xl mt-2">{[...result.domainScores].sort((a,b) => a.score100-b.score100)[0].name}</p></div>
              <div className="mt-7 flex flex-wrap gap-3"><Button to="/contact">Discuss the result</Button><button onClick={reset} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-white/70 hover:text-white"><RotateCcw size={15}/> Retake</button></div>
            </aside>
          </div>
        </section>

        <section className="border-t border-lineDark bg-white py-16">
          <div className="container-a max-w-4xl">
            <button onClick={() => setShowMethod(v => !v)} className="w-full flex items-center justify-between text-left"><div><p className="eyebrow mb-3">03 / SCORE KEY</p><h2 className="h-display text-3xl">How was this score derived?</h2></div><ChevronDown className={`transition-transform ${showMethod ? 'rotate-180' : ''}`} /></button>
            {showMethod && <div className="mt-8 grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl bg-paper p-6"><p className="font-display text-lg">Question score</p><p className="text-sm text-mutedDark leading-6 mt-2">Each answer maps to a maturity value from 1 to 5: initial → developing → defined → managed → optimized.</p><code className="block mt-4 text-xs bg-ink text-white rounded-xl p-4">Question score = selected maturity value</code></div>
              <div className="rounded-2xl bg-paper p-6"><p className="font-display text-lg">Domain score</p><p className="text-sm text-mutedDark leading-6 mt-2">Questions are weighted when some controls matter more than others inside a domain.</p><code className="block mt-4 text-xs bg-ink text-white rounded-xl p-4">Σ(score × question weight) / Σ(question weights)</code></div>
              <div className="rounded-2xl bg-paper p-6"><p className="font-display text-lg">Overall index</p><p className="text-sm text-mutedDark leading-6 mt-2">Domain scores are combined using the published domain weights shown in your report.</p><code className="block mt-4 text-xs bg-ink text-white rounded-xl p-4">Σ(domain score × domain weight) / 100</code></div>
              <div className="rounded-2xl bg-paper p-6"><p className="font-display text-lg">Normalize to 100</p><p className="text-sm text-mutedDark leading-6 mt-2">The 1–5 maturity scale is converted to a 0–100 index for easier communication.</p><code className="block mt-4 text-xs bg-ink text-white rounded-xl p-4">((maturity − 1) / 4) × 100</code></div>
              <div className="md:col-span-2 rounded-2xl border border-lineDark p-6"><p className="font-display text-lg">Why these domain weights?</p><p className="text-sm text-mutedDark leading-6 mt-2">The weights are an explicit design choice, not a claim about the probability of attack. Patch & Vulnerability receives 25% because exposure reduction is a foundational preventive control. Threat Detection, Incident Containment and Identity & Access receive 20% each because they cover detection, response and account compromise paths. Asset Visibility receives 15% because accurate inventory enables the other controls but is not itself a complete protective measure.</p><div className="grid sm:grid-cols-5 gap-2 mt-5">{assessmentDomains.map(d => <div key={d.name} className="rounded-xl bg-white p-3"><p className="font-mono text-xs">{d.weight}%</p><p className="text-xs mt-2">{d.name}</p></div>)}</div></div>
            </div>}
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="bg-paper min-h-screen">
      <section className="bg-ink text-white relative overflow-hidden"><div className="absolute inset-0 dark-grid opacity-60"/><div className="container-a relative py-16 lg:py-20"><p className="eyebrow mb-5">CYBERSECURITY BASELINE ASSESSMENT</p><h1 className="h-display text-4xl sm:text-5xl lg:text-6xl max-w-4xl">Find out how prepared your environment really is.</h1><p className="text-white/55 max-w-2xl mt-6 leading-7">15 practical questions across five control areas. Get a transparent 0–100 maturity index, domain breakdown and the exact key used to derive it.</p></div></section>
      <section className="container-a py-10 lg:py-16">
        <div className="flex items-center justify-between gap-4 mb-8"><div><p className="eyebrow">STEP {step+1} OF {assessmentDomains.length}</p><h2 className="h-display text-3xl mt-2">{domain.name}</h2></div><div className="hidden sm:block font-mono text-xs text-mutedDark">{Object.keys(answers).length}/{assessmentQuestions.length} answered</div></div>
        <div className="h-1.5 bg-paperDim rounded-full mb-10"><div className="h-full bg-signal rounded-full transition-all" style={{ width: `${((step + 1) / assessmentDomains.length) * 100}%` }}/></div>
        <div className="space-y-5 max-w-4xl">
          {questions.map((q, qi) => <div key={q.id} className="rounded-2xl border border-lineDark bg-white p-6 lg:p-7"><div className="flex gap-4"><span className="font-mono text-[10px] text-mutedDark mt-1">0{qi+1}</span><div className="flex-1"><h3 className="font-display text-lg lg:text-xl">{q.text}</h3><p className="text-mutedDark text-sm mt-2">{q.hint}</p><div className="grid sm:grid-cols-5 gap-2 mt-5">{q.options.map(o => <button key={o.score} onClick={() => setAnswer(q.id,o.score)} className={`rounded-xl border px-3 py-3 text-left text-xs transition ${answers[q.id] === o.score ? 'border-ink bg-ink text-white' : 'border-lineDark hover:border-ink'}`}><span className="font-mono block mb-1">{o.score}</span>{o.label}</button>)}</div></div></div></div>)}
        </div>
        <div className="flex flex-wrap justify-between gap-3 max-w-4xl mt-8"><button disabled={step===0} onClick={() => setStep(s=>s-1)} className="inline-flex items-center gap-2 px-4 py-3 text-sm disabled:opacity-30"><ArrowLeft size={16}/> Previous</button>{step < assessmentDomains.length-1 ? <button onClick={() => setStep(s=>s+1)} className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3 text-sm">Next area <ArrowRight size={16}/></button> : <button disabled={!allAnswered} onClick={() => setShowResults(true)} className="inline-flex items-center gap-2 rounded-full bg-signal text-ink px-6 py-3 text-sm disabled:opacity-40"><ShieldCheck size={16}/> View my score</button>}</div>
        {!allAnswered && step === assessmentDomains.length-1 && <p className="text-xs text-mutedDark mt-4">Answer every question to unlock the results.</p>}
      </section>
      <section className="border-t border-lineDark bg-white py-10"><div className="container-a flex gap-4 items-start max-w-4xl"><Check size={18} className="text-signal mt-1 shrink-0"/><p className="text-sm text-mutedDark leading-6"><strong className="text-ink">Transparent by design.</strong> This assessment uses a declared maturity scale and weighting model. It is not a copy of any vendor's proprietary scoring formula and should be treated as a directional baseline for prioritization.</p></div></section>
    </main>
  )
}
