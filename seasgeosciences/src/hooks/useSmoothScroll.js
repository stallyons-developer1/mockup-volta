import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Lenis smooth scroll wired into the GSAP ticker so ScrollTrigger stays in sync.
export default function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })
    window.__lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)
    const onTick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)

    // Give layout a frame, then refresh trigger positions.
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => {
      gsap.ticker.remove(onTick)
      lenis.destroy()
      window.__lenis = null
      cancelAnimationFrame(id)
    }
  }, [])
}
