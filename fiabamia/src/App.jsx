import { useState } from 'react'
import useSmoothScroll from './hooks/useSmoothScroll.js'
import useAmbient from './hooks/useAmbient.js'
import Background from './components/Background.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Journey from './components/Journey.jsx'
import Features from './components/Features.jsx'
import Ages from './components/Ages.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import Born from './components/Born.jsx'
import Faq from './components/FAQ.jsx'
import Final from './components/Final.jsx'
import Footer from './components/Footer.jsx'
import SleepMeter from './components/SleepMeter.jsx'
import SoundToggle from './components/SoundToggle.jsx'

export default function App() {
  useSmoothScroll()
  const [sound, setSound] = useState(false)
  const toggleSound = () => setSound((s) => !s)
  useAmbient(sound)

  return (
    <>
      <Background />
      <div className="app">
        <Nav />
        <SleepMeter />
        <SoundToggle sound={sound} onToggle={toggleSound} />
        <main>
          <Hero sound={sound} onSound={toggleSound} />
          <Journey />
          <Features />
          <Ages />
          <Testimonials />
          <Pricing />
          <Born />
          <Faq />
          <Final />
        </main>
        <Footer />
      </div>
    </>
  )
}
