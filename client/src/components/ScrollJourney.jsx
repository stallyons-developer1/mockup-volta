import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import JourneyScene from '../three/JourneyScene.jsx'

// Each stage owns a slice of scroll progress [start, end]. Text fades in/out
// inside its window while the 3D wheel transforms continuously underneath.
const STAGES = [
  { k: 'Ignition', t: 'A single charge.', s: 'Everything starts with one spark of current in the dark.', win: [0.0, 0.14] },
  { k: 'Chapter 01', t: 'Sculpted by airflow', s: 'A monocoque exoskeleton carves the wind into downforce.', win: [0.17, 0.32] },
  { k: 'Chapter 02', t: 'Instant, silent torque', s: 'A dual-axial motor delivers full twist from the first degree.', win: [0.35, 0.5] },
  { k: 'Chapter 03', t: 'Range without limits', s: 'A structural cell pack that forgets where the plug is.', win: [0.53, 0.67] },
  { k: 'Chapter 04', t: 'A mind that rides with you', s: 'Predictive traction — a thousand reads of the road per second.', win: [0.7, 0.83] },
  { k: 'The machine', t: 'VOLTA', s: 'Reserve the silence.', win: [0.87, 1.0], finale: true },
]

function bump(p, [a, b]) {
  const fade = (b - a) * 0.34
  if (p < a || p > b) return 0
  if (p < a + fade) return (p - a) / fade
  if (p > b - fade) return (b - p) / fade
  return 1
}

export default function ScrollJourney({ accent }) {
  const section = useRef(null)
  const stageRefs = useRef([])
  const counterRef = useRef(null)
  const railRef = useRef(null)
  const hintRef = useRef(null)
  const progress = useRef({ current: 0 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      const railSet = gsap.quickSetter(railRef.current, 'scaleX')

      const st = ScrollTrigger.create({
        trigger: section.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress
          progress.current.current = p

          stageRefs.current.forEach((el, i) => {
            if (!el) return
            const st = STAGES[i]
            // Finale ramps in and holds to the end; others fade in and out.
            let v
            if (st.finale) {
              const [a, b] = st.win
              v = Math.max(0, Math.min(1, (p - a) / ((b - a) * 0.45)))
            } else {
              v = bump(p, st.win)
            }
            el.style.opacity = v
            const scale = st.finale ? 0.9 + v * 0.1 : 1
            el.style.transform = `translateY(${(1 - v) * 42}px) scale(${scale})`
          })

          railSet(p)
          if (counterRef.current) {
            const n = Math.min(STAGES.length, Math.round(p * STAGES.length))
            counterRef.current.textContent = `${String(n).padStart(2, '0')} / 0${STAGES.length}`
          }
          if (hintRef.current) hintRef.current.style.opacity = p < 0.04 ? 1 - p / 0.04 : 0
        },
      })
      return () => st.kill()
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section className="journey" id="design" ref={section}>
      <div className="journey__stage">
        <JourneyScene accent={accent} progress={progress.current} />

        <div className="journey__counter" ref={counterRef}>
          00 / 06
        </div>

        <div className="journey__overlay">
          {STAGES.map((s, i) => (
            <div
              className={`journey__chapter ${s.finale ? 'is-finale' : ''}`}
              key={i}
              ref={(el) => (stageRefs.current[i] = el)}
            >
              <span className="journey__k">{s.k}</span>
              <h2 className="journey__t">{s.t}</h2>
              <p className="journey__s">{s.s}</p>
            </div>
          ))}
        </div>

        <div className="journey__hint" ref={hintRef}>
          <span className="line" />
          Scroll to ignite
        </div>
        <div className="journey__rail">
          <span ref={railRef} />
        </div>
      </div>
    </section>
  )
}
