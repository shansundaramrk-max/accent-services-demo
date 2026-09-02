import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { nav, site } from '@/data/site'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeGroup, setActiveGroup] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-ink/95 backdrop-blur-xl border-b border-line shadow-lg shadow-black/10' : 'bg-ink'}`}>
      <div className="container-a flex items-center justify-between h-[78px]">
        <Link to="/" className="flex items-center gap-3 text-white group" onClick={() => setOpen(false)}>
          <img src="/ascent-logo.svg" alt={site.name} className="w-[170px] h-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {nav.map((group) => (
            <div key={group.label} className="relative" onMouseEnter={() => setActiveGroup(group.label)} onMouseLeave={() => setActiveGroup(null)}>
              <button className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-[13px] text-white/70 hover:text-white hover:bg-white/[.05] transition-colors">
                {group.label}<ChevronDown size={13} className={`transition-transform ${activeGroup === group.label ? 'rotate-180' : ''}`} />
              </button>
              {activeGroup === group.label && group.children && (
                <div className="absolute top-full left-0 pt-3 w-[330px]">
                  <div className="bg-[#11192b] border border-white/10 rounded-2xl p-2 shadow-2xl shadow-black/30">
                    {group.children.map((c) => (
                      <div key={c.to} className="relative group/sub">
                        <NavLink to={c.to} className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] text-white/65 hover:text-white hover:bg-white/[.06] transition-colors">
                          <span>{c.label}</span>
                          {c.children && <ChevronRight size={13} className="text-white/35" />}
                        </NavLink>
                        {c.children && (
                          <div className="absolute left-[calc(100%-4px)] top-0 hidden w-[320px] group-hover/sub:block pl-2">
                            <div className="rounded-2xl border border-white/10 bg-[#11192b] p-2 shadow-2xl shadow-black/30">
                              {c.children.map((child) => (
                                <NavLink key={child.to} to={child.to} className="block px-4 py-2.5 rounded-xl text-[13px] text-white/65 hover:text-white hover:bg-white/[.06] transition-colors">
                                  {child.label}
                                </NavLink>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <NavLink to="/cyber-risk-assessment" className="px-3.5 py-2.5 rounded-full text-[13px] text-signal hover:text-white hover:bg-white/[.05] transition-colors">Cyber Risk Assessment</NavLink>
          <NavLink to="/industries" className="px-3.5 py-2.5 rounded-full text-[13px] text-white/70 hover:text-white hover:bg-white/[.05] transition-colors">Industries</NavLink>
          <NavLink to="/about" className="px-3.5 py-2.5 rounded-full text-[13px] text-white/70 hover:text-white hover:bg-white/[.05] transition-colors">About</NavLink>
        </nav>

        <div className="hidden lg:block"><Button to="/contact" variant="ghostLight">Start a conversation</Button></div>
        <button className="lg:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-ink max-h-[82vh] overflow-y-auto">
          <div className="container-a py-5">
            {nav.map((group) => (
              <div key={group.label} className="mb-5">
                <p className="text-white text-sm font-medium mb-2">{group.label}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pl-3 border-l border-line">
                  {group.children?.map((c) => (
                    <div key={c.to}>
                      <Link to={c.to} className="text-white/60 text-sm py-2 hover:text-white block" onClick={() => setOpen(false)}>{c.label}</Link>
                      {c.children && (
                        <div className="ml-3 pl-3 border-l border-white/10">
                          {c.children.map((child) => (
                            <Link key={child.to} to={child.to} className="text-white/45 text-sm py-1.5 block hover:text-white" onClick={() => setOpen(false)}>
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex gap-5 pt-2 border-t border-line">
              <Link to="/cyber-risk-assessment" className="text-signal text-sm py-3" onClick={() => setOpen(false)}>Cyber Risk Assessment</Link>
              <Link to="/industries" className="text-white text-sm py-3" onClick={() => setOpen(false)}>Industries</Link>
              <Link to="/about" className="text-white text-sm py-3" onClick={() => setOpen(false)}>About</Link>
            </div>
            <Button to="/contact" variant="ghostLight" onClick={() => setOpen(false)}>Start a conversation</Button>
          </div>
        </div>
      )}
    </header>
  )
}
