import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

/**
 * Split hero after KinderCare's header block: a full-height photograph on one
 * side, the headline and call to action on a colour block on the other, with
 * the logo badge riding the seam between them.
 */
export default function Hero() {
  return (
    <section className="relative bg-cream-soft lg:h-[calc(100dvh-5rem-1px)] lg:min-h-[540px] lg:max-h-[900px]">
      <div className="grid lg:h-full lg:grid-cols-2">
        <div className="flex items-center px-5 py-14 sm:px-8 sm:py-20 lg:py-10 lg:pl-[max(2rem,calc((100vw-72rem)/2))] lg:pr-16">
          <div className="max-w-xl">
            <p className="eyebrow">{site.tagline}</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] sm:text-5xl lg:text-[clamp(2.4rem,3.6vw+0.5rem,3.5rem)]">
              A second home where
              <span className="text-coral"> little hearts </span>
              feel safe
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-soft lg:text-lg">
              A licensed early-learning center in {site.address.city}, Virginia for
              children {site.ageRange} — small groups, familiar faces and a day built
              around play.
            </p>

            {site.reviews.show && (
              <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-navy shadow-soft">
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

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-coral">
                Book a tour
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <a href={site.phoneHref} className="btn-outline">
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[360px] sm:min-h-[460px] lg:h-full lg:min-h-0">
          <Image
            src="/images/playroom-toddler.jpg"
            alt="A toddler exploring toys in a sunlit playroom"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[72%_35%]"
            priority
          />

          {/* Logo badge riding the seam. */}
          <span className="absolute bottom-4 left-4 block h-24 w-24 overflow-hidden rounded-full border-4 border-cream-soft shadow-lift sm:h-28 sm:w-28 lg:-left-16 lg:bottom-12 lg:h-36 lg:w-36">
            <Image
              src="/brand/missing-love-daycare-badge.jpg"
              alt={`${site.name} logo`}
              fill
              sizes="144px"
              className="object-cover"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
