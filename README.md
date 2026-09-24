# Trekman Camps

Marketing site for guided treks and camping packages in the Kullu valley, Himachal Pradesh.

Stack: Vite 8, React 19, Tailwind CSS 4, GSAP 3 with ScrollTrigger, Phosphor icons. Fonts: Geist (headings and body) and Instrument Serif (accents), loaded from Google Fonts.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve dist/ locally
```

## Where things live

- `src/data/packages.js` holds the six packages, the Hampta Pass itinerary, the valleys, testimonials and FAQ copy. Edit prices and text here.
- `src/data/images.js` maps every photo to its Wikimedia Commons file name. All photos are CC0, CC BY or CC BY-SA. Credits are in `CREDITS.md`.
- `src/components/` has one file per section, in page order: Nav, Hero, Statement, Packages, Itinerary, Gallery, Valleys, Testimonials, Faq, Cta, Footer.

## Contact and booking

Phone, WhatsApp and Facebook links live in `src/data/contact.js`. Package cards, the nav button and the booking section all open WhatsApp with a prefilled message. There is no contact form.

## Placeholders to replace before launch

- Postal address in `src/components/Footer.jsx`.
- Testimonials in `src/data/packages.js` are illustrative sample copy. Replace with real guest quotes.

## Images

Photos are hot-linked from Wikimedia Commons through `Special:FilePath`, which resizes on the fly. For production, download the files into `public/` and point `src/data/images.js` at the local copies so the site does not depend on Commons uptime.
