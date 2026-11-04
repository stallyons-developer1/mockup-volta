import { useCallback, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSmoothScroll } from './hooks/useSmoothScroll.js'
import { SWATCHES } from './data/content.js'

import Preloader from './components/Preloader.jsx'
import Cursor from './components/Cursor.jsx'
import Progress from './components/Progress.jsx'
import Nav from './components/Nav.jsx'
import SoundToggle from './components/SoundToggle.jsx'
import ScrollJourney from './components/ScrollJourney.jsx'
import Marquee from './components/Marquee.jsx'
import Showcase from './components/Showcase.jsx'
import Configurator from './components/Configurator.jsx'
import Stats from './components/Stats.jsx'
import Footer from './components/Footer.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [accent, setAccent] = useState(SWATCHES[2]) // Magma Orange = default

  // Smooth scroll boots once the loader has cleared.
  useSmoothScroll(loaded)

  // Lock the page while the loader is on screen.
  useEffect(() => {
    document.body.style.overflow = loaded ? '' : 'hidden'
  }, [loaded])

  // Push the chosen accent into CSS custom properties for the whole UI.
  useEffect(() => {
    const r = document.documentElement
    r.style.setProperty('--accent', accent.hex)
    r.style.setProperty('--accent-rgb', accent.rgb)
  }, [accent])

  // Recalculate every scroll trigger once content is revealed and settled.
  useEffect(() => {
    if (!loaded) return
    const id = setTimeout(() => ScrollTrigger.refresh(), 220)
    return () => clearTimeout(id)
  }, [loaded])

  const onComplete = useCallback(() => setLoaded(true), [])

  return (
    <>
      <Cursor />
      <Progress />
      {!loaded && <Preloader onComplete={onComplete} />}
      <Nav ready={loaded} />
      <SoundToggle />

      <main>
        <ScrollJourney accent={accent.hex} />
        <Marquee />
        <Showcase />
        <Configurator accent={accent} onPick={setAccent} />
        <Stats />
        <Footer />
      </main>
    </>
  )
}
