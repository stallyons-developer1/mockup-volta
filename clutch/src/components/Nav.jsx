import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const LINKS = [
  { label: 'How it works', id: 'how' },
  { label: 'Tournaments', id: 'tournaments' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Ranks', id: 'ranks' },
]

export default function Nav({ ready }) {
  const inner = useRef(null)
  const pct = useRef(null)

  useEffect(() => {
    if (!ready) return
    gsap.from(inner.current, { y: -40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
  }, [ready])

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      const p = h > 0 ? Math.round((window.scrollY / h) * 100) : 0
      if (pct.current) pct.current.textContent = `${p}%`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => (e) => {
    e.preventDefault()
    const t = document.getElementById(id)
    if (!t) return
    window.__lenis ? window.__lenis.scrollTo(t, { duration: 1.4 }) : t.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav">
      <div className="nav__inner" ref={inner}>
        <a className="nav__brand" href="#top" onClick={go('top')}>
          <span className="orb" />CLUTCH
        </a>
        <div className="nav__links">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={go(l.id)}>{l.label}</a>
          ))}
        </div>
        <span className="nav__pct" ref={pct}>0%</span>
      </div>
    </nav>
  )
}
