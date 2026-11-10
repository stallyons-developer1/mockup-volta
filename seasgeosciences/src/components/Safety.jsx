import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SAFETY } from '../data/content.js'

export default function Safety() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.safety__head .line > span', {
        yPercent: 115, duration: 1.1, stagger: 0.12, ease: 'power4.out',
        scrollTrigger: { trigger: '.safety__head', start: 'top 82%' },
      })
      gsap.from('.safety__text > p, .safety__cta, .safety__cert', {
        y: 28, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.safety__text', start: 'top 80%' },
      })
      gsap.fromTo('.safety__frame',
        { clipPath: 'inset(0% 0% 100% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'power4.inOut',
          scrollTrigger: { trigger: '.safety__visual', start: 'top 80%' } })
      gsap.fromTo('.safety__frame img', { scale: 1.3, yPercent: -8 }, {
        yPercent: 8, ease: 'none',
        scrollTrigger: { trigger: '.safety__visual', start: 'top bottom', end: 'bottom top', scrub: true },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="safety" id="qhse" ref={root}>
      <div className="container safety__inner">
        <div className="safety__text">
          <span className="mono safety__tag"><i>06</i> QHSE</span>
          <h2 className="safety__head display">
            <span className="line"><span>Safety-led</span></span>
            <span className="line"><span>decisions.</span></span>
          </h2>
          <p>{SAFETY.body}</p>
          <div className="safety__cert">
            <img src={SAFETY.cert} alt="Occupational Health and Safety Management Systems certification" />
            <span className="mono">ISO 45001 · Certified management systems</span>
          </div>
          <a className="btn safety__cta" href="#contact" data-cursor
            onClick={(e) => { e.preventDefault(); window.__lenis?.scrollTo('#contact', { duration: 1.4 }) }}>
            {SAFETY.cta} <span className="arr">→</span>
          </a>
        </div>

        <div className="safety__visual">
          <div className="safety__frame">
            <img src={SAFETY.image} alt="Offshore survey vessel" />
          </div>
          <div className="safety__stat">
            <span className="safety__statNum display">0</span>
            <span className="mono">Lost-time incidents<br />target, every project</span>
          </div>
        </div>
      </div>
    </section>
  )
}
