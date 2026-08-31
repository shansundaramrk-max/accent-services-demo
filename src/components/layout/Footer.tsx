import { Link } from 'react-router-dom'
import { footerLinks, site } from '@/data/site'

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 lg:pt-20 pb-8">
      <div className="container-a">
        <div className="grid lg:grid-cols-[1.2fr_2fr] gap-14 pb-14">
          <div>
            <Link to="/" className="flex items-center gap-3 font-display text-lg mb-5">
              <span className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center"><span className="w-2 h-2 rounded-full bg-signal" /></span>
              {site.name}
            </Link>
            <p className="text-white/45 text-sm max-w-sm leading-6">{site.tagline}</p>
            <div className="mt-7 space-y-1.5 text-sm text-white/55">
              <p>{site.email}</p><p>{site.phone}</p><p>{site.address}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <p className="eyebrow mb-4">{group}</p>
                <ul className="space-y-2.5">
                  {links.slice(0, group === 'Company' ? 3 : 5).map((l) => <li key={l.to}><Link to={l.to} className="text-white/50 text-sm hover:text-white transition-colors">{l.label}</Link></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-7 border-t border-line flex flex-col sm:flex-row justify-between gap-3 text-white/35 text-xs">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Australian technology services · Support across Australia</p>
        </div>
      </div>
    </footer>
  )
}
