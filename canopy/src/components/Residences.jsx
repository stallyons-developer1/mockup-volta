import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RESIDENCE_TYPES } from '../data/content.js'

export default function Residences() {
  const root = useRef(null)
  const [active, setActive] = useState(0)
  const n = RESIDENCE_TYPES.length

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.res__list li', { x: -28, duration: 0.7, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 72%' } })
      gsap.from('.res__media', { clipPath: 'inset(0 0 100% 0)', duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 72%' } })
      gsap.from('.res__viewall, .res__foot > *', { y: 24, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 68%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section residences" id="residences" ref={root}>
      <div className="container res">
        <div className="res__left">
          <span className="eyebrow">Residences</span>
          <ul className="res__list">
            {RESIDENCE_TYPES.map((r, i) => (
              <li key={r.name} className={i === active ? 'is-active' : ''} onMouseEnter={() => setActive(i)} data-cursor>
                <span className="res__name">{r.name}</span>
                <span className="res__size">{r.size}</span>
              </li>
            ))}
          </ul>
          <a className="res__viewall" href="#availability" data-cursor>View all residences ↗</a>
          <div className="res__foot">
            <div className="res__units"><b>80</b><span>units<br />available</span></div>
            <a className="btn btn--pine" href="#enquire" data-cursor><span>Submit a request</span><span className="dot">→</span></a>
          </div>
        </div>

        <div className="res__media">
          {RESIDENCE_TYPES.map((r, i) => (
            <img key={r.name} src={r.img} alt={r.name} className={i === active ? 'is-on' : ''} loading="lazy" />
          ))}
          <div className="res__nav">
            <button onClick={() => setActive((a) => (a - 1 + n) % n)} aria-label="Previous" data-cursor>←</button>
            <button onClick={() => setActive((a) => (a + 1) % n)} aria-label="Next" data-cursor>→</button>
          </div>
          <span className="res__count">{String(active + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  )
}
