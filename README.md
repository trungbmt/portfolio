# Portfolio — Pham Duc Trung

Personal portfolio site: hero, about, selected work (with case-study modal), skills, experience, education, writing (with article reader), and contact. Supports English/Vietnamese and light/dark theme.

**Live:** [trungpd.space](https://trungpd.space)

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Bun](https://bun.sh) — package manager & runtime
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [`@li2/analytics`](https://www.npmjs.com/package/@li2/analytics) for tracking, wired up via a provider in the root layout

## Getting started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

Content (EN/VI copy, projects, skills, experience, education, writing posts) lives in [`src/lib/content.ts`](src/lib/content.ts). UI is split into components under [`src/components/portfolio/`](src/components/portfolio).

## Deployment

### Cloudflare Workers (current production target)

Deployed via the [OpenNext](https://opennext.js.org/cloudflare) adapter.

```bash
npx wrangler login   # one-time auth
npm run preview       # build + serve locally via a local Workers runtime
npm run deploy        # build + deploy to Cloudflare
```

Config: [`wrangler.jsonc`](wrangler.jsonc), [`open-next.config.ts`](open-next.config.ts). Custom domain (`trungpd.space` + `www`) is configured in `wrangler.jsonc`'s `routes` field — the domain must be an active zone on Cloudflare with nameservers pointed there before deploy can attach it.

**Note:** Wrangler requires Node.js v22+ and does not run under Bun — use `npm`/`npx` (not `bun`/`bunx`) for anything invoking Wrangler.

### Docker Compose (self-hosting alternative)

```bash
docker compose up --build
```

Builds a standalone Next.js server image (Bun-based) and serves it on port 3000.
