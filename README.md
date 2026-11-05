# Philodox website

Bilingual, static Next.js site for Philodox. English and Thai routes are generated at build time. No backend or submission endpoint is required.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/en/` or `http://localhost:3000/th/`.

## Build and verify

```bash
npm run typecheck
npm run lint
npm run build
```

`next build` writes the fully static site to `out/`. The canonical pages are `/en/` and `/th/`, each with six section anchors. The root `index.html` takes visitors to `/en/`; former section routes use lightweight fallback pages that take visitors to the matching anchor.

## Deploy to Vercel

Import the repository as a Next.js project. These optional environment variables default to the confirmed public values in `.env.example`:

- `NEXT_PUBLIC_SITE_URL`: `https://philodox.site` (no trailing slash).
- `NEXT_PUBLIC_CONTACT_EMAIL`: `contact@philodox.site`.

Use `npm run build` as the build command and `out` as the output directory if Vercel does not infer the static export. The project uses `output: "export"` and `trailingSlash: true`; it does not need a running Next.js server.

## Edit content

- English and Thai service descriptions and page metadata: `src/content/copy.ts`.
- Compact single-page copy: `src/content/onePage.ts`.
- Company, URL, contact, social, founder records, and route configuration: `src/content/config.ts`.
- Layout and visual styling: `src/app/globals.css` and `src/app/one-page.css`.
- Main page: `src/components/OnePage.tsx`; section navigation: `src/components/SectionNavigation.tsx`; shared header, footer, and graphics: `src/components/site.tsx`.
- Hero industry labels and metrics: `src/content/onePage.ts`; hero layout: `src/app/one-page.css`. The earlier orbital carousel and its concept images remain in the repository but are no longer displayed on the homepage.
- SVG assets: `public/brand/`, `public/og.svg`, and `src/app/icon.svg`. The social sharing raster is `public/og.png`; regenerate it from `public/og.svg` after changing the design.

The two confirmed founder records and GitHub links are in `src/content/config.ts`. Thaingern's profile uses the supplied photo; Punnawit's uses initials until an approved photo is available. Keep English and Thai content in sync when adding sections or changing labels.

See `CONTENT_NEEDED.md` for optional material that would strengthen the site.
