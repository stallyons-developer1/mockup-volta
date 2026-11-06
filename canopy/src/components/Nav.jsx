import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const LINKS = [
  { label: 'Home', id: 'top' },
  { label: 'Design', id: 'design' },
  { label: 'Residences', id: 'residences' },
  { label: 'Business', id: 'business' },
  { label: 'Nature', id: 'nature' },
  { label: 'Location', id: 'location' },
  { label: 'Amenities', id: 'amenities' },
  { label: 'Contact', id: 'enquire' },
]

// Lotus brand mark (line-art, inherits color).
function Lotus() {
  return (
    <svg viewBox="0 0 120 112" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="4.2" strokeLinejoin="round" strokeLinecap="round">
        <path d="M60 14C70 35 74 56 60 78C46 56 50 35 60 14Z" />
        <path transform="rotate(-40 60 80)" d="M60 24C68 43 71 61 60 78C49 61 52 43 60 24Z" />
        <path transform="rotate(40 60 80)" d="M60 24C68 43 71 61 60 78C49 61 52 43 60 24Z" />
        <path transform="rotate(-74 60 80)" d="M60 30C67 47 69 63 60 78C51 63 53 47 60 30Z" />
        <path transform="rotate(74 60 80)" d="M60 30C67 47 69 63 60 78C51 63 53 47 60 30Z" />
      </g>
    </svg>
  )
}

export default function Nav({ ready }) {
  const inner = useRef(null)
  const overlay = useRef(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!ready) return
    gsap.from(inner.current, { y: -30, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
  }, [ready])

  useEffect(() => {
    const el = overlay.current
    if (!el) return
    const q = gsap.utils.selector(el)
    if (open) {
      window.__lenis?.stop()
      gsap.set(el, { display: 'flex', pointerEvents: 'auto' })
      gsap.to(el, { opacity: 1, duration: 0.5, ease: 'power2.out' })
      gsap.fromTo(q('.menu-overlay__line a'), { yPercent: 120 }, { yPercent: 0, duration: 0.75, stagger: 0.05, ease: 'power4.out', delay: 0.1 })
      gsap.fromTo(q('.menu-overlay__logo, .menu-overlay__lang'), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.15 })
    } else {
      gsap.to(el, { opacity: 0, duration: 0.4, ease: 'power2.in', onComplete: () => gsap.set(el, { display: 'none', pointerEvents: 'none' }) })
      window.__lenis?.start()
    }
  }, [open])

  const go = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    const t = document.getElementById(id)
    if (!t) return
    setTimeout(() => {
      window.__lenis ? window.__lenis.scrollTo(t, { duration: 1.4 }) : t.scrollIntoView({ behavior: 'smooth' })
    }, 320)
  }

  return (
    <>
      <nav className="nav">
        <div className={`nav__inner ${open ? 'is-open' : ''}`} ref={inner}>
          <button className="nav__menu" onClick={() => setOpen((o) => !o)} data-cursor>
            <span className="bars"><span /><span /></span>
            <span className="lbl">Menu</span>
          </button>
          <a className="nav__logo" href="#top" onClick={go('top')} aria-label="Canopy">
            <Lotus />
          </a>
          <a className="nav__cta" href="#enquire" onClick={go('enquire')} data-cursor>
            Inquire <span className="arr">→</span>
          </a>
        </div>
      </nav>

      <div className="menu-overlay" ref={overlay}>
        <div className="menu-overlay__logo">
          <span className="menu-overlay__mark"><Lotus /></span>
          Canopy
        </div>
        <nav className="menu-overlay__nav">
          {LINKS.map((l) => (
            <span className="menu-overlay__line" key={l.id}>
              <a href={`#${l.id}`} onClick={go(l.id)} data-cursor>{l.label}</a>
            </span>
          ))}
        </nav>
        <div className="menu-overlay__lang">
          <button className="is-on" data-cursor>EN</button>
          <span>/</span>
          <button data-cursor>SR</button>
        </div>
      </div>
    </>
  )
}
