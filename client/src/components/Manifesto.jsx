import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const TEXT =
  'We did not remove the engine. We removed everything between you and the road.'

export default function Manifesto() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.manifesto__text .word',
        { opacity: 0.12, filter: 'blur(4px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          stagger: 0.4,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top 75%',
            end: 'bottom 55%',
            scrub: true,
          },
        }
      )
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section manifesto" ref={root}>
      <div className="container">
        <p className="manifesto__text">
          {TEXT.split(' ').map((w, i) => (
            <span className="word" key={i}>
              {w}&nbsp;
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
