import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PRICING } from '../data/content.js'

export default function Pricing() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing__head .line > span', {
        yPercent: 112, duration: 1.2, stagger: 0.09, ease: 'power4.out',
        scrollTrigger: { trigger: '.pricing', start: 'top 76%' },
      })
      gsap.from('.pricing__note', { opacity: 0, y: 20, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.pricing__note', start: 'top 85%' } })
      gsap.from('.plan', { y: 50, opacity: 0, duration: 1.1, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.pricing__grid', start: 'top 82%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="pricing" id="pricing" ref={root}>
      <div className="container">
        <span className="label pricing__eyebrow">{PRICING.eyebrow}</span>
        <h2 className="pricing__head display">
          <span className="line"><span>Every story costs one Star.</span></span>
          <span className="line"><span>And today, <em>Stars are free.</em></span></span>
        </h2>
        <p className="pricing__note">{PRICING.note}</p>

        <div className="pricing__grid">
          {PRICING.plans.map((p) => (
            <article className={`plan ${p.featured ? 'is-featured' : ''}`} key={p.name}>
              {p.featured && <span className="plan__badge label">{p.price}</span>}
              <span className="plan__stars">
                <span className="plan__starIcon">✦</span>{p.stars}
              </span>
              <h3 className="plan__name display">{p.name}</h3>
              <p className="plan__desc">{p.desc}</p>
              {!p.featured && <span className="plan__price label">{p.price}</span>}
              <a className={`pill plan__cta ${p.featured ? 'pill--solid' : ''}`} href="#final"
                onClick={(e) => { e.preventDefault(); window.__lenis?.scrollTo('#final', { duration: 1.5 }) }}>
                Choose
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
