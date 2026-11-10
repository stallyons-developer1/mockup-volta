// Shared scroll state read by the Three.js scenes (updated from a scroll listener).
export const scrollState = { progress: 0, velocity: 0, vh: 1 }

export function initScrollState() {
  let last = 0
  const update = () => {
    const y = window.__lenis?.scroll ?? window.scrollY
    const max = document.body.scrollHeight - window.innerHeight
    scrollState.progress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0
    scrollState.velocity = y - last
    last = y
    scrollState.vh = window.innerHeight
  }
  update()
  window.addEventListener('scroll', update, { passive: true })
  window.__lenis?.on?.('scroll', update)
  return () => window.removeEventListener('scroll', update)
}

// smooth ramp helper: 1 inside [a,b] with soft edges
export function band(p, a, b, fade = 0.08) {
  const inUp = Math.min(1, Math.max(0, (p - a) / fade))
  const outDown = Math.min(1, Math.max(0, (b - p) / fade))
  return Math.min(inUp, outDown)
}
