import { useCallback, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSmoothScroll } from './hooks/useSmoothScroll.js'

import Preloader from './components/Preloader.jsx'
import Cursor from './components/Cursor.jsx'
import CursorTrail from './components/CursorTrail.jsx'
import Progress from './components/Progress.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import ScrollIntro from './components/ScrollIntro.jsx'
import Statement from './components/Statement.jsx'
import Residences from './components/Residences.jsx'
import Offices from './components/Offices.jsx'
import Nature from './components/Nature.jsx'
import Roots from './components/Roots.jsx'
import Location from './components/Location.jsx'
import Amenities from './components/Amenities.jsx'
import Band from './components/Band.jsx'
import Gallery from './components/Gallery.jsx'
import Availability from './components/Availability.jsx'
import Footer from './components/Footer.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loaded, setLoaded] = useState(false)
  useSmoothScroll(loaded)

  useEffect(() => { document.body.style.overflow = loaded ? '' : 'hidden' }, [loaded])
  useEffect(() => {
    if (!loaded) return
    const id = setTimeout(() => ScrollTrigger.refresh(), 240)
    return () => clearTimeout(id)
  }, [loaded])

  const onComplete = useCallback(() => setLoaded(true), [])

  return (
    <>
      <Cursor />
      <CursorTrail />
      <Progress />
      {!loaded && <Preloader onComplete={onComplete} />}
      <Nav ready={loaded} />

      <main>
        <Hero ready={loaded} />
        <ScrollIntro />
        <Statement />
        <Location />
        <Residences />
        <Offices />
        <Nature />
        <Roots />
        <Amenities />
        <Band />
        <Gallery />
        <Availability />
        <Footer />
      </main>
    </>
  )
}
