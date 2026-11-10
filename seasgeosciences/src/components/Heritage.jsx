import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HERITAGE } from '../data/content.js'

export default function Heritage() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.heritage__head .line > span', {
        yPercent: 115, duration: 1.1, stagger: 0.1, ease: 'power4.out',
        scrollTrigger: { trigger: '.heritage__head', start: 'top 82%' },
      })
      gsap.from('.heritage__body, .heritage__logo, .heritage__cta', {
        y: 26, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.heritage__body', start: 'top 85%' },
      })
      gsap.utils.toArray('.heritage__fig').forEach((fig, i) => {
        gsap.fromTo(fig, { clipPath: 'inset(0% 0% 100% 0%)' }, {
          clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'power4.inOut',
          scrollTrigger: { trigger: fig, start: 'top 88%' },
        })
        gsap.fromTo(fig.querySelector('img'), { yPercent: -14, scale: 1.2 }, {
          yPercent: 14, ease: 'none',
          scrollTrigger: { trigger: fig, start: 'top bottom', end: 'bottom top', scrub: true },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="heritage" id="about" ref={root}>
      <div className="container heritage__inner">
        <div className="heritage__text">
          <span className="mono heritage__tag"><i>07</i> Heritage</span>
          <h2 className="heritage__head display">
            <span className="line"><span>Responsibility rooted</span></span>
            <span className="line"><span>in heritage.</span></span>
          </h2>
          <p className="heritage__body">{HERITAGE.body}</p>
          <img className="heritage__logo" src={HERITAGE.logo} alt="Sealaska" />
          <a className="btn btn--ghost heritage__cta" href="#about" data-cursor>
            {HERITAGE.cta} <span className="arr">→</span>
          </a>
        </div>

        <div className="heritage__gallery">
          {HERITAGE.images.map((src, i) => (
            <figure className={`heritage__fig heritage__fig--${i + 1}`} key={src}>
              <img src={src} alt="Sealaska heritage and responsible growth" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
