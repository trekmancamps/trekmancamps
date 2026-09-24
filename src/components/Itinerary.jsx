import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { HAMPTA_ITINERARY } from '../data/packages'

export default function Itinerary() {
  const root = useRef(null)

  useGSAP(
    () => {
      const cards = gsap.utils.toArray('.stack-card')
      cards.forEach((card, i) => {
        const next = cards[i + 1]
        if (!next) return
        const shade = card.querySelector('.stack-shade')
        gsap
          .timeline({ scrollTrigger: { trigger: next, start: 'top bottom', end: 'top 12%', scrub: 0.6 } })
          .to(card, { scale: 0.92, ease: 'none' }, 0)
          .to(shade, { opacity: 0.65, ease: 'none' }, 0)
      })
    },
    { scope: root },
  )

  return (
    <section id="itinerary" ref={root} className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-5xl">
          <h2
            className="font-semibold tracking-[-0.03em] text-mist text-balance"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.8rem)', lineHeight: 1.02 }}
          >
            Five days across Hampta Pass, one camp at a time.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-mist/60">
            Keep scrolling. Each day settles on top of the last, the way the trail does.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {HAMPTA_ITINERARY.map((d, i) => (
            <article
              key={d.day}
              className="stack-card sticky top-[12vh] grid min-h-[70vh] origin-top overflow-hidden rounded-3xl border border-white/10 bg-ink-soft md:grid-cols-2"
              style={{ zIndex: i + 1, willChange: 'transform' }}
            >
              <div className="stack-shade pointer-events-none absolute inset-0 z-10 rounded-3xl bg-ink opacity-0" />
              <div className="relative min-h-[260px] overflow-hidden">
                <img src={d.image.src} alt={d.image.alt} loading="lazy" decoding="async" className="photo absolute inset-0 size-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink-soft/70 max-md:bg-gradient-to-t max-md:from-ink-soft max-md:to-transparent" />
              </div>
              <div className="flex flex-col justify-between p-8 md:p-12">
                <div>
                  <p className="font-serif text-2xl italic text-ember">{d.day}</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-mist md:text-4xl">{d.place}</h3>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-mist/70 md:text-lg">{d.text}</p>
                </div>
                <dl className="mt-10 flex items-baseline gap-3 text-mist/60">
                  <dt className="text-sm uppercase tracking-[0.2em]">Camp altitude</dt>
                  <dd className="font-serif text-3xl text-mist">{d.altitude}</dd>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
