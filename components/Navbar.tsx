"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { navLinks, site } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream-soft/90 backdrop-blur">
      <nav className="wrap flex h-20 items-center justify-between gap-4" aria-label="Main">
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-[44px] items-center rounded-full px-4 text-sm font-bold transition ${
                    active ? "bg-teal/20 text-navy" : "text-ink-soft hover:bg-teal/10 hover:text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link href="/contact" className="btn-coral !py-2.5 !text-sm">
            Schedule a tour
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy/20 text-navy md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-navy/10 bg-cream-soft md:hidden">
          <ul className="wrap flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex min-h-[48px] items-center rounded-2xl px-3 text-base font-bold text-navy hover:bg-teal/10"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-3 pb-3 pt-2">
              <Link href="/contact" className="btn-coral w-full">
                Schedule a tour
              </Link>
            </li>
            <li className="px-3 pb-4 text-sm font-semibold text-ink-soft">
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
