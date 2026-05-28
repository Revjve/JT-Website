# JT Cleaning Website

Marketing site for JT Cleaning, built with Next.js App Router, Tailwind CSS v4, shadcn/ui, React Hook Form, and Zod.

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

## Main project files

- `src/app/page.tsx` - homepage sections and local business schema
- `src/app/layout.tsx` - metadata, fonts, and root layout
- `src/app/globals.css` - brand theme tokens and shared site styling
- `src/components/site/` - reusable site components, motion wrapper, and quote form
- `src/lib/site.ts` - content data and business constants
- `public/jt-cleaning-logo.png` - logo asset used throughout the site
