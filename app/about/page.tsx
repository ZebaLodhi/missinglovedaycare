import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import Values from "@/components/Values";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About us",
  description: `Meet the team behind ${site.name} and the ideas that shape our days — small groups, gentle routines and learning through play.`,
};

/** TODO: replace with the real staff list, photos and credentials. */
const team = [
  { name: "Director name", role: "Center Director", detail: "TODO: years of experience, credentials." },
  { name: "Lead teacher name", role: "Lead Preschool Teacher", detail: "TODO: training and specialisms." },
  { name: "Caregiver name", role: "Infant Room Lead", detail: "TODO: certifications held." },
];

const commitments = [
  "Ratios kept below the state maximum, every room, every day",
  "Pediatric CPR and first-aid certification for all staff",
  "Secure keypad entry and signed handovers",
  "Allergy-aware kitchen with written care plans",
  "Annual continuing education for every teacher",
  "An open-door policy for parents, all day",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A small center that knows every child by name"
        intro={`${site.name} grew out of a simple belief: children learn fastest when they feel safe, seen and genuinely liked. That is the whole philosophy — the rest is snacks, songs and sand.`}
      />

      <section className="section bg-teal/10">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="dotted-ring rounded-full p-4">
              <div className="relative aspect-square overflow-hidden rounded-full bg-cream shadow-lift">
                <Image
                  src="/brand/missing-love-daycare-badge.jpg"
                  alt={`${site.name} logo`}
                  fill
                  sizes="(min-width: 1024px) 380px, 80vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Where the name comes from</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                Plenty of childcare is competent. What families remember, years later, is
                whether their child was loved there.
              </p>
              <p>
                We built {site.name} around the part that too often goes missing — the
                unhurried cuddle after a scraped knee, the teacher who remembers that this
                week dinosaurs matter more than anything, the handover that is a real
                conversation rather than a wave from the doorway.
              </p>
              <p>
                {/* TODO: replace with the founder's own words and the center's real history. */}
                TODO: add the founder&apos;s story here — when the center opened, what
                brought the team to early-years work, and what families should know about you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Values />

      <section className="section bg-cream">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">Our team</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Familiar faces, year after year</h2>
            <p className="mt-4 text-lg text-ink-soft">
              Low staff turnover is the quietest quality signal in childcare. Our teachers
              stay, so your child keeps the grown-up they have bonded with.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <li key={member.role} className="card text-center">
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-teal/20 font-display text-2xl text-teal-dark">
                  {member.name.charAt(0)}
                </span>
                <h3 className="mt-5 text-xl">{member.name}</h3>
                <p className="mt-1 text-sm font-bold uppercase tracking-wide text-coral-dark">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{member.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-cream-soft">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow">Safety</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">The promises behind the fun</h2>
            <p className="mt-4 text-ink-soft">
              Licensed by the Commonwealth of Virginia and inspected regularly.
              {site.licenseNumber && ` License #${site.licenseNumber}.`}
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {commitments.map((item) => (
              <li key={item} className="flex gap-3 rounded-3xl border border-navy/10 bg-white p-5 text-sm leading-relaxed text-ink-soft shadow-soft">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-teal-dark" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  );
}
