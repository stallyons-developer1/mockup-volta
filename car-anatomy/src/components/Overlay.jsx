import { useEffect, useState } from 'react'
import { onProgress } from '../scroll.js'
import { STEPS, sample } from '../data.js'

export default function Overlay() {
  const [p, setP] = useState(0)
  useEffect(() => onProgress(setP), [])
  const { cardIdx } = sample(p)

  return (
    <>
      <header className="bar">
        <div className="bar__brand">AU<b>R</b>OM</div>
        <div className="bar__meta">Anatomy of a Machine</div>
      </header>

      {STEPS.map((s, i) => (
        <div key={i} className={`step ${s.card.side}`} style={{ opacity: cardIdx === i ? 1 : 0 }}>
          <span className="step__tag">{s.card.tag}</span>
          <h2 className="step__title">{s.card.title}</h2>
          <p className="step__desc">{s.card.desc}</p>
          <span className="step__n">{String(i + 1).padStart(2, '0')} / {String(STEPS.length).padStart(2, '0')}</span>
        </div>
      ))}

      <div className="scrollcue" style={{ opacity: p < 0.04 ? 1 : 0 }}><span>Scroll to disassemble</span><i /></div>
      <div className="prog"><div className="prog__fill" style={{ height: `${p * 100}%` }} /></div>
    </>
  )
}
