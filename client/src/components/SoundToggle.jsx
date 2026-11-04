import { useEffect, useRef, useState } from 'react'

// Generates a soft ambient drone with the Web Audio API — no audio asset
// required. Starts on user gesture (the toggle click), as browsers demand.
export default function SoundToggle() {
  const [on, setOn] = useState(false)
  const ctxRef = useRef(null)
  const nodesRef = useRef(null)

  const ensureGraph = () => {
    if (ctxRef.current) return
    const AudioCtx = window.AudioContext || window.webkitAudioContext
    const ctx = new AudioCtx()

    const master = ctx.createGain()
    master.gain.value = 0
    master.connect(ctx.destination)

    // Two detuned oscillators + a slow LFO on a lowpass for a breathing pad.
    const freqs = [55, 82.5, 110]
    const oscs = freqs.map((f, i) => {
      const o = ctx.createOscillator()
      o.type = i === 2 ? 'triangle' : 'sawtooth'
      o.frequency.value = f
      o.detune.value = (i - 1) * 6
      return o
    })
    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 420
    filter.Q.value = 6

    const lfo = ctx.createOscillator()
    lfo.frequency.value = 0.08
    const lfoGain = ctx.createGain()
    lfoGain.gain.value = 180
    lfo.connect(lfoGain).connect(filter.frequency)

    oscs.forEach((o) => o.connect(filter))
    filter.connect(master)
    oscs.forEach((o) => o.start())
    lfo.start()

    ctxRef.current = ctx
    nodesRef.current = { master }
  }

  const toggle = () => {
    ensureGraph()
    const ctx = ctxRef.current
    const { master } = nodesRef.current
    if (ctx.state === 'suspended') ctx.resume()
    const next = !on
    const now = ctx.currentTime
    master.gain.cancelScheduledValues(now)
    master.gain.linearRampToValueAtTime(next ? 0.06 : 0.0001, now + 0.8)
    setOn(next)
  }

  useEffect(() => () => ctxRef.current && ctxRef.current.close(), [])

  return (
    <button className={`sound ${on ? '' : 'is-muted'}`} onClick={toggle} aria-pressed={on}>
      <span className="sound__bars">
        <span />
        <span />
        <span />
        <span />
      </span>
      {on ? 'Sound On' : 'Sound Off'}
    </button>
  )
}
