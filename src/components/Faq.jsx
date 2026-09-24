import { PlusIcon } from '@phosphor-icons/react'
import { FAQS } from '../data/packages'

export default function Faq() {
  return (
    <section id="faq" className="relative py-32 md:py-48">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1fr_1.6fr]">
        <h2
          className="font-semibold tracking-[-0.03em] text-mist text-balance md:sticky md:top-32 md:self-start"
          style={{ fontSize: 'clamp(2.2rem, 4.2vw, 4rem)', lineHeight: 1.02 }}
        >
          Things people ask before they book.
        </h2>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-medium text-mist md:text-2xl">
                {f.q}
                <PlusIcon size={22} className="shrink-0 text-ember transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist/65">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
