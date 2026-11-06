import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IDENTITY } from '../data/content.js'

// Deep-green identity section — a serif statement that brightens word-by-word
// as you scroll, beside two organic-masked images that parallax.
export default function Intro() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.identity__text .word',
        { opacity: 0.22 },
        { opacity: 1, stagger: 0.3, ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top 72%', end: 'bottom 72%', scrub: true } })
      gsap.to('.identity__media .m1 img', { yPercent: -10, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true } })
      gsap.to('.identity__media .m2 img', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true } })
      gsap.from('.identity__media figure', { scale: 0.9, opacity: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: root.current, start: 'top 70%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  const words = IDENTITY.split(' ')
  return (
    <section className="section section--green identity" ref={root}>
      <div className="container">
        <span className="eyebrow">Canopy — Design</span>
        <div className="identity__grid">
          <div>
            <p className="identity__text">
              {words.map((w, i) => {
                const clean = w.replace(/[^a-z]/gi, '').toLowerCase()
                return (
                  <span className="word" key={i}>
                    {clean === 'canopy' || clean === 'tree' ? <em>{w}&nbsp;</em> : <>{w}&nbsp;</>}
                  </span>
                )
              })}
            </p>
            <div className="identity__cta">
              <a className="btn btn--cream" href="#residences" data-cursor><span>Explore residences</span><span className="dot">↗</span></a>
            </div>
            <div className="identity__foot"><span>01</span><span className="rule" /><span>Growth · Shelter · Longevity</span></div>
          </div>
          <div className="identity__media">
            <figure className="m1 mask-a"><img src="/img/facade-1.jpg" alt="Facade" /></figure>
            <figure className="m2 mask-b"><img src="/img/interior-4.jpg" alt="Interior" /></figure>
          </div>
        </div>
      </div>
    </section>
  )
}
