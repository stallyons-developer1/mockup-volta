// Camera choreography: enter the hall → glass room door opens → inside → covered car
// → cloth pulls off → exterior parts → interior → the collection.
// Car sits at origin inside the glass room; the glass door is at +Z (front).

export const STOPS = [
  { p: 0.00, pos: [2.6, 3.7, 21.5], tgt: [0, 2.3, 8], phase: 'Entering the Pavilion' },
  { p: 0.06, pos: [1.1, 2.3, 14.0], tgt: [0, 1.6, 2], phase: 'Entering the Pavilion' },
  { p: 0.13, pos: [4.7, 2.0, 7.6], tgt: [0, 0.7, 0], phase: 'The Reveal' },
  { p: 0.22, pos: [4.5, 1.0, 5.6], tgt: [0, 0.5, 0.4], phase: 'The Reveal' },
  {
    p: 0.31, pos: [1.9, 0.75, 5.7], tgt: [0, 0.6, 2.4], phase: 'Exterior',
    card: { n: '01', side: 'left', tag: 'Front', title: 'Sculpted nose & LED matrix', desc: 'Adaptive LED-matrix headlights and an active front splitter channel air into downforce the faster you go.' },
  },
  {
    p: 0.41, pos: [3.5, 0.5, 2.6], tgt: [1.0, 0.35, 1.7], phase: 'Exterior',
    card: { n: '02', side: 'right', tag: 'Wheels', title: 'Forged 20″ alloys', desc: 'Lightweight forged wheels wrap carbon-ceramic brakes — relentless, fade-free stopping, lap after lap.' },
  },
  {
    p: 0.51, pos: [5.8, 1.0, 0.1], tgt: [0, 0.6, 0], phase: 'Exterior',
    card: { n: '03', side: 'left', tag: 'Aerodynamics', title: 'Wind-shaped flanks', desc: 'Every surface is sculpted in the tunnel; deep side intakes feed cool air to the mid-mounted engine.' },
  },
  {
    p: 0.61, pos: [2.5, 0.95, -5.5], tgt: [0, 0.7, -2.2], phase: 'Exterior',
    card: { n: '04', side: 'right', tag: 'Rear', title: 'Active wing & quad exhaust', desc: 'A deployable rear wing trims drag on the straights; quad titanium pipes give it an unmistakable voice.' },
  },
  { p: 0.70, pos: [2.7, 1.35, 1.7], tgt: [0, 0.95, 0.4], phase: 'Interior' },
  {
    p: 0.79, pos: [1.35, 1.5, 1.0], tgt: [-0.2, 0.98, 0.1], phase: 'Interior',
    card: { n: '05', side: 'left', tag: 'Cockpit', title: 'Driver-focused dash', desc: 'A wraparound digital cluster and a squared-off wheel keep every control a fingertip away at 300 km/h.' },
  },
  {
    p: 0.87, pos: [1.5, 1.55, -0.5], tgt: [-0.1, 0.9, -0.3], phase: 'Interior',
    card: { n: '06', side: 'right', tag: 'Cabin', title: 'Carbon racing seats', desc: 'Hand-stitched leather over carbon shells holds you through corners — without fatigue on the long drive home.' },
  },
  {
    p: 0.95, pos: [4.0, 1.5, 7.2], tgt: [0, 0.5, 0], phase: 'The Collection',
    card: { n: '—', side: 'left', tag: 'Next', title: 'One of six in the collection', desc: 'Each glass pavilion reveals another machine. In the full build, keep scrolling to meet the next.' },
  },
  { p: 1.00, pos: [2.2, 3.4, 18], tgt: [0, 1.6, 4], phase: 'The Collection' },
]

// cloth pulls off after you are inside the room
export const CLOTH = { start: 0.14, end: 0.25 }
