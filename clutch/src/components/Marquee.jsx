import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MARQUEE } from '../data/content.js'

export default function Marquee() {
  const track = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const loop = gsap.to(track.current, { xPercent: -50, repeat: -1, duration: 18, ease: 'none' })
      let reset
      const st = ScrollTrigger.create({
        onUpdate: (self) => {
          const v = Math.abs(self.getVelocity())
          const boost = 1 + Math.min(v / 350, 7)
          const dir = self.direction
          gsap.to(loop, { timeScale: boost * dir, duration: 0.3, overwrite: true })
          gsap.to(track.current, { skewX: Math.min(v / 500, 12) * -dir, duration: 0.3, overwrite: true })
          clearTimeout(reset)
          reset = setTimeout(() => {
            gsap.to(loop, { timeScale: 1, duration: 0.6 })
            gsap.to(track.current, { skewX: 0, duration: 0.5 })
          }, 130)
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
        {items.map((m, i) => (
          <span className={`marquee__item ${i % 2 ? 'out' : ''}`} key={i}>{m}<span className="star">✦</span></span>
        ))}
      </div>
    </div>
  )
}
