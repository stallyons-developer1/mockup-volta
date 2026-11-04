import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { STATS } from '../data/content.js'

export default function StatsBar() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.stats__num .count').forEach((el) => {
        const target = parseFloat(el.dataset.target)
        const decimals = (el.dataset.target.split('.')[1] || '').length
        const o = { v: 0 }
        gsap.to(o, {
          v: target, duration: 2, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
          onUpdate: () => { el.textContent = o.v.toFixed(decimals) },
        })
      })
      gsap.from('.stats__cell', { y: 30, opacity: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 85%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root}>
      <div className="stats">
        {STATS.map((s) => (
          <div className="stats__cell" key={s.label}>
            <div className="stats__num"><span className="count" data-target={s.num}>0</span><span className="u">{s.unit}</span></div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
