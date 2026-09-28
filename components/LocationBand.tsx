import Link from "next/link";
import { site } from "@/data/site";

/**
 * A single-location stand-in for KinderCare's "find a center" search: the
 * details a parent actually needs, in one band directly under the hero.
 */
export default function LocationBand() {
  return (
    <section className="bg-navy py-10 text-cream">
      <div className="wrap grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="flex gap-3">
            <Icon path="M12 21s-7-5.6-7-11a7 7 0 1114 0c0 5.4-7 11-7 11zM12 8a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
            <p className="text-sm leading-relaxed">
              <span className="block font-display text-base text-cream">Find us</span>
              <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="text-cream/80 underline-offset-2 hover:text-teal-light hover:underline">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </a>
            </p>
          </div>

          <div className="flex gap-3">
            <Icon path="M12 7v5l3 2M12 3a9 9 0 100 18 9 9 0 000-18z" />
            <p className="text-sm leading-relaxed">
              <span className="block font-display text-base text-cream">Open</span>
              <span className="text-cream/80">
                {site.hours[0].days}
                <br />
                {site.hours[0].time}
              </span>
            </p>
          </div>

          <div className="flex gap-3">
            <Icon path="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A15 15 0 014 5a1 1 0 011-1z" />
            <p className="text-sm leading-relaxed">
              <span className="block font-display text-base text-cream">Call us</span>
              <a href={site.phoneHref} className="text-cream/80 hover:text-teal-light">
                {site.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="lg:justify-self-end">
          <Link href="/contact" className="btn-coral w-full sm:w-auto">
            Schedule a visit
          </Link>
        </div>
      </div>
    </section>
  );
}

function Icon({ path }: { path: string }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream/10 text-teal-light">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={path} />
      </svg>
    </span>
  );
}
