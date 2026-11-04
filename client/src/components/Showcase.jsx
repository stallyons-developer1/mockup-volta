import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SHOWCASE } from '../data/content.js'

// Pinned section that converts vertical scroll into horizontal travel.
export default function Showcase() {
  const root = useRef(null)
  const track = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const getScroll = () => track.current.scrollWidth - window.innerWidth
      gsap.to(track.current, {
        x: () => -getScroll(),
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: () => '+=' + getScroll(),
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="showcase" id="showcase" ref={root}>
      <div className="showcase__pin">
        <div className="showcase__track" ref={track}>
          <div className="showcase__intro">
            <span className="eyebrow">Anatomy</span>
            <h2>Five systems, one instinct.</h2>
            <p>Drag your eyes across the machine. Each module is engineered to disappear into the ride.</p>
          </div>
          {SHOWCASE.map((c) => (
            <article className="card" key={c.index} data-cursor>
              <div className="card__index">{c.index}</div>
              <div className="card__big">{c.big}</div>
              <div>
                <div className="card__title">{c.title}</div>
                <div className="card__desc">{c.desc}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
