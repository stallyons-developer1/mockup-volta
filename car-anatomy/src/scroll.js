import Lenis from 'lenis'
export const scroll = { p: 0 }
const listeners = new Set()
export function initScroll(){
  const lenis = new Lenis({ duration:1.25, easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)), smoothWheel:true })
  window.__lenis = lenis
  const on=()=>{ const max=document.documentElement.scrollHeight-innerHeight; scroll.p=max>0?Math.min(1,Math.max(0,scrollY/max)):0; listeners.forEach(f=>f(scroll.p)) }
  lenis.on('scroll', on)
  const raf=t=>{ lenis.raf(t); requestAnimationFrame(raf) }; requestAnimationFrame(raf); on()
  return ()=>lenis.destroy()
}
export function onProgress(fn){ listeners.add(fn); return ()=>listeners.delete(fn) }
