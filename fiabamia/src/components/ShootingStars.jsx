// Lightweight CSS-animated shooting stars — robust (no WebGL dependency).
const STARS = [
  { top: '12%', left: '8%', delay: '0s', dur: '7s', len: 140 },
  { top: '22%', left: '62%', delay: '2.4s', dur: '6s', len: 180 },
  { top: '38%', left: '30%', delay: '4.8s', dur: '8s', len: 120 },
  { top: '8%', left: '82%', delay: '3.6s', dur: '6.5s', len: 160 },
  { top: '54%', left: '72%', delay: '6.2s', dur: '7.5s', len: 150 },
  { top: '66%', left: '18%', delay: '1.5s', dur: '9s', len: 130 },
]

export default function ShootingStars() {
  return (
    <div className="shooting" aria-hidden="true">
      {STARS.map((s, i) => (
        <span
          key={i}
          className="shooting__star"
          style={{ top: s.top, left: s.left, '--delay': s.delay, '--dur': s.dur, '--len': `${s.len}px` }}
        />
      ))}
    </div>
  )
}
