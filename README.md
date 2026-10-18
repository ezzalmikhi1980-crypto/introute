# The International Route | المسار الدولي

Bilingual (English / Arabic, RTL) logistics website with an animated globe, glowing air and sea routes between Amman, Aqaba and the world, and cinematic scroll scenes (cargo plane, container ship, port cranes).

Built with [Vite](https://vite.dev) and TypeScript (strict mode). No framework.

## Structure

```
index.html            page markup (Home, Services, Quote, Partners)
public/               static files copied as is (favicon, robots.txt)
src/
  env.d.ts            lets TypeScript import .css files
  main.ts             entry point
  styles.css          all styles
  js/
    utils.ts          $ and T (bilingual text helper)
    content.ts        services, partners, quote form, process, lanes, FAQ
    router.ts         EN/AR language toggle and hash router
    globe.ts          canvas globe, routes, city labels, HUD, cinematic scenes
.github/workflows/    GitHub Pages deploy
tsconfig.json         TypeScript settings (strict)
```

## Run

```bash
npm install
npm run dev        # local dev server
npm run typecheck  # TypeScript check only
npm run build      # type check, then production build in dist/
npm run preview  # preview the build
```

## Deploy on GitHub Pages

1. Push this folder to a GitHub repository on the `main` branch.
2. In the repository go to Settings, then Pages, and set Source to "GitHub Actions".
3. Every push to `main` builds and publishes the site automatically.

## Edit

- Text and lists: `index.html` (home sections, footer) and `src/js/content.ts`. Every text has an English and an Arabic version.
- Colors and fonts: the `:root` variables at the top of `src/styles.css`.
- City list and routes: `CI`, `NM` and route arrays in `src/js/globe.ts`.

## Before launch

- Replace the placeholder phone number and email in the footer.
- Replace the placeholder partner logos, stats and transit times.
- The quote form has no backend yet; connect it to email or a form service.
- Have a native speaker review the Arabic copy.
