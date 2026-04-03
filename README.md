# 💕 Happy Birthday Bujji — React Birthday Webpage

Romantic, fully mobile-responsive React page for Saju's Bujji. 🌹

---

## 🚀 Setup

```bash
npm install
npm start
# Opens at http://localhost:3000
```

---

## 🖼️ Adding Your Photos & Video

### Step 1 — Create an assets/gallery folder
```
src/
  assets/
    hero-bg.jpg          ← Bujji's hero (full screen) photo
    bujji-video.mp4      ← Your ~10 second video
    gallery/
      photo1.jpg
      photo2.jpg
      ...
      photo10.jpg
```

### Step 2 — Hero background photo
In `src/components/Hero.jsx`, replace line:
```js
const HERO_BG = "https://placehold.co/...";
```
with:
```js
import heroBgImg from '../assets/hero-bg.jpg';
const HERO_BG = heroBgImg;
```

### Step 3 — Gallery photos
In `src/components/Gallery.jsx`, add imports at the top:
```js
import p1  from '../assets/gallery/photo1.jpg';
import p2  from '../assets/gallery/photo2.jpg';
// ... up to p10
```
Then replace each `src:` in the `PHOTOS` array:
```js
const PHOTOS = [
  { src: p1,  caption: "The day our eyes first met… ✨" },
  { src: p2,  caption: "Our first adventure together 🌄" },
  // ...
];
```

### Step 4 — Video
In `src/components/VideoSection.jsx`:
```js
import myVideo from '../assets/bujji-video.mp4';
const VIDEO_SRC = myVideo;
```

---

## 📝 Personalising Text

| File | What to edit |
|---|---|
| `src/components/Hero.jsx` | Subtitle text under "Happy Birthday Bujji" |
| `src/components/Gallery.jsx` | `PHOTOS[].caption` values |
| `src/components/Timeline.jsx` | `MILESTONES` — replace with your real memories |
| `src/components/LoveLetter.jsx` | The 3 paragraphs + signature |

---

## 🌐 Deploy to GitHub Pages

```bash
# Install gh-pages once
npm install --save-dev gh-pages

# In package.json set:
#   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/bujji-birthday"

# Deploy
npm run deploy
```

Your URL: `https://YOUR_GITHUB_USERNAME.github.io/bujji-birthday`

---

## ✨ Features
- 📱 Fully mobile-first responsive
- 🌸 Animated floating rose petals + Ken Burns hero
- 💫 Shimmer gold name animation
- 💕 Pulsing heartbeat row
- 🎉 Confetti burst on page load
- 🎠 **Swiper Coverflow Carousel** — 3D flip gallery with autoplay
- 🎬 Video section with ripple play button
- 📅 Scroll-triggered decade timeline
- 💌 Animated love letter on rose background

REAMDEEOF