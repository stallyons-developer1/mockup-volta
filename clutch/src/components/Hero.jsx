import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import HeroScene from '../three/HeroScene.jsx'

export default function Hero({ ready }) {
  const root = useRef(null)

  useEffect(() => {
    if (!ready) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.from('.hero__title .word', { yPercent: 120, opacity: 0, duration: 1.1, stagger: 0.12 })
        .from('.hero__canvas', { opacity: 0, scale: 1.1, duration: 1.4, ease: 'power2.out' }, 0)
        .from('.hero__lead, .hero__cta', { y: 30, opacity: 0, duration: 0.9, stagger: 0.12 }, '-=0.6')
        .from('.hero__card', { y: 40, opacity: 0, duration: 0.8, stagger: 0.12 }, '-=0.7')

      gsap.to('.hero__inner', {
        yPercent: -12, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, root)
    return () => ctx.revert()
  }, [ready])

  return (
    <section className="hero" id="top" ref={root}>
      {ready && <HeroScene />}
      <div className="hero__grad" />

      <div className="hero__inner">
        <h1 className="hero__title">
          <span className="word">Compete.</span>{' '}
          <span className="word fire">Win.</span>{' '}
          <span className="word">Cash&nbsp;out.</span>
        </h1>

        <div className="hero__row">
          <div>
            <p className="hero__lead">
              The esports arena where skill pays real money. Jump into live tournaments across your
              favourite games, climb the bracket, and withdraw your winnings the second you win.
            </p>
            <div className="hero__cta">
              <a className="btn" href="#tournaments" data-cursor>Enter a tournament →</a>
              <a className="btn btn--ghost" href="#how" data-cursor>How it works</a>
            </div>
          </div>

          <div className="hero__cards">
            <div className="hero__card glass">
              <div className="k"><span>Live prize pool</span><span>●</span></div>
              <div className="v">$1.2<small>M</small></div>
            </div>
            <div className="hero__card glass">
              <div className="k"><span>Playing now</span><span>↗</span></div>
              <div className="v">48,210</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scrollcue">Scroll<span className="bar" /></div>
    </section>
  )
}
