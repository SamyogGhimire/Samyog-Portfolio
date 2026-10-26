# Samyog Ghimire — Portfolio

Personal portfolio of Samyog Ghimire, DevOps & Cloud Engineer and Full-Stack Developer. A single-page site with a bold purple design, scroll-driven animations and live GitHub and LeetCode activity.

🌐 **Live:** [samyogghimire.com.np](https://samyogghimire.com.np)

---

## Tech Stack

**Frontend:** React 18, Vite, Framer Motion, Lucide icons, EmailJS, plain CSS with design tokens

**Backend:** Node.js, Express.js, Nodemailer (optional contact API)

**Fonts & Icons:** Space Grotesk + Inter (Google Fonts), Devicons CDN

**Deployment:** Vercel (frontend) · Railway (backend)

---

## Features

- Full-screen purple gradient hero with a blended portrait and an animated name reveal
- Sticky project timeline that highlights the project you're reading
- Project cards with a "How it works" pipeline diagram for each project
- Skills cards that scroll sideways as you scroll down (swipeable on mobile)
- Dark / light mode, remembered between visits
- Live GitHub contribution heatmap, streak stats and LeetCode card
- FAQ accordion
- Contact form powered by EmailJS
- Football rolling loader on startup
- Accessible: skip link, keyboard navigation, focus styles and reduced-motion support
- Fully responsive, from phones to wide screens

---

## Sections

- **Hero:** name, roles, links to work and resume
- **Selected Work:** 8 projects, including Self-Healing Kubernetes, AgentWarden, FraudLens, CivicTrack, Terraform Security Lab, Real-Time Fraud Pipeline, GitOps CI/CD Pipeline and FitnessHub
- **Why Work With Me:** three core strengths
- **About:** bio, quick facts, GitHub & LeetCode activity
- **Toolbox:** skills grouped into Cloud & IaC, Containers, CI/CD, Observability, Backend, Frontend, Data and Languages
- **FAQ:** common questions from recruiters and clients
- **Contact:** email, socials, resume and contact form

---

## Project Structure

```
samyog-portfolio/
├── frontend/
│   ├── public/            # Photo.png, favicon
│   └── src/
│       ├── data.js        # All content: projects, skills, FAQ, links
│       ├── index.css      # Design tokens (colours, fonts) and all styles
│       ├── App.jsx        # Theme, loader and page layout
│       ├── components/    # Navbar, Loader, Reveal (scroll animation)
│       └── sections/      # Hero, Work, Why, About, Skills, Faq, Contact
└── backend/
    └── src/index.js       # Express API: /api/contact, /api/health
```

---

## Getting Started

```bash
npm run install:all   # install root, frontend and backend dependencies
npm run dev           # start frontend and backend together
```

The frontend runs at `http://localhost:5173` by default.

### Environment variables

`frontend/.env`

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

`backend/.env` (only needed for the optional `/api/contact` endpoint)

```
EMAIL_USER=
EMAIL_PASS=
EMAIL_TO=
```

---

## Editing Content

Almost everything you'd want to change lives in **`frontend/src/data.js`**: projects, skills, FAQ answers, social links, email and the resume link. The About bio is in `frontend/src/sections/About.jsx`, and the colours are the tokens at the top of `frontend/src/index.css`.

To change the hero photo, replace `frontend/public/Photo.png`. If the new photo has a transparent background, add the `cutout` class to the image in `sections/Hero.jsx`.

---

## Deployment

| Service | Platform |
|---------|----------|
| Frontend | [Vercel](https://vercel.com) |
| Backend | [Railway](https://railway.app) |
| Email | [EmailJS](https://emailjs.com) |
