import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Reusable image + text row with a parallaxing image and reveal-in text.
export default function Feature({ data, id }) {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(root.current.querySelector('.feature__media img'), {
        yPercent: -14, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true },
      })
      gsap.from(root.current.querySelector('.feature__media'), {
        clipPath: 'inset(100% 0 0 0)', duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
      })
      gsap.from(root.current.querySelectorAll('.feature__text > *'), {
        y: 34, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 72%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <article className="feature" id={id} ref={root}>
      <div className="feature__text">
        <div className="feature__num">{data.num} — {data.kicker}</div>
        <h2 className="feature__title">
          {data.title.split('\n').map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
        </h2>
        <p className="feature__body">{data.body}</p>
        <ul className="feature__list">
          {data.list.map((it) => (
            <li key={it.v}><b>{it.k}</b><span>{it.v}</span></li>
          ))}
        </ul>
        <a className="btn btn--pine" href="#availability" data-cursor><span>View residences</span><span className="dot">↗</span></a>
      </div>
      <div className="feature__media">
        <img src={data.img} alt={data.kicker} loading="lazy" />
      </div>
    </article>
  )
}
