import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { navLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-8 bg-navy text-cream">
      {/* A child's painting as the band across the top of the footer. */}
      <div className="relative h-40 w-full overflow-hidden bg-cream-soft sm:h-56 lg:h-72">
        <Image
          src="/images/flower-band.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="rounded-3xl bg-cream-soft/95 p-3 inline-block">
            <Logo />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-cream/80">
            {site.shortDescription}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-lg text-cream">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-cream/80 transition hover:text-teal-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg text-cream">Visit us</h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-cream/80">
            <p>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
            <p>
              <a href={site.phoneHref} className="transition hover:text-teal-light">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="transition hover:text-teal-light">
                {site.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h2 className="font-display text-lg text-cream">Hours</h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {site.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-3">
                <span>{h.days}</span>
                <span className="text-cream">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="wrap flex flex-col gap-2 py-6 text-xs text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.tagline}.
          </p>
          {site.licenseNumber && <p>License #{site.licenseNumber}</p>}
        </div>
      </div>
    </footer>
  );
}
