# Ascent Services — Production Website

React + TypeScript + Vite + Tailwind + Framer Motion.

## Structure
- `src/data/services.ts` — all service content (capabilities, outcomes, FAQ). Add a new service by adding one object here; it automatically gets a route, nav entry (if added to `site.ts`), and a full detail page via the shared template.
- `src/pages/ServicePage.tsx` — shared template every service page renders through.
- `src/components/home/*` — homepage sections (Hero, "what are you trying to achieve" selector, outcomes, why-Ascent, ecosystem, case study, CTA).
- `src/components/service/*` — reusable service-page sections.

## Run locally
```
npm install
npm run dev
```

## Build
```
npm run build
```

## Notes
- Zoho / ManageEngine / partner or certification claims in the content are placeholders — confirm actual partner status before publishing.
- Contact form currently only shows a client-side confirmation; wire `ContactForm.tsx`'s `handleSubmit` to your CRM/API endpoint before launch.
