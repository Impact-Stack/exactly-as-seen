# TASK: Apply, verify and ship the Google tag + SEO patch (impactstack.africa)

Save this file as `TASK.md` in the repo root, put `google-tag-and-seo.patch` next to it, start Claude Code in **plan mode**, and say: "Read TASK.md and start at Step 1."

## Goal

Apply the prepared patch on a new branch, prove it builds and behaves correctly, push the branch, and open a pull request. **Do not merge to `main` and do not deploy to production.**

## What the patch contains (for review, do not re-implement)

- Google tag `AW-18415273814` added to `index.html` and to every `public/*/index.html` landing page.
- Homepage title and description updated (`index.html`, `src/pages/Index.tsx`, `src/components/SEO.tsx`). New title: `Custom Web Apps & Business Software for SMEs | ImpactStack Africa Cape Town`.
- Per-service SEO fields (`seoTitle`, `seoDescription`, `keywords`) in `src/lib/services.ts`, used by `src/pages/ServicePage.tsx`, for: websites, web, ecommerce, booking, analytics, automation.
- Two existing static pages rewritten for SME / consultation-first wording: `public/software-development-cape-town/` and `public/tech-consulting-south-africa/`.
- Two new static pages: `public/custom-business-software-for-smes/` and `public/custom-software-cost-south-africa/` (each with FAQ text visible on the page and matching `FAQPage` JSON-LD).
- `public/sitemap.xml` updated with the new pages and new `lastmod` dates.
- `src/components/Footer.tsx`: four plain `<a>` links to the static pages (they must not use React Router `Link`, because those URLs are static HTML, not SPA routes).
- `seo/keyword-plan.csv`: all 68 keywords with Keyword Planner volumes (South Africa, 25 Oct 2026).

## Rules

1. Do not invent facts: prices, client names, testimonials, statistics, credentials. If something is missing, leave it out and list it in the final summary.
2. **Do not change pricing.** `/pricing`, `src/lib/pricing.ts`, the `priceStart` field, and the `flagshipOfferStructuredData` in `Index.tsx` stay exactly as they are.
3. Keep changes minimal and in the existing code style. If the patch fails to apply cleanly, stop and report; do not hand-merge silently.
4. Never push to `main`. Never run production deploy commands.
5. Stop and ask before anything that touches hosting, DNS, environment variables, or secrets.

## Steps

**Step 1: Prepare.** Confirm a clean working tree. Create the branch `seo/keywords-and-google-tag` from the latest `main`. Run `git apply --check google-tag-and-seo.patch` and report the result before applying.

**Step 2: Apply.** Run `git apply google-tag-and-seo.patch`. Commit in logical commits: (a) Google tag, (b) homepage and service-page SEO, (c) new and rewritten static pages + sitemap + footer, (d) `seo/keyword-plan.csv`. Do not commit the patch file itself or this `TASK.md`.

**Step 3: Verify the build.** Run `npm ci`, `npm run build`, `npx tsc -p tsconfig.app.json --noEmit`, `npm run lint` (existing fast-refresh warnings are acceptable; report any new errors) and `npm test`. Everything must pass.

**Step 4: Verify the output.** After `npm run build`, check the built files in `dist/`:
- `grep -l "AW-18415273814"` finds the tag in `dist/index.html`, `dist/investswipe/index.html`, and all seven `dist/*/index.html` static landing pages.
- Each static landing page has exactly one `<h1>`, one `<title>`, one `canonical`, and one `meta description`.
- For the two new pages, every FAQ question and answer in the JSON-LD also appears word for word in the visible HTML.
- `dist/sitemap.xml` is valid XML and lists both new URLs.
- No `R` or `ZAR` price figures appear on the two new pages.

**Step 5: Visual check.** Run `npm run preview`. At 390px and 1280px widths, check and screenshot: the homepage footer (four new links must not break the layout), `/custom-business-software-for-smes`, `/custom-software-cost-south-africa`, `/software-development-cape-town`, `/tech-consulting-south-africa`, `/services/websites`, `/services/ecommerce`. Report anything that looks broken, especially the FAQ blocks (they use `<details>` and the stylesheet has no styling for them) and any horizontal scroll. Fix only what is clearly broken, in the smallest way.

**Step 6: Check SPA behaviour.** In the preview, confirm that clicking the footer links does a full page load to the static pages, and that `/about`, `/pricing`, `/services/web` and an unknown URL still render correctly. Confirm the browser console shows no errors and that the Google tag request is made on the homepage.

**Step 7: Push and open a PR.** Push the branch and open a pull request into `main`. In the PR description include: what changed, the verification results from Steps 3-6, and the open decisions below. Then stop.

## Open decisions (list in the PR, do not decide)

1. `/services/websites` is now optimised for "website development Cape Town" (highest-demand keyword in the data). It pulls against the SME positioning. Owner decides whether to keep it.
2. The homepage title does not contain "software development company South Africa" (top keyword by volume); it is only in the keywords tag.
3. The Google tag loads for every visitor with no consent check. Owner decides whether to add consent handling.
4. The pages' process wording (consultation, scope, proposal, build) and FAQ answers were drafted from existing site content; owner must confirm they reflect how the business works.
5. `/pricing` and the `R 65 000` starting price remain published alongside a cost guide that states no figures.

## Out of scope (owner does these)

Merging and production deploy, Search Console setup and sitemap submission, Google Ads campaign setup, running further Keyword Planner research, SERP checks, writing case studies and collecting reviews.

## Final report from Claude Code

A short summary: commits made, commands run and their results, screenshots taken, anything that failed or looked wrong, the PR link, and the open decisions above.
