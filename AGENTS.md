# AGENTS.md

## Cursor Cloud specific instructions

This is a static React SPA (no backend/database) for a car AC services business in Riyadh. The main application source lives in `ac-aleppo/`.

### Quick Reference

| Action | Command | Working directory |
|--------|---------|-------------------|
| Install deps | `npm install` | `ac-aleppo/` |
| Lint | `npm run lint` | `ac-aleppo/` |
| Build | `npm run build` | `ac-aleppo/` |
| Dev server | `npm run dev` | `ac-aleppo/` |

### Notes

- The project uses `rolldown-vite` (aliased as `vite` via npm overrides in `package.json`). The dev server starts on port **5173** by default.
- Use `--host 0.0.0.0` with the dev server if you need network-accessible access: `npm run dev -- --host 0.0.0.0`.
- There is no test framework configured; lint (`eslint .`) is the primary automated check.
- The `Old/` directory at the repo root contains a previous iteration and is not part of the active project.
- Deployment target is Vercel (see `vercel.json` for SPA rewrite rules).
