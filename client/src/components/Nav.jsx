import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const LINKS = [
  { label: 'Design', id: 'design' },
  { label: 'Showcase', id: 'showcase' },
  { label: 'Configure', id: 'configure' },
  { label: 'Reserve', id: 'reserve' },
]

export default function Nav({ ready }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ready) return
    gsap.from(ref.current.children, {
      yPercent: -120,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.08,
      delay: 0.2,
    })
  }, [ready])

  const go = (id) => (e) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (!target) return
    if (window.__lenis) window.__lenis.scrollTo(target, { offset: 0, duration: 1.4 })
    else target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav" ref={ref}>
      <a className="nav__brand" href="#top" onClick={go('top')}>
        <span className="spark" />
        VOLTA
      </a>
      <div className="nav__links">
        {LINKS.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={go(l.id)}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
