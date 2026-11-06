import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { enquire } from '../lib/api.js'

const NAV = [
  { label: 'Home', id: 'top' },
  { label: 'Design', id: 'design' },
  { label: 'Residences', id: 'residences' },
  { label: 'Business', id: 'business' },
  { label: 'Retail', id: 'business' },
  { label: 'Location', id: 'location' },
  { label: 'Amenities', id: 'amenities' },
  { label: 'Contact', id: 'enquire' },
]

export default function Footer() {
  const root = useRef(null)
  const [form, setForm] = useState({ first: '', last: '', email: '' })
  const [consent, setConsent] = useState(false)
  const [msg, setMsg] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer2__title .reveal-line > span', { yPercent: 115, duration: 1.1, stagger: 0.12, ease: 'power4.out',
        scrollTrigger: { trigger: root.current, start: 'top 82%' } })
      gsap.from('.footer2__brand', { yPercent: 50, opacity: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.footer2__hero', start: 'top 85%' } })
      gsap.to('.footer2__hero img', { yPercent: -8, ease: 'none',
        scrollTrigger: { trigger: '.footer2__hero', start: 'top bottom', end: 'bottom bottom', scrub: true } })
    }, root)
    return () => ctx.revert()
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    if (busy) return
    if (!consent) { setMsg('Please accept the privacy policy to continue.'); return }
    setBusy(true); setMsg('Sending…')
    const res = await enquire(form.email)
    setBusy(false); setMsg(res.message)
    if (res.ok) setForm({ first: '', last: '', email: '' })
  }

  const go = (id) => (e) => {
    e.preventDefault()
    const t = document.getElementById(id)
    if (t) window.__lenis ? window.__lenis.scrollTo(t, { duration: 1.4 }) : t.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer2" id="enquire" ref={root}>
      <div className="footer2__top container">
        <div className="footer2__join">
          <h2 className="footer2__title">
            <span className="reveal-line"><span>Join the world</span></span>
            <span className="reveal-line"><span>of <em>Canopy</em></span></span>
          </h2>
          <p className="footer2__sub">Subscribe to join our community and stay up to date.</p>
          <form className="footer2__form" onSubmit={submit}>
            <div className="footer2__row">
              <label className="fld"><span>First name*</span><input value={form.first} onChange={(e) => setForm({ ...form, first: e.target.value })} required /></label>
              <label className="fld"><span>Last name*</span><input value={form.last} onChange={(e) => setForm({ ...form, last: e.target.value })} required /></label>
            </div>
            <label className="fld"><span>Email*</span><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></label>
            <label className="footer2__consent">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
              <span>I consent to my information being collected in accordance with the Canopy privacy policy.</span>
            </label>
            <button type="submit" className="footer2__begin" disabled={busy} data-cursor>{busy ? '…' : "Let's begin →"}</button>
            <div className="footer2__msg">{msg}</div>
          </form>
        </div>

        <nav className="footer2__nav">
          {NAV.map((n) => <a key={n.label} href={`#${n.id}`} onClick={go(n.id)} data-cursor>{n.label}</a>)}
          <a className="footer2__privacy" href="#enquire" onClick={go('enquire')} data-cursor>Privacy policy</a>
        </nav>

        <div className="footer2__social">
          <a href="#" data-cursor>Instagram</a>
          <a href="#" data-cursor>LinkedIn</a>
          <a href="#" data-cursor>Facebook</a>
        </div>

        <div className="footer2__info">
          <p className="footer2__disc">
            Visuals are artist's impressions. Final finishes, landscaping and architectural details may vary from the images shown. Stated areas are approximate and subject to final survey.
          </p>
          <p className="footer2__contact">For direct inquiries, our team is available at <a href="tel:+15550123456" data-cursor>+1 (555) 012 3456</a></p>
        </div>
      </div>

      <div className="footer2__hero">
        <img src="/img/footer-bld-2.jpg" alt="Canopy" />
        <div className="footer2__scrim" />
        <h3 className="footer2__brand">Canopy</h3>
        <span className="footer2__copy">© 2026 Canopy. All rights reserved.</span>
      </div>
    </footer>
  )
}
