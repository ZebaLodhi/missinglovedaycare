export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div aria-hidden className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-sun/20 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-teal/20 blur-2xl" />
      <div className="wrap relative py-14 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">{intro}</p>
      </div>
    </section>
  );
}
