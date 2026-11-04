import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { STATS } from '../data/content.js'

export default function Stats() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.stats__num .count').forEach((el) => {
        const target = parseFloat(el.dataset.target)
        const decimals = (el.dataset.target.split('.')[1] || '').length
        const obj = { v: 0 }
        gsap.to(obj, {
          v: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
          onUpdate: () => {
            el.textContent = obj.v.toFixed(decimals)
          },
        })
      })

      gsap.from('.stats__cell', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 80%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section" ref={root}>
      <div className="container">
        <div className="stats">
          {STATS.map((s) => (
            <div className="stats__cell" key={s.label}>
              <div className="stats__num">
                <span className="count" data-target={s.num}>
                  0
                </span>
                <span className="unit">{s.unit}</span>
              </div>
              <div className="stats__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
