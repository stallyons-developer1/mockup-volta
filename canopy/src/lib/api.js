// Demo-friendly form handler — this is a frontend-only mockup, so enquiries
// resolve to a friendly confirmation. Swap in a real endpoint later.
export async function enquire(email) {
  await new Promise((r) => setTimeout(r, 650))
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '')) {
    return { ok: false, message: 'Please enter a valid email.' }
  }
  return { ok: true, message: 'Thank you — our residence team will be in touch.' }
}
