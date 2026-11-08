# Faction Lead – Data Ops Engineering · Orange Business pitch

Open `index.html` in a browser (no server needed; reveal.js and Chart.js are vendored).

- `index.html` — slide content (edit the `[brackets]` in Part 1)
- `css/tokens.css` — Orange brand tokens (from the orange-brand-design skill, do not hand-edit hex)
- `css/theme.css` — Orange Business theme built on the tokens
- `js/radar.js` — radar chart data (AXES / BASELINE / TARGET)
- `js/main.js` — reveal.js init
- `vendor/` — reveal.js 5.1.0, Chart.js 4.4.1

Logo: loaded at runtime from brand.orange.com (needs network access to that host). To work offline, download it once and change the `src` in `index.html`.
Fonts: Helvetica Neue if installed, Arial fallback (licensed fonts are not bundled).
Tips: press `S` for speaker view, `F` for fullscreen, `Esc` for overview, add `?print-pdf` to the URL to export as PDF from Chrome.

## React version (`app/`)

The same deck as reusable, parameterized blocks, with the radar computed from your actions.

```sh
cd app
npm install
npm run dev      # http://localhost:5173, live-reloads as you edit
npm run build    # static site in app/dist (relative paths, works on any host)
```

- `app/src/data/axes.js`: the five axes, each with its nested `actions`. An action's `impact` (`{ retention: 0.5, … }`) can raise any axis. Each axis's 12-month target = `baseline` + the sum of the impacts on it (max 5). The radar, the scores and the axis slides all update from this.
- `app/src/data/deck.js`: the slide order, as `{ type, ...props }` blocks (`cover`, `cards`, `bullets`, `phases`, `axesOverview`; `stack` for vertical groups; `axes` = one slide per axis).
- `app/src/blocks/`: one React component per block type, registered in `index.js`.
- The theme is shared with the static deck: `css/tokens.css` + `css/theme.css` (plus `app/src/app.css` for score/impact chips).

GitHub Pages: push to `main` with Settings → Pages → Source set to "GitHub Actions"; `.github/workflows/pages.yml` builds and deploys `app/`.
