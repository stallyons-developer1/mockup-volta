import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TESTIMONIALS } from '../data/content.js'

export default function Testimonials() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tst__head .line > span', {
        yPercent: 115, duration: 1.1, stagger: 0.1, ease: 'power4.out',
        scrollTrigger: { trigger: '.tst', start: 'top 78%' },
      })
      gsap.from('.tst__card', { y: 44, opacity: 0, duration: 1.1, stagger: 0.14, ease: 'power3.out',
        scrollTrigger: { trigger: '.tst__grid', start: 'top 82%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="tst" ref={root}>
      <div className="container">
        <span className="label tst__eyebrow">{TESTIMONIALS.eyebrow}</span>
        <h2 className="tst__head display">
          <span className="line"><span>The bedtime ritual,</span></span>
          <span className="line"><span><em>remembered forever</em></span></span>
        </h2>
        <div className="tst__grid">
          {TESTIMONIALS.items.map((t, i) => (
            <figure className="tst__card" key={i}>
              <span className="tst__quote" aria-hidden="true">“</span>
              <blockquote className="tst__text display">{t.quote}</blockquote>
              <figcaption className="tst__by label">{t.by}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
