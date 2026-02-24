# Copilot Instructions

## Project Overview

Personal portfolio website for Seung Hun Jang, built with React (Create React App) and deployed to GitHub Pages at `https://sj43.github.io/MyWebsite`.

## Commands

All commands must be run from the `mypersonalwebsite/` subdirectory:

```bash
cd mypersonalwebsite
npm start          # Dev server at localhost:3000
npm run build      # Production build
npm test           # Run tests (watch mode)
npm test -- --watchAll=false  # Run tests once (no watch)
npm run deploy     # Build + deploy to GitHub Pages (runs predeploy automatically)
```

To run a single test file:
```bash
npm test -- App.test.js
```

## Architecture

- **Entry point**: `src/index.js` → `src/App.js`
- **Data layer**: All personal content lives in two plain JS data objects:
  - `src/components/resume/resumeData.js` — name, role, education, work experience
  - `src/components/resume/projectData.js` — projects and activities
- **Components**: Class-based React components under `src/components/`, each in its own folder (`header/`, `about/`, `resume/`, `footer/`, etc.)
- **Styling**: Global CSS lives in `public/css/` (not in `src/`), loaded directly in `public/index.html`. Component styles use the classes defined there.
- **Static assets**: `public/images/`, `public/js/` (jQuery, flexslider, waypoints, etc. loaded via `public/index.html` script tags — not npm packages)

## Key Conventions

- **Content updates go in data files only**: To change personal info, edit `resumeData.js` or `projectData.js` — components consume these as props passed from `App.js`.
- **Disabled sections**: `Portfolio`, `Testimonials`, and `ContactUs` components exist but are commented out in both `App.js` and `header.js` nav. They can be re-enabled by uncommenting.
- **Props flow**: `App.js` imports both data files and passes them as props to child components (`resumeData` and `projectData`). No state management library is used.
- **`imagebaseurl`**: Defined in `resumeData.js` as `http://localhost:3000/` — update this for production image paths if needed.
- **ESLint**: Uses `react-app` config (default CRA). No custom rules.
