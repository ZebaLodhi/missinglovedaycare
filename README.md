# Missing Love Daycare

Marketing site for **Missing Love Daycare** — *Nurturing Hearts & Minds*.
Built with Next.js 15 (App Router), TypeScript and Tailwind CSS.

## Brand colors

Sampled from the logo in `public/brand/missing-love-daycare-logo.jpg` and wired
into `tailwind.config.ts`:

| Token   | Hex       | Where it comes from                  |
| ------- | --------- | ------------------------------------ |
| `navy`  | `#0D4856` | headings and body accents            |
| `teal`  | `#7FD4C4` | mint blobs, icon badges, dot grids   |
| `coral` | `#F4584F` | the heart, buttons, highlighted words|
| `sun`   | `#FCC477` | stars, sparkles                      |
| `sky`   | `#8FC9DC` | programme accents                    |
| `cream` | `#FBF8EE` | the warm paper background            |
| `ink`   | `#25424B` | body text                            |

Sampled from the reference design. Each `-dark` variant is the one to use for
text or icons — they clear WCAG AA where the soft brand hues do not. `.btn-coral`
fills with `coral-dark` for that reason: the reference's own coral sits at 3.3:1
against white text, which is not readable enough.

## Typography

Headlines are set in **Baloo 2** and body copy in **Nunito** — rounded, warm
and close to the reference design's lettering. Both load through `next/font`
in `app/layout.tsx`; the stacks live in `tailwind.config.ts`.

## Layout and style

The look follows the supplied reference: a warm cream ground, photographs
masked into organic blob shapes rather than rectangles (`.blob-a/b/c` in
`app/globals.css`), the logo badge overlapping the hero photo, and hand-drawn
accents — hearts, sparkles, stars, dot grids — from `components/Doodles.tsx`.

The home page opens with the hero and the four-point reassurance strip
(`components/TrustStrip.tsx`) sharing one screen, then a location band,
alternating image/text blocks (`components/ContentImageBlock.tsx`), the daily
rhythm, the family timeline and the FAQ.

## The family timeline

`components/FamilyTimeline.tsx` is the site's signature section: a scrollable
track of years built from the real review dates, one verbatim extract per year
from 2016 to 2025. It reads its years and pull quotes straight out of
`data/testimonials.ts`, so adding a review with a `pullQuote` for a new year
extends the timeline automatically.

Every `pullQuote` must be an exact substring of that review's `quote` — never
paraphrase a parent. The years and the "N years" figure are derived, not typed,
so they cannot drift out of date.

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
- **`app/privacy/page.tsx`** — a short, honest privacy note covering the
  website form. Have it checked against your enrolment paperwork and Virginia
  licensing requirements; it deliberately does not speak for the records you
  keep about enrolled children.
- **`components/StructuredData.tsx`** — mirror the real opening hours here once
  they are confirmed, so local search shows the right times.
- **Photography** — `public/images/` holds three Unsplash photos (the playroom
  hero, the child with her drawing, and the flower painting cropped into the
  footer band). The Unsplash license covers free commercial use without
  attribution. Swapping them for photos of your own rooms and children (with
  signed parent permission) will still lift the site more than anything else
  on this list — parents look for the actual room their child would be in.

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
