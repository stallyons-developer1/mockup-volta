import { useEffect, useState } from 'react'
import { onProgress } from '../scroll.js'
import { CHAPTERS } from '../site.js'

export default function BottomNav() {
  const [p, setP] = useState(0)
  useEffect(() => onProgress(setP), [])
  const active = p < 0.5 ? 0 : 1

  return (
    <nav className="bottomnav">
      <div className="bottomnav__prog" style={{ width: `${p * 100}%` }} />
      {CHAPTERS.map((c, i) => (
        <div key={c} className={`bottomnav__tab ${active === i ? 'bottomnav__tab--on' : ''}`}>
          {c}<span>{i === 0 ? 'The car' : 'The build'}</span>
        </div>
      ))}
      <div className="bottomnav__menu" aria-label="menu"><i /><i /><i /></div>
    </nav>
  )
}
