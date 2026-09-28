import Image from "next/image";
import Link from "next/link";
import ReviewBadge from "./ReviewBadge";
import {
  ArrowIcon,
  CalendarIcon,
  DotGrid,
  HeartDoodle,
  HeartOutline,
  PhoneIcon,
  Sparkle,
  StarDoodle,
} from "./Doodles";
import { site } from "@/data/site";

/**
 * Hero after the reference design: soft cream ground, a photograph in an
 * organic blob rather than a rectangle, the logo badge overlapping it, and
 * hand-drawn accents scattered around the composition.
 */
export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden bg-cream lg:flex-1">
      {/* Soft mint shapes in the corners. */}
      <div aria-hidden className="pointer-events-none absolute -left-24 -top-16 h-64 w-64 rounded-full bg-teal-light/70 blur-[2px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-teal-light/50" />
      <DotGrid className="pointer-events-none absolute bottom-8 right-6 hidden h-20 w-20 text-teal/50 lg:block" />

      <div className="wrap relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        <div className="relative">
          <Sparkle aria-hidden className="pointer-events-none absolute -left-8 top-24 hidden h-7 w-8 text-sun lg:block" />

          <p className="eyebrow">
            {site.tagline}
            <HeartDoodle className="h-3 w-3 text-coral" />
          </p>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-navy sm:text-5xl lg:text-[clamp(2.4rem,3.2vw+0.6rem,3.25rem)]">
            <span className="block">A Second Home</span>
            <span className="block">
              Where{" "}
              <span className="relative whitespace-nowrap text-coral">
                Little Hearts
                <HeartDoodle className="absolute -right-5 -top-1 h-3.5 w-3.5 text-coral" />
              </span>
            </span>
            <span className="block">Feel Safe</span>
          </h1>

          <p className="mt-5 max-w-lg leading-relaxed text-ink-soft">
            A licensed early-learning center in {site.address.city}, Virginia for
            children {site.ageRange} — small groups, familiar faces and a day built
            around play.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-coral">
              <CalendarIcon className="h-[18px] w-[18px]" />
              Schedule a tour
              <ArrowIcon className="h-[18px] w-[18px]" />
            </Link>
            <a href={site.phoneHref} className="btn-outline">
              <PhoneIcon className="h-[18px] w-[18px] text-teal-dark" />
              Call {site.phone}
            </a>
          </div>

          <div className="mt-6">
            <ReviewBadge />
          </div>
        </div>

        {/* Photograph in an organic shape, with the badge riding its edge. */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-teal-light/70" />
          <HeartOutline className="pointer-events-none absolute -top-2 right-6 h-6 w-6 text-coral" />
          <StarDoodle className="pointer-events-none absolute -left-4 bottom-24 h-7 w-7 text-sun" />
          <Sparkle className="pointer-events-none absolute -right-2 top-1/3 h-6 w-7 text-sun" />

          <div className="blob-a relative aspect-[4/5] overflow-hidden shadow-lift sm:aspect-[5/5]">
            <Image
              src="/images/playroom-toddler.jpg"
              alt="A toddler exploring toys in a sunlit playroom"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover object-[72%_35%]"
              priority
            />
          </div>

          <span className="absolute -bottom-4 left-2 block h-24 w-24 overflow-hidden rounded-full border-4 border-cream shadow-lift sm:h-28 sm:w-28 lg:-left-8 lg:bottom-6 lg:h-32 lg:w-32">
            <Image
              src="/brand/missing-love-daycare-badge.jpg"
              alt={`${site.name} logo`}
              fill
              sizes="128px"
              className="object-cover"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
