import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { subscribe } from '../lib/api.js'

export default function Footer() {
  const root = useRef(null)
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer__cta .word', { yPercent: 110, opacity: 0, duration: 1.1, stagger: 0.1, ease: 'power4.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    if (busy) return
    setBusy(true); setMsg('Locking your spot…')
    const res = await subscribe(email)
    setBusy(false); setMsg(res.message)
    if (res.ok) setEmail('')
  }

  return (
    <footer className="footer section" id="reserve" ref={root}>
      <div className="container">
        <h2 className="footer__cta">
          <span className="word">The</span> <span className="word fire">arena</span><br />
          <span className="word">is open.</span>
        </h2>

        <div className="footer__row">
          <div>
            <form className="newsletter" onSubmit={onSubmit}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required />
              <button type="submit" disabled={busy}>{busy ? '…' : 'Get early access →'}</button>
            </form>
            <div className="newsletter__msg">{msg}</div>
          </div>
          <a className="btn" href="#top" onClick={(e) => { e.preventDefault(); window.__lenis ? window.__lenis.scrollTo(0, { duration: 1.6 }) : window.scrollTo({ top: 0, behavior: 'smooth' }) }} data-cursor>Back to top ↑</a>
        </div>

        <div className="footer__legal">
          <span>© {`${2024}`}–26 CLUTCH Gaming. A concept experience.</span>
          <span>Built with React · Three.js · GSAP · Lenis</span>
        </div>
      </div>
    </footer>
  )
}
