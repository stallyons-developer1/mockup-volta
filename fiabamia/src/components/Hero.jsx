import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HERO } from '../data/content.js'

export default function Hero({ onSound, sound }) {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 })
      tl.from('.hero__eyebrow', { opacity: 0, y: 18, duration: 1.2, ease: 'power2.out' })
        .from('.hero__title .line > span', { yPercent: 118, opacity: 0, duration: 1.4, stagger: 0.14, ease: 'power4.out' }, '-=0.7')
        .from('.hero__sound', { opacity: 0, y: 16, duration: 1, ease: 'power2.out' }, '-=0.6')
        .from('.hero__scroll', { opacity: 0, duration: 1.2, ease: 'power2.out' }, '-=0.4')

      // fade + drift the hero out as you scroll away
      gsap.to('.hero__content', {
        yPercent: -18, opacity: 0, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero__content">
        <span className="hero__eyebrow label">{HERO.eyebrow}</span>
        <h1 className="hero__title display">
          <span className="line"><span>{HERO.line1}</span></span>
          <span className="line"><span><em>{HERO.line2}</em></span></span>
        </h1>
        <button className={`pill hero__sound ${sound ? 'is-on' : ''}`} onClick={onSound}>
          <span className="hero__dots" aria-hidden="true"><i /><i /><i /><i /></span>
          {sound ? 'Sound on' : HERO.cta}
        </button>
      </div>

      <div className="hero__scroll">
        <span className="hero__scrollLine" />
        <span className="label hero__scrollTxt">{HERO.scroll}</span>
      </div>
    </section>
  )
}
