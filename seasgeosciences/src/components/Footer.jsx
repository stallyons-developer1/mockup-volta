import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const COLS = [
  { h: 'Services', items: ['Offshore', 'Nearshore', 'Onshore', 'Geo Consulting', 'Lab Testing', 'Subsea Engineering'] },
  { h: 'Company', items: ['About Us', 'Careers', 'QHSE', 'Projects', 'Resources'] },
  { h: 'Connect', items: ['LinkedIn', 'Contact', 'Enquiries', 'Newsroom'] },
]

export default function Footer() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer__wordmark', {
        yPercent: 30, opacity: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.footer__wordmark', start: 'top 92%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  const toTop = () => window.__lenis?.scrollTo(0, { duration: 1.5 })

  return (
    <footer className="footer" ref={root}>
      <div className="container footer__top">
        <div className="footer__brandcol">
          <div className="footer__brand">
            <svg viewBox="0 0 48 48" className="footer__mark" aria-hidden="true">
              <g fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round">
                <path d="M13 18 Q24 9 35 18" />
                <path d="M15.5 25 Q24 18 32.5 25" opacity="0.7" />
                <path d="M18 32 Q24 27 30 32" opacity="0.5" />
              </g>
              <circle cx="24" cy="38" r="2.3" fill="#f26e4e" />
            </svg>
            <span>SEAS<em>GEOSCIENCES</em></span>
          </div>
          <p className="footer__tag">Clarity beneath the surface — advanced site characterization offshore, nearshore and onshore.</p>
          <button className="footer__totop mono" onClick={toTop} data-cursor>↑ Back to top</button>
        </div>

        <div className="footer__cols">
          {COLS.map((c) => (
            <div key={c.h} className="footer__col">
              <span className="mono footer__colhead">{c.h}</span>
              <ul>{c.items.map((i) => <li key={i}><a href="#contact" data-cursor onClick={(e) => { e.preventDefault(); window.__lenis?.scrollTo('#contact', { duration: 1.3 }) }}>{i}</a></li>)}</ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__wordmarkWrap">
        <h2 className="footer__wordmark display">Seas&nbsp;Geosciences</h2>
      </div>

      <div className="container footer__bottom">
        <span className="mono">© {2026} Seas Geosciences. All rights reserved.</span>
        <span className="mono footer__disc">Demo mockup — content & imagery for presentation only.</span>
        <div className="footer__legal mono">
          <a href="#contact" data-cursor>Privacy</a>
          <a href="#contact" data-cursor>Terms</a>
        </div>
      </div>
    </footer>
  )
}
