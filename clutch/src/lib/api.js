// Demo-friendly API client. CLUTCH ships as a frontend-only mockup, so form
// submits resolve to a friendly success without a backend. Swap in a real
// endpoint later and the UI keeps working.

export async function subscribe(email) {
  await new Promise((r) => setTimeout(r, 650)) // feel the "work"
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '')) {
    return { ok: false, message: 'Enter a valid email to lock your spot.' }
  }
  return { ok: true, message: "You're on the list. The arena opens soon." }
}
