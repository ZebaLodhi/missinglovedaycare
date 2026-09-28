import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} — home`}>
      <span className="relative block h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-teal/40">
        <Image
          src="/brand/missing-love-daycare-badge.jpg"
          alt=""
          fill
          sizes="48px"
          className="object-cover object-center"
          priority
        />
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block font-display text-lg font-extrabold tracking-tight text-navy sm:text-xl">
            Missing Love
          </span>
          <span className="block text-[0.7rem] font-bold uppercase tracking-[0.22em] text-sky">
            Daycare
          </span>
        </span>
      )}
    </Link>
  );
}
