# JT Cleaning Website

Marketing site for JT Cleaning, built with Next.js App Router, Tailwind CSS v4, shadcn/ui, React Hook Form, and Zod.

## Deployment mode

This project is configured as a static export.

- Build command: `npm run build`
- Output directory: `out`
- Server runtime: not required
- Wrangler / OpenNext: not required for this site

If a host auto-detects this as an OpenNext or Cloudflare Functions project, switch the framework/deployment target to a static site and publish the `out` directory instead.

## Local development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

Run the production build:

```bash
npm run build
```

Preview the built static site locally:

```bash
npm run preview
```

## Main project files

- `src/app/page.tsx` - homepage sections and local business schema
- `src/app/layout.tsx` - metadata, fonts, and root layout
- `src/app/globals.css` - brand theme tokens and shared site styling
- `src/components/site/` - reusable site components, motion wrapper, and quote form
- `src/lib/site.ts` - content data and business constants
- `public/jt-cleaning-logo.png` - logo asset used throughout the site
