import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Loader({ onDone }) {
  const root = useRef(null)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const obj = { v: 0 }
    window.__lenis?.stop()
    const tl = gsap.timeline()
    tl.to(obj, { v: 100, duration: 1.7, ease: 'power2.inOut', onUpdate: () => setPct(Math.round(obj.v)) })
      .to('.loader__bar i', { scaleX: 1, duration: 1.7, ease: 'power2.inOut' }, 0)
      .to('.loader__word span', { yPercent: -100, duration: 0.7, stagger: 0.06, ease: 'power4.inOut' }, '-=0.15')
      .to(root.current, { yPercent: -100, duration: 0.9, ease: 'power4.inOut',
        onStart: () => window.__lenis?.start(),
        onComplete: () => onDone?.() }, '-=0.1')
    return () => tl.kill()
  }, [onDone])

  return (
    <div className="loader" ref={root}>
      <div className="loader__inner">
        <div className="loader__word display">
          <span>Clarity</span><span>beneath</span><span>the surface</span>
        </div>
        <div className="loader__meta">
          <span className="loader__bar"><i /></span>
          <span className="mono loader__pct">{String(pct).padStart(3, '0')}</span>
        </div>
      </div>
    </div>
  )
}
