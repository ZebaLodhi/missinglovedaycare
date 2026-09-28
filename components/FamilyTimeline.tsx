import Link from "next/link";
import {
  timelineEntries,
  firstReviewYear,
  latestReviewYear,
  testimonials,
} from "@/data/testimonials";
import { site } from "@/data/site";

/**
 * The centre's strongest differentiator: parents have been writing
 * recommendations without a break since 2016. Every quote here is a verbatim
 * extract from the review in that year — see data/testimonials.ts.
 */
export default function FamilyTimeline() {
  const years = latestReviewYear - firstReviewYear;

  const stats = [
    { value: `${years} years`, label: `of reviews, ${firstReviewYear} to ${latestReviewYear}` },
    { value: `${site.reviews.count}`, label: `reviews on ${site.reviews.source}` },
    { value: `${site.reviews.recommendPercent}%`, label: "of them recommend us" },
  ];

  return (
    <section className="relative overflow-hidden bg-navy py-16 text-cream sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-coral/20 blur-3xl"
      />

      <div className="wrap relative">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-teal/25 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-teal-light">
            Since {firstReviewYear}
          </p>
          <h2 className="mt-5 text-3xl text-cream sm:text-4xl">
            {years} years of families, in their own words
          </h2>
          <p className="mt-4 text-lg text-cream/80">
            Parents have been writing about this place since {firstReviewYear} — some of
            them for a second and third child. Drag along the years to read them.
          </p>
        </div>

        <dl className="mt-10 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl bg-cream/10 px-6 py-5">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-4xl text-teal-light">{s.value}</span>
                <span className="mt-1 block text-sm text-cream/75">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* The track. Horizontal scroll with snap — no JavaScript needed. It keeps
          the container's left edge, but bleeds to the screen edge on phones. */}
      <div className="wrap relative mt-12">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-[2.15rem] hidden h-0.5 bg-cream/20 sm:block"
        />

        <ol
          className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0"
          aria-label={`Reviews by year, ${firstReviewYear} to ${latestReviewYear}`}
        >
          {timelineEntries.map((entry) => (
            <li
              key={entry.year + entry.name}
              className="relative w-[17rem] shrink-0 snap-start sm:w-[20rem]"
            >
              <div className="flex items-center gap-3">
                <span className="relative z-10 flex h-[4.3rem] w-[4.3rem] items-center justify-center rounded-full border-4 border-navy bg-teal font-display text-lg font-bold text-navy-dark">
                  {entry.year}
                </span>
              </div>

              <blockquote className="mt-5 rounded-3xl bg-cream p-6 text-ink shadow-lift">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-coral/40"
                  aria-hidden="true"
                >
                  <path d="M7 7h5v5a5 5 0 01-5 5V14a2 2 0 002-2H7V7zm7 0h5v5a5 5 0 01-5 5V14a2 2 0 002-2h-2V7z" />
                </svg>
                <p className="mt-3 leading-relaxed text-ink-soft">{entry.pullQuote}</p>
                <footer className="mt-5 border-t border-navy/10 pt-4">
                  <p className="font-display text-base text-navy">{entry.name}</p>
                  <p className="text-sm text-ink-soft">{entry.date}</p>
                </footer>
              </blockquote>
            </li>
          ))}
        </ol>
      </div>

      <div className="wrap relative mt-4">
        <Link
          href="/reviews"
          className="btn bg-cream text-navy hover:bg-white"
        >
          Read all {testimonials.length} reviews
        </Link>
      </div>
    </section>
  );
}
