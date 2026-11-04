# 🚀 Deploy VOLTA

The app is packaged as a **single service**: in production Express serves both the
built React app and the `/api` backend from one URL. So you deploy *one* thing.

Recommended (free): **Render** for the app + **MongoDB Atlas** for the database.

---

## Step 1 — (Optional) MongoDB Atlas database
Without this the app still runs using an in-memory store (data resets on restart).
For a real demo with saved sign-ups, do this:

1. Create a free account at https://www.mongodb.com/atlas → create a free **M0** cluster.
2. **Database Access** → add a user (username + password).
3. **Network Access** → Add IP → `0.0.0.0/0` (allow from anywhere).
4. **Connect → Drivers** → copy the connection string, e.g.
   `mongodb+srv://USER:PASS@cluster0.xxxx.mongodb.net/volta?retryWrites=true&w=majority`
   (add `/volta` before the `?` to name the database). Keep it for Step 3.

## Step 2 — Push the code to GitHub
```bash
cd /Users/mac/Documents/ubaid/animated_mokups
git init
git add .
git commit -m "VOLTA — animated hyperbike experience"
git branch -M main
# create an empty repo on github.com first, then:
git remote add origin https://github.com/<you>/volta.git
git push -u origin main
```

## Step 3 — Deploy on Render
1. Sign up at https://render.com (free) and connect your GitHub.
2. **New + → Blueprint** → pick the `volta` repo. Render reads `render.yaml`
   and configures build/start automatically.
   *(Or do it manually: New + → Web Service →*
   *Build Command: `npm install && npm run build`, Start Command: `npm start`.)*
3. If you made an Atlas DB, add an environment variable:
   `MONGODB_URI = <your Atlas string from Step 1>`
4. Click **Deploy**. First build takes ~3–5 min. You get a live URL like
   `https://volta.onrender.com`.

> Render's free tier sleeps after ~15 min idle, so the first visit after a nap
> takes ~30–50s to wake. For an always-on demo, upgrade the service, or use
> **Railway** (https://railway.app) with the same build/start commands.

---

## Alternative — Netlify / Vercel (frontend only)
Fast, but the newsletter/contact API won't run. Only use if you don't need the
forms:
```bash
npm run build --prefix client   # outputs client/dist
```
Drag-and-drop `client/dist` into https://app.netlify.com/drop.

## Local production preview
```bash
npm run build      # builds client/dist + installs server deps
npm start          # serves everything on http://localhost:4000
```
