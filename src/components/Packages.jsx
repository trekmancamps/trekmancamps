import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowUpRightIcon, ClockIcon, MountainsIcon, TrendUpIcon } from '@phosphor-icons/react'
import { PACKAGES } from '../data/packages'
import { whatsappFor } from '../data/contact'

const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })

export default function Packages() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.pkg-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.pkg-grid', start: 'top 75%' },
        },
      )
    },
    { scope: root },
  )

  return (
    <section id="packages" ref={root} className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2
            className="max-w-4xl font-semibold tracking-[-0.03em] text-mist text-balance"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.8rem)', lineHeight: 1.02 }}
          >
            Six routes we know like the back of our hands.
          </h2>
          <p className="max-w-sm text-base text-mist/60">
            Prices are per person, all inclusive from Manali or Kasol. Tap a route to book on WhatsApp.
          </p>
        </div>

        <div className="pkg-grid grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[250px]">
          {PACKAGES.map((p) => (
            <a
              key={p.slug}
              href={whatsappFor(`Hi Trekman Camps, I want to book the ${p.name} (${p.duration}). Please share available dates.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`pkg-card group relative flex max-md:min-h-[320px] flex-col justify-end overflow-hidden rounded-3xl bg-ink-soft ${p.span}`}
            >
              <img
                src={p.image.src}
                alt={p.image.alt}
                loading="lazy"
                className="photo absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex items-end justify-between gap-4 p-6 md:p-7">
                <div>
                  <p className="text-sm text-ember">{p.tagline}</p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight text-mist md:text-3xl">{p.name}</h3>
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-mist/70">
                    <li className="flex items-center gap-1.5">
                      <ClockIcon size={14} /> {p.duration}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <MountainsIcon size={14} /> {p.altitude}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <TrendUpIcon size={14} /> {p.grade}
                    </li>
                  </ul>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-3">
                  <span className="rounded-full bg-mist px-3 py-1.5 text-sm font-semibold text-ink">{inr.format(p.price)}</span>
                  <span className="grid size-10 place-items-center rounded-full border border-mist/30 text-mist transition-colors group-hover:bg-ember group-hover:border-ember group-hover:text-ink">
                    <ArrowUpRightIcon size={18} weight="bold" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
