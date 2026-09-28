import Link from "next/link";
import { site } from "@/data/site";

export default function CTA() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-4xl bg-navy px-8 py-14 text-center shadow-lift sm:px-14">
          <div aria-hidden className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-teal/25 blur-2xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-coral/25 blur-2xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl text-cream sm:text-4xl">Come see the rooms for yourself</h2>
            <p className="mt-4 text-lg text-cream/80">
              Tours run most weekday mornings while the children are busy. Bring your
              little one — we would love to meet them.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-coral">
                Request a tour
              </Link>
              <a href={site.phoneHref} className="btn bg-white/95 text-navy hover:bg-white">
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
