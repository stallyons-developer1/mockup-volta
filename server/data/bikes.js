// Product data served to the front-end. In a full build this would live in
// MongoDB; here it doubles as seed data and offline fallback.
export const BIKES = [
  {
    slug: 'volta-core',
    name: 'VOLTA Core',
    tagline: 'The everyday hyperbike.',
    topSpeed: 232,
    zeroToHundred: 2.9,
    range: 380,
    price: 18900,
  },
  {
    slug: 'volta-apex',
    name: 'VOLTA Apex',
    tagline: 'Track-bred, street-legal.',
    topSpeed: 268,
    zeroToHundred: 2.4,
    range: 412,
    price: 24900,
  },
  {
    slug: 'volta-halo',
    name: 'VOLTA Halo',
    tagline: 'The limited launch edition.',
    topSpeed: 268,
    zeroToHundred: 2.2,
    range: 430,
    price: 32900,
  },
]
