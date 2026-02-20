# Macro Notes (Next.js + Vercel)

A static Next.js App Router site for a realistic financial research publisher with public and premium article URLs.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repository in Vercel.
3. Framework preset: **Next.js**.
4. Build command: `npm run build`.
5. Output settings: default Next.js.
6. Deploy.

This site is fully static with local content in `lib/content.ts`.
