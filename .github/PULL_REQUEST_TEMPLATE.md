#PR checklist template

## Summary

<!-- One sentence: what does this PR do? -->

## Related Issue

<!-- Link the issue this resolves: "Closes #123" or "Fixes #456" -->

Closes #

## Type of Change

<!-- Check all that apply -->

- [ ] 🐛 Bug fix (non-breaking change that fixes an issue)
- [ ] ✨ New feature (non-breaking change that adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to change)
- [ ] 🎨 UI / UX improvement
- [ ] ⚡ Performance improvement
- [ ] ♻️ Refactor (no functional change)
- [ ] 📝 Content / copy update
- [ ] 🔐 Security fix
- [ ] 🧪 Tests only
- [ ] 🏗️ Infrastructure / CI

## What Changed

<!-- Describe the changes in detail. Include before/after if UI changed. -->

### Before

<!-- Screenshot or description of the old behaviour -->

### After

<!-- Screenshot or description of the new behaviour -->

## How to Test

<!-- Step-by-step instructions for the reviewer to verify this works -->

1. Checkout this branch: `git checkout <branch-name>`
2. Run `npm install && npm run dev`
3. Navigate to `...`
4. Verify `...`

## Checklist

### Code Quality

- [ ] My code follows the existing code style and conventions
- [ ] I have run `npm run lint` with no new errors
- [ ] I have run `npx tsc --noEmit` with no new type errors
- [ ] I have added/updated tests where applicable
- [ ] All existing tests pass (`npm test`)

### Design & UX

- [ ] Changes are responsive (mobile, tablet, desktop)
- [ ] Dark theme looks correct
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Interactive elements have visible focus states
- [ ] Color contrast meets WCAG AA standards

### SEO & Performance

- [ ] New pages have `<SEO>` component with title and description
- [ ] Images have `alt` attributes
- [ ] No new console errors or warnings
- [ ] Bundle size has not increased significantly

### Content

- [ ] All text is correct and professionally worded
- [ ] No placeholder text left in (e.g. "Lorem ipsum")
- [ ] South African English spelling used (e.g. "organisation" not "organization")

### Security (if applicable)

- [ ] No sensitive data (API keys, passwords) committed
- [ ] User inputs are validated
- [ ] No new dependencies with known CVEs

## Deployment Notes

<!-- Any special steps needed during/after deployment? Environment variables? Database changes? -->

N/A

---

> **Reviewer:** Please check the deployment preview URL before approving.
