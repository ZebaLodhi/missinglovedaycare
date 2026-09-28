import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { testimonials } from "@/data/testimonials";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Parent reviews",
  description: `What families say about ${site.name} — ${site.reviews.recommendPercent}% of ${site.reviews.count} reviewers on ${site.reviews.source} recommend us.`,
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Parent reviews"
        title="What families say about us"
        intro={`${site.reviews.recommendPercent}% of ${site.reviews.count} families recommend us on ${site.reviews.source}. These are their own words, in the order they were written.`}
      />

      <section className="section bg-teal/10">
        <div className="wrap">
          <ul className="columns-1 gap-6 md:columns-2 lg:columns-3">
            {testimonials.map((t) => (
              <li key={t.name + t.date} className="card mb-6 break-inside-avoid">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/25 px-3 py-1 text-xs font-bold text-teal-dark">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 20s-7-4.4-7-9a4 4 0 017-2.6A4 4 0 0119 11c0 4.6-7 9-7 9z" />
                  </svg>
                  Recommends
                </span>
                <blockquote className="mt-4 leading-relaxed text-ink-soft">
                  {t.quote}
                </blockquote>
                <footer className="mt-5 border-t border-navy/10 pt-4">
                  <p className="font-display text-lg text-navy">{t.name}</p>
                  <p className="text-sm text-ink-soft">{t.date}</p>
                </footer>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  );
}
