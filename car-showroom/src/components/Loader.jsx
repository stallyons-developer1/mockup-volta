import { useProgress } from '@react-three/drei'

export default function Loader() {
  const { active, progress } = useProgress()
  return (
    <div className={`loader ${!active && progress >= 100 ? 'hide' : ''}`}>
      <div className="loader__inner">
        <div className="loader__txt">AUROM — preparing the pavilion</div>
        <div className="loader__bar"><i style={{ transform: `scaleX(${progress / 100})` }} /></div>
      </div>
    </div>
  )
}
