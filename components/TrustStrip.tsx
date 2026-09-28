import { site } from "@/data/site";

/**
 * The four-point reassurance row from the reference, directly under the hero.
 * TODO for the owner: these claims should match what you actually offer.
 */
const points = [
  {
    title: "Safe & Nurturing",
    sub: "Environment",
    tone: "bg-teal-light text-teal-dark",
    icon: (
      <path d="M12 20S3 14.2 3 8.4A4.9 4.9 0 0 1 12 5.6a4.9 4.9 0 0 1 9 2.8C21 14.2 12 20 12 20z" />
    ),
  },
  {
    title: "Experienced",
    sub: "& Caring Staff",
    tone: "bg-sun-light text-sun-dark",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M2.8 20a6.2 6.2 0 0 1 12.4 0M17 5.3A3.2 3.2 0 0 1 17 11.5M18 14.2a6.2 6.2 0 0 1 3.2 5.4" />
      </>
    ),
  },
  {
    title: "Play-Based",
    sub: "Learning",
    tone: "bg-teal-light text-teal-dark",
    icon: (
      <path d="M12 21v-7M12 14c0-3.9-3.1-7-7-7 0 3.9 3.1 7 7 7zM12 14c0-3.3 2.7-6 6-6 0 3.3-2.7 6-6 6z" />
    ),
  },
  {
    title: "Builds Confidence",
    sub: "& Creativity",
    tone: "bg-coral-light/50 text-coral-dark",
    icon: (
      <path d="M12 3.6l2.4 5 5.4.8-3.9 3.8.9 5.4-4.8-2.6-4.8 2.6.9-5.4L4.2 9.4l5.4-.8 2.4-5z" />
    ),
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-cream" aria-label={`Why families choose ${site.name}`}>
      <ul className="wrap grid gap-x-4 gap-y-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((p, i) => (
          <li
            key={p.title}
            className={`flex items-center gap-3 lg:px-2 ${
              i > 0 ? "lg:border-l lg:border-navy/10" : ""
            }`}
          >
            <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${p.tone}`}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {p.icon}
              </svg>
            </span>
            <p className="text-sm font-bold leading-snug text-navy">
              {p.title}
              <span className="block font-semibold text-ink-soft">{p.sub}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
