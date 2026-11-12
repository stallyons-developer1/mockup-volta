import { useEffect } from 'react'
import { FOOTER } from '../site.js'

const ITEMS = [
  ['Overview', 'overview'],
  ['Anatomy', 'anatomy'],
  ['Specifications', 'specs'],
  ['Contact', 'contact'],
]

export default function Menu({ open, onClose }) {
  // freeze the page behind the menu; Esc closes it
  useEffect(() => {
    const lenis = window.__lenis
    if (open) lenis && lenis.stop()
    else lenis && lenis.start()
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const go = (id) => {
    const el = document.getElementById(id)
    const lenis = window.__lenis
    if (lenis) {
      lenis.start()
      if (el) lenis.scrollTo(el, { duration: 1.4, offset: 0 })
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    onClose()
  }

  return (
    <div className={`menu ${open ? 'menu--open' : ''}`} aria-hidden={!open}>
      <nav className="menu__nav">
        {ITEMS.map(([label, id], i) => (
          <button key={id} className="menu__link" style={{ transitionDelay: `${0.08 + i * 0.05}s` }} onClick={() => go(id)}>
            <span className="menu__n">{String(i + 1).padStart(2, '0')}</span>{label}
          </button>
        ))}
      </nav>
      <div className="menu__foot">
        <span className="menu__tag">EB110 — Anatomy of a Machine</span>
        <div className="menu__soc">{FOOTER.socials.map((s) => <a key={s} href="#" onClick={(e) => e.preventDefault()}>{s}</a>)}</div>
      </div>
    </div>
  )
}
