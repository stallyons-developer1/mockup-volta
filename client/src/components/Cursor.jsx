import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// A lerp-followed custom cursor. The dot tracks instantly-ish, the ring
// trails with easing, and anything tagged [data-cursor] swells the ring.
export default function Cursor() {
  const ref = useRef(null)
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    const el = ref.current

    const xDot = gsap.quickTo(dot, 'x', { duration: 0.15, ease: 'power3' })
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.15, ease: 'power3' })
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.5, ease: 'power3' })
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.5, ease: 'power3' })

    const move = (e) => {
      xDot(e.clientX)
      yDot(e.clientY)
      xRing(e.clientX)
      yRing(e.clientY)
    }

    const over = (e) => {
      if (e.target.closest('a, button, [data-cursor]')) el.classList.add('is-hover')
    }
    const out = (e) => {
      if (e.target.closest('a, button, [data-cursor]')) el.classList.remove('is-hover')
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [])

  return (
    <div className="cursor" ref={ref}>
      <div className="cursor__ring" ref={ringRef} />
      <div className="cursor__dot" ref={dotRef} />
    </div>
  )
}
