import { useEffect, useState } from 'react'
import { BRAND } from '../site.js'

// Auto-running percentage loader (0 → 100 over ~1.5s), then reveals the site.
export default function Loader({ launched, onDone }) {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const dur = 1450
    const start = performance.now()
    let rafId, toId
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur)
      const e = 1 - Math.pow(1 - t, 2) // ease-out
      setPct(Math.round(e * 100))
      if (t < 1) rafId = requestAnimationFrame(tick)
      else toId = setTimeout(onDone, 300) // brief hold at 100%
    }
    rafId = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(rafId); clearTimeout(toId) }
  }, [onDone])

  return (
    <div className={`loader ${launched ? 'loader--gone' : ''}`}>
      <div className="loader__brand">{BRAND}</div>
      <div className="loader__pct">{pct}<span>%</span></div>
      <div className="loader__bar"><i style={{ width: `${pct}%` }} /></div>
    </div>
  )
}
