import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { NAV } from '../data/content.js'

// Brand depth-sounding mark (inherits color).
function Mark() {
  return (
    <svg viewBox="0 0 48 48" className="brand__mark" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <path d="M13 18 Q24 9 35 18" />
        <path d="M15.5 25 Q24 18 32.5 25" opacity="0.72" />
        <path d="M18 32 Q24 27 30 32" opacity="0.5" />
      </g>
      <circle cx="24" cy="38" r="2.3" fill="var(--coral)" />
    </svg>
  )
}

export default function Nav() {
  const bar = useRef(null)
  const [solid, setSolid] = useState(false)
  const [active, setActive] = useState(null)
  const [open, setOpen] = useState(false)
  const overlay = useRef(null)

  useEffect(() => {
    gsap.from(bar.current, { y: -26, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.35 })
    const onScroll = () => setSolid((window.__lenis?.scroll ?? window.scrollY) > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.__lenis?.on('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const el = overlay.current
    if (!el) return
    const q = gsap.utils.selector(el)
    if (open) {
      window.__lenis?.stop()
      gsap.set(el, { display: 'flex', pointerEvents: 'auto' })
      gsap.to(el, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.7, ease: 'power4.inOut' })
      gsap.fromTo(q('.mob__link'), { yPercent: 120, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.06, ease: 'power4.out', delay: 0.18 })
    } else {
      gsap.to(el, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.55, ease: 'power4.inOut', onComplete: () => gsap.set(el, { display: 'none', pointerEvents: 'none' }) })
      window.__lenis?.start()
    }
  }, [open])

  const go = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    const t = document.getElementById(id)
    if (!t) return
    setTimeout(() => {
      window.__lenis ? window.__lenis.scrollTo(t, { duration: 1.4, offset: -40 }) : t.scrollIntoView({ behavior: 'smooth' })
    }, open ? 500 : 0)
  }

  return (
    <>
      <nav className={`nav ${solid ? 'is-solid' : ''} ${active ? 'has-menu' : ''}`} ref={bar}
        onMouseLeave={() => setActive(null)}>
        <div className="nav__inner container">
          <a className="brand" href="#top" onClick={go('top')} data-cursor>
            <Mark />
            <span className="brand__txt">SEAS<em>GEOSCIENCES</em></span>
          </a>

          <ul className="nav__links">
            {NAV.primary.map((item) => (
              <li key={item.label}
                onMouseEnter={() => setActive(item.columns ? item.label : null)}
                className={active === item.label ? 'is-open' : ''}>
                <a href="#services" onClick={go('services')} data-cursor>
                  {item.label}
                  {item.columns && <span className="nav__caret">+</span>}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__right">
            <a className="nav__contact" href="#contact" onClick={go('contact')} data-cursor>
              Contact Us <span className="arr">→</span>
            </a>
            <button className={`nav__burger ${open ? 'is-x' : ''}`} onClick={() => setOpen((o) => !o)} data-cursor aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* mega-menu panels (desktop) */}
        <div className="mega" onMouseLeave={() => setActive(null)}>
          {NAV.primary.filter((i) => i.columns).map((item) => (
            <div key={item.label} className={`mega__panel ${active === item.label ? 'is-visible' : ''}`}>
              <div className="container mega__grid">
                <span className="mono mega__eyebrow">{item.label}</span>
                <div className="mega__cols">
                  {item.columns.map((col, i) => (
                    <ul key={i}>
                      {col.items.map((s) => (
                        <li key={s}><a href="#services" onClick={go('services')} data-cursor>{s}<span>→</span></a></li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* mobile overlay */}
      <div className="mob" ref={overlay}>
        <div className="mob__inner container">
          {['Services', 'Projects', 'Our Company', 'Resources', 'Contact'].map((l, i) => (
            <span className="mob__lineWrap" key={l}>
              <a className="mob__link" href={`#${l === 'Contact' ? 'contact' : 'services'}`}
                onClick={go(l === 'Contact' ? 'contact' : 'services')} data-cursor>
                <em>0{i + 1}</em>{l}
              </a>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
