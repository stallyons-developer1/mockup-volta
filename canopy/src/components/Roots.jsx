import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ROOTS_LEAD } from '../data/content.js'

export default function Roots() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.roots__title .reveal-line > span', { yPercent: 115, duration: 1.1, stagger: 0.12, ease: 'power4.out',
        scrollTrigger: { trigger: root.current, start: 'top 72%' } })
      gsap.from('.roots__media', { clipPath: 'inset(100% 0 0 0)', duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 70%' } })
      gsap.to('.roots__media img', { yPercent: -10, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true } })
      gsap.from('.roots__lead', { y: 24, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '.roots__lead', start: 'top 88%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section section--navy roots" id="roots" ref={root}>
      <div className="container">
        <span className="eyebrow">The way of living</span>
        <div className="roots__grid">
          <h2 className="roots__title">
            <span className="reveal-line"><span>Your</span></span>
            <span className="reveal-line"><span><em>roots</em></span></span>
          </h2>
          <div className="roots__media"><img src="/img/lifestyle-1.jpg" alt="Living at Canopy" loading="lazy" /></div>
        </div>
        <p className="roots__lead lead">{ROOTS_LEAD}</p>
      </div>
    </section>
  )
}
