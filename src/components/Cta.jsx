import { FacebookLogoIcon, WhatsappLogoIcon } from '@phosphor-icons/react'
import { CONTACT, whatsappFor } from '../data/contact'

export default function Cta() {
  return (
    <section id="book" className="mesh-light grain relative py-32 text-ink md:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <h2
          className="max-w-6xl font-semibold tracking-[-0.035em] text-ink text-balance"
          style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', lineHeight: 0.96 }}
        >
          Pick a date. We handle the rest.
        </h2>
        <p className="mt-8 max-w-xl text-lg text-ink/70">
          Message us the route and the month. We reply within a day with dates, a packing list and a payment link. No
          advance until the dates are confirmed.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href={whatsappFor('Hi Trekman Camps, I would like to book a trek. Please share available dates.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-ink px-8 py-5 text-lg font-semibold text-mist transition-colors hover:bg-moss"
          >
            <WhatsappLogoIcon size={24} weight="fill" />
            Book on WhatsApp
          </a>
          <a
            href={CONTACT.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-ink px-8 py-5 text-lg font-semibold text-ink transition-colors hover:bg-ink hover:text-mist"
          >
            <FacebookLogoIcon size={24} weight="fill" />
            Visit our Facebook page
          </a>
        </div>

        <a href={CONTACT.phoneTel} className="mt-10 inline-block font-serif text-3xl text-ink md:text-4xl">
          {CONTACT.phoneDisplay}
        </a>
        <p className="mt-2 text-sm text-ink/60">Calls and WhatsApp, 8 am to 9 pm.</p>
      </div>
    </section>
  )
}
