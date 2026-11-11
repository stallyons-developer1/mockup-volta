import { useEffect, useState } from 'react'
import { onProgress } from '../scroll.js'
import { STOPS } from '../data.js'

const CARDS = STOPS.filter((s) => s.card).map((s) => ({ ...s.card, p: s.p }))
const PHASES = ['Entering the Pavilion', 'The Reveal', 'Exterior', 'Interior', 'The Collection']

export default function Overlay() {
  const [p, setP] = useState(0)
  useEffect(() => onProgress(setP), [])

  const intro = p < 0.06
  // active feature card: nearest card-stop within a window
  let card = null, best = 0.06
  for (const c of CARDS) { const d = Math.abs(p - c.p); if (d < best) { best = d; card = c } }
  // current phase
  let phase = STOPS[0].phase
  for (const s of STOPS) if (p >= s.p - 0.001) phase = s.phase

  return (
    <>
      <header className="bar">
        <div className="bar__brand">AU<b>R</b>OM</div>
        <div className="bar__meta">Private Pavilion · 01 / 06</div>
      </header>

      <div className="intro" style={{ opacity: intro ? 1 : 0, transition: 'opacity .6s' }}>
        <span className="intro__eyebrow">AUROM Collection — Bengaluru</span>
        <h1 className="intro__title">The Glass<br />Pavilions.</h1>
        <p className="intro__sub">Six machines. Six rooms of light. Scroll to step inside and meet the first.</p>
        <span className="intro__cue"><i />Scroll to enter</span>
      </div>

      {CARDS.map((c, i) => (
        <div key={i} className={`feature ${c.side}`} style={{
          opacity: card === c ? 1 : 0,
          transform: `${c.side === 'left' ? '' : ''} translateY(calc(-50% + ${card === c ? 0 : 18}px))`,
        }}>
          <span className="feature__tag">{c.tag}</span>
          <h3 className="feature__title">{c.title}</h3>
          <p className="feature__desc">{c.desc}</p>
          <div className="feature__n">{c.n} — Feature</div>
        </div>
      ))}

      <div className="phase" style={{ opacity: intro ? 0 : 0.9 }}>{phase}</div>

      <div className="prog">
        <div className="prog__track"><div className="prog__fill" style={{ width: `${p * 100}%` }} /></div>
        <div className="prog__labels">
          {PHASES.map((ph) => <span key={ph} className={phase === ph ? 'on' : ''}>{ph}</span>)}
        </div>
      </div>
    </>
  )
}
