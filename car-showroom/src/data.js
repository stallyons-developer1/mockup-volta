// Camera choreography + feature cards for the single-car showroom journey.
// pos = camera position, tgt = look-at target. Car sits at origin, front toward +Z.

export const STOPS = [
  { p: 0.00, pos: [0.2, 3.4, 11.5], tgt: [0, 0.5, 0], phase: 'Entering the Pavilion' },
  { p: 0.10, pos: [4.6, 2.0, 7.4], tgt: [0, 0.6, 0], phase: 'The Reveal' },
  { p: 0.19, pos: [4.4, 1.0, 5.4], tgt: [0, 0.5, 0.4], phase: 'The Reveal' },
  {
    p: 0.30, pos: [1.9, 0.75, 5.6], tgt: [0, 0.6, 2.4], phase: 'Exterior',
    card: { n: '01', side: 'left', tag: 'Front', title: 'Sculpted nose & LED matrix', desc: 'Adaptive LED-matrix headlights and an active front splitter channel air into downforce the faster you go.' },
  },
  {
    p: 0.40, pos: [3.5, 0.5, 2.5], tgt: [1.0, 0.35, 1.7], phase: 'Exterior',
    card: { n: '02', side: 'right', tag: 'Wheels', title: 'Forged 20″ alloys', desc: 'Lightweight forged wheels wrap carbon-ceramic brakes — relentless, fade-free stopping, lap after lap.' },
  },
  {
    p: 0.50, pos: [5.7, 1.0, 0.1], tgt: [0, 0.6, 0], phase: 'Exterior',
    card: { n: '03', side: 'left', tag: 'Aerodynamics', title: 'Wind-shaped flanks', desc: 'Every surface is sculpted in the tunnel; deep side intakes feed cool air to the mid-mounted engine.' },
  },
  {
    p: 0.60, pos: [2.5, 0.95, -5.4], tgt: [0, 0.7, -2.2], phase: 'Exterior',
    card: { n: '04', side: 'right', tag: 'Rear', title: 'Active wing & quad exhaust', desc: 'A deployable rear wing trims drag on the straights; quad titanium pipes give it an unmistakable voice.' },
  },
  { p: 0.69, pos: [2.7, 1.35, 1.7], tgt: [0, 0.95, 0.4], phase: 'Interior' },
  {
    p: 0.78, pos: [1.35, 1.5, 1.0], tgt: [-0.2, 0.98, 0.1], phase: 'Interior',
    card: { n: '05', side: 'left', tag: 'Cockpit', title: 'Driver-focused dash', desc: 'A wraparound digital cluster and a squared-off wheel keep every control a fingertip away at 300 km/h.' },
  },
  {
    p: 0.86, pos: [1.5, 1.55, -0.5], tgt: [-0.1, 0.9, -0.3], phase: 'Interior',
    card: { n: '06', side: 'right', tag: 'Cabin', title: 'Carbon racing seats', desc: 'Hand-stitched leather over carbon shells holds you through corners — without fatigue on the long drive home.' },
  },
  {
    p: 0.95, pos: [4.0, 1.5, 6.8], tgt: [0, 0.5, 0], phase: 'The Collection',
    card: { n: '—', side: 'left', tag: 'Next', title: 'One of six in the collection', desc: 'Each glass pavilion reveals another machine. In the full build, keep scrolling to meet the next.' },
  },
  { p: 1.00, pos: [0.2, 3.2, 10.5], tgt: [0, 0.5, 0], phase: 'The Collection' },
]

// cloth cover visible fully before this, lifts/fades across the reveal window
export const CLOTH = { start: 0.05, end: 0.17 }
