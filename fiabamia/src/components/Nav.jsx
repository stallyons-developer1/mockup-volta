import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { NAV } from '../data/content.js'

export default function Nav() {
  const bar = useRef(null)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    gsap.from(bar.current, { y: -24, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 1.1 })
    const onScroll = () => setSolid((window.__lenis?.scroll ?? window.scrollY) > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.__lenis?.on('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => (e) => {
    e.preventDefault()
    const t = document.getElementById(id)
    if (t) window.__lenis ? window.__lenis.scrollTo(t, { duration: 1.6, offset: -20 }) : t.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav ${solid ? 'is-solid' : ''}`} ref={bar}>
      <div className="nav__inner container">
        <a className="nav__brand" href="#top" onClick={go('top')}>
          {NAV.brand[0]}<em>{NAV.brand[1]}</em>
        </a>
        <ul className="nav__links">
          {NAV.links.map((l) => (
            <li key={l.label}><a href={`#${l.id}`} onClick={go(l.id)}>{l.label}</a></li>
          ))}
        </ul>
        <div className="nav__right">
          <a className="nav__signin" href="#final" onClick={go('final')}>{NAV.signIn}</a>
          <a className="pill nav__cta" href="#final" onClick={go('final')}>{NAV.cta}</a>
        </div>
      </div>
    </nav>
  )
}
