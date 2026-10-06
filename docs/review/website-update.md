# Website clarity and services update

The homepage now explains what ImpactStack builds and exposes all 16 services. A shared catalogue drives the homepage, the Services overview and individual detail routes. Existing web, mobile, security and government service URLs are functional again.

## Changes

- Precise hero copy, project/service calls to action and a procedural Three.js sculpture in the original blue, cyan, violet and white palette.
- Lazy-loaded renderer, capped frame rate, visibility pausing, reduced-motion support and a static fallback.
- Complete Services page and individual service pages with audiences, deliverables, business benefits and related work.
- Technology logos and capability categories grounded in existing company content and project evidence.
- Refreshed case studies, including Urban Anarchy, a live-site screenshot and a live-site link. Existing project entries remain available.
- NYDA and Google Digital Growth Initiative completion statements, plus the supplied Google Ads Search Certification badge near the bottom of the homepage.
- Service navigation, working case study anchors, updated metadata and sitemap routes.

## Validation

- Production build passes; TypeScript app check passes.
- ESLint passes with seven existing fast-refresh warnings. Removed three unnecessary any casts on decorative image/background props; the fourth pre-existing lint error disappeared when the featured-project component was replaced.
- Existing Vitest suite passes (one baseline test).
- Browser checks pass for the homepage, Services, web service detail and Case Studies at 390px, 768px, 1024px, 1280px and 1440px.
- All 16 service detail routes and an unknown-service 404 checked.
- Case study filters, cross-page anchors, reduced-motion logo animation and WebGL fallback checked.
- No uncaught browser errors in these checks.

## Review items

- This execution environment cannot render WebGL. The screenshots show the static fallback; visually inspect the animated Three.js sculpture on a WebGL-capable browser before merging.
- Programme completion wording follows the company owner's supplied information. Certificate holder names, official programme wording, dates and verification URLs were not supplied and have not been invented.
- Existing bundle-size and Browserslist-age build warnings remain. Three.js is a separate dynamically loaded chunk.

## Screenshots

Desktop and mobile screenshots are included in this folder. Urban Anarchy's live homepage screenshot is stored in public/images/urban-anarchy.webp.
