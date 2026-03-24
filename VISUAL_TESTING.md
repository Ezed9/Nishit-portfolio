# Visual Testing

This repo includes a Playwright-based screenshot loop for the home page.

## Commands

```bash
npm run visual:update
npm run visual:check
npm run visual:open
```

## Flow

- `visual:update` captures or refreshes baseline screenshots.
- `visual:check` compares the current UI against those baselines.
- `visual:open` starts Playwright UI mode for interactive review.

## Stability notes

- The tests hit `/?capture=1`, which freezes the 3D hero enough for deterministic screenshots.
- Playwright also runs with reduced motion and disabled CSS animations during capture.
- Baselines are stored under `tests/visual`.

## Recommended loop

1. Run `npm run visual:update` after an intentional UI change.
2. Review the updated images in git diff.
3. Run `npm run visual:check` before committing.

This is better than taking manual screenshots because it gives you a repeatable baseline check that can also run in CI later.
