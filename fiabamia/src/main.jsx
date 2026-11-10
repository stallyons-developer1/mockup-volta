import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import './styles/components.css'

// No StrictMode — avoids double-invoke races with gsap.from timelines.
createRoot(document.getElementById('root')).render(<App />)
