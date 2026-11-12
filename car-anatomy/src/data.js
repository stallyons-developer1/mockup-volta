import * as THREE from 'three'
const smooth = (t) => t * t * (3 - 2 * t)
const clamp01 = (x) => Math.min(1, Math.max(0, x))

// Bugatti EB110 — assemble ▸ disassemble ▸ orbit ▸ reassemble.
// The model's parts are not individually named, so the camera orbits the
// exploded machine instead of focusing single components. explode: 0 = whole car.
export const STEPS = [
  { p: 0.00, explode: 0, focus: null, cam: [5.0, 2.2, 6.0], tgt: [0, 0.6, 0],
    card: { side: 'left', tag: '1992 · Campogalliano', title: 'Bugatti EB110 Super Sport', desc: 'A quad-turbo V12, carbon tub, all-wheel drive. Scroll to take it apart — and watch it build itself back.' } },
  { p: 0.16, explode: 1, focus: null, cam: [7.2, 3.6, 7.4], tgt: [0, 0.9, 0],
    card: { side: 'left', tag: 'Disassembly', title: 'Sixty-one pieces', desc: 'Every panel, light, wheel and vent lifts away from the body and hangs in the air.' } },
  { p: 0.33, explode: 1, focus: null, cam: [8.6, 1.8, 0.4], tgt: [0, 0.8, 0],
    card: { side: 'right', tag: 'Profile', title: 'Read the silhouette', desc: 'Short overhangs, a low cab-forward glasshouse — the shape that chased 350 km/h in the early ’90s.' } },
  { p: 0.50, explode: 1, focus: null, cam: [0.3, 2.6, 8.4], tgt: [0, 0.85, 0],
    card: { side: 'left', tag: 'Anatomy', title: 'The whole machine, apart', desc: 'Seen head-on, the components float in formation — the full parts list of a hand-built supercar.' } },
  { p: 0.66, explode: 1, focus: null, cam: [4.2, 6.2, 5.0], tgt: [0, 0.5, 0],
    card: { side: 'right', tag: 'Overhead', title: 'Layout from above', desc: 'Mid-mounted mass, four driven wheels, bodywork pulled tight over the tub. Now it reassembles.' } },
  { p: 0.82, explode: 0, focus: null, cam: [-5.4, 2.4, 5.6], tgt: [0, 0.6, 0],
    card: { side: 'left', tag: 'Reassembly', title: 'Back as one', desc: 'Each piece slides home. The panel gaps close and the car is whole again.' } },
  { p: 1.00, explode: 0, focus: null, cam: [4.4, 1.5, 5.4], tgt: [0, 0.5, 0],
    card: { side: 'right', tag: 'EB110 SS', title: 'Ready to run', desc: 'Assembled, settled on its wheels. Scroll back up to pull it apart once more.' } },
]

const v = (a, b, t) => a.map((x, i) => THREE.MathUtils.lerp(x, b[i], t))

export function sample(p) {
  let i = 0
  while (i < STEPS.length - 2 && p > STEPS[i + 1].p) i++
  const a = STEPS[i], b = STEPS[i + 1]
  const t = smooth(clamp01((p - a.p) / Math.max(1e-4, b.p - a.p)))
  const near = t < 0.5 ? a : b
  return {
    explode: THREE.MathUtils.lerp(a.explode, b.explode, t),
    cam: v(a.cam, b.cam, t),
    tgt: v(a.tgt, b.tgt, t),
    focus: near.focus,
    cardIdx: STEPS.indexOf(near),
  }
}
