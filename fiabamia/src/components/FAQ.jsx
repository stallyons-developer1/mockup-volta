import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FAQ } from '../data/content.js'

export default function Faq() {
  const root = useRef(null)
  const [open, setOpen] = useState(0)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq__head .line > span', {
        yPercent: 115, duration: 1.1, stagger: 0.1, ease: 'power4.out',
        scrollTrigger: { trigger: '.faq', start: 'top 80%' },
      })
      gsap.from('.faq__item', { y: 24, opacity: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.faq__list', start: 'top 85%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="faq" ref={root}>
      <div className="container faq__inner">
        <div className="faq__intro">
          <span className="label faq__eyebrow">{FAQ.eyebrow}</span>
          <h2 className="faq__head display">
            <span className="line"><span>Everything you</span></span>
            <span className="line"><span><em>want to know</em></span></span>
          </h2>
        </div>
        <div className="faq__list">
          {FAQ.items.map((it, i) => (
            <div className={`faq__item ${open === i ? 'is-open' : ''}`} key={i}>
              <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="faq__icon" aria-hidden="true">{open === i ? '–' : '+'}</span>
              </button>
              <div className="faq__a"><p>{it.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
