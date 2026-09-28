import Link from "next/link";
import { featuredTestimonials } from "@/data/testimonials";
import { site } from "@/data/site";

export default function Testimonials() {
  return (
    <section className="section bg-cream">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">From our families</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Kind words from the pick-up line</h2>
            {site.reviews.show && (
              <p className="mt-4 text-lg text-ink-soft">
                {site.reviews.recommendPercent}% of {site.reviews.count} families
                recommend us on {site.reviews.source}.
              </p>
            )}
          </div>
          <Link href="/reviews" className="btn-outline">
            Read all reviews
          </Link>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredTestimonials.map((t) => (
            <li key={t.name} className="card flex flex-col">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" className="text-coral/40" aria-hidden="true">
                <path d="M7 7h5v5a5 5 0 01-5 5V14a2 2 0 002-2H7V7zm7 0h5v5a5 5 0 01-5 5V14a2 2 0 002-2h-2V7z" />
              </svg>
              <blockquote className="mt-4 flex-1 leading-relaxed text-ink-soft">
                {t.quote}
              </blockquote>
              <footer className="mt-6 border-t border-navy/10 pt-4">
                <p className="font-display text-lg text-navy">{t.name}</p>
                <p className="text-sm text-ink-soft">{t.date}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
