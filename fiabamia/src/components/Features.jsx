import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { INTRO, FEATURES } from '../data/content.js'

export default function Features() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.intro__head .line > span', {
        yPercent: 115, duration: 1.2, stagger: 0.1, ease: 'power4.out',
        scrollTrigger: { trigger: '.intro', start: 'top 75%' },
      })
      gsap.from('.intro__body', { opacity: 0, y: 24, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.intro__body', start: 'top 82%' } })
      gsap.utils.toArray('.feat').forEach((f) => {
        gsap.from(f.querySelectorAll('.feat__tag, .feat__title, .feat__body'), {
          y: 40, opacity: 0, duration: 1.1, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: f, start: 'top 80%' },
        })
        gsap.from(f.querySelector('.feat__orb'), {
          scale: 0.5, opacity: 0, duration: 1.4, ease: 'power3.out',
          scrollTrigger: { trigger: f, start: 'top 80%' },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="intro" id="about" ref={root}>
      <div className="container">
        <span className="label intro__eyebrow">{INTRO.eyebrow}</span>
        <h2 className="intro__head display">
          <span className="line"><span>Personalized bedtime</span></span>
          <span className="line"><span>stories <em>for children</em></span></span>
        </h2>
        <p className="intro__body">{INTRO.body}</p>

        <div className="feats">
          {FEATURES.map((f, i) => (
            <article className={`feat feat--${i % 2 ? 'right' : 'left'}`} key={f.key}>
              <div className="feat__visual">
                <span className={`feat__orb feat__orb--${f.key}`} aria-hidden="true" />
              </div>
              <div className="feat__text">
                <span className="label feat__tag">{f.tag}</span>
                <h3 className="feat__title display">{f.title}</h3>
                <p className="feat__body">{f.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
