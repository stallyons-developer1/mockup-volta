import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { STATEMENT } from '../data/content.js'

export default function Statement() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.statement .word', { opacity: 0.2 }, { opacity: 1, stagger: 0.12, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top 72%', end: 'bottom 70%', scrub: true } })
      gsap.from('.statement .eyebrow, .statement .btn', { opacity: 0, y: 20, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  const words = STATEMENT.split(' ')
  return (
    <section className="section statement" ref={root}>
      <div className="container">
        <span className="eyebrow" style={{ justifyContent: 'center' }}>A considered way to live</span>
        <h2>
          {words.map((w, i) => {
            const clean = w.replace(/[^a-z]/gi, '').toLowerCase()
            const accent = clean === 'calm' || clean === 'worth'
            return (
              <span className="word" key={i}>
                {accent ? <em>{w}</em> : w}{' '}
              </span>
            )
          })}
        </h2>
        <a className="btn btn--pine" href="#availability" data-cursor><span>Explore our apartments</span><span className="dot">↗</span></a>
      </div>
    </section>
  )
}
