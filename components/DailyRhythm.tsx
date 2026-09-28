/**
 * TODO: adjust these times and activities to match the centre's real routine.
 */
const rhythm = [
  { time: "6:30 – 8:30", title: "Arrival & free play", note: "Health check, hugs, quiet choices at the tables." },
  { time: "8:30 – 9:00", title: "Breakfast", note: "Family-style, everyone helps clear up." },
  { time: "9:00 – 10:00", title: "Circle & learning centres", note: "Songs, calendar, letters, counting games." },
  { time: "10:00 – 11:15", title: "Outdoor play", note: "Climbing, chalk, water play in summer." },
  { time: "11:30 – 12:15", title: "Lunch", note: "Hot meal with a fruit or vegetable side." },
  { time: "12:30 – 2:30", title: "Rest time", note: "Cots, blankets, soft music — quiet activities for non-nappers." },
  { time: "2:30 – 3:15", title: "Snack & story", note: "Read-aloud and small-group chat." },
  { time: "3:15 – 5:00", title: "Art, STEM & outdoors", note: "Projects, building, second run-around." },
  { time: "5:00 – 6:00", title: "Wind-down & pick-up", note: "Tidy-up, puzzles, a proper handover with parents." },
];

export default function DailyRhythm() {
  return (
    <section className="section bg-cream-soft">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">A day with us</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Predictable days, room to wander</h2>
          <p className="mt-4 text-lg text-ink-soft">
            Young children relax when they know what comes next. This is the shape of a
            typical preschool day — infant and toddler rooms follow each child&apos;s own rhythm.
          </p>
        </div>

        <ol className="mt-12 space-y-3">
          {rhythm.map((item, i) => (
            <li
              key={item.time}
              className="grid items-start gap-3 rounded-3xl border border-navy/10 bg-white px-6 py-5 shadow-soft sm:grid-cols-[8.5rem_1fr]"
            >
              <span className="flex items-center gap-3 text-sm font-extrabold text-navy">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs text-white ${
                    ["bg-teal", "bg-coral", "bg-sun", "bg-sky"][i % 4]
                  }`}
                >
                  {i + 1}
                </span>
                {item.time}
              </span>
              <span>
                <span className="block font-display text-lg text-navy">{item.title}</span>
                <span className="mt-1 block text-sm text-ink-soft">{item.note}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
