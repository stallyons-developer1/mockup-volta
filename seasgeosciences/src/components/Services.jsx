import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CAROUSEL } from '../data/content.js'

export default function Services() {
  const root = useRef(null)
  const track = useRef(null)
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // intro heading
      gsap.from('.svc__head .line > span', {
        yPercent: 115, duration: 1, stagger: 0.12, ease: 'power4.out',
        scrollTrigger: { trigger: '.svc__head', start: 'top 85%' },
      })

      const mm = gsap.matchMedia()
      mm.add('(min-width: 861px)', () => {
        const t = track.current
        const slides = gsap.utils.toArray('.svc__slide')
        const getScroll = () => t.scrollWidth - window.innerWidth + 0 // px to travel

        const tween = gsap.to(t, {
          x: () => -getScroll(),
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            pin: true,
            scrub: 0.6,
            start: 'top top',
            end: () => '+=' + getScroll(),
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              setProgress(self.progress)
              setActive(Math.min(slides.length - 1, Math.round(self.progress * (slides.length - 1))))
            },
          },
        })

        // velocity skew on the inner media
        const skewSetter = slides.map((s) => gsap.quickTo(s.querySelector('.svc__media'), 'skewX', { duration: 0.4, ease: 'power3' }))
        const clamp = gsap.utils.clamp(-7, 7)
        const vel = ScrollTrigger.create({
          onUpdate: (self) => {
            const v = clamp(self.getVelocity() / -260)
            skewSetter.forEach((fn) => fn(v))
          },
        })
        return () => { tween.kill(); vel.kill() }
      })

      // mobile: simple reveal per card
      mm.add('(max-width: 860px)', () => {
        gsap.utils.toArray('.svc__slide').forEach((s) => {
          gsap.from(s, { y: 50, opacity: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: s, start: 'top 85%' } })
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="svc" id="services" ref={root}>
      <div className="svc__sticky">
        <div className="svc__topbar container">
          <h2 className="svc__head display">
            <span className="line"><span>Complex ground.</span></span>
            <span className="line"><span>Controlled approach.</span></span>
          </h2>
          <div className="svc__meta">
            <ul className="svc__tabs">
              {CAROUSEL.slides.map((s, i) => (
                <li key={s.key} className={i === active ? 'on' : ''}>{s.label}</li>
              ))}
            </ul>
            <div className="svc__count mono">
              <span>{String(active + 1).padStart(2, '0')}</span> — {String(CAROUSEL.slides.length).padStart(2, '0')}
            </div>
          </div>
        </div>

        <div className="svc__viewport">
          <div className="svc__track" ref={track}>
            {CAROUSEL.slides.map((s, i) => (
              <article className={`svc__slide ${i === active ? 'is-active' : ''}`} key={s.key}>
                <div className="svc__media">
                  <video autoPlay muted loop playsInline poster={s.poster}>
                    <source src={s.video} type="video/mp4" />
                  </video>
                  <span className="svc__index mono">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="svc__caption">
                  <span className="mono svc__label">{s.label}</span>
                  <h3 className="svc__title display">{s.title}</h3>
                  <p className="svc__body">{s.body}</p>
                  <a className="svc__explore" href="#contact" data-cursor
                    onClick={(e) => { e.preventDefault(); window.__lenis?.scrollTo('#contact', { duration: 1.4 }) }}>
                    Explore <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="svc__progress container">
          <span className="svc__bar"><i style={{ transform: `scaleX(${progress})` }} /></span>
        </div>
      </div>
    </section>
  )
}
