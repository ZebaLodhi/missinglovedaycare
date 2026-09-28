import Link from "next/link";
import { site } from "@/data/site";

/**
 * Most parents reach a daycare site on a phone. This keeps the two actions
 * that matter within thumb reach; it is hidden from large screens, where the
 * header already carries them.
 */
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-cream-soft/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <div className="flex gap-2 px-4 py-3">
        <a
          href={site.phoneHref}
          className="btn flex-1 border-2 border-navy/25 bg-white text-navy"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A15 15 0 014 5a1 1 0 011-1z" />
          </svg>
          Call
        </a>
        <Link href="/contact" className="btn-coral flex-1">
          Schedule a tour
        </Link>
      </div>
    </div>
  );
}
