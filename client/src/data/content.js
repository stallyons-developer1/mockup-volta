// Central content for the VOLTA experience. Falls back gracefully if the
// backend is offline — these values are the defaults the UI renders with.

export const CHAPTERS = [
  {
    num: '01',
    title: 'Sculpted\nby airflow',
    body: 'Every surface is a decision. A monocoque exoskeleton carves the wind into downforce, so the faster you go, the more planted VOLTA feels.',
    glyph: 'V',
    stats: [
      { k: '0.21', v: 'Drag coefficient' },
      { k: '184kg', v: 'Dry weight' },
    ],
  },
  {
    num: '02',
    title: 'Instant,\nsilent torque',
    body: 'A dual-axial flux motor delivers its full twist from the first degree of throttle. No gears, no lag — only a seamless, surging line of acceleration.',
    glyph: '⚡',
    stats: [
      { k: '0-100', v: '2.4 seconds' },
      { k: '214Nm', v: 'Peak torque' },
    ],
  },
  {
    num: '03',
    title: 'Range that\nforgets limits',
    body: 'A structural 21700 cell pack doubles as the chassis spine. Charge to eighty percent in the time it takes to drink a coffee.',
    glyph: '∞',
    stats: [
      { k: '412km', v: 'Real-world range' },
      { k: '18min', v: '10–80% charge' },
    ],
  },
  {
    num: '04',
    title: 'A mind that\nrides with you',
    body: 'Predictive traction, lean-aware regen and an adaptive cockpit that learns your lines. VOLTA reads the road a thousand times a second.',
    glyph: '◎',
    stats: [
      { k: '1000Hz', v: 'Sensor polling' },
      { k: 'OTA', v: 'Always evolving' },
    ],
  },
]

export const SHOWCASE = [
  { index: '/01', big: 'AERO', title: 'Active winglets', desc: 'Deploy above 90 km/h to glue the rear to the tarmac.' },
  { index: '/02', big: 'HALO', title: 'Matrix beam', desc: 'A single adaptive light that paints the corner before you lean.' },
  { index: '/03', big: 'GRIP', title: 'Vector braking', desc: 'Regen and friction blended per-wheel for telepathic stops.' },
  { index: '/04', big: 'CORE', title: 'Liquid cell pack', desc: 'Immersion-cooled to hold peak power lap after lap.' },
  { index: '/05', big: 'SYNC', title: 'Neural cockpit', desc: 'A dash that fades away until the exact moment you need it.' },
]

export const SWATCHES = [
  { name: 'Voltage Lime', hex: '#c6ff3a', rgb: '198, 255, 58' },
  { name: 'Plasma Cyan', hex: '#6ad7ff', rgb: '106, 215, 255' },
  { name: 'Magma Orange', hex: '#ff6b2c', rgb: '255, 107, 44' },
  { name: 'Ultra Violet', hex: '#b78bff', rgb: '183, 139, 255' },
  { name: 'Signal Red', hex: '#ff3b5c', rgb: '255, 59, 92' },
]

export const STATS = [
  { num: '268', unit: 'km/h', label: 'Top speed' },
  { num: '2.4', unit: 's', label: '0 — 100 km/h' },
  { num: '412', unit: 'km', label: 'Range' },
  { num: '18', unit: 'min', label: 'Fast charge' },
]

export const MARQUEE = ['Electric', 'Hyperbike', 'Zero Emission', 'Pure Momentum', 'Engineered Silence']
