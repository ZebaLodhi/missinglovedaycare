import { FacebookIcon } from "./Doodles";
import { site } from "@/data/site";

/**
 * The Facebook recommendation card from the reference. It shows the
 * recommendation rate rather than a star rating: Facebook recommendations are
 * a yes/no, so stars would state something the source does not.
 */
export default function ReviewBadge() {
  if (!site.reviews.show) return null;

  return (
    <p className="inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-soft">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1877F2] text-white">
        <FacebookIcon className="h-5 w-5" />
      </span>
      <span className="text-sm font-bold leading-snug text-navy">
        {site.reviews.recommendPercent}% of {site.reviews.count} families
        <span className="block font-semibold text-ink-soft">
          on {site.reviews.source} recommend us
        </span>
      </span>
    </p>
  );
}
