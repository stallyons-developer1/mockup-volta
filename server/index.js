import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'path'
import { existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { connectDB } from './config/db.js'
import { api } from './routes/api.js'

const app = express()
const PORT = process.env.PORT || 4000
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const clientDist = path.join(__dirname, '..', 'client', 'dist')

app.use(cors())
app.use(express.json())

// --- API ---
app.use('/api', api)

// --- Serve the built React app in production (single-service deploy) ---
if (existsSync(clientDist)) {
  app.use(express.static(clientDist))
  // Any non-API route falls back to the SPA entry point.
  app.get(/^\/(?!api).*/, (_req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'))
  })
} else {
  // Dev mode (Vite serves the UI on :5173) — just report the API is alive.
  app.get('/', (_req, res) => res.json({ service: 'VOLTA API', status: 'running' }))
}

async function start() {
  await connectDB() // never throws; falls back to in-memory
  app.listen(PORT, () => {
    console.log(`🏍️  VOLTA running on http://localhost:${PORT}`)
  })
}

start()
