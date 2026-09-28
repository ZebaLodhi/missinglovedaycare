import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import InquiryForm from "@/components/InquiryForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & tours",
  description: `Book a tour, ask about openings or call ${site.name} at ${site.phone}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's find the right fit for your family"
        intro="Send a note and we will reply within one business day — usually sooner. Prefer to talk? Call us; a person answers the phone."
      />

      <section className="section bg-cream-soft">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl">Come and visit</h2>
              <address className="mt-4 space-y-4 text-ink-soft not-italic">
                <p>
                  <span className="block font-bold text-navy">Address</span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </p>
                <p>
                  <span className="block font-bold text-navy">Phone</span>
                  <a href={site.phoneHref} className="text-coral-dark hover:underline">
                    {site.phone}
                  </a>
                </p>
                <p>
                  <span className="block font-bold text-navy">Email</span>
                  <a href={`mailto:${site.email}`} className="text-coral-dark hover:underline">
                    {site.email}
                  </a>
                </p>
              </address>
            </div>

            <div className="card">
              <h2 className="text-2xl">Opening hours</h2>
              <dl className="mt-4 divide-y divide-navy/10">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4 py-3">
                    <dt className="text-ink-soft">{h.days}</dt>
                    <dd className="font-bold text-navy">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm text-ink-soft">
                Tours run most weekday mornings. Licence #{site.licenseNumber}.
              </p>
            </div>
          </div>

          <div>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
