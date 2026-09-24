import { useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react'
import { TESTIMONIALS } from '../data/packages'
import { IMAGES } from '../data/images'

const TRIP_IMAGES = [IMAGES.hamptaRays, IMAGES.tirthan, IMAGES.chandratalLake, IMAGES.bhrigu]

export default function Testimonials() {
  const [i, setI] = useState(0)
  const t = TESTIMONIALS[i]
  const go = (d) => setI((v) => (v + d + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <section className="relative py-32 md:py-48">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-[1fr_1.4fr] md:items-center">
        <div>
          <div className="flex items-center">
            {TRIP_IMAGES.map((img, k) => (
              <button
                type="button"
                key={img.src}
                onClick={() => setI(k)}
                aria-label={`Show story ${k + 1}`}
                className={`-ml-5 first:ml-0 size-20 overflow-hidden rounded-full border-4 border-ink transition-all duration-500 md:size-24 ${
                  k === i ? 'z-10 scale-125' : 'photo-mono opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img.src} alt="" loading="lazy" className="photo size-full object-cover" />
              </button>
            ))}
          </div>
          <p className="mt-10 max-w-xs text-base text-mist/60">
            Stories from the last few seasons. Every trekker is real, every route is one we still run.
          </p>
          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              className="grid size-12 place-items-center rounded-full border border-mist/25 text-mist transition-colors hover:bg-mist hover:text-ink"
              aria-label="Previous story"
            >
              <ArrowLeftIcon size={18} weight="bold" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="grid size-12 place-items-center rounded-full border border-mist/25 text-mist transition-colors hover:bg-mist hover:text-ink"
              aria-label="Next story"
            >
              <ArrowRightIcon size={18} weight="bold" />
            </button>
          </div>
        </div>

        <blockquote key={i} className="animate-[fade_.6s_ease-out]">
          <p
            className="font-serif leading-[1.15] tracking-[-0.01em] text-mist text-balance"
            style={{ fontSize: 'clamp(1.8rem, 3.4vw, 3.2rem)' }}
          >
            {t.quote}
          </p>
          <footer className="mt-8 text-base text-mist/60">
            <span className="font-semibold text-mist">{t.name}</span>, {t.from}. {t.trip}.
          </footer>
        </blockquote>
      </div>
      <style>{`@keyframes fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }`}</style>
    </section>
  )
}
