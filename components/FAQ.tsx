import { faqs } from "@/data/faq";

export default function FAQ() {
  return (
    <section className="section bg-sun/10">
      <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="eyebrow">Good to know</p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Questions parents ask first</h2>
          <p className="mt-4 text-ink-soft">
            Anything we have not covered? Call us — a person answers the phone.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-3xl border border-navy/10 bg-white px-6 py-5 shadow-soft"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-navy">
                {item.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal-dark transition group-open:rotate-45">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
