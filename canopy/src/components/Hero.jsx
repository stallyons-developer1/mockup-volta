import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Hero({ ready }) {
  const root = useRef(null)

  useEffect(() => {
    if (!ready) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.from('.hero__title .reveal-line > span', { yPercent: 110, duration: 1.3, stagger: 0.12 })
        .from('.hero__media > *', { scale: 1.18, duration: 1.8, ease: 'power2.out' }, 0)
        .from(['.hero__kicker', '.hero__scroll'], { opacity: 0, y: 20, duration: 1, stagger: 0.1 }, '-=0.8')
      // parallax the media as you scroll away
      gsap.to('.hero__media > *', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } })
    }, root)
    return () => ctx.revert()
  }, [ready])

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero__media">
        <video src="/video/hero.mp4" autoPlay muted playsInline poster="/img/facade-1.jpg" />
      </div>
      <div className="hero__scrim" />
      <div className="hero__kicker">Residences &amp; Business · Est. 2027</div>
      <h1 className="hero__title">
        <span className="reveal-line"><span>Canopy</span></span>
      </h1>
      <div className="hero__scroll"><span className="line" />Scroll</div>
    </section>
  )
}
