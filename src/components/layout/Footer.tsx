import { site, footerLinks } from '@/data/site'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-a py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div>
            <p className="font-display text-2xl">{site.name}</p>

            <p className="text-white/45 text-sm max-w-sm leading-6 mt-4">
              Practical technology, business solutions and automation that help
              organisations work better.
            </p>

            <div className="mt-6">
              <p className="font-mono text-[10px] tracking-[.18em] text-white/40">
                MOBILE
              </p>

              <a
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="font-display text-lg mt-1 inline-block hover:text-signal transition-colors"
              >
                {site.phone}
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-white/40 mb-5">IT SOLUTIONS</p>

            <div className="space-y-3">
              {footerLinks['IT Solutions'].map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block text-sm text-white/55 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-white/40 mb-5">BUSINESS SOLUTIONS</p>

            <div className="space-y-3">
              {footerLinks['Business Solutions'].map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block text-sm text-white/55 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-white/40 mb-5">COMPANY</p>

            <div className="space-y-3">
              {footerLinks.Company.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block text-sm text-white/55 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>

          <a
            href={`https://wa.me/${site.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-xs hover:text-white transition-colors"
          >
            WhatsApp: {site.phone}
          </a>
        </div>
      </div>
    </footer>
  )
}
