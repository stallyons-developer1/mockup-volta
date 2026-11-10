import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Hero() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.25 })
      tl.from('.hero__eyebrow', { yPercent: 120, opacity: 0, duration: 0.9, ease: 'power3.out' })
        .from('.hero__title .line > span', { yPercent: 115, duration: 1.15, stagger: 0.12, ease: 'power4.out' }, '-=0.5')
        .from('.hero__sub', { y: 24, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.7')
        .from('.hero__foot > *', { y: 20, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out' }, '-=0.6')
        .from('.hero__scrim', { opacity: 1 }, 0)

      // parallax drift on the video as you scroll away
      gsap.to('.hero__media', {
        yPercent: 16, scale: 1.08, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('.hero__content', {
        yPercent: -22, opacity: 0.2, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero__media">
        <video autoPlay muted loop playsInline poster="/media/mobile-offshore.jpg">
          <source src="/media/T10-Assets-V4-compressed.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero__scrim" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__content container">
        <span className="hero__eyebrow mono">Geotechnical &amp; Geoscience Services</span>
        <h1 className="hero__title display">
          <span className="line"><span>Seas</span></span>
          <span className="line"><span>Geosciences</span></span>
        </h1>
        <p className="hero__sub">
          Advanced, integrated site characterization that turns deep ground uncertainty into
          engineering insight — offshore, nearshore and onshore.
        </p>
        <div className="hero__foot">
          <a className="btn" href="#contact" data-cursor
            onClick={(e) => { e.preventDefault(); window.__lenis?.scrollTo('#contact', { duration: 1.5 }) }}>
            Start a project <span className="arr">→</span>
          </a>
          <div className="hero__scroll">
            <span className="mono">Scroll</span>
            <span className="hero__scrollLine"><i /></span>
          </div>
        </div>
      </div>
    </section>
  )
}
