import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const GAME_MULT = { Valorant: 8, CS2: 8.5, 'Dota 2': 10, Fortnite: 6.5 }
const GAMES = Object.keys(GAME_MULT)

export default function Calculator() {
  const root = useRef(null)
  const amountRef = useRef(null)
  const shown = useRef(0)
  const [game, setGame] = useState('Valorant')
  const [skill, setSkill] = useState(60)
  const [hours, setHours] = useState(12)

  const monthly = Math.round(hours * 4.3 * ((skill / 100) * 1.8 + 0.2) * GAME_MULT[game])

  // Count-animate the headline number whenever an input changes.
  useEffect(() => {
    const o = { v: shown.current }
    const tween = gsap.to(o, {
      v: monthly, duration: 0.6, ease: 'power2.out',
      onUpdate: () => {
        shown.current = o.v
        if (amountRef.current) amountRef.current.textContent = '$' + Math.round(o.v).toLocaleString()
      },
    })
    return () => tween.kill()
  }, [monthly])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.calc__panel, .calc__out', { y: 40, opacity: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 78%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section" ref={root}>
      <div className="container">
        <div className="head">
          <h2>How much<br />could you <span style={{ color: 'var(--accent)' }}>win?</span></h2>
          <p>Drag the sliders to your real play style and see a realistic monthly haul for a top-bracket competitor.</p>
        </div>

        <div className="calc">
          <div className="calc__panel glass">
            <div className="calc__field">
              <label><span className="name">Your game</span></label>
              <div className="calc__chips">
                {GAMES.map((g) => (
                  <button key={g} className={`calc__chip ${g === game ? 'is-on' : ''}`} onClick={() => setGame(g)} data-cursor>{g}</button>
                ))}
              </div>
            </div>
            <div className="calc__field">
              <label><span className="name">Skill level</span><span className="val">{skill}</span></label>
              <input type="range" min="1" max="100" value={skill} onChange={(e) => setSkill(+e.target.value)} />
            </div>
            <div className="calc__field">
              <label><span className="name">Hours / week</span><span className="val">{hours}h</span></label>
              <input type="range" min="1" max="40" value={hours} onChange={(e) => setHours(+e.target.value)} />
            </div>
          </div>

          <div className="calc__out">
            <div className="lead">Projected monthly winnings</div>
            <div className="amount" ref={amountRef}>$0</div>
            <p className="sub">Based on average placement prizes across {game} cash tournaments. Your mileage — and aim — may vary.</p>
            <a className="btn" href="#pricing" data-cursor>Start competing →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
