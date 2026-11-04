import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TIERS } from '../data/content.js'

export default function Pricing() {
  const root = useRef(null)
  const [yearly, setYearly] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tier', { y: 50, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.tiers', start: 'top 82%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section" id="pricing" ref={root}>
      <div className="container">
        <div className="head" style={{ justifyContent: 'center', textAlign: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <span className="eyebrow">Membership</span>
          <h2>Pick your rank</h2>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="price__toggle">
            <button className={!yearly ? 'is-on' : ''} onClick={() => setYearly(false)} data-cursor>Monthly</button>
            <button className={yearly ? 'is-on' : ''} onClick={() => setYearly(true)} data-cursor>Yearly<span className="save">-20%</span></button>
          </div>
        </div>

        <div className="tiers">
          {TIERS.map((t) => {
            const price = yearly ? t.yearly : t.monthly
            return (
              <article className={`tier glass ${t.featured ? 'is-featured' : ''}`} key={t.name} data-cursor>
                {t.featured && <span className="tier__badge">Most popular</span>}
                <div className="tier__name">{t.name}</div>
                <div className="tier__price">
                  ${price}<span>/{yearly ? 'yr' : 'mo'}</span>
                </div>
                <ul className="tier__feats">
                  {t.feats.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a className={`btn ${t.featured ? '' : 'btn--ghost'}`} href="#reserve" data-cursor>
                  {t.monthly === 0 ? 'Play free' : `Go ${t.name}`}
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
