import { useEffect, useRef } from 'react'

// Dot follows instantly; ring lags with lerp and scales over interactive targets.
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    const d = dot.current, r = ring.current
    let mx = window.innerWidth / 2, my = window.innerHeight / 2
    let rx = mx, ry = my
    let hovering = false
    let raf

    const move = (e) => {
      mx = e.clientX; my = e.clientY
      d.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`
      const t = e.target.closest('[data-cursor], a, button, input, textarea')
      const h = !!t
      if (h !== hovering) {
        hovering = h
        r.classList.toggle('is-active', h)
        d.classList.toggle('is-active', h)
      }
    }

    const loop = () => {
      rx += (mx - rx) * 0.16
      ry += (my - ry) * 0.16
      r.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', move)
    const onDown = () => r.classList.add('is-down')
    const onUp = () => r.classList.remove('is-down')
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    loop()

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor-ring" ref={ring} aria-hidden="true" />
      <div className="cursor-dot" ref={dot} aria-hidden="true" />
    </>
  )
}
