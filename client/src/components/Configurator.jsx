import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SWATCHES } from '../data/content.js'

export default function Configurator({ accent, onPick }) {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.config__stage', {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 70%' },
      })
      gsap.from('.config__text > *', {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 65%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section" id="configure" ref={root}>
      <div className="container config">
        <div className="config__stage">
          <div className="config__disc">
            <span className="bike">◉</span>
          </div>
        </div>
        <div className="config__text">
          <span className="eyebrow">Make it yours</span>
          <h2>Choose your charge.</h2>
          <p>
            Five signature finishes, each with a matched lighting signature that carries through the
            cockpit, the rims and the ambient glow. Tap a colour — watch the whole machine respond.
          </p>
          <div className="swatches">
            {SWATCHES.map((s) => (
              <button
                key={s.name}
                className={`swatch ${s.hex === accent.hex ? 'is-active' : ''}`}
                style={{ background: s.hex, color: s.hex }}
                onClick={() => onPick(s)}
                aria-label={s.name}
              />
            ))}
          </div>
          <div className="config__name">{accent.name}</div>
        </div>
      </div>
    </section>
  )
}
