<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# hireloop-client

Early-stage Next.js 16 App Router app (React 19, Tailwind v4) with Better Auth + MongoDB. Single route so far; most of the app is still to be built. npm is the package manager (`package-lock.json`).

## Commands

- `npm run dev` — Next dev; Turbopack is the default bundler. The server writes PID/port to `.next/dev/lock`; check it before starting a second server.
- `npm run typecheck` — `tsc --noEmit`. No test framework or `test` script exists; do not claim tests pass.
- `npm run lint` — ESLint flat config (`eslint` with no path = whole repo).
- `npm run build` — full verification before finishing a change.
- `npm run format` — Prettier, but only `**/*.{ts,tsx}`; CSS/JSON/Markdown are untouched.

## Structure

- `app/` — App Router. `app/layout.tsx` mounts `ThemeProvider`; `app/page.tsx` is the only page.
- `app/api/auth/[...all]/route.ts` — Better Auth handler via `toNextJsHandler(auth)`.
- `lib/auth.ts` — server auth config. `lib/auth-client.ts` — browser client. `lib/utils.ts` — re-exports `cn`.
- `components/ui/` — generated shadcn components only. `components/theme-provider.tsx` also binds `d` to toggle dark mode.
- Import alias: `@/*` maps to the repo root.

## UI stack differs from typical shadcn

- shadcn style is `base-nova` on **Base UI primitives (`@base-ui/react`), not Radix**. Add components with `npx shadcn@latest add <name>`; `components.json` is already configured. Don't hand-port Radix-based examples.
- `cn` comes from the `cn` npm package, not `clsx`/`tailwind-merge`; generated components sometimes import from `"cn"` directly.
- Tailwind v4 is CSS-first: there is no `tailwind.config.*`. Theme tokens and CSS variables live in `app/globals.css`.
- Prettier enforces no semicolons, double quotes, LF, and Tailwind class sorting.

## Auth and environment

- `lib/auth.ts` hardcodes `mongodb://localhost:27017` and database `hireloopdb`; a local MongoDB must be running or auth routes fail.
- Requires `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, and `GOOGLE_CLIENT_ID`/`GOOGLE_CLIENT_SECRET`, `GITHUB_CLIENT_ID`/`GITHUB_CLIENT_SECRET` for social login. `.env*` is gitignored; only the first two are currently set locally.
- Browser code only receives `NEXT_PUBLIC_*` variables. `lib/auth-client.ts` reads `BETTER_AUTH_URL`, which is not exposed to the browser (it falls back to same-origin); use `NEXT_PUBLIC_*` for client-side config.
