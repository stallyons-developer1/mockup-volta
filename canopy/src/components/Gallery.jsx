import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GALLERY } from '../data/content.js'

export default function Gallery() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery__item', { y: 50, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.gallery', start: 'top 80%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section" id="gallery" ref={root}>
      <div className="container">
        <div style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
          <span className="eyebrow">Gallery</span>
          <h2 className="serif" style={{ fontSize: 'clamp(2rem,5vw,4rem)', marginTop: '1.2rem' }}>Life, at altitude</h2>
        </div>
        <div className="gallery">
          {GALLERY.map((g, i) => (
            <figure className={`gallery__item ${g.cls}`} key={i} data-cursor>
              <img src={g.src} alt="Canopy interior" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
