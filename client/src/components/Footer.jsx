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
      gsap.from('.footer__cta .line-inner', {
        yPercent: 120,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!email || busy) return
    setBusy(true)
    setMsg('Reserving…')
    const res = await subscribe(email)
    setBusy(false)
    if (res.ok) {
      setMsg(res.message || 'You are on the list. Welcome to VOLTA.')
      setEmail('')
    } else {
      setMsg(res.message || 'Could not reach the garage — try again.')
    }
  }

  return (
    <footer className="footer section" id="reserve" ref={root}>
      <div className="container">
        <div className="footer__cta">
          {['Reserve', 'the silence.'].map((line, i) => (
            <span className="reveal-line" key={i}>
              <span className="line-inner" style={{ display: 'block' }}>
                {line}
              </span>
            </span>
          ))}
        </div>

        <div className="footer__row">
          <div>
            <form className="newsletter" onSubmit={onSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
              <button type="submit" disabled={busy}>
                {busy ? '…' : 'Reserve →'}
              </button>
            </form>
            <div className="newsletter__msg">{msg}</div>
          </div>
          <a className="btn btn--solid" href="#top" onClick={(e) => {
            e.preventDefault()
            if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.6 })
            else window.scrollTo({ top: 0, behavior: 'smooth' })
          }}>
            Back to top ↑
          </a>
        </div>

        <div className="footer__legal">
          <span>© {`${2024}`}–26 VOLTA Mobility. A concept experience.</span>
          <span>Built with React · Three.js · GSAP · Lenis</span>
        </div>
      </div>
    </footer>
  )
}
