import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { IMAGES } from '../data/images'

function Pill({ img, wide }) {
  return (
    <span
      role="img"
      aria-label={img.alt}
      className={`pill-img mx-2 h-[0.78em] ${wide ? 'w-[2.4em]' : 'w-[1.9em]'}`}
      style={{ backgroundImage: `url("${img.src}")` }}
    />
  )
}

export default function Statement() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.st-line',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 70%' },
        },
      )
    },
    { scope: root },
  )

  return (
    <section ref={root} className="mesh-dark grain relative py-32 md:py-48">
      <div className="mx-auto max-w-6xl px-6">
        <h2
          className="font-sans font-medium leading-[1.15] tracking-[-0.02em] text-mist"
          style={{ fontSize: 'clamp(2rem, 4.6vw, 4.4rem)' }}
        >
          <span className="st-line block">
            We take small groups from the apple orchards of the
            <Pill img={IMAGES.beasValley} wide />
            Beas valley,
          </span>
          <span className="st-line block">
            through cedar forest along the
            <Pill img={IMAGES.tirthan} />
            Tirthan and Parvati rivers,
          </span>
          <span className="st-line block">
            and over the snow of
            <Pill img={IMAGES.hamptaPass} wide />
            Hampta and Sar Pass into Lahaul.
          </span>
        </h2>
        <p className="st-line mt-12 max-w-2xl text-lg text-mist/65">
          Trekman Camps is run by guides born in Sethan, Jibhi and Tosh. Eleven seasons, no rescue calls, and a kitchen that
          people still write to us about.
        </p>
      </div>
    </section>
  )
}
