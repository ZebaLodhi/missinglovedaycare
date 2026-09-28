import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="section bg-cream">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">From our families</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Kind words from the pick-up line</h2>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={i} className="card flex flex-col">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" className="text-coral/40" aria-hidden="true">
                <path d="M7 7h5v5a5 5 0 01-5 5V14a2 2 0 002-2H7V7zm7 0h5v5a5 5 0 01-5 5V14a2 2 0 002-2h-2V7z" />
              </svg>
              <blockquote className="mt-4 flex-1 leading-relaxed text-ink-soft">{t.quote}</blockquote>
              <footer className="mt-6 border-t border-navy/10 pt-4">
                <p className="font-display text-lg text-navy">{t.name}</p>
                <p className="text-sm text-ink-soft">{t.detail}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
