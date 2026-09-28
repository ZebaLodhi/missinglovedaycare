import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

const badges = [
  { label: "Licensed & insured", icon: "shield" },
  { label: "CPR-certified team", icon: "heart" },
  { label: `Ages ${site.ageRange}`, icon: "star" },
] as const;

function BadgeIcon({ name }: { name: (typeof badges)[number]["icon"] }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "shield") return <svg {...common}><path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" /></svg>;
  if (name === "heart") return <svg {...common}><path d="M12 20s-7-4.4-7-9a4 4 0 017-2.6A4 4 0 0119 11c0 4.6-7 9-7 9z" /></svg>;
  return <svg {...common}><path d="M12 4l2.3 4.7 5.2.8-3.8 3.6.9 5.1-4.6-2.4-4.6 2.4.9-5.1L4.5 9.5l5.2-.8L12 4z" /></svg>;
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Soft shapes echoing the logo's watercolor badge. */}
      <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-teal/20 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-coral/20 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute right-1/4 top-10 h-24 w-24 rounded-full bg-sun/25 blur-xl" />

      <div className="wrap relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <p className="eyebrow">{site.tagline}</p>
          <h1 className="mt-5 font-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            A second home where
            <span className="text-coral"> little hearts </span>
            feel safe
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {site.name} is a licensed early-learning center in {site.address.city},
            Virginia for children {site.ageRange}. Small groups, familiar faces and a day
            built around play — so your child is cared for the way you would care for
            them yourself.
          </p>

          {site.reviews.show && (
            <p className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-navy shadow-soft">
              <span className="flex gap-0.5 text-sun" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4l2.3 4.7 5.2.8-3.8 3.6.9 5.1-4.6-2.4-4.6 2.4.9-5.1L4.5 9.5l5.2-.8L12 4z" />
                  </svg>
                ))}
              </span>
              {site.reviews.recommendPercent}% of {site.reviews.count} families on{" "}
              {site.reviews.source} recommend us
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-coral">
              Book a tour
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link href="/programs" className="btn-outline">
              See our programs
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {badges.map((b) => (
              <li key={b.label} className="flex items-center gap-2 text-sm font-bold text-navy">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-teal-dark shadow-soft">
                  <BadgeIcon name={b.icon} />
                </span>
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="dotted-ring rounded-full p-4 sm:p-6">
            <div className="relative aspect-square overflow-hidden rounded-full bg-cream-soft shadow-lift animate-float">
              <Image
                src="/brand/missing-love-daycare-badge.jpg"
                alt={`${site.name} logo — three children hugging a heart`}
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
