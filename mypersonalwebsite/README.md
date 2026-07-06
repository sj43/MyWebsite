# My Personal Website

React + Vite portfolio site for Seung Hun Jang, deployed to GitHub Pages at https://sj43.github.io/MyWebsite/.

## Requirements

- Node.js 20.19 or newer in the Node 20 line
- npm 10 or newer

The expected Node line is recorded in `.nvmrc`, `.node-version`, and `package.json`.

## Scripts

Run commands from this `mypersonalwebsite/` directory.

```bash
npm start           # Start Vite dev server at http://localhost:3000
npm test            # Run Vitest once
npm run test:watch  # Run Vitest in watch mode
npm run build       # Build production assets into build/
npm run preview     # Preview the production build locally
npm run deploy      # Build and publish build/ to the gh-pages branch
```

## Deployment

GitHub Pages serves the `gh-pages` branch. The source branch does not track generated `build/` output; `npm run deploy` builds locally and publishes the generated files with `gh-pages`.

## Project Notes

- Routing uses `HashRouter` so deep links work on GitHub Pages.
- Global CSS lives in `public/css/` and is loaded from `index.html`.
- Portfolio, resume, and case study content lives in the data files under `src/components/`.
- CI runs install, audit, tests, and a production build on pushes and pull requests.
