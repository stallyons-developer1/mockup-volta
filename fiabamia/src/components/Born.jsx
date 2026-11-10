import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BORN } from '../data/content.js'

export default function Born() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.born__head .line > span', {
        yPercent: 115, duration: 1.1, stagger: 0.1, ease: 'power4.out',
        scrollTrigger: { trigger: '.born', start: 'top 78%' },
      })
      gsap.utils.toArray('.step').forEach((s) => {
        gsap.from(s, { y: 36, opacity: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: s, start: 'top 86%' } })
      })
      gsap.from('.born__line i', { scaleY: 0, ease: 'none', transformOrigin: 'top',
        scrollTrigger: { trigger: '.born__steps', start: 'top 70%', end: 'bottom 70%', scrub: true } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="born" id="born" ref={root}>
      <div className="container">
        <span className="label born__eyebrow">How it works</span>
        <h2 className="born__head display">
          <span className="line"><span>How a FiabaMia</span></span>
          <span className="line"><span>story <em>is born</em></span></span>
        </h2>
        <div className="born__steps">
          <span className="born__line" aria-hidden="true"><i /></span>
          {BORN.steps.map((s) => (
            <div className="step" key={s.n}>
              <span className="step__n label">{s.n}</span>
              <div className="step__body">
                <h3 className="step__title display">{s.title}</h3>
                <p className="step__text">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
