import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

// Note: StrictMode intentionally omitted — its double-invoke of effects races
// with GSAP .from() tweens and can leave reveal animations stuck hidden.
createRoot(document.getElementById('root')).render(<App />)
