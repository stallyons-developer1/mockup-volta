// Scroll-driven stage system for the one-page site.
// `stage.t` is a CONTINUOUS section index (0 = hero centred, 1 = overview centred, …)
// computed in scroll.js from the on-page [data-stage] markers. The car + camera
// read it each frame and interpolate between POSES.

export const stage = { t: 0, p: 0 }

const lerp = (a, b, t) => a + (b - a) * t
const lerp3 = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)]
const smooth = (t) => t * t * (3 - 2 * t)
const clamp01 = (x) => Math.min(1, Math.max(0, x))

// Cinematic camera choreography — the CAR stays at the origin; the CAMERA flies
// around and into it to frame each subsystem (a studio walk-around).
//  cam — camera world pos    tgt — look-at (tgt.x offset composes the car left/right on screen)
//  rotY — slow turntable     ex — subtle part separation (0 = whole)
//  env — scene brightness 0..1 (1 bright studio · 0 moody detail)    dark — overlay text is light
// Bugatti frame: length ~4.9 (z), width ~2.2 (x), centre y~0.55, front z+2.4, rear z-2.4.
export const POSES = [
  /* 0 hero · wide front 3/4, bright     */ { cam: [4.7, 1.8, 6.1],   tgt: [0.0, 0.62, 0.0],  rotY: 0.0,  ex: 0.0,  env: 1.0,  dark: false },
  /* 1 overview · low front, car left    */ { cam: [3.2, 0.72, 5.6],  tgt: [0.95, 0.52, 0.3], rotY: 0.12, ex: 0.0,  env: 1.0,  dark: false },
  /* 2 powertrain · rear close, moody    */ { cam: [-2.9, 1.25, -3.7], tgt: [0.5, 0.72, -1.7], rotY: 0.0, ex: 0.28, env: 0.22, dark: true },
  /* 3 chassis · low side, panels float  */ { cam: [-4.6, 0.7, 1.1],  tgt: [0.5, 0.5, 0.2],   rotY: 0.0,  ex: 0.55, env: 0.62, dark: true },
  /* 4 running gear · front wheel close  */ { cam: [-2.5, 0.55, 3.1], tgt: [-0.55, 0.45, 1.5], rotY: 0.0, ex: 0.22, env: 1.0,  dark: false },
  /* 5 assembled · wide 3/4, car right   */ { cam: [4.5, 1.5, 5.5],   tgt: [-0.85, 0.55, 0.0], rotY: -0.1, ex: 0.0, env: 1.0,  dark: false },
  /* 6 footer · far small, car right     */ { cam: [7.6, 2.0, 7.8],   tgt: [-2.4, 0.42, 0.0], rotY: -0.32, ex: 0.0, env: 1.0, dark: false },
]

export function samplePose(t) {
  const n = POSES.length
  const i = Math.max(0, Math.min(n - 2, Math.floor(t)))
  const f = smooth(clamp01(t - i))
  const a = POSES[i], b = POSES[i + 1]
  return {
    cam: lerp3(a.cam, b.cam, f),
    tgt: lerp3(a.tgt, b.tgt, f),
    rotY: lerp(a.rotY, b.rotY, f),
    ex: lerp(a.ex, b.ex, f),
    env: lerp(a.env, b.env, f),
  }
}

// ---- Brand + chapters --------------------------------------------------
export const BRAND = 'AUROM'
export const CHAPTERS = ['EB110', 'Anatomy'] // bottom-nav, split at p = 0.5

// ---- Page copy ---------------------------------------------------------
export const HERO = {
  eyebrow: '1992 · Campogalliano · Bugatti',
  word: 'EB110',
  sub: 'Super Sport',
  cta: 'Scroll to begin',
}

export const OVERVIEW = {
  eyebrow: 'The Machine',
  title: ['A supercar built', 'ahead of its time'],
  lead: 'Hand-assembled in Campogalliano, the EB110 SS paired a 3.5-litre quad-turbo V12 with a carbon monocoque — figures that still read like a modern hypercar.',
}

export const STATS = {
  big: [['603', 'horsepower'], ['351', 'km/h top speed'], ['3.2s', '0–100 km/h']],
  featuring: ['3.5L quad-turbo V12', 'Carbon-fibre monocoque', 'Permanent all-wheel drive'],
}

export const DIS_HEAD = { ghost: 'Anatomy', eyebrow: 'Exploded View', title: 'Sixty-one components, one machine' }
export const DIS_CARDS = [
  { n: '01', eyebrow: 'Powertrain', title: 'Mid-mounted V12', lead: 'Four turbochargers feed a 60-valve V12 slung low between the axles — the mass centred for balance you feel at the first corner.', cta: 'See how it roars' },
  { n: '02', eyebrow: 'Chassis & Body', title: 'Carbon tub, alloy skin', lead: 'A carbon-fibre monocoque wears hand-formed aluminium panels. Featherlight, and brutally stiff.', cta: 'Explore the tub' },
  { n: '03', eyebrow: 'Running Gear', title: 'Four driven wheels', lead: 'Permanent all-wheel drive over forged wheels and ventilated discs — traction the rivals of the era simply couldn’t match.', cta: 'Get under the wheels' },
]

export const ASSEMBLY = {
  eyebrow: 'Engineered as one',
  title: ['Every part', 'back in its place'],
  lead: 'Sixty-one components, re-united into a single object of intent — the car that set the template for every hypercar that followed.',
}

export const SPECS = {
  ghost: 'Specs',
  title: 'The full spec',
  rows: [
    ['Engine', '3.5L quad-turbo V12'],
    ['Power', '603 hp @ 8250 rpm'],
    ['Top speed', '351 km/h'],
    ['0–100 km/h', '3.2 seconds'],
    ['Drive', 'Permanent AWD'],
    ['Built', 'Campogalliano, Italy'],
  ],
}

export const FOOTER = {
  socials: ['Instagram', 'YouTube', 'X', 'LinkedIn'],
  links: ['Overview', 'Anatomy', 'Specifications'],
  legal: '© 2026 AUROM — Anatomy of a Machine · Concept showcase · Model: Bugatti EB110 SS',
  made: 'Made by AUROM Studio',
}
