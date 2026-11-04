import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MARQUEE } from '../data/content.js'

// Seamless looping marquee that also nudges its speed with scroll velocity.
export default function Marquee() {
  const track = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const loop = gsap.to(track.current, {
        xPercent: -50,
        repeat: -1,
        duration: 22,
        ease: 'none',
      })

      let last = 0
      const st = ScrollTrigger.create({
        onUpdate: (self) => {
          const v = Math.abs(self.getVelocity())
          const boost = 1 + Math.min(v / 400, 6)
          gsap.to(loop, { timeScale: boost, duration: 0.3, overwrite: true })
          clearTimeout(last)
          last = setTimeout(() => gsap.to(loop, { timeScale: 1, duration: 0.6 }), 120)
        },
      })
      return () => st.kill()
    })
    return () => ctx.revert()
  }, [])

  const items = [...MARQUEE, ...MARQUEE]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track" ref={track}>
        {items.map((item, i) => (
          <span className={`marquee__item ${i % 2 ? 'is-outline' : ''}`} key={i}>
            {item}
            <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  )
}
