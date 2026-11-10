import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { JOURNEY } from '../data/content.js'

export default function Journey() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.chapter').forEach((ch) => {
        gsap.from(ch.querySelectorAll('.chapter__meta, .chapter__text .line > span, .chapter__sub'), {
          yPercent: 60, opacity: 0, duration: 1.3, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: ch, start: 'top 72%' },
        })
        gsap.to(ch, {
          opacity: 0.15, ease: 'none',
          scrollTrigger: { trigger: ch, start: 'center 30%', end: 'bottom top', scrub: true },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="journey" ref={root}>
      {JOURNEY.map((c) => (
        <div className="chapter" key={c.n}>
          <span className="chapter__meta label">{c.n} · {c.label}</span>
          <h2 className="chapter__text display">
            <span className="line"><span>{c.text}</span></span>
          </h2>
          <p className="chapter__sub">{c.sub}</p>
        </div>
      ))}
    </section>
  )
}
