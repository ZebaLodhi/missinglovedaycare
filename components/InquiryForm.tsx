"use client";

import Link from "next/link";
import { useState } from "react";
import { programs } from "@/data/programs";

type Status = "idle" | "sending" | "sent" | "error";

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="card text-center" role="status">
        <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal/20 text-teal-dark">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7" />
          </svg>
        </span>
        <h2 className="text-2xl">Thank you — we have your note</h2>
        <p className="mt-3 text-ink-soft">
          We answer tour requests within one business day. If it is urgent, please call us.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-outline mt-6">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="parentName" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        <Field label="Child's first name" name="childName" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-navy">Program of interest</span>
          <select
            name="program"
            defaultValue=""
            className="w-full rounded-2xl border-2 border-navy/15 bg-cream-soft px-4 py-3 text-ink focus:border-teal focus:outline-none"
          >
            <option value="">Not sure yet</option>
            {programs.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name} ({p.ages})
              </option>
            ))}
          </select>
        </label>
        <Field label="Preferred start date" name="startDate" type="date" />
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-bold text-navy">
          Anything we should know?
        </span>
        <textarea
          name="message"
          rows={5}
          className="w-full rounded-2xl border-2 border-navy/15 bg-cream-soft px-4 py-3 text-ink focus:border-teal focus:outline-none"
          placeholder="Days you need, allergies, questions about the tour…"
        />
      </label>

      {/* Honeypot — real parents never see or fill this. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {error && (
        <p role="alert" className="rounded-2xl bg-coral/15 px-4 py-3 text-sm font-semibold text-coral-dark">
          {error}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-coral w-full disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Schedule a tour"}
      </button>

      <p className="text-center text-xs text-ink-soft">
        We only use your details to answer your enquiry — never for anything else. See
        our{" "}
        <Link href="/privacy" className="font-bold text-navy underline underline-offset-2">
          privacy note
        </Link>
        . Please send only your child&apos;s first name.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-navy">
        {label}
        {required && <span className="text-coral"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-2xl border-2 border-navy/15 bg-cream-soft px-4 py-3 text-ink focus:border-teal focus:outline-none"
      />
    </label>
  );
}
