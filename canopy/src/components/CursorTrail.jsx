import { useEffect, useRef } from 'react'

// Spring-based elastic cursor trail (as provided) — a tuft of nodes that chase
// the pointer with tension/friction/dampening and render as smooth quadratic
// curves in additive gold.
export default function CursorTrail() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d')
    const pos = { x: 0, y: 0 }
    const E = { friction: 0.5, trails: 10, size: 10, dampening: 0.1, tension: 0.98 }
    let lines = []
    let running = true

    function Node() { this.x = 0; this.y = 0; this.vx = 0; this.vy = 0 }

    function Line(spring) {
      this.spring = spring + 0.1 * Math.random() - 0.02
      this.friction = E.friction + 0.01 * Math.random() - 0.002
      this.nodes = Array.from({ length: E.size }, () => {
        const n = new Node(); n.x = pos.x; n.y = pos.y; return n
      })
    }
    Line.prototype.update = function () {
      let s = this.spring
      let n = this.nodes[0]
      n.vx += (pos.x - n.x) * s; n.vy += (pos.y - n.y) * s
      for (let i = 0; i < this.nodes.length; i++) {
        n = this.nodes[i]
        if (i > 0) {
          const p = this.nodes[i - 1]
          n.vx += (p.x - n.x) * s; n.vy += (p.y - n.y) * s
          n.vx += p.vx * E.dampening; n.vy += p.vy * E.dampening
        }
        n.vx *= this.friction; n.vy *= this.friction
        n.x += n.vx; n.y += n.vy
        s *= E.tension
      }
    }
    Line.prototype.draw = function () {
      let a, b, i
      const x = this.nodes[0].x
      const y = this.nodes[0].y
      ctx.beginPath(); ctx.moveTo(x, y)
      for (i = 1; i < this.nodes.length - 2; i++) {
        a = this.nodes[i]; b = this.nodes[i + 1]
        ctx.quadraticCurveTo(a.x, a.y, (a.x + b.x) / 2, (a.y + b.y) / 2)
      }
      a = this.nodes[i]; b = this.nodes[i + 1]
      ctx.quadraticCurveTo(a.x, a.y, b.x, b.y)
      ctx.stroke(); ctx.closePath()
    }

    const render = () => {
      if (!running) return
      ctx.globalCompositeOperation = 'source-over'
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.globalCompositeOperation = 'lighter'
      ctx.strokeStyle = 'hsla(34.19, 34.96%, 48.24%, 0.2)'
      ctx.lineWidth = 1
      lines.forEach((l) => { l.update(); l.draw() })
      requestAnimationFrame(render)
    }

    const move = (e) => {
      const t = e.touches ? e.touches[0] : e
      pos.x = t.clientX; pos.y = t.clientY
    }
    const start = (e) => {
      document.removeEventListener('mousemove', start)
      document.removeEventListener('touchstart', start)
      document.addEventListener('mousemove', move)
      document.addEventListener('touchmove', move)
      move(e)
      lines = Array.from({ length: E.trails }, (_, i) => new Line(0.22 + (i / E.trails) * 0.025))
      render()
    }
    const resize = () => {
      ctx.canvas.width = window.innerWidth
      ctx.canvas.height = window.innerHeight
    }

    document.addEventListener('mousemove', start)
    document.addEventListener('touchstart', start)
    window.addEventListener('resize', resize)
    resize()

    return () => {
      running = false
      document.removeEventListener('mousemove', start)
      document.removeEventListener('touchstart', start)
      document.removeEventListener('mousemove', move)
      document.removeEventListener('touchmove', move)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="cursor-canvas" className="cursor-trail" aria-hidden="true" />
}
