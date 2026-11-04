import { Router } from 'express'
import mongoose from 'mongoose'
import { Lead } from '../models/Lead.js'
import { BIKES } from '../data/bikes.js'

export const api = Router()

// In-memory fallback used whenever MongoDB isn't connected.
const memory = []
const dbReady = () => mongoose.connection?.readyState === 1

const isEmail = (v) => typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

async function save(doc) {
  if (dbReady()) return (await Lead.create(doc)).toObject()
  const record = { ...doc, _id: `mem_${memory.length + 1}`, createdAt: new Date() }
  memory.push(record)
  return record
}

api.get('/health', (_req, res) => {
  res.json({ ok: true, store: dbReady() ? 'mongodb' : 'memory', leads: memory.length })
})

api.get('/bikes', (_req, res) => {
  res.json({ ok: true, bikes: BIKES })
})

api.post('/newsletter', async (req, res) => {
  const { email } = req.body || {}
  if (!isEmail(email)) return res.status(400).json({ ok: false, message: 'Please enter a valid email.' })
  try {
    await save({ type: 'newsletter', email })
    res.json({ ok: true, message: 'You are on the list. Welcome to VOLTA.' })
  } catch (err) {
    res.status(500).json({ ok: false, message: 'Something sparked wrong. Try again.' })
  }
})

api.post('/contact', async (req, res) => {
  const { name, email, message } = req.body || {}
  if (!isEmail(email)) return res.status(400).json({ ok: false, message: 'Please enter a valid email.' })
  try {
    await save({ type: 'contact', name, email, message })
    res.json({ ok: true, message: 'Message received. Our crew will reach out.' })
  } catch (err) {
    res.status(500).json({ ok: false, message: 'Something sparked wrong. Try again.' })
  }
})
