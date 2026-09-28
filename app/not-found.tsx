import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section bg-cream">
      <div className="wrap max-w-xl text-center">
        <p className="eyebrow">Page not found</p>
        <h1 className="mt-5 text-4xl">This little one wandered off</h1>
        <p className="mt-4 text-lg text-ink-soft">
          The page you were looking for is not here. Let us walk you back.
        </p>
        <Link href="/" className="btn-coral mt-8">
          Back to home
        </Link>
      </div>
    </section>
  );
}
