import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CLARITY } from '../data/content.js'

export default function Clarity() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.clarity__head .word', {
        yPercent: 110, duration: 1.1, stagger: 0.06, ease: 'power4.out',
        scrollTrigger: { trigger: '.clarity__head', start: 'top 80%' },
      })
      // body words fill from muted → ink on scrub
      gsap.to('.clarity__body .fw', {
        color: 'var(--ink)', stagger: 0.35, ease: 'none',
        scrollTrigger: { trigger: '.clarity__body', start: 'top 78%', end: 'bottom 55%', scrub: true },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  const headWords = CLARITY.eyebrow.split(' ')
  const bodyWords = CLARITY.body.split(' ')

  return (
    <section className="clarity" id="clarity" ref={root}>
      <div className="container">
        <span className="mono clarity__tag"><i>01</i> Our approach</span>
        <h2 className="clarity__head display">
          {headWords.map((w, i) => (
            <span className="rword" key={i}><span className="word">{w}&nbsp;</span></span>
          ))}
        </h2>
        <p className="clarity__body">
          {bodyWords.map((w, i) => (
            <span className="fw" key={i}>{w}{' '}</span>
          ))}
        </p>
      </div>
    </section>
  )
}
