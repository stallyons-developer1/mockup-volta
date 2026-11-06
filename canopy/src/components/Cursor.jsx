import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// Minimal dot cursor — no ring. The fibre trail does the expressive work.
export default function Cursor() {
  const dot = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return
    const x = gsap.quickTo(dot.current, 'x', { duration: 0.09, ease: 'power3' })
    const y = gsap.quickTo(dot.current, 'y', { duration: 0.09, ease: 'power3' })
    const move = (e) => { x(e.clientX); y(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return (
    <div className="cursor">
      <div className="cursor__dot" ref={dot} />
    </div>
  )
}
