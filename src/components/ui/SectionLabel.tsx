type Props = { children: React.ReactNode; dark?: boolean; index?: string }

export default function SectionLabel({ children, dark, index }: Props) {
  return (
    <div className="flex items-center gap-3 mb-4">
      {index && <span className={`font-mono text-[11px] ${dark ? 'text-signal' : 'text-signal'}`}>{index}</span>}
      <span className={`eyebrow ${dark ? '' : ''}`}>{children}</span>
    </div>
  )
}
