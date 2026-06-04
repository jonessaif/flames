# Flames

Premium Next.js website for Flames, a two-floor destination in Lucknow: Flames of Arabia upstairs and Flames 147 downstairs.

## Stack

- Next.js App Router
- Tailwind CSS
- Framer Motion for subtle reveal and accordion motion
- Local responsive image assets in `public/images`
- Editable content model in `src/content/site.ts`

## Scripts

```bash
npm install
npm run dev
npm run build
npm test
```

## Update Points

- Business details, WhatsApp number, hours, menu, gallery, testimonials: `src/content/site.ts`
- Main pages: `app/*/page.tsx`
- Reusable UI: `src/components`
- Images: `public/images`

The homepage uses venue photography where available, with editable image references in `src/content/site.ts`.
