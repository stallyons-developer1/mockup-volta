import Lenis from 'lenis'

// Module-level scroll progress (0..1) read by the 3D rig + overlay.
export const scroll = { p: 0 }
let lenis = null
const listeners = new Set()

export function initScroll() {
  lenis = new Lenis({ duration: 1.25, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true })
  window.__lenis = lenis
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    scroll.p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
    listeners.forEach((fn) => fn(scroll.p))
  }
  lenis.on('scroll', onScroll)
  const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf) }
  requestAnimationFrame(raf)
  onScroll()
  return () => { lenis.destroy(); window.__lenis = null }
}
export function onProgress(fn) { listeners.add(fn); return () => listeners.delete(fn) }
