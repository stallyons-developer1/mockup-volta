import { useEffect, useState } from 'react'
import { onProgress } from '../scroll.js'
import { STOPS, ROOMS } from '../data.js'

const CARDS = STOPS.filter((s) => s.card).map((s) => ({ ...s.card, p: s.p, room: s.room }))
const LABELS = ['Enter', ...ROOMS.map((r) => r.name), 'Collection']

export default function Overlay() {
  const [p, setP] = useState(0)
  useEffect(() => onProgress(setP), [])

  const intro = p < 0.04
  // active feature card: nearest card-stop within a window
  let card = null, best = 0.045
  for (const c of CARDS) { const d = Math.abs(p - c.p); if (d < best) { best = d; card = c } }
  // current phase + room
  let phase = STOPS[0].phase, room = -1
  for (const s of STOPS) if (p >= s.p - 0.001) { phase = s.phase; room = s.room }
  const roomLabel = room >= 0 ? `Room ${String(room + 1).padStart(2, '0')} / ${String(ROOMS.length).padStart(2, '0')}` : 'Private Collection'
  const code = room >= 0 ? ROOMS[room].code : ''

  return (
    <>
      <header className="bar">
        <div className="bar__brand">AU<b>R</b>OM</div>
        <div className="bar__meta">{roomLabel}{code ? ` · ${code}` : ''}</div>
      </header>

      <div className="intro" style={{ opacity: intro ? 1 : 0, transition: 'opacity .6s' }}>
        <span className="intro__eyebrow">AUROM Collection — Bengaluru</span>
        <h1 className="intro__title">The Glass<br />Pavilions.</h1>
        <p className="intro__sub">A private corridor of light. Scroll to step inside and meet each machine, one room at a time.</p>
        <span className="intro__cue"><i />Scroll to enter</span>
      </div>

      {CARDS.map((c, i) => (
        <div key={i} className={`feature ${c.side || (i % 2 ? 'right' : 'left')}`} style={{ opacity: card === c ? 1 : 0 }}>
          <span className="feature__tag">{c.tag}</span>
          <h3 className="feature__title">{c.title}</h3>
          <p className="feature__desc">{c.desc}</p>
          <div className="feature__n">{ROOMS[c.room]?.name} — Feature</div>
        </div>
      ))}

      <div className="phase" style={{ opacity: intro ? 0 : 0.9 }}>{phase}</div>

      <div className="prog">
        <div className="prog__track"><div className="prog__fill" style={{ width: `${p * 100}%` }} /></div>
        <div className="prog__labels">
          {LABELS.map((ph) => <span key={ph} className={phase.startsWith(ph) || (ph === 'Enter' && phase.includes('Entering')) || (ph === 'Collection' && phase.includes('Collection')) ? 'on' : ''}>{ph}</span>)}
        </div>
      </div>
    </>
  )
}
