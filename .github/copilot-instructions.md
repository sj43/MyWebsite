# Copilot Instructions

## Project Overview

Personal portfolio website for Seung Hun Jang, built with React + Vite and deployed to GitHub Pages at `https://sj43.github.io/MyWebsite`.

## Commands

All commands must be run from the `mypersonalwebsite/` subdirectory:

```bash
cd mypersonalwebsite
npm start              # Dev server at localhost:3000
npm run build          # Production build (outputs to build/)
npm test               # Run all tests once (vitest run)
npm run test:watch     # Run tests in watch mode
npm run deploy         # Build + deploy to GitHub Pages (predeploy runs build automatically)
```

To run a single test file:
```bash
npm test -- src/components/resume/resumeData.test.js
```

## Architecture

- **Entry point**: `src/index.jsx` → `src/App.jsx`
- **Router**: `HashRouter` wraps the app in `index.jsx` (required for GitHub Pages — no server-side routing). Use `MemoryRouter` in tests.
- **Routes**:
  - `/` → `MainPage` (single-page portfolio with all sections)
  - `/project/:slug` → `CaseStudy` (deep-dive page per project)
- **Data layer** — all personal content lives in TypeScript data files:
  - `src/components/resume/resumeData.ts` — name, role, bio, email, education, experience, skills, achievements
  - `src/components/resume/projectData.ts` — projects (each with `category` for filter grouping)
  - `src/components/casestudy/caseStudyData.ts` — detailed case study content (slug, sections, outcomes, diagrams)
- **Type definitions**: `src/types/index.ts` exports TypeScript interfaces (`ResumeData`, `Project`, `ProjectData`, etc.)
- **Components**: Functional React components under `src/components/`, each in its own folder
- **Styling**: Global CSS in `public/css/` loaded via `<link>` tags in `index.html` (not imported in JS). CSS load order matters: `default.css → layout.css → media-queries.css → magnific-popup.css → modern.css`. `modern.css` loads last and uses `!important` to override legacy styles in `default.css`.
- **Theme**: Dark/light mode toggle managed in `App.jsx` state, persisted to `localStorage`, applied via `data-theme` attribute on `<html>`. Light theme tokens are defined in `[data-theme="light"]` block in `modern.css`.
- **Font**: Inter (single font, loaded from Google Fonts in `index.html`). All three CSS font variables (`--font-display`, `--font-body`, `--font-mono`) point to Inter.

## Layout

Two-column sticky sidebar layout inspired by brittanychiang.com:

- **`.site-layout`** — top-level flex container (`layout.css`)
- **Left column** — `<aside class="sidebar-col">` rendered by `header.jsx`:
  - `position: sticky; top: 0; height: 100vh`
  - Contains: large name, bio text, vertical section nav with animated line indicators, social icons, theme toggle
  - No top navbar — all navigation lives in this sidebar
  - Active section tracked via `IntersectionObserver` using a `Map` of visible sections; picks the first visible section in DOM order
  - `NAV_ITEMS` array in `header.jsx` defines nav order — must match section order in `App.jsx`
- **Right column** — `<main class="content-col">`:
  - Section order: Work → Projects → Skills → Achievements → Education → About → Contact → Footer
  - Sections separated by `border-bottom` and padding from `.content-col section` rule
- **Spotlight cursor effect**: `body::before` radial gradient follows the mouse via `--mouse-x`/`--mouse-y` CSS vars (set in `App.jsx` `mousemove` handler)
- **Mobile** (≤860px): columns stack vertically; sidebar becomes non-sticky (`media-queries.css`)

## Color Scheme

Monochrome dark/charcoal/grey palette — no yellow, amber, purple, or blue accent colors:
- Dark mode: `#111111` bg, `#1A1A1A` surface, `#E8E8E8` text, `#999999` muted, `#555555` subtle
- Light mode: `#F5F5F5` bg, `#FFFFFF` surface, `#111111` text
- Design tokens live in `:root` in `default.css`; light overrides in `[data-theme="light"]` in `modern.css`
- All section backgrounds are transparent (inherit body bg) — do not add per-section background colors

## Key Conventions

- **Content updates go in data files only**: Edit `resumeData.ts`, `projectData.ts`, or `caseStudyData.ts`. Components receive data as props from `App.jsx` and do not own content.
- **Props flow**: `App.jsx` imports data files and passes them as props. No state management library. `theme` and `toggleTheme` are threaded as props.
- **Header = Sidebar**: `header.jsx` renders the sticky left sidebar. Do not add a traditional top navbar.
- **Section headings**: Each section uses a `.row` with `.three.columns.header-col` (containing `<h1><span>Label</span></h1>`) and `.nine.columns.main-col`. The header label style is defined globally via `.header-col h1 span` in `modern.css`. All section headers must use this same pattern.
- **Education is its own component**: `src/components/education/education.jsx` renders `<section id="education">`, separate from `resume.jsx` (which renders `<section id="resume">` containing only Work).
- **Portfolio cards**: Do not add the `.reveal` CSS class to portfolio cards — they re-render on filter change and new DOM elements won't be observed by the IntersectionObserver.
- **Case study routing**: Each project can have a `/project/:slug` page. The `slug` in `caseStudyData.ts` must match the URL. `SLUG_MAP` in `portfolio.jsx` and `EXPERIENCE_CASE_STUDIES` in `resume.jsx` map project names to slugs.
- **Terminal component**: Interactive overlay opened via FAB button or `/`/`` ` `` key. Commands in the `COMMANDS` object pull from `resumeData`.
- **Test mocks required**: Tests must mock `IntersectionObserver`, `localStorage`, and `matchMedia` (not in jsdom). See `App.test.jsx`. Always use `vi.fn()` (Vitest), not `jest.fn()`.
