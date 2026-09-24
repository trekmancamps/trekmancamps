import { useEffect, useState } from 'react'
import { List, X, MountainsIcon } from '@phosphor-icons/react'
import { CONTACT } from '../data/contact'

const LINKS = [
  { href: '#packages', label: 'Packages' },
  { href: '#itinerary', label: 'Hampta route' },
  { href: '#camps', label: 'Camps' },
  { href: '#valleys', label: 'Valleys' },
  { href: '#faq', label: 'FAQ' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 pl-5 pr-2 py-2 backdrop-blur-xl transition-colors duration-500 ${
          scrolled ? 'bg-ink/70 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]' : 'bg-white/5'
        }`}
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-mist">
          <MountainsIcon size={22} weight="fill" className="text-ember" />
          Trekman Camps
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-mist/75 transition-colors hover:bg-white/10 hover:text-mist"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-mist"
          >
            Book a trek
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full text-mist hover:bg-white/10 md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute inset-x-4 top-20 rounded-3xl border border-white/10 bg-ink/95 p-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base text-mist/85 hover:bg-white/10"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
