import * as THREE from 'three'
const smooth = (t) => t * t * (3 - 2 * t)
const clamp01 = (x) => Math.min(1, Math.max(0, x))

// Each stop: scroll p, explode amount, focused part, camera pos + look-at, and a detail card.
// Camera targets sit at each part's EXPLODED position (base + offset).
export const STEPS = [
  { p: 0.00, explode: 0, focus: null, cam: [5.2, 3.0, 6.8], tgt: [0, 0.8, 0],
    card: { side: 'left', tag: 'The Machine', title: 'Fully assembled', desc: 'One sculpture of carbon and alloy. Scroll to take it apart, piece by piece.' } },
  { p: 0.16, explode: 1, focus: null, cam: [6.2, 4.0, 7.0], tgt: [0, 0.9, 0],
    card: { side: 'left', tag: 'Exploded view', title: 'Twenty-one components', desc: 'Every panel, wheel and system suspended in mid-air. Keep scrolling to meet each one.' } },
  { p: 0.30, explode: 1, focus: 'engine-block', cam: [2.4, 0.9, 3.4], tgt: [0, 0.26, 1.35],
    card: { side: 'right', tag: 'Powertrain', title: 'Mid-mounted engine', desc: 'Exposed cylinders sit low between the axles — mass centred for balance you feel at the first corner.' } },
  { p: 0.44, explode: 1, focus: 'front-left-wheel', cam: [-3.4, 0.9, 2.6], tgt: [-1.77, 0.42, 1.32],
    card: { side: 'left', tag: 'Wheels & brakes', title: 'Forged alloy wheel', desc: 'Low unsprung mass over a carbon-ceramic brake — a ten-spoke forged wheel that never fades.' } },
  { p: 0.58, explode: 1, focus: 'dashboard-steering', cam: [1.5, 1.1, 3.0], tgt: [0, 0.7, 1.25],
    card: { side: 'right', tag: 'Cockpit', title: 'Driver-focused dash', desc: 'A squared-off wheel and a digital instrument cluster keep every control a fingertip away.' } },
  { p: 0.72, explode: 1, focus: 'driver-seat', cam: [-2.4, 0.7, 1.0], tgt: [-0.77, 0.18, -0.25],
    card: { side: 'left', tag: 'Interior', title: 'Carbon bucket seats', desc: 'One-piece shells wrapped in hand-stitched leather — they hold you through the corners.' } },
  { p: 0.85, explode: 1, focus: 'rear-spoiler', cam: [2.6, 2.2, -3.7], tgt: [0, 1.87, -2.2],
    card: { side: 'right', tag: 'Aerodynamics', title: 'Active rear wing', desc: 'Trims drag on the straights, then bites down for grip under heavy braking.' } },
  { p: 0.95, explode: 1, focus: 'body-shell', cam: [4.0, 2.8, 4.6], tgt: [0, 1.41, 0],
    card: { side: 'left', tag: 'Bodywork', title: 'Monocoque shell', desc: 'A single stressed body — featherlight, yet brutally rigid. The soul of the silhouette.' } },
  { p: 1.00, explode: 0, focus: null, cam: [5.2, 3.0, 6.8], tgt: [0, 0.8, 0],
    card: { side: 'left', tag: 'Reassembled', title: 'One machine, again', desc: 'Every part back in its place. Scroll up to take it apart once more.' } },
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
