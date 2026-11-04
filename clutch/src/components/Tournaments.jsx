import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TOURNAMENTS } from '../data/content.js'

export default function Tournaments() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tour', { y: 50, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.tours', start: 'top 82%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section" id="tournaments" ref={root}>
      <div className="container">
        <div className="head">
          <h2>Live<br /><span style={{ color: 'var(--accent)' }}>tournaments</span></h2>
          <p>Hundreds running right now. Free rolls for the brave, cash pools for the hungry.</p>
        </div>
        <div className="tours">
          {TOURNAMENTS.map((t) => (
            <article className="tour glass" key={t.game} data-cursor>
              <div className="tour__top">
                <span className="tour__game">{t.game}</span>
                <span className="tour__live">
                  {t.state === 'LIVE' && <span className="pip" />}
                  {t.state}
                </span>
              </div>
              <div className="tour__pool">{t.pool}</div>
              <div className="tour__meta">
                <span>Entry <b>{t.entry}</b></span>
                <span>Players <b>{t.players}</b></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
