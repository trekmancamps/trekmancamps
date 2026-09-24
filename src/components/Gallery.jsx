import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { IMAGES, OWN } from '../data/images'

const SHOTS = [
  { img: IMAGES.chandratalCamp, caption: 'Chandratal base camp, 4,300 m. Twenty dome tents, one dining tent, a lot of sky.', offset: 'md:mr-auto md:w-[58%]' },
  { img: OWN.panduRopa, caption: 'Pandu Ropa meadow. Our own camp under the pines, a stream at the edge and nobody else for miles.', offset: 'md:ml-auto md:w-[52%]' },
  { img: IMAGES.hamptaCamp, caption: 'Shea Goru, the morning after the pass. Glacier on the left, breakfast on the right.', offset: 'md:mx-auto md:w-[70%]' },
  { img: OWN.reylunaagDeora, caption: 'Reylunaag Deora. A temple, a lily pond and a rest-day walk from the Tirthan camp.', offset: 'md:mr-auto md:w-[48%]' },
  { img: IMAGES.chika, caption: 'Chika. Where day one ends and the horses decide the seating plan.', offset: 'md:ml-auto md:w-[58%]' },
]

export default function Gallery() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.utils.toArray('.shot').forEach((el) => {
        gsap.set(el, { scale: 0.8, opacity: 0.35 })
        gsap
          .timeline({
            scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
          })
          .to(el, { scale: 1, opacity: 1, duration: 0.45, ease: 'none' })
          .to(el, { duration: 0.15 })
          .to(el, { scale: 0.94, opacity: 0.2, duration: 0.4, ease: 'none' })
      })
    },
    { scope: root },
  )

  return (
    <section id="camps" ref={root} className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-24 max-w-5xl">
          <h2
            className="font-semibold tracking-[-0.03em] text-mist text-balance"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.8rem)', lineHeight: 1.02 }}
          >
            The camps are the point, not the afterthought.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-mist/60">
            Four-season tents, minus-ten sleeping bags, a cook who travels with you and a toilet tent at every site.
          </p>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {SHOTS.map((s) => (
            <figure key={s.img.src} className={`shot w-full will-change-transform ${s.offset}`}>
              <div className="group overflow-hidden rounded-3xl">
                <img
                  src={s.img.src}
                  alt={s.img.alt}
                  loading="lazy"
                  className="photo aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-4 max-w-md text-sm text-mist/60">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
