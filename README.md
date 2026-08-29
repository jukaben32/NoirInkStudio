# Noir Ink Studio

Multi-tenant SaaS platform for premium tattoo studios — AI voice/text
receptionist, booking calendar, client CRM, deposit billing, a public
studio website builder, and a WhatsApp integration, all in one dashboard.

Forked from a Next.js + Supabase + Claude AI starter and fully adapted to
the tattoo industry: services (consultations, sessions, flash, cover-ups,
piercing), client records (with allergy notes and age verification instead
of medical fields), studio-branded AI agent personas, and a Black & Beige
Fine-Art Gallery visual direction.

## Tech Stack

- Next.js (App Router)
- Supabase (Postgres + Auth + RLS)
- OpenAI Realtime API (voice agent) + Chat Completions (WhatsApp text agent)
- Tailwind CSS
- Stripe (billing) / optional USDC on Polygon (booking deposits)
- Resend (transactional email)

## Local Development

1. `npm install`
2. Copy `.env.example` to `.env.local` and fill in the required keys
   (Supabase project URL/keys at minimum; OpenAI key to enable the AI agent).
3. Apply `supabase/schema.sql` to your Supabase project.
4. `npm run dev`

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — production build
- `npm run type-check` — `tsc --noEmit`
- `npm run lint` — ESLint
