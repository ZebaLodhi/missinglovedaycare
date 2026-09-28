import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { tuitionPlans, included, feeNotes } from "@/data/tuition";

export const metadata: Metadata = {
  title: "Tuition & enrollment",
  description:
    "Weekly tuition, what it includes, and the three steps to enrolling your child at Missing Love Daycare.",
};

const accentBar = {
  coral: "bg-coral",
  teal: "bg-teal",
  sun: "bg-sun",
  sky: "bg-sky",
} as const;

const steps = [
  {
    title: "Book a tour",
    body: "Come and see the rooms during a busy morning. Bring your child — and your questions.",
  },
  {
    title: "Reserve a place",
    body: "Complete the enrollment packet and pay the registration fee to hold your start date.",
  },
  {
    title: "Settle in gently",
    body: "We start with short visits so the first full day feels familiar, not frightening.",
  },
];

export default function TuitionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tuition & enrollment"
        title="Clear pricing, no surprises at the end of the month"
        intro="Tuition covers meals, materials and every activity in the day. Rates are reviewed each year — please confirm current pricing with the office."
      />

      <section className="section bg-cream-soft">
        <div className="wrap">
          <div className="overflow-hidden rounded-4xl border border-navy/10 bg-white shadow-soft">
            <table className="w-full text-left">
              <caption className="sr-only">Weekly tuition by program</caption>
              <thead className="bg-navy text-cream">
                <tr>
                  <th scope="col" className="px-6 py-4 font-display text-base">Program</th>
                  <th scope="col" className="px-6 py-4 font-display text-base">Full time</th>
                  <th scope="col" className="hidden px-6 py-4 font-display text-base sm:table-cell">Part time</th>
                </tr>
              </thead>
              <tbody>
                {tuitionPlans.map((plan) => (
                  <tr key={plan.program} className="border-t border-navy/10 align-top">
                    <th scope="row" className="px-6 py-5 font-normal">
                      <span className={`mb-2 block h-1 w-10 rounded-full ${accentBar[plan.accent]}`} />
                      <span className="block font-display text-lg text-navy">{plan.program}</span>
                      <span className="block text-sm text-ink-soft">{plan.ages}</span>
                    </th>
                    <td className="px-6 py-5 font-bold text-navy">
                      {plan.fullTime}
                      <span className="mt-1 block text-sm font-normal text-ink-soft sm:hidden">
                        {plan.partTime}
                      </span>
                    </td>
                    <td className="hidden px-6 py-5 text-ink-soft sm:table-cell">{plan.partTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="card">
              <h2 className="text-2xl">What tuition includes</h2>
              <ul className="mt-5 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-ink-soft">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-teal-dark" aria-hidden="true">
                      <path d="M5 12.5l4.5 4.5L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h2 className="text-2xl">Other fees</h2>
              <dl className="mt-5 divide-y divide-navy/10">
                {feeNotes.map((fee) => (
                  <div key={fee.label} className="flex justify-between gap-4 py-3">
                    <dt className="text-ink-soft">{fee.label}</dt>
                    <dd className="font-bold text-navy">{fee.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">Enrolling</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Three steps, and we take them with you</h2>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="card">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/20 font-display text-xl text-teal-dark">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-xl">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <Link href="/contact" className="btn-navy">
              Start with a tour
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
