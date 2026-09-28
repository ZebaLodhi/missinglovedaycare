# Missing Love Daycare

Marketing site for **Missing Love Daycare** — *Nurturing Hearts & Minds*.
Built with Next.js 15 (App Router), TypeScript and Tailwind CSS.

## Brand colors

Sampled from the logo in `public/brand/missing-love-daycare-logo.jpg` and wired
into `tailwind.config.ts`:

| Token   | Hex       | Where it comes from                  |
| ------- | --------- | ------------------------------------ |
| `navy`  | `#35637D` | the "DAYCARE" wordmark               |
| `sky`   | `#629AA9` | the "MISSING LOVE" arc               |
| `teal`  | `#4FD1C5` | brand-sheet accent / pattern         |
| `coral` | `#F88A71` | the heart                            |
| `sun`   | `#EBA452` | stars and the yellow dress           |
| `cream` | `#FDF5E0` | the badge background                 |
| `ink`   | `#2A3B45` | body text                            |

## Layout

The page structure follows the pattern KinderCare uses: a split hero with the
photograph on one side and the headline on a colour block, a location band
directly beneath it, alternating image/text blocks whose text sits on a
full-bleed colour band (`components/ContentImageBlock.tsx`), and a decorative
illustration band above the footer. All copy, colour and artwork are this
centre's own.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Before this goes live

The build filled unknown business details with clearly marked placeholders.
Search the repo for `TODO` and replace each one:

- **`data/site.ts`** — the phone, email and address are real (from the
  Facebook page). Still to fill in: the Virginia license number (the line stays
  hidden while it is empty), the opening hours, and the Facebook page URL.
- **`data/tuition.ts`** — every rate is `$000`. Replace with real pricing and
  fee amounts.
- **`data/testimonials.ts`** — the three quotes are placeholder text, not real
  families. Replace with quotes you have permission to publish, or delete the
  `<Testimonials />` section from `app/page.tsx`.
- **`data/programs.ts`** — confirm age bands and staff-to-child ratios against
  your license.
- **`data/faq.ts`** — check each answer against your actual policies.
- **`components/DailyRhythm.tsx`** — adjust the daily schedule.
- **`app/about/page.tsx`** — the founder's story and the staff list.
- **`app/layout.tsx`** — `siteUrl` for the production domain.
- **`components/StructuredData.tsx`** — mirror the real opening hours here once
  they are confirmed, so local search shows the right times.
- **Photography** — `public/images/` holds three supplied photos (the playroom
  hero, the child with her drawing, and the flower painting used as the footer
  band). Confirm you hold the rights to use them commercially before launch,
  and replace them with photos of your own rooms and children (with signed
  parent permission) when you can — that will lift the site more than anything
  else on this list.

## Enrollment form

`components/InquiryForm.tsx` posts to `app/api/inquiry/route.ts`, which
validates with zod and includes a honeypot field.

Email delivery is **off until configured**. Copy `.env.example` to
`.env.local` and set `RESEND_API_KEY`, `INQUIRY_TO_EMAIL` and
`INQUIRY_FROM_EMAIL` (a domain verified with [Resend](https://resend.com)).
Without them the route logs the inquiry to the server console and returns
success — so the form appears to work while nobody receives the message. Set
these before launch, and send yourself a test.

## Deploying

The project is a standard Next.js app and deploys to Vercel with no extra
configuration. Add the three environment variables above in the project
settings, then point the domain at the deployment.
