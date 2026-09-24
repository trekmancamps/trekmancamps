import { useState } from 'react'
import { VALLEYS } from '../data/packages'

export default function Valleys() {
  const [active, setActive] = useState(0)

  return (
    <section id="valleys" className="mesh-dark grain relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-5xl">
          <h2
            className="font-semibold tracking-[-0.03em] text-mist text-balance"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.8rem)', lineHeight: 1.02 }}
          >
            Five valleys, one district, wildly different moods.
          </h2>
        </div>

        <div className="flex flex-col gap-3 md:h-[560px] md:flex-row">
          {VALLEYS.map((v, i) => {
            const isActive = i === active
            return (
              <button
                type="button"
                key={v.name}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-expanded={isActive}
                className={`group relative overflow-hidden rounded-3xl text-left transition-[flex] duration-700 ease-[cubic-bezier(.22,1,.36,1)] max-md:min-h-[120px] ${
                  isActive ? 'max-md:min-h-[360px] md:flex-[4]' : 'md:flex-[1]'
                }`}
              >
                <img
                  src={v.image.src}
                  alt={v.image.alt}
                  loading="lazy"
                  className={`absolute inset-0 size-full object-cover transition-all duration-700 ease-out ${
                    isActive ? 'photo scale-100' : 'photo-mono scale-105 opacity-60'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

                <div className="relative flex h-full flex-col justify-end p-6">
                  <h3
                    className={`font-semibold tracking-tight text-mist transition-all duration-500 ${
                      isActive ? 'text-4xl md:text-5xl' : 'text-2xl md:[writing-mode:vertical-rl] md:rotate-180'
                    }`}
                  >
                    {v.name}
                  </h3>
                  <p
                    className={`mt-4 max-w-md text-base text-mist/75 transition-all duration-500 ${
                      isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 md:hidden'
                    }`}
                  >
                    {v.text}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
