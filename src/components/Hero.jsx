import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowDownIcon, ArrowRightIcon } from '@phosphor-icons/react'
import { IMAGES } from '../data/images'

export default function Hero() {
  const root = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo('.hero-img', { scale: 1.18, opacity: 0 }, { scale: 1, opacity: 1, duration: 2.2 })
        .fromTo('.hero-line', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, stagger: 0.12 }, 0.5)
        .fromTo('.hero-cta', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, 1.1)
        .fromTo('.hero-hint', { opacity: 0 }, { opacity: 1, duration: 1 }, 1.6)

      gsap.to('.hero-img', {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    },
    { scope: root },
  )

  return (
    <section id="top" ref={root} className="relative flex min-h-svh items-center justify-center overflow-hidden">
      <img
        src={IMAGES.hero.src}
        alt={IMAGES.hero.alt}
        fetchPriority="high"
        className="hero-img photo absolute inset-0 size-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,rgba(11,14,12,0.35)_0%,rgba(11,14,12,0.78)_70%,rgba(11,14,12,0.96)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 text-center md:pt-48">
        <h1
          className="font-sans font-semibold tracking-[-0.03em] text-mist text-balance"
          style={{ fontSize: 'clamp(2rem, 5.2vw, 5.4rem)', lineHeight: 1.02 }}
        >
          <span className="hero-line inline md:block">Walk the high passes of Kullu. </span>
          <span className="hero-line inline md:block">
            Sleep under <em className="font-serif font-normal italic text-ember">Himalayan</em> stars.
          </span>
        </h1>
        <p className="hero-line mx-auto mt-8 max-w-2xl text-lg text-mist/75 md:text-xl">
          Guided treks and riverside camps throughout the Indian Himalayas, from Kullu to Ladakh, Uttarakhand and Sikkim. Small groups, local guides, honest prices.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#packages"
            className="hero-cta inline-flex items-center gap-2 rounded-full bg-mist px-8 py-4 text-base font-semibold text-ink transition-colors hover:bg-ember"
          >
            See the packages
            <ArrowRightIcon size={18} weight="bold" />
          </a>
          <a
            href="#itinerary"
            className="hero-cta inline-flex items-center gap-2 rounded-full border border-mist/30 bg-ink/40 px-8 py-4 text-base font-semibold text-mist backdrop-blur transition-colors hover:border-mist hover:bg-mist hover:text-ink"
          >
            Follow the Hampta route
          </a>
        </div>
      </div>

      <div className="hero-hint absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.25em] text-mist/50">
        <ArrowDownIcon size={14} />
        Scroll
      </div>
    </section>
  )
}
