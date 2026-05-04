# Samyog Ghimire — Portfolio

Dark-themed, purple-accented developer portfolio built with React + Vite (frontend) and Express.js (backend).

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm run install:all
```

### 2. Set up environment

```bash
cp backend/.env.example backend/.env
# Then edit backend/.env with your Gmail details
```

### 3. Run in development

```bash
npm run dev
```

Frontend → http://localhost:5173  
Backend  → http://localhost:5000

---

## 📁 Project Structure

```
samyog-portfolio/
├── frontend/
│   ├── public/          ← Put your photo here (e.g. photo.jpg)
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   └── Loader.jsx   ← Football loading animation
│       └── pages/
│           ├── Home.jsx     ← Hero section (edit stats here)
│           ├── About.jsx    ← Bio + GitHub/LeetCode contributions
│           ├── Skills.jsx   ← Tech stack icon grid with hover tooltips
│           ├── Projects.jsx ← Project cards with GitHub links
│           ├── Contact.jsx  ← Contact form
│           └── Resume.jsx   ← Resume viewer (Google Drive redirect)
└── backend/
    └── src/index.js         ← Express server with contact API
```

---

## ✏️ Customization Guide

### Add your photo (Home page)
1. Place your photo in `frontend/public/photo.jpg`
2. In `Home.jsx`, remove the placeholder block and add:
   ```jsx
   <img src="/photo.jpg" alt="Samyog Ghimire" />
   ```

### Set GitHub & LeetCode usernames (About page)
Edit the top of `About.jsx`:
```js
const GITHUB_USERNAME = 'your-github-username'
const LEETCODE_USERNAME = 'your-leetcode-username'
```

### Add/Edit Projects (Projects page)
Edit the `projects` array in `Projects.jsx`:
```js
{
  title: 'My Project',
  description: 'What it does...',
  tags: ['React', 'Node.js'],
  github: 'https://github.com/you/repo',
  live: 'https://yourapp.com',
  status: 'completed'  // or 'in-progress'
}
```

### Add/Remove Skills (Skills page)
Edit the `skills` array in `Skills.jsx`. Icons come from the Devicons CDN —
find icon URLs at: https://devicons.github.io/devicon/

### Set Resume link (Resume page)
In `Resume.jsx`:
```js
const RESUME_LINK = 'https://drive.google.com/file/d/YOUR_FILE_ID/view'
```

### Set up Contact Form (Backend)
1. Enable Gmail 2FA: https://myaccount.google.com/security
2. Create App Password: https://myaccount.google.com/apppasswords
3. Add to `backend/.env`:
   ```
   EMAIL_USER=your@gmail.com
   EMAIL_PASS=your_16char_app_password
   EMAIL_TO=your@gmail.com
   ```

---

## 🌐 Deployment

### Frontend (Vercel)
```bash
cd frontend && npm run build
# Upload dist/ folder to Vercel or Netlify
```

### Backend (Railway / Render)
- Deploy the `backend/` folder to Railway or Render
- Set environment variables in their dashboard
- Update the Vite proxy in `frontend/vite.config.js` with your backend URL

---

## 🎨 Theming
All colors are CSS variables in `frontend/src/index.css`.
Main accent: `--purple-main: #7c3aed`
