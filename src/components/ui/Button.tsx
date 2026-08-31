import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

type Props = {
  to?: string
  href?: string
  variant?: 'primary' | 'ghost' | 'ghostLight'
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

export default function Button({ to, href, variant = 'primary', children, onClick, type, className = '' }: Props) {
  const base = 'group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300'
  const styles: Record<string, string> = {
    primary: 'bg-signal text-ink hover:bg-white hover:shadow-[0_0_0_1px_#1FE0A8]',
    ghost: 'border border-lineDark text-ink hover:border-ink',
    ghostLight: 'border border-line text-white hover:border-signal hover:text-signal',
  }
  const content = (
    <>
      {children}
      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  )
  const cls = `${base} ${styles[variant]} ${className}`

  if (to) return <Link to={to} className={cls}>{content}</Link>
  if (href) return <a href={href} className={cls}>{content}</a>
  return <button type={type ?? 'button'} onClick={onClick} className={cls}>{content}</button>
}
