import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AMENITIES } from '../data/content.js'

export default function Amenities() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.amen2__head .reveal-line > span', { yPercent: 115, duration: 1.1, stagger: 0.12, ease: 'power4.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' } })
      gsap.from('.amen2__media', { clipPath: 'inset(0 0 100% 0)', duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 68%' } })
      gsap.to('.amen2__media img', { yPercent: -10, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true } })
      gsap.from('.amen2__list li', { x: 26, duration: 0.7, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.amen2__list', start: 'top 82%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section amenities" id="amenities" ref={root}>
      <div className="container amen2">
        <div className="amen2__head">
          <span className="eyebrow">Amenities</span>
          <h2 className="amen2__title">
            <span className="reveal-line"><span>A day that never</span></span>
            <span className="reveal-line"><span>leaves the <em>building</em></span></span>
          </h2>
        </div>
        <div className="amen2__media mask-b"><img src="/img/pool-1.jpg" alt="Canopy pool" loading="lazy" /></div>
        <ul className="amen2__list">
          {AMENITIES.map((a) => (
            <li key={a.n} data-cursor>
              <span className="n">{a.n}</span>
              <div>
                <h3>{a.t}</h3>
                <p>{a.p}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
