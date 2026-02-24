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
  - `src/components/resume/projectData.ts` — projects and activities
  - `src/components/casestudy/caseStudyData.ts` — detailed case study content (slug, sections, outcomes, diagrams)
- **Type definitions**: `src/types/index.ts` exports TypeScript interfaces (`ResumeData`, `Project`, `ProjectData`, etc.)
- **Components**: Functional React components under `src/components/`, each in its own folder
- **Hooks**: `src/hooks/useScrollReveal.js` — attaches an `IntersectionObserver` to a ref and adds `reveal-visible` CSS class when the element enters the viewport (animates once)
- **Styling**: Global CSS in `public/css/` (loaded via `public/index.html` `<link>` tags, not imported in JS). Component styles use classes defined there.
- **Static assets**: `public/images/`, `public/js/` — loaded via script tags in `public/index.html`, not npm packages
- **Theme**: Dark/light mode toggle managed in `App.jsx` state, persisted to `localStorage`, applied via `data-theme` attribute on `<html>`

## Key Conventions

- **Content updates go in data files only**: Edit `resumeData.ts`, `projectData.ts`, or `caseStudyData.ts` — components receive data as props from `App.jsx` and do not own content.
- **Props flow**: `App.jsx` imports both data files and passes them as props (`resumeData`, `projectData`). No state management library is used. `theme` and `toggleTheme` are also threaded as props to components that need them.
- **Case study routing**: Each project can have a `/project/:slug` deep-dive page. The `slug` field in `caseStudyData.ts` must match the URL slug. Sections can optionally include a `diagramKey` to render a diagram via the `Diagram` component.
- **Terminal component**: An interactive terminal overlay (`src/components/terminal/terminal.jsx`) can be opened via the FAB button or by pressing `/` or `` ` `` (when not focused on an input). Commands are defined in the `COMMANDS` object and pull from `resumeData` at runtime.
- **Test mocks required**: Tests must mock `IntersectionObserver`, `localStorage`, and `matchMedia` (not available in jsdom). See `App.test.jsx` for the standard mock pattern. Always use `vi.fn()` (Vitest), not `jest.fn()`.
- **`Testimonials` component**: Exists but is commented out in `App.jsx`. Can be re-enabled by uncommenting.
- **`imagebaseurl`**: Defined in `resumeData.ts` — update for production image paths if images are served from a different base URL.
