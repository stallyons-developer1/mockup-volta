import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BUBBLE } from '../data/content.js'

export default function ImageBubble() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.bubble__head .line > span', {
        yPercent: 110, duration: 1.1, stagger: 0.1, ease: 'power4.out',
        scrollTrigger: { trigger: '.bubble__head', start: 'top 82%' },
      })
      gsap.from('.bubble__body', {
        y: 26, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.bubble__body', start: 'top 85%' },
      })
      // reveal the frame, parallax the inner image
      gsap.fromTo('.bubble__frame',
        { clipPath: 'inset(14% 10% 14% 10% round 40% 40% 40% 40%)' },
        { clipPath: 'inset(0% 0% 0% 0% round 28% 28% 28% 28%)', ease: 'none',
          scrollTrigger: { trigger: '.bubble__visual', start: 'top 85%', end: 'center 45%', scrub: true } })
      gsap.fromTo('.bubble__frame img', { yPercent: -12, scale: 1.18 }, {
        yPercent: 10, ease: 'none',
        scrollTrigger: { trigger: '.bubble__visual', start: 'top bottom', end: 'bottom top', scrub: true },
      })
      gsap.to('.bubble__badge', {
        rotate: 360, ease: 'none',
        scrollTrigger: { trigger: '.bubble__visual', start: 'top bottom', end: 'bottom top', scrub: 1.2 },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  const words = BUBBLE.heading.split(' ')
  // break heading into ~3 lines
  const per = Math.ceil(words.length / 3)
  const lines = [words.slice(0, per), words.slice(per, per * 2), words.slice(per * 2)]

  return (
    <section className="bubble" ref={root}>
      <div className="container bubble__inner">
        <div className="bubble__text">
          <span className="mono bubble__tag"><i>02</i> Expertise</span>
          <h2 className="bubble__head display">
            {lines.map((ln, i) => (
              <span className="line" key={i}><span>{ln.join(' ')}</span></span>
            ))}
          </h2>
          <p className="bubble__body">{BUBBLE.body}</p>
        </div>

        <div className="bubble__visual">
          <div className="bubble__frame">
            <img src={BUBBLE.image} alt="Offshore site investigation vessel" />
          </div>
          <div className="bubble__badge" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <defs><path id="circ" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs>
              <text className="mono"><textPath href="#circ" startOffset="0">SEAS GEOSCIENCES · SITE CHARACTERIZATION · </textPath></text>
            </svg>
            <span className="bubble__badgeDot">↗</span>
          </div>
        </div>
      </div>
    </section>
  )
}
