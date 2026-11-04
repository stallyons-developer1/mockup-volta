import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { STEPS } from '../data/content.js'

export default function Steps() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.step', { y: 50, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.steps', start: 'top 82%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section" id="how" ref={root}>
      <div className="container">
        <div className="head">
          <h2 className="reveal">From queue<br />to <span style={{ color: 'var(--accent)' }}>cash-out</span></h2>
          <p className="reveal">Four steps. No downloads beyond your game. No waiting weeks for a payout — the whole loop runs in minutes.</p>
        </div>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step glass" key={s.n} data-cursor>
              <div className="step__n">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
