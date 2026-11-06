import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { NATURE_LEAD, NATURE_TAGS } from '../data/content.js'

export default function Nature() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nat__media', { clipPath: 'inset(100% 0 0 0)', duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 72%' } })
      gsap.to('.nat__media img', { yPercent: -12, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true } })
      gsap.from('.nat__title .reveal-line > span', { yPercent: 115, duration: 1.1, stagger: 0.12, ease: 'power4.out',
        scrollTrigger: { trigger: root.current, start: 'top 70%' } })
      gsap.from('.nat__lead, .nat__tags li', { y: 20, opacity: 0, duration: 0.8, stagger: 0.07, ease: 'power3.out',
        scrollTrigger: { trigger: '.nat__lead', start: 'top 85%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section section--green nature" id="nature" ref={root}>
      <div className="container nat">
        <div className="nat__left">
          <span className="eyebrow">Nature &amp; Material</span>
          <h2 className="nat__title">
            <span className="reveal-line"><span>Built around</span></span>
            <span className="reveal-line"><span>what was <em>already here</em></span></span>
          </h2>
          <p className="nat__lead lead">{NATURE_LEAD}</p>
          <ul className="nat__tags">
            {NATURE_TAGS.map((t) => <li key={t} data-cursor>{t}</li>)}
          </ul>
        </div>
        <div className="nat__media mask-a"><img src="/img/canopy-1.jpg" alt="Canopy" loading="lazy" /></div>
      </div>
    </section>
  )
}
