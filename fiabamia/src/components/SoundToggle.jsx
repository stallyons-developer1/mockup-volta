import { FOOTER } from '../data/content.js'

// Minimal bottom-right ambient sound indicator (matches the live "···· SOUND").
export default function SoundToggle({ sound, onToggle }) {
  return (
    <button className={`sound-fab label ${sound ? 'is-on' : ''}`} onClick={onToggle} aria-pressed={sound}>
      <span className="sound-fab__bars" aria-hidden="true"><i /><i /><i /><i /></span>
      Sound
    </button>
  )
}
