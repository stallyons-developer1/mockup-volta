import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FINAL } from '../data/content.js'

export default function Final() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.final__eyebrow, .final__head .line > span, .final__body, .final__cta, .final__note', {
        y: 40, opacity: 0, duration: 1.2, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.final', start: 'top 72%' },
      })
      gsap.from('.final__sign', { opacity: 0, duration: 1.6, ease: 'power2.out',
        scrollTrigger: { trigger: '.final__sign', start: 'top 92%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="final" id="final" ref={root}>
      <div className="container final__inner">
        <span className="label final__eyebrow">{FINAL.eyebrow}</span>
        <h2 className="final__head display">
          <span className="line"><span>This very night,</span></span>
          <span className="line"><span>their story <em>awaits you</em></span></span>
        </h2>
        <p className="final__body">{FINAL.body}</p>
        <a className="pill pill--solid final__cta" href="#top"
          onClick={(e) => { e.preventDefault(); window.__lenis?.scrollTo(0, { duration: 1.8 }) }}>
          {FINAL.cta} <span>→</span>
        </a>
        <p className="final__note label">{FINAL.note}</p>
        <p className="final__sign display">{FINAL.sign}</p>
      </div>
    </section>
  )
}
