import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CHAPTERS } from '../data/content.js'

export default function Chapters() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.chapter').forEach((ch) => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: ch, start: 'top 72%' },
          defaults: { ease: 'power4.out' },
        })
        tl.from(ch.querySelectorAll('.chapter__title .line-inner'), {
          yPercent: 115,
          duration: 1.1,
          stagger: 0.12,
        })
          .from(ch.querySelector('.chapter__num'), { opacity: 0, x: -20, duration: 0.8 }, 0.1)
          .from(ch.querySelector('.chapter__body'), { opacity: 0, y: 24, duration: 0.9 }, 0.3)
          .from(ch.querySelectorAll('.chapter__stat > div'), { opacity: 0, y: 24, duration: 0.8, stagger: 0.12 }, 0.4)

        // Parallax the big glyph and rotate the rings as the chapter passes.
        gsap.to(ch.querySelector('.glyph'), {
          yPercent: -24,
          ease: 'none',
          scrollTrigger: { trigger: ch, start: 'top bottom', end: 'bottom top', scrub: true },
        })
        gsap.fromTo(
          ch.querySelector('.ring'),
          { rotate: -30, scale: 0.85 },
          {
            rotate: 30,
            scale: 1,
            ease: 'none',
            scrollTrigger: { trigger: ch, start: 'top bottom', end: 'bottom top', scrub: true },
          }
        )
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section" id="design" ref={root}>
      <div className="container">
        {CHAPTERS.map((ch) => (
          <article className="chapter" key={ch.num}>
            <div className="chapter__text">
              <div className="chapter__num">Chapter {ch.num}</div>
              <h2 className="chapter__title">
                {ch.title.split('\n').map((line, i) => (
                  <span className="reveal-line" key={i}>
                    <span className="line-inner" style={{ display: 'block' }}>
                      {line}
                    </span>
                  </span>
                ))}
              </h2>
              <p className="chapter__body">{ch.body}</p>
              <div className="chapter__stat">
                {ch.stats.map((s, i) => (
                  <div key={i}>
                    <div className="k">{s.k}</div>
                    <div className="v">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="chapter__visual">
              <div className="ring" />
              <div className="glyph">{ch.glyph}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
