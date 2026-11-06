import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { OFFICE_LEAD, OFFICE_WINGS } from '../data/content.js'

export default function Offices() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.off__title .reveal-line > span', { yPercent: 115, duration: 1.1, stagger: 0.12, ease: 'power4.out',
        scrollTrigger: { trigger: root.current, start: 'top 72%' } })
      gsap.from('.off__media', { clipPath: 'inset(0 0 100% 0)', duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 70%' } })
      gsap.to('.off__media img', { yPercent: -12, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true } })
      gsap.from('.off__wings li', { x: 24, duration: 0.7, stagger: 0.09, ease: 'power3.out',
        scrollTrigger: { trigger: '.off__wings', start: 'top 85%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section section--green offices" id="business" ref={root}>
      <div className="container off">
        <div className="off__media"><img src="/img/office-1.jpg" alt="Office interior" loading="lazy" /></div>
        <div className="off__left">
          <span className="eyebrow">Business &amp; Retail</span>
          <h2 className="off__title">
            <span className="reveal-line"><span>Office spaces</span></span>
            <span className="reveal-line"><span>&amp; <em>retail</em></span></span>
          </h2>
          <p className="off__lead lead">{OFFICE_LEAD}</p>
          <ul className="off__wings">
            {OFFICE_WINGS.map((w) => (
              <li key={w.k} data-cursor>
                <span className="off__k">{w.k}</span>
                <span className="off__name">{w.name}</span>
                <span className="off__area">{w.area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
