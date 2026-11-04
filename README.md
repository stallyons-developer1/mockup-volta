# VOLTA — Electric Hyperbike Experience

An immersive, fully-animated brand site built as a **MERN** app, inspired by
award-winning motion sites (ysuriadesign.co, daikifujita.com, webdrift.be).

> A dark, cinematic, scroll-driven experience with a live WebGL hyperbike wheel,
> smooth scrolling, kinetic typography, a colour configurator and a working
> reservation backend.

## ✨ What's inside

**Frontend** (`client/` — React + Vite)
- **Three.js / React Three Fiber** hero — a metallic hyperbike wheel with a
  glowing energy core, drifting particles, in-scene lighting, bloom + vignette,
  and mouse-parallax.
- **GSAP + ScrollTrigger** — masked line reveals, pinned horizontal showcase,
  scrub-driven manifesto, parallax, animated counters.
- **Lenis** smooth scrolling wired into the GSAP ticker.
- Count-up **preloader**, lerp-followed **custom cursor**, scroll **progress**
  rail, **Web-Audio ambient** sound toggle, live **colour configurator** that
  recolours the entire UI *and* the 3D scene.

**Backend** (`server/` — Node + Express + MongoDB)
- `GET  /api/health` · `GET /api/bikes`
- `POST /api/newsletter` · `POST /api/contact`
- Uses MongoDB when `MONGODB_URI` is set; otherwise falls back to an in-memory
  store so it runs instantly with **no database required**.

## 🚀 Run it

```bash
# 1. install everything (client + server + root)
npm run install:all && npm install

# 2. start both (Express on :4000, Vite on :5173)
npm run dev
```

Then open **http://localhost:5173**. The Vite dev server proxies `/api` to the
Express backend automatically.

Run pieces individually if you prefer:

```bash
npm run dev:server   # API only
npm run dev:client   # UI only
```

## 🗄️ Optional: enable MongoDB

```bash
cp server/.env.example server/.env
# set MONGODB_URI=mongodb://localhost:27017/volta  (or an Atlas URI)
```

Leave it empty and the site still works end-to-end via the in-memory store.

## 🎨 Make it yours
- Swap colours / specs in `client/src/data/content.js`.
- Replace the procedural wheel in `client/src/three/HyperbikeScene.jsx` with a
  real `.glb` model via `useGLTF` from `@react-three/drei` whenever you have one.

## 🧱 Stack
React 18 · Vite · Three.js · @react-three/fiber · @react-three/drei ·
@react-three/postprocessing · GSAP · Lenis · Express · Mongoose · MongoDB
