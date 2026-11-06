import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LANDMARKS } from '../data/content.js'

export default function Location() {
  const root = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.loc2__list li', { x: 26, duration: 0.7, stagger: 0.07, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 72%' } })
      gsap.from('.iso', { opacity: 0, scale: 0.92, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 72%' } })
      gsap.from('.iso__pin', { y: -18, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'back.out(2)',
        scrollTrigger: { trigger: root.current, start: 'top 66%' } })
      gsap.to('.iso', { yPercent: -6, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section loc2-section" id="location" ref={root}>
      <div className="container loc2">
        <div className="loc2__left">
          <span className="eyebrow">Location — What's around</span>
          <h2 className="serif loc2__title">Rooted in the most<br />connected corner<br />of the city</h2>
          <ul className="loc2__list">
            {LANDMARKS.map((l, i) => (
              <li key={l.place} className={i === active ? 'is-active' : ''} onMouseEnter={() => setActive(i)} data-cursor>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <span className="place">{l.place}</span>
                <span className="time">{l.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loc2__map">
          <div className="iso">
            <div className="iso__plane">
              <div className="iso__grid" />
              <span className="iso__home" />
            </div>
            {LANDMARKS.map((l, i) => (
              <span
                key={l.place}
                className={`iso__pin ${i === active ? 'is-active' : ''}`}
                style={{ left: `${l.x}%`, top: `${l.y}%` }}
                onMouseEnter={() => setActive(i)}
                data-cursor
              >
                <span className="iso__bar" />
                <span className="iso__dot" />
                <span className="iso__label">{l.place} · {l.time}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
