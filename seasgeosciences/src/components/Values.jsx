import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { VALUES } from '../data/content.js'

export default function Values() {
  const root = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.values__eyebrow', {
        y: 24, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
      })
      gsap.utils.toArray('.vrow').forEach((row, i) => {
        gsap.from(row.querySelectorAll('.vrow__inner > *'), {
          y: 40, opacity: 0, duration: 1, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: row, start: 'top 82%' },
        })
        ScrollTrigger.create({
          trigger: row, start: 'top 55%', end: 'bottom 55%',
          onToggle: (self) => self.isActive && setActive(i),
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="values" id="values" ref={root}>
      <div className="container values__inner">
        <aside className="values__aside">
          <span className="mono values__eyebrow"><i>03</i> {VALUES.eyebrow}</span>
          <div className="values__counter display">
            <span className="values__big">{VALUES.items[active].n}</span>
            <span className="values__tot">/ 0{VALUES.items.length}</span>
          </div>
          <div className="values__track">
            {VALUES.items.map((_, i) => (
              <span key={i} className={i === active ? 'on' : ''} />
            ))}
          </div>
        </aside>

        <div className="values__list">
          {VALUES.items.map((v) => (
            <article className="vrow" key={v.n}>
              <div className="vrow__inner">
                <span className="vrow__n mono">{v.n}</span>
                <h3 className="vrow__title display">{v.title}</h3>
                <p className="vrow__body">{v.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
