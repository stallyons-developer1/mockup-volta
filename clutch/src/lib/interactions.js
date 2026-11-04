import gsap from 'gsap'

// Site-wide pointer interactions inspired by loot.ru:
//  • a warm glow that trails the cursor (the background "reacts" to the mouse)
//  • 3D tilt + inner light that follows the cursor across cards (object hover)
//  • magnetic buttons that lean toward the cursor
// Returns a cleanup function. No-ops on touch / reduced-motion.
export function initInteractions() {
  const coarse = window.matchMedia('(hover: none), (pointer: coarse)').matches
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (coarse || reduce) return () => {}

  const cleanups = []

  /* ---- cursor-trailing glow ---- */
  const glow = document.createElement('div')
  glow.className = 'cursor-glow'
  document.body.appendChild(glow)
  const gx = gsap.quickTo(glow, 'x', { duration: 0.8, ease: 'power3' })
  const gy = gsap.quickTo(glow, 'y', { duration: 0.8, ease: 'power3' })
  const onMove = (e) => { gx(e.clientX); gy(e.clientY) }
  window.addEventListener('mousemove', onMove)
  cleanups.push(() => { window.removeEventListener('mousemove', onMove); glow.remove() })

  /* ---- 3D tilt + cursor-following light on cards ---- */
  document.querySelectorAll('.tour, .step, .tier, .hero__card').forEach((el) => {
    const move = (e) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      el.style.setProperty('--mx', px * 100 + '%')
      el.style.setProperty('--my', py * 100 + '%')
      gsap.to(el, {
        rotateY: (px - 0.5) * 16,
        rotateX: (py - 0.5) * -14,
        z: 50,
        duration: 0.4,
        ease: 'power2.out',
        transformPerspective: 900,
        transformOrigin: 'center',
        overwrite: 'auto',
      })
    }
    const leave = () => gsap.to(el, { rotateX: 0, rotateY: 0, z: 0, duration: 0.7, ease: 'power3.out', overwrite: 'auto' })
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    cleanups.push(() => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave) })
  })

  /* ---- magnetic buttons ---- */
  document.querySelectorAll('.btn').forEach((el) => {
    const move = (e) => {
      const r = el.getBoundingClientRect()
      gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * 0.4, y: (e.clientY - r.top - r.height / 2) * 0.6, duration: 0.4, ease: 'power2.out' })
    }
    const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    cleanups.push(() => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave) })
  })

  return () => cleanups.forEach((fn) => fn())
}
