// Thin API client. Uses the Vite proxy (/api -> Express) in development.
//
// DEMO MODE: on a frontend-only host (e.g. Vercel) there is no backend, so the
// calls below fall back to a friendly success response. This keeps the mockup
// delightful for a client demo. When a real backend IS reachable (local dev, or
// once deployed), its actual responses — including validation errors — are used.

const DEMO_MESSAGES = {
  '/newsletter': 'You are on the list. Welcome to VOLTA.',
  '/contact': 'Message received. Our crew will reach out.',
}

async function post(path, body) {
  try {
    const res = await fetch(`/api${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    // A real backend answers with JSON (success or a validation message).
    const data = await res.json().catch(() => null)
    if (data && typeof data.ok === 'boolean') return { ok: res.ok, ...data }
    // No real API behind this path (404 / static host) → demo success.
    return { ok: true, demo: true, message: DEMO_MESSAGES[path] }
  } catch {
    // Network error / no backend → demo success so the UI never breaks.
    return { ok: true, demo: true, message: DEMO_MESSAGES[path] }
  }
}

export const subscribe = (email) => post('/newsletter', { email })
export const sendContact = (payload) => post('/contact', payload)

export async function getBikes() {
  try {
    const res = await fetch('/api/bikes')
    if (!res.ok) throw new Error('bad status')
    return await res.json()
  } catch {
    return null
  }
}
