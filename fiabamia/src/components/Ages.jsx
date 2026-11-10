import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AGES } from '../data/content.js'

export default function Ages() {
  const root = useRef(null)
  const [active, setActive] = useState(0)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ages__head .line > span', {
        yPercent: 115, duration: 1.1, stagger: 0.1, ease: 'power4.out',
        scrollTrigger: { trigger: '.ages', start: 'top 78%' },
      })
      gsap.from('.age', { y: 30, opacity: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.ages__list', start: 'top 82%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="ages" ref={root}>
      <div className="container">
        <span className="label ages__eyebrow">{AGES.eyebrow}</span>
        <h2 className="ages__head display">
          <span className="line"><span>Five age groups,</span></span>
          <span className="line"><span><em>from 0 to 10</em></span></span>
        </h2>
        <div className="ages__list" onMouseLeave={() => setActive(0)}>
          {AGES.items.map((a, i) => (
            <div className={`age ${active === i ? 'is-active' : ''}`} key={a.range} onMouseEnter={() => setActive(i)}>
              <span className="age__range display">{a.range}</span>
              <p className="age__text">{a.text}</p>
              <span className="age__plus">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
