import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import HyperbikeScene from '../three/HyperbikeScene.jsx'

export default function Hero({ ready, accent }) {
  const root = useRef(null)

  useEffect(() => {
    if (!ready) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.from('.hero__title .char', {
        yPercent: 130,
        duration: 1.1,
        stagger: 0.07,
      })
        .from('.hero__canvas', { opacity: 0, scale: 1.08, duration: 1.4, ease: 'power2.out' }, 0)
        .from(
          ['.hero__tag', '.hero__scroll', '.hero__index'],
          { yPercent: 40, opacity: 0, duration: 1, stagger: 0.12 },
          '-=0.7'
        )

      // Gentle parallax drift of the headline as you scroll away.
      gsap.to('.hero__title', {
        yPercent: -18,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, root)
    return () => ctx.revert()
  }, [ready])

  return (
    <section className="hero" id="top" ref={root}>
      <HyperbikeScene accent={accent} />

      <div className="hero__index">00 / 06 — The Machine</div>

      <div className="hero__content">
        <h1 className="hero__title">
          {'VOLTA'.split('').map((c, i) => (
            <span className="reveal-line" style={{ display: 'inline-block' }} key={i}>
              <span className="char" style={{ display: 'inline-block' }}>
                {c}
              </span>
            </span>
          ))}
        </h1>
        <div className="hero__meta">
          <p className="hero__tag">
            The electric hyperbike engineered as pure momentum. Silent, relentless, alive.
          </p>
          <div className="hero__scroll">
            <span className="line" />
            Scroll to ignite
          </div>
        </div>
      </div>
    </section>
  )
}
