import Link from "next/link";
import { programs } from "@/data/programs";

const accentStyles = {
  teal: { chip: "bg-teal/30 text-teal-dark", bar: "bg-teal", card: "bg-teal/5" },
  coral: { chip: "bg-coral/20 text-coral-dark", bar: "bg-coral", card: "bg-coral/5" },
  sun: { chip: "bg-sun/35 text-sun-dark", bar: "bg-sun", card: "bg-sun/10" },
  sky: { chip: "bg-sky/30 text-navy-dark", bar: "bg-sky", card: "bg-sky/5" },
} as const;

export default function ProgramCards({ showIntro = true }: { showIntro?: boolean }) {
  return (
    <section className="section bg-cream">
      <div className="wrap">
        {showIntro && (
          <div className="max-w-2xl">
            <p className="eyebrow">Our programs</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">A room for every stage</h2>
            <p className="mt-4 text-lg text-ink-soft">
              Children move up when they are ready, not when the calendar says so — and
              they keep seeing familiar faces the whole way through.
            </p>
          </div>
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programs.map((p) => {
            const accent = accentStyles[p.accent];
            return (
              <article
                key={p.slug}
                id={p.slug}
                className={`card scroll-mt-28 overflow-hidden ${accent.card}`}
              >
                <span className={`mb-5 block h-1.5 w-16 rounded-full ${accent.bar}`} />
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl">{p.name}</h3>
                  <span className={`rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wide ${accent.chip}`}>
                    {p.ages}
                  </span>
                </div>
                <p className="mt-4 leading-relaxed text-ink-soft">{p.summary}</p>
                <ul className="mt-5 space-y-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-ink">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-teal-dark" aria-hidden="true">
                        <path d="M5 12.5l4.5 4.5L19 7" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-bold text-navy">Ratio · {p.ratio}</p>
              </article>
            );
          })}
        </div>

        {showIntro && (
          <div className="mt-10">
            <Link href="/programs" className="btn-outline">
              Program details &amp; daily rhythm
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
