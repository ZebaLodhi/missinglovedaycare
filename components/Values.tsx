const values = [
  {
    title: "Love first",
    body: "Every child is greeted by name, comforted when they need it and celebrated for who they already are.",
    tone: "bg-coral text-white",
    icon: "M12 20s-7-4.4-7-9a4 4 0 017-2.6A4 4 0 0119 11c0 4.6-7 9-7 9z",
  },
  {
    title: "Learning through play",
    body: "Sand, stories, blocks and songs do the teaching. Letters and numbers arrive through games, not worksheets.",
    tone: "bg-teal text-navy-dark",
    icon: "M4 7h16v11H4zM4 7l4-3h8l4 3M9 12h6",
  },
  {
    title: "Safe, licensed care",
    body: "Secure entry, daily health checks, background-checked staff and ratios kept below the state maximum.",
    tone: "bg-sky text-navy-dark",
    icon: "M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z",
  },
  {
    title: "Partnership with parents",
    body: "Photo updates through the day, an open-door policy and a real conversation at pick-up — not just a sticker chart.",
    tone: "bg-sun text-navy-dark",
    icon: "M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M10 6a3 3 0 110 6 3 3 0 010-6zM21 20v-2a4 4 0 00-3-3.9",
  },
];

export default function Values() {
  return (
    <section className="section bg-teal/10">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">Why families stay</p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Care you can picture from the parking lot</h2>
          <p className="mt-4 text-lg text-ink-soft">
            The name came from a simple idea: no child should ever feel like love is the
            thing missing from their day.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <li key={v.title} className="card transition hover:-translate-y-1 hover:shadow-lift">
              <span className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${v.tone}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={v.icon} />
                </svg>
              </span>
              <h3 className="text-xl">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{v.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
