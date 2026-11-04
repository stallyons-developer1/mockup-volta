import { useCallback, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSmoothScroll } from './hooks/useSmoothScroll.js'
import { initInteractions } from './lib/interactions.js'

import Preloader from './components/Preloader.jsx'
import GrainField from './components/GrainField.jsx'
import Cursor from './components/Cursor.jsx'
import Progress from './components/Progress.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import StatsBar from './components/StatsBar.jsx'
import Steps from './components/Steps.jsx'
import Tournaments from './components/Tournaments.jsx'
import Calculator from './components/Calculator.jsx'
import Pricing from './components/Pricing.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Marquee from './components/Marquee.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'

gsap.registerPlugin(ScrollTrigger)
// Use real elapsed time so time-based intros still complete under heavy GPU load.
gsap.ticker.lagSmoothing(0)

export default function App() {
  const [loaded, setLoaded] = useState(false)
  useSmoothScroll(loaded)

  useEffect(() => { document.body.style.overflow = loaded ? '' : 'hidden' }, [loaded])
  useEffect(() => {
    if (!loaded) return
    const id = setTimeout(() => ScrollTrigger.refresh(), 220)
    return () => clearTimeout(id)
  }, [loaded])

  // Pointer interactions (cursor glow, 3D tilt, magnetic) once the DOM is live.
  const cleanup = useRef(null)
  useEffect(() => {
    if (!loaded) return
    const id = setTimeout(() => { cleanup.current = initInteractions() }, 320)
    return () => { clearTimeout(id); cleanup.current && cleanup.current() }
  }, [loaded])

  // Scroll-driven reveals + continuous parallax (makes scrolling feel alive).
  useEffect(() => {
    if (!loaded) return
    const ctx = gsap.context(() => {
      // heading wipe-reveals
      gsap.utils.toArray('.head h2').forEach((h) => {
        gsap.fromTo(
          h,
          { clipPath: 'inset(0 100% 0 0)', y: 40 },
          { clipPath: 'inset(0 0% 0 0)', y: 0, duration: 1.2, ease: 'power4.out',
            scrollTrigger: { trigger: h, start: 'top 85%' } }
        )
      })
      // headings float up continuously as their section scrolls
      gsap.utils.toArray('.head').forEach((el) => {
        const section = el.closest('section') || el
        gsap.fromTo(el, { yPercent: 10 }, { yPercent: -16, ease: 'none',
          scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true } })
      })
      // card grids drift at depth for a parallax feel
      gsap.utils.toArray('.tours, .steps, .tiers, .board').forEach((el) => {
        const section = el.closest('section') || el
        gsap.fromTo(el, { yPercent: 6 }, { yPercent: -6, ease: 'none',
          scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true } })
      })
    })
    return () => ctx.revert()
  }, [loaded])

  const onComplete = useCallback(() => setLoaded(true), [])

  return (
    <>
      <GrainField />
      <Cursor />
      <Progress />
      <div className="rulers"><span className="l" /><span className="r" /></div>
      {!loaded && <Preloader onComplete={onComplete} />}
      <Nav ready={loaded} />

      <main>
        <Hero ready={loaded} />
        <StatsBar />
        <Steps />
        <Tournaments />
        <Marquee />
        <Calculator />
        <Pricing />
        <Leaderboard />
        <Faq />
        <Footer />
      </main>
    </>
  )
}
