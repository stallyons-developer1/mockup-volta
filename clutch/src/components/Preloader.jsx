import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import PreloaderScene from '../three/PreloaderScene.jsx'

export default function Preloader({ onComplete }) {
  const root = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const c = { v: 0 }
    const tl = gsap.timeline()
    tl.to(c, { v: 100, duration: 2.4, ease: 'power2.inOut', onUpdate: () => setCount(Math.round(c.v)) })
      .to('.preloader__ui', { opacity: 0, y: -20, duration: 0.6, ease: 'power2.in' })
      .to(root.current, { yPercent: -100, duration: 1, ease: 'power4.inOut', onComplete }, '-=0.2')
    return () => tl.kill()
  }, [onComplete])

  return (
    <div className="preloader" ref={root}>
      <PreloaderScene />
      <div className="preloader__ui">
        <div className="preloader__label">Loading the arena</div>
        <div className="preloader__count">
          <b>{String(count).padStart(3, '0')}</b> / 100
        </div>
      </div>
    </div>
  )
}
