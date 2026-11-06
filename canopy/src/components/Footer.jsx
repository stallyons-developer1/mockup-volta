import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { enquire } from '../lib/api.js'

export default function Footer() {
  const root = useRef(null)
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer__cta .reveal-line > span', { yPercent: 115, duration: 1.2, stagger: 0.12, ease: 'power4.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    if (busy) return
    setBusy(true); setMsg('Sending…')
    const res = await enquire(email)
    setBusy(false); setMsg(res.message)
    if (res.ok) setEmail('')
  }

  return (
    <footer className="footer" id="enquire" ref={root}>
      <div className="container">
        <h2 className="footer__cta">
          <span className="reveal-line"><span>Register your</span></span>
          <span className="reveal-line"><span><em>interest</em></span></span>
        </h2>

        <div className="footer__row">
          <div style={{ maxWidth: '420px' }}>
            <p className="lead" style={{ marginBottom: '1.6rem' }}>
              Join the priority list for the next release of residences and a private preview of the show home.
            </p>
            <form className="newsletter" onSubmit={onSubmit}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required />
              <button type="submit" disabled={busy}>{busy ? '…' : 'Enquire →'}</button>
            </form>
            <div className="newsletter__msg">{msg}</div>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <h4>Explore</h4>
              <a href="#residences">Residences</a>
              <a href="#amenities">Amenities</a>
              <a href="#gallery">Gallery</a>
              <a href="#availability">Availability</a>
            </div>
            <div className="footer__col">
              <h4>Sales Gallery</h4>
              <a href="#">Book a viewing</a>
              <a href="#">Download brochure</a>
              <a href="#">+00 000 000 000</a>
              <a href="#">hello@canopy.city</a>
            </div>
          </div>
        </div>

        <div className="footer__legal">
          <span>© {`${2026}`} Canopy Residences. A concept experience.</span>
          <span>Built with React · Three.js · GSAP · Lenis · Imagery via Unsplash</span>
        </div>
      </div>
    </footer>
  )
}
