# NOCTURNO — Interactive Cinematic Manga Experience

A cinematic supernatural horror manga editorial microsite. Built with physical paper textures, heavy ink aesthetics, and camera-like scroll motion that guides the viewer through an unfolding narrative spread.

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS & CSS custom property tokens
- **Animation**: GSAP & ScrollTrigger
- **Smooth Scroll**: Lenis

## Architecture Summary

```
ExperienceShell
├── LenisProvider (unified RAF via GSAP ticker)
│   ├── CinematicScroll (thin runtime mounting useSceneMotion)
│   │   └── useSceneMotion
│   │       ├── navigationMotion (active scene tracking)
│   │       ├── introMotion
│   │       ├── transitions/introToDescent
│   │       ├── descentMotion
│   │       ├── transitions/descentToVoid
│   │       ├── voidMotion
│   │       └── awakeningMotion
│   ├── TopNav (controlled scroll via useLenis)
│   ├── Main Narrative Content
│   │   ├── IntroSection (Scene 01)
│   │   ├── DescentSection (Scene 02)
│   │   ├── VoidSection (Scene 03)
│   │   └── AwakeningSection (Scene 04)
│   └── SiteFooter
```

## Current Project State

- **Phase 1, 2, 2.5, 3, 3.5**: Complete.
  - Approved static visual compositions and authentic photocopied manga ink aesthetics.
  - Tactile, camera-like scroll movement across Scenes 01–04.
  - Single source of truth for motion in `src/animations/`.
  - Extracted modular artwork components in `src/components/artwork/`.
  - Lenis-powered navigation scrolling with `prefers-reduced-motion` support.
- **Phase 4 (Pending)**: Fullscreen red portal mask / camera plunge transition into Scene 04 is intentionally pending.

## Development Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# TypeScript type check
npm run typecheck

# Code linting
npm run lint

# Production build
npm run build
```
