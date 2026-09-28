import { DotGrid, HeartDoodle, Sparkle } from "./Doodles";

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
      <div aria-hidden className="pointer-events-none absolute -left-24 -top-20 h-56 w-56 rounded-full bg-teal-light/60 blur-[1px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-28 right-10 h-56 w-56 rounded-full bg-sun-light/40 blur-xl" />
      <DotGrid className="pointer-events-none absolute right-6 top-8 hidden h-16 w-16 text-teal/50 sm:block" />
      <Sparkle className="pointer-events-none absolute bottom-10 left-6 hidden h-6 w-7 text-sun lg:block" />

      <div className="wrap relative py-14 sm:py-20">
        <p className="eyebrow">
          {eyebrow}
          <HeartDoodle className="h-3 w-3 text-coral" />
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.1] text-navy sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">{intro}</p>
      </div>
    </section>
  );
}
