# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # Build optimized production bundle
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

No test suite is configured.

## Architecture

**Stack:** React 18 + Vite, React Router DOM v7, Framer Motion, MUI, Three.js / React Three Fiber

**Routing** (`src/App.jsx`): Two route groups distinguished by animation behavior:
- Transition routes (`/`, `/home`) — wrapped in `AnimatePresence` for page-enter/exit animations
- Non-transition routes — all other pages (artists, shows, releases, about)

**Pages** (`src/pages/`): One folder per page/feature. Artist pages live in `pages/artists/`, show/tour pages in `pages/shows/`. Each artist page is self-contained with its own video background, image carousel, and tracklist.

**Responsive breakpoint:** 768px. Most complex pages have separate desktop and mobile render paths rather than purely CSS-based responsiveness.

**Navigation** (`src/utils/`): `TopLeft.jsx` (desktop) and `TopLeftMobile.jsx` / `TopBarMobile.jsx` handle the nav menu. They render at `z-index: 2000` over all page content.

**Animations** (`src/animations/`): Framer Motion variants for page transitions. Import from here rather than defining inline.

**3D model** (`src/pages/home/`): Loads `yabish3d-compressed.glb` via React Three Fiber. Custom FBM shader is in `src/shader/fbmShader.js`.

**Fonts** (`src/hooks/useFont.jsx`): Returns the correct font family (EN or ZH) based on content. Font URLs come from `.env` via `REACT_APP_FONT_*` variables.

**Media assets:** Artist images are served from Cloudflare Images (`imagedelivery.net`). Videos use `.webm` with `.mp4` fallbacks and are preloaded for smooth transitions.

**Styling:** MUI + Emotion for component-level styles; `src/index.css` for globals (scrollbar hiding, font-face declarations).
