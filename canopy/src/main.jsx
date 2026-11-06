import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

// StrictMode intentionally omitted — its double-invoke races with GSAP .from().
createRoot(document.getElementById('root')).render(<App />)
