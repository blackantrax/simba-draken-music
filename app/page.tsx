export const dynamic = 'force-dynamic'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import About from '@/components/About'
import Musique from '@/components/Musique'
import Videos from '@/components/Videos'
import Galerie from '@/components/Galerie'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Musique />
        <Videos />
        <Galerie />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
