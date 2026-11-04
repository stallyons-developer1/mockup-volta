import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const el = useRef(null)
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return
    const xD = gsap.quickTo(dot.current, 'x', { duration: 0.12, ease: 'power3' })
    const yD = gsap.quickTo(dot.current, 'y', { duration: 0.12, ease: 'power3' })
    const xR = gsap.quickTo(ring.current, 'x', { duration: 0.45, ease: 'power3' })
    const yR = gsap.quickTo(ring.current, 'y', { duration: 0.45, ease: 'power3' })
    const move = (e) => { xD(e.clientX); yD(e.clientY); xR(e.clientX); yR(e.clientY) }
    const over = (e) => e.target.closest('a, button, [data-cursor]') && el.current.classList.add('is-hover')
    const out = (e) => e.target.closest('a, button, [data-cursor]') && el.current.classList.remove('is-hover')
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    return () => { window.removeEventListener('mousemove', move); document.removeEventListener('mouseover', over); document.removeEventListener('mouseout', out) }
  }, [])

  return (
    <div className="cursor" ref={el}>
      <div className="cursor__ring" ref={ring} />
      <div className="cursor__dot" ref={dot} />
    </div>
  )
}
