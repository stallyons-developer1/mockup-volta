import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete }) {
  const root = useRef(null)
  const bar = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const c = { v: 0 }
    const tl = gsap.timeline()
    tl.to(c, { v: 100, duration: 2, ease: 'power2.inOut', onUpdate: () => setCount(Math.round(c.v)) })
      .to(bar.current, { scaleX: 1, duration: 2, ease: 'power2.inOut' }, 0)
      .to('.preloader__mark', { rotate: 10, scale: 1.1, opacity: 0.4, duration: 0.6, ease: 'power2.in' })
      .to(root.current, { yPercent: -100, duration: 1, ease: 'power4.inOut', onComplete }, '-=0.2')
    return () => tl.kill()
  }, [onComplete])

  return (
    <div className="preloader" ref={root}>
      <svg className="preloader__mark" viewBox="0 0 48 48" fill="none">
        <path d="M24 44V20M24 20C24 12 30 4 42 4C42 16 34 22 24 22M24 20C24 13 18 6 6 6C6 17 14 22 24 22" stroke="#c6a86a" strokeWidth="1.5" />
      </svg>
      <div className="preloader__bar"><i ref={bar} /></div>
      <div className="preloader__count">{String(count).padStart(3, '0')} — Canopy</div>
    </div>
  )
}
