import { useEffect, useRef } from 'react'

// Gentle looping ambient wind, faded in/out with the sound toggle.
// (Real FiabaMia uses Tone.js; a layered HTML5 loop keeps the demo light.)
export default function useAmbient(on) {
  const ref = useRef(null)
  const raf = useRef(0)

  useEffect(() => {
    if (!ref.current) {
      const a = new Audio('/audio/wind.mp3')
      a.loop = true
      a.volume = 0
      ref.current = a
    }
    const a = ref.current
    const target = on ? 0.35 : 0
    if (on) { a.play?.().catch(() => {}) }

    const tick = () => {
      a.volume += (target - a.volume) * 0.06
      if (Math.abs(a.volume - target) > 0.005) raf.current = requestAnimationFrame(tick)
      else { a.volume = target; if (!on) a.pause?.() }
    }
    cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [on])
}
