import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LEADERBOARD } from '../data/content.js'

export default function Leaderboard() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.board__row', { x: -30, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 72%' } })
      gsap.utils.toArray('.board__bar i').forEach((bar) => {
        gsap.fromTo(bar, { scaleX: 0 }, { scaleX: bar.dataset.v, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 60%' } })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section" id="ranks" ref={root}>
      <div className="container">
        <div className="head">
          <h2>This week's<br /><span style={{ color: 'var(--accent)' }}>top earners</span></h2>
          <p>Real players, real withdrawals. The board resets every Monday — your name could be next.</p>
        </div>
        <div className="board">
          {LEADERBOARD.map((p, i) => (
            <div className={`board__row top${i + 1}`} key={p.name} data-cursor>
              <span className="board__rank">{String(i + 1).padStart(2, '0')}</span>
              <span className="board__name"><span className="board__ava" />{p.name} <span style={{ opacity: 0.6 }}>{p.country}</span></span>
              <span className="board__bar"><i data-v={p.score / 100} /></span>
              <span className="board__win">{p.win}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
