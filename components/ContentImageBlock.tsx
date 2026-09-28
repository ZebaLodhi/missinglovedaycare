import Image from "next/image";
import Link from "next/link";

/**
 * KinderCare's alternating content block: a photograph beside a text column
 * that sits on a full-bleed colour band.
 */
export default function ContentImageBlock({
  eyebrow,
  title,
  body,
  points,
  image,
  imageAlt,
  cta,
  reverse = false,
  tone = "cream",
}: {
  eyebrow: string;
  title: string;
  body: string;
  points?: string[];
  image: string;
  imageAlt: string;
  cta?: { href: string; label: string };
  reverse?: boolean;
  tone?: "cream" | "teal";
}) {
  const band = tone === "teal" ? "bg-teal/15" : "bg-cream";

  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <div className={`wrap grid items-center gap-10 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="relative">
          <div
            aria-hidden
            className={`absolute -inset-y-10 ${reverse ? "-right-[100vw] left-[-3rem]" : "-left-[100vw] right-[-3rem]"} hidden lg:block ${band}`}
          />
          <div className={`relative ${reverse ? "lg:pl-4" : "lg:pr-4"}`}>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">{title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{body}</p>

            {points && (
              <ul className="mt-6 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex gap-3 text-ink">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-teal-dark" aria-hidden="true">
                      <path d="M5 12.5l4.5 4.5L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {cta && (
              <Link href={cta.href} className="btn-navy mt-8">
                {cta.label}
              </Link>
            )}
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-4xl shadow-lift">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
