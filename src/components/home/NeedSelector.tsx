import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'

const needs = [
  ['Keep IT under control', 'Managed IT, helpdesk and infrastructure', '/solutions/managed-it-services'],
  ['Protect the business', 'Cybersecurity, backup and recovery', '/solutions/cybersecurity'],
  ['Remove manual work', 'Automation, AI and connected workflows', '/solutions/ai-agents'],
  ['Improve the way teams work', 'CRM, ITSM and business software', '/solutions/zoho-solutions'],
  ['Ship with confidence', 'Testing, automation and managed QA', '/solutions/software-testing'],
]

export default function NeedSelector() {
  return <section className="bg-paper py-24 lg:py-32"><div className="container-a"><SectionLabel index="01">START WITH THE PROBLEM</SectionLabel><div className="grid lg:grid-cols-[.75fr_1.25fr] gap-12 lg:gap-24"><div><h2 className="h-display text-4xl sm:text-5xl text-balance">You don't need to know the service name.</h2><p className="text-mutedDark leading-7 mt-6 max-w-md">Tell us what is getting in the way. We can map the problem to the right mix of support, systems and engineering.</p></div><div className="border-t border-lineDark">{needs.map(([title,detail,to],i) => <Link key={to} to={to} className="group grid grid-cols-[36px_1fr_auto] gap-4 items-center py-6 border-b border-lineDark"><span className="font-mono text-[10px] text-mutedDark">0{i+1}</span><div><p className="font-display text-xl sm:text-2xl group-hover:text-signal transition-colors">{title}</p><p className="text-sm text-mutedDark mt-1">{detail}</p></div><ArrowUpRight size={20} className="text-mutedDark group-hover:text-signal group-hover:-translate-y-0.5 transition-all" /></Link>)}</div></div></div></section>
}
