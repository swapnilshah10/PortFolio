# Swapnil Shah — Personal Portfolio

Personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

Live at: [personal.silentkillerop.me](https://personal.silentkillerop.me)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS animations
- **Icons**: Lucide React
- **Deployment**: Self-hosted via Nginx + Cloudflare Tunnel

## Features

- Interactive particle constellation canvas with mouse interaction
- Terminal typewriter animation with real metrics
- Animated count-up stats on scroll
- 3D tilt effect on project cards
- Rotating gradient borders on hover
- Scroll-triggered reveal animations
- Glassmorphism cards
- Full SEO: OpenGraph, Twitter Cards, JSON-LD structured data, sitemap, robots.txt

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3001
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css       # All animations and CSS utilities
│   ├── layout.tsx        # SEO metadata, JSON-LD
│   ├── page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx          # Particles + terminal animation
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── lib/
    └── data.ts           # All content — edit this to update the site
```

## Updating Content

All text content lives in `src/lib/data.ts`. Edit that file to update skills, projects, experience, or contact details — no need to touch any component files.
