import { useRef, useState } from 'react'
import gsap from 'gsap'
import { FAQ } from '../data/content.js'

function Item({ n, q, a }) {
  const ans = useRef(null)
  const [open, setOpen] = useState(false)
  const toggle = () => {
    const next = !open
    setOpen(next)
    gsap.to(ans.current, { height: next ? 'auto' : 0, duration: 0.5, ease: 'power3.inOut' })
  }
  return (
    <div className={`faq__item ${open ? 'is-open' : ''}`} onClick={toggle} data-cursor>
      <div className="faq__q">
        <span className="n">{n}</span>
        <span className="t">{q}</span>
        <span className="x">+</span>
      </div>
      <div className="faq__a" ref={ans} style={{ height: 0 }}>
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function Faq() {
  return (
    <section className="section" ref={useRef(null)}>
      <div className="container">
        <div className="head"><h2>Good to<br /><span style={{ color: 'var(--accent)' }}>know</span></h2></div>
        <div className="faq">
          {FAQ.map((f, i) => <Item key={i} n={`0${i + 1}`} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  )
}
