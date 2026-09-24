import { MountainsIcon, FacebookLogoIcon, WhatsappLogoIcon } from '@phosphor-icons/react'
import { CONTACT } from '../data/contact'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <a href="#top" className="flex items-center gap-2 text-base font-semibold text-mist">
            <MountainsIcon size={24} weight="fill" className="text-ember" />
            Trekman Camps
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist/55">
            Old Manali Road, Manali, Kullu district, Himachal Pradesh 175131. Registered with the Himachal Pradesh
            tourism department.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center rounded-full border border-mist/20 text-mist hover:bg-mist hover:text-ink" aria-label="Facebook page">
              <FacebookLogoIcon size={18} />
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center rounded-full border border-mist/20 text-mist hover:bg-mist hover:text-ink" aria-label="WhatsApp">
              <WhatsappLogoIcon size={18} />
            </a>
            <a href={CONTACT.phoneTel} className="flex items-center rounded-full border border-mist/20 px-4 text-sm text-mist hover:bg-mist hover:text-ink">
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>

        <nav aria-label="Treks" className="text-sm">
          <p className="mb-4 font-semibold text-mist">Treks</p>
          <ul className="space-y-2 text-mist/60">
            <li><a href="#packages" className="hover:text-mist">Hampta Pass</a></li>
            <li><a href="#packages" className="hover:text-mist">Bhrigu Lake</a></li>
            <li><a href="#packages" className="hover:text-mist">Sar Pass</a></li>
            <li><a href="#packages" className="hover:text-mist">Kheerganga</a></li>
          </ul>
        </nav>
        <nav aria-label="Camps" className="text-sm">
          <p className="mb-4 font-semibold text-mist">Camps</p>
          <ul className="space-y-2 text-mist/60">
            <li><a href="#camps" className="hover:text-mist">Chandratal</a></li>
            <li><a href="#camps" className="hover:text-mist">Tirthan riverside</a></li>
            <li><a href="#valleys" className="hover:text-mist">Valleys</a></li>
            <li><a href="#faq" className="hover:text-mist">FAQ</a></li>
          </ul>
        </nav>
        <nav aria-label="Company" className="text-sm">
          <p className="mb-4 font-semibold text-mist">Company</p>
          <ul className="space-y-2 text-mist/60">
            <li><a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-mist">Book on WhatsApp</a></li>
            <li><a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-mist">Facebook page</a></li>
            <li><a href="#faq" className="hover:text-mist">Cancellation policy</a></li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-3 px-6 text-xs text-mist/40 md:flex-row md:justify-between">
        <p>Trekman Camps, Kullu. All rights reserved.</p>
        <p>
          Photographs are open-licence images from Wikimedia Commons contributors (CC0, CC BY, CC BY-SA). Full credits in
          CREDITS.md.
        </p>
      </div>
    </footer>
  )
}
