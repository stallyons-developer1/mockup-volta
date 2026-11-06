import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const BLOCKS = [
  { k: 'A', label: 'Residences', x: 30, y: 40 },
  { k: 'B', label: 'Offices', x: 58, y: 56 },
  { k: 'V', label: 'Retail', x: 74, y: 34 },
]

// "View from above" — oversized editorial type over a parallaxing aerial, with
// block markers that fade in.
export default function Band() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.vfa__img img', { yPercent: -12, scale: 1.12 }, { yPercent: 12, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true } })
      gsap.from('.vfa__title .reveal-line > span', { yPercent: 115, duration: 1.2, stagger: 0.12, ease: 'power4.out',
        scrollTrigger: { trigger: root.current, start: 'top 72%' } })
      gsap.from('.vfa__block', { opacity: 0, scale: 0.7, duration: 0.6, stagger: 0.12, ease: 'back.out(2)',
        scrollTrigger: { trigger: '.vfa__media', start: 'top 78%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="vfa section--green" ref={root}>
      <div className="container">
        <span className="eyebrow" style={{ marginBottom: '1.2rem' }}>The masterplan</span>
        <h2 className="vfa__title">
          <span className="reveal-line"><span>View from</span></span>
          <span className="reveal-line"><span><em>above</em></span></span>
        </h2>
      </div>
      <div className="vfa__media">
        <div className="vfa__img"><img src="/img/aerial-1.jpg" alt="Aerial masterplan" /></div>
        {BLOCKS.map((b) => (
          <span className="vfa__block" key={b.k} style={{ left: `${b.x}%`, top: `${b.y}%` }} data-cursor>
            <span className="vfa__k">{b.k}</span>
            <span className="vfa__lbl">{b.label}</span>
          </span>
        ))}
      </div>
    </section>
  )
}
