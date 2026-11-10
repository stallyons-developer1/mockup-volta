import { useEffect, useRef, useState } from 'react'

// Fixed right-edge indicator: the scroll journey from AWAKE (top) to ASLEEP (bottom).
export default function SleepMeter() {
  const [p, setP] = useState(0)
  const [show, setShow] = useState(false)
  const raf = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.__lenis?.scroll ?? window.scrollY
      const max = document.body.scrollHeight - window.innerHeight
      const prog = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0
      cancelAnimationFrame(raf.current)
      raf.current = requestAnimationFrame(() => { setP(prog); setShow(y > window.innerHeight * 0.5) })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.__lenis?.on('scroll', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf.current) }
  }, [])

  return (
    <div className={`sleep ${show ? 'is-show' : ''}`} aria-hidden="true">
      <span className="sleep__cap label">Awake</span>
      <span className="sleep__track">
        <i className="sleep__dot" style={{ top: `${p * 100}%` }} />
      </span>
      <span className="sleep__cap label">Asleep</span>
    </div>
  )
}
