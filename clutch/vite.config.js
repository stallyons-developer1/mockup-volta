import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// CLUTCH — standalone animated landing (frontend only).
export default defineConfig({
  plugins: [react()],
  server: { port: 5174 },
})
