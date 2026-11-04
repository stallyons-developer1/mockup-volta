import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

// Count-up loader (00 -> 100) with a filling bar, then a curtain reveal that
// hands control back to the page via onComplete().
export default function Preloader({ onComplete }) {
  const root = useRef(null)
  const countRef = useRef(null)
  const barRef = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const counter = { v: 0 }
    const tl = gsap.timeline()

    tl.to(counter, {
      v: 100,
      duration: 2.2,
      ease: 'power2.inOut',
      onUpdate: () => setCount(Math.round(counter.v)),
    })
      .to(barRef.current, { scaleX: 1, duration: 2.2, ease: 'power2.inOut' }, 0)
      .to([countRef.current, '.preloader__label'], {
        yPercent: -120,
        duration: 0.8,
        ease: 'power3.inOut',
        stagger: 0.05,
      })
      .to(
        root.current,
        {
          yPercent: -100,
          duration: 1,
          ease: 'power4.inOut',
          onComplete,
        },
        '-=0.3'
      )

    return () => tl.kill()
  }, [onComplete])

  return (
    <div className="preloader" ref={root}>
      <div className="preloader__label">Loading experience</div>
      <div className="preloader__count" ref={countRef}>
        {String(count).padStart(2, '0')}
      </div>
      <div className="preloader__bar" ref={barRef} />
    </div>
  )
}
