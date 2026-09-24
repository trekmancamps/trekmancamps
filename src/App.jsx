import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Statement from './components/Statement'
import Packages from './components/Packages'
import Itinerary from './components/Itinerary'
import Gallery from './components/Gallery'
import Valleys from './components/Valleys'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Cta from './components/Cta'
import Footer from './components/Footer'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function App() {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <Nav />
      <Hero />
      <Statement />
      <Packages />
      <Itinerary />
      <Gallery />
      <Valleys />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </main>
  )
}
