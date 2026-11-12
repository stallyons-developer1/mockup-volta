import Lenis from 'lenis'
import { stage } from './site.js'

export const scroll = { p: 0 }
const listeners = new Set()

// Map the current scroll position to a continuous section index (stage.t)
// using the centres of every [data-stage] marker in the page.
function computeStage(sy) {
  const marks = document.querySelectorAll('[data-stage]')
  if (!marks.length) return
  const vh = window.innerHeight
  const centers = []
  for (const m of marks) {
    const r = m.getBoundingClientRect()
    const top = r.top + window.scrollY
    centers.push(top + r.height / 2 - vh / 2) // scrollY at which this marker is centred
  }
  let t = 0
  if (sy <= centers[0]) t = 0
  else if (sy >= centers[centers.length - 1]) t = centers.length - 1
  else {
    for (let i = 0; i < centers.length - 1; i++) {
      if (sy >= centers[i] && sy <= centers[i + 1]) {
        t = i + (sy - centers[i]) / Math.max(1, centers[i + 1] - centers[i])
        break
      }
    }
  }
  stage.t = t
}

export function initScroll() {
  const lenis = new Lenis({ duration: 1.25, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true })
  window.__lenis = lenis
  const on = () => {
    const max = document.documentElement.scrollHeight - innerHeight
    const sy = window.scrollY
    scroll.p = max > 0 ? Math.min(1, Math.max(0, sy / max)) : 0
    stage.p = scroll.p
    computeStage(sy)
    listeners.forEach((f) => f(scroll.p))
  }
  lenis.on('scroll', on)
  const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf) }
  requestAnimationFrame(raf)
  window.addEventListener('resize', on)
  on()
  return () => { lenis.destroy(); window.removeEventListener('resize', on) }
}

export function onProgress(fn) { listeners.add(fn); return () => listeners.delete(fn) }
