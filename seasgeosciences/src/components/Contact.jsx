import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CTA, CONTACT } from '../data/content.js'

const EMPTY = { name: '', email: '', company: '', service: 'Offshore', message: '' }

export default function Contact() {
  const root = useRef(null)
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact__head .line > span', {
        yPercent: 115, duration: 1.1, stagger: 0.1, ease: 'power4.out',
        scrollTrigger: { trigger: '.contact__head', start: 'top 82%' },
      })
      gsap.from('.contact__body, .contact__office', {
        y: 24, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact__left', start: 'top 78%' },
      })
      gsap.from('.contact__card', {
        y: 50, opacity: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact__card', start: 'top 85%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    // Static mockup — no backend. Just confirm.
    setSent(true)
  }

  return (
    <section className="contact" id="contact" ref={root}>
      <div className="container contact__inner">
        <div className="contact__left">
          <span className="mono contact__tag"><i>08</i> Contact</span>
          <h2 className="contact__head display">
            <span className="line"><span>Get in</span></span>
            <span className="line"><span>touch.</span></span>
          </h2>
          <p className="contact__body">{CTA.body}</p>

          <div className="contact__offices">
            {CONTACT.offices.map((o) => (
              <div className="contact__office" key={o.city}>
                <h4 className="mono">{o.city}</h4>
                <p>{o.address}</p>
                <a href={`mailto:${o.email}`} data-cursor>{o.email}</a>
                <a href={`tel:${o.phone.replace(/[^+\d]/g, '')}`} data-cursor>{o.phone}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="contact__card">
          {!sent ? (
            <form className="contact__form" onSubmit={submit}>
              <div className="fld">
                <label>Full name</label>
                <input value={form.name} onChange={set('name')} required placeholder="Jane Doe" data-cursor />
              </div>
              <div className="fld">
                <label>Work email</label>
                <input type="email" value={form.email} onChange={set('email')} required placeholder="jane@company.com" data-cursor />
              </div>
              <div className="fld">
                <label>Company</label>
                <input value={form.company} onChange={set('company')} placeholder="Company / organisation" data-cursor />
              </div>
              <div className="fld">
                <label>Service of interest</label>
                <select value={form.service} onChange={set('service')} data-cursor>
                  {['Offshore', 'Nearshore', 'Onshore', 'Geo Consulting', 'Lab Testing', 'Subsea Engineering'].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="fld">
                <label>About your project</label>
                <textarea rows={4} value={form.message} onChange={set('message')} placeholder="Tell us about the ground conditions and scope…" data-cursor />
              </div>
              <button type="submit" className="btn contact__submit" data-cursor>
                Send enquiry <span className="arr">→</span>
              </button>
              <p className="contact__note mono">This is a demo form — no data is sent or stored.</p>
            </form>
          ) : (
            <div className="contact__success">
              <span className="contact__check">✓</span>
              <h3 className="display">Thank you, {form.name.split(' ')[0] || 'there'}.</h3>
              <p>Your enquiry has been received. Our team will be in touch shortly to discuss your project.</p>
              <button className="btn btn--ghost" onClick={() => { setForm(EMPTY); setSent(false) }} data-cursor>
                Send another <span className="arr">→</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
