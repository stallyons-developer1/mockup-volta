import { useEffect, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ParticleGlobe from '../three/ParticleGlobe.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import { GLOBAL } from '../data/content.js'

export default function GlobalReach() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.global__head .line > span', {
        yPercent: 115, duration: 1.1, stagger: 0.12, ease: 'power4.out',
        scrollTrigger: { trigger: '.global__head', start: 'top 80%' },
      })
      gsap.from('.global__body', {
        y: 26, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.global__body', start: 'top 85%' },
      })
      gsap.from('.global__canvas', {
        opacity: 0, scale: 0.85, duration: 1.4, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 70%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  const words = GLOBAL.heading.replace('.', '').split(' ')

  return (
    <section className="global" id="global" ref={root}>
      <div className="global__canvas">
        <ErrorBoundary fallback={<div className="global__fallback" />}>
          <Canvas camera={{ position: [0, 0, 3.4], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}
            onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}>
            <Suspense fallback={null}>
              <ParticleGlobe />
            </Suspense>
          </Canvas>
        </ErrorBoundary>
      </div>
      <div className="global__scrim" />

      <div className="container global__content">
        <span className="mono global__tag"><i>05</i> Worldwide</span>
        <h2 className="global__head display">
          <span className="line"><span>Global reach,</span></span>
          <span className="line"><span>local understanding.</span></span>
        </h2>
        <p className="global__body">{GLOBAL.body}</p>
      </div>
    </section>
  )
}
