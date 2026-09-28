import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} handles the details you send through this website — what we collect, what we do with it, and how to have it deleted.`,
  robots: { index: true, follow: true },
};

/**
 * TODO for the owner: have this reviewed against your enrolment paperwork and
 * Virginia licensing requirements. It covers the website only — the records
 * you keep about enrolled children are governed by your own policies.
 */
export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="What we do with what you send us"
        intro="This page covers the enquiry form on this website. It is deliberately short, because we collect very little."
      />

      <section className="section bg-teal/10">
        <div className="wrap max-w-3xl space-y-8">
          <div className="card">
            <h2 className="text-2xl">What we collect</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Only what you type into the tour-request form: your name, email address,
              and optionally your phone number, your child&apos;s first name, the program
              you are interested in, a preferred start date, and your message.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl">What we do with it</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              We use it to answer your enquiry and arrange a tour — nothing else. We do
              not sell it, and we do not add you to a mailing list. The message is
              emailed to us and kept in that inbox.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl">Children&apos;s details</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Please send only a first name and an age or start date. There is no reason
              to include anything more in a first enquiry, and we would rather you
              didn&apos;t.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl">Tracking</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              This site sets no advertising or analytics cookies. Fonts are served from
              Google Fonts as part of the page design.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl">Having it deleted</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Email{" "}
              <a href={`mailto:${site.email}`} className="font-bold text-coral-dark hover:underline">
                {site.email}
              </a>{" "}
              or call{" "}
              <a href={site.phoneHref} className="font-bold text-coral-dark hover:underline">
                {site.phone}
              </a>{" "}
              and we will delete your enquiry.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
