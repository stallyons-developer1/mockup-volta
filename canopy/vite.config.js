import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// CANOPY — standalone animated luxury-residential landing (frontend only).
export default defineConfig({
  plugins: [react()],
  server: { port: 5175 },
})
