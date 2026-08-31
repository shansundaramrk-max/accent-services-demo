const points = [
  ['01', 'One partner', 'IT, software, automation and QA in one team.'],
  ['02', 'Practical advice', 'Recommendations shaped around your actual environment.'],
  ['03', 'Human support', 'Real people who understand the context behind the ticket.'],
  ['04', 'Built to evolve', 'Improve what works instead of replacing everything.'],
]
export default function TrustBar() {
  return <section className="bg-paper border-y border-lineDark"><div className="container-a grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-lineDark">{points.map(([n,t,d]) => <div key={n} className="py-8 sm:px-7 first:sm:pl-0 last:sm:pr-0"><span className="font-mono text-[10px] text-mutedDark">{n}</span><p className="font-display text-xl mt-4">{t}</p><p className="text-mutedDark text-sm leading-6 mt-2">{d}</p></div>)}</div></section>
}
