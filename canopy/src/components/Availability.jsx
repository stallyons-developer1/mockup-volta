import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PLANS } from '../data/content.js'

export default function Availability() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.avail__row', { y: 24, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.avail', start: 'top 82%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section" id="availability" ref={root}>
      <div className="container">
        <div style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
          <span className="eyebrow">Availability</span>
          <h2 className="serif" style={{ fontSize: 'clamp(2rem,5vw,4rem)', marginTop: '1.2rem' }}>Choose your roots</h2>
        </div>
        <div className="avail">
          <div className="avail__row head">
            <span>No.</span><span>Residence</span><span className="hide-sm">Aspect</span><span>Price</span><span>Status</span>
          </div>
          {PLANS.map((p, i) => (
            <div className="avail__row" key={p.plan} data-cursor>
              <span className="avail__plan">{String(i + 1).padStart(2, '0')}</span>
              <span><span className="avail__plan" style={{ fontSize: '1.2rem' }}>{p.plan}</span><br /><span className="avail__type">{p.type}</span></span>
              <span className="avail__type hide-sm">{p.aspect}</span>
              <span className="avail__price">{p.price}</span>
              <span className={`avail__tag ${p.tag === 'Reserved' ? 'sold' : ''}`}>{p.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
