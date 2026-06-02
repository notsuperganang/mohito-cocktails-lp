# Mohito Cocktails — Landing Page

A cocktail landing page built as a learning project for GSAP animations with React.

## Tech Stack

- **React 19** + **Vite**
- **GSAP** (ScrollTrigger, SplitText, `useGSAP`)
- **Tailwind CSS v4**

## What I Learned

- GSAP `ScrollTrigger` — scroll-driven animations and pinned sections
- GSAP `SplitText` — animating text word by word
- `useGSAP` hook — scoped animations in React components
- `scrub` — syncing animation progress with scroll position
- `pin: true` — locking a section during an animation sequence
- `mix-blend-mode: screen` — blending video on dark backgrounds
- `overflow-x: clip` vs `hidden` — preventing unwanted scroll containers

## Sections

- **Hero** — scroll-driven video scrubbing + parallax leaves
- **Cocktails** — cocktail list with GSAP entrance animations
- **About** — image grid layout
- **Art** — pinned mask reveal animation
- **Menu** — cocktail slider with slide transitions
- **Contact** — footer with leaf and drink image animations

## Getting Started

```bash
npm install
npm run dev
```
