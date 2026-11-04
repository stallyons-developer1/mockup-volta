import { useEffect, useRef } from 'react'

// Full-page ember-grain field on a lightweight 2D canvas, fixed behind all
// content. Grains drift up, parallax with scroll, and flee the cursor — the
// same "grains react to you" feel as the hero, but across the entire site.
export default function GrainField() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: -9999, y: -9999 }
    let grains = []
    let lastScroll = window.scrollY
    let raf

    const build = () => {
      canvas.width = innerWidth * dpr
      canvas.height = innerHeight * dpr
      canvas.style.width = innerWidth + 'px'
      canvas.style.height = innerHeight + 'px'
      const count = Math.min(680, Math.floor((innerWidth * innerHeight) / 2800))
      grains = Array.from({ length: count }, () => ({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        bvy: -(0.05 + Math.random() * 0.18),
        ix: 0,
        iy: 0,
        r: 0.5 + Math.random() * 1.7,
        depth: 0.02 + Math.random() * 0.13,
        warm: Math.random() > 0.45,
        a: 0.22 + Math.random() * 0.5,
      }))
    }
    build()

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999 }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseout', onLeave)
    window.addEventListener('resize', build)

    const R = 150
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = 'lighter'
      const sy = window.scrollY
      const scrollDelta = sy - lastScroll
      lastScroll = sy

      for (const g of grains) {
        g.x += g.ix
        g.y += g.bvy + g.iy
        g.y -= scrollDelta * g.depth * 9 // scroll parallax

        const dx = g.x - mouse.x
        const dy = g.y - mouse.y
        const d2 = dx * dx + dy * dy
        if (d2 < R * R) {
          const d = Math.sqrt(d2) || 1
          const f = (R - d) / R
          g.ix += (dx / d) * f * 1.9
          g.iy += (dy / d) * f * 1.9
        }
        g.ix *= 0.9
        g.iy *= 0.9

        if (g.y < -6) g.y = innerHeight + 6
        else if (g.y > innerHeight + 6) g.y = -6
        if (g.x < -6) g.x = innerWidth + 6
        else if (g.x > innerWidth + 6) g.x = -6

        const col = g.warm ? '255,178,70' : '255,74,40'
        ctx.fillStyle = `rgba(${col},${g.a})`
        ctx.beginPath()
        ctx.arc(g.x * dpr, g.y * dpr, g.r * dpr, 0, 6.2832)
        ctx.fill()
      }
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
      window.removeEventListener('resize', build)
    }
  }, [])

  return <canvas className="grainfield" ref={ref} aria-hidden="true" />
}
