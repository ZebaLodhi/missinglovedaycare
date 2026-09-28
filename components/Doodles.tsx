/**
 * The hand-drawn accents from the reference design: hearts, sparkles, stars,
 * dot grids and soft blobs. All decorative, so every one is aria-hidden.
 */

type P = { className?: string };

export function HeartDoodle({ className }: P) {
  return (
    <svg viewBox="0 0 24 22" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 21S1.5 14.4 1.5 7.6A5.6 5.6 0 0 1 12 4.8a5.6 5.6 0 0 1 10.5 2.8C22.5 14.4 12 21 12 21z" />
    </svg>
  );
}

export function HeartOutline({ className }: P) {
  return (
    <svg viewBox="0 0 24 22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 20S2.5 13.8 2.5 7.8A5.2 5.2 0 0 1 12 5.2a5.2 5.2 0 0 1 9.5 2.6C21.5 13.8 12 20 12 20z" />
    </svg>
  );
}

export function StarDoodle({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.6c.4 0 .7.2.9.6l2.3 4.8 5.2.8c.8.1 1.1 1.1.5 1.7l-3.8 3.7.9 5.2c.1.8-.7 1.4-1.4 1l-4.6-2.5-4.6 2.5c-.7.4-1.5-.2-1.4-1l.9-5.2-3.8-3.7c-.6-.6-.3-1.6.5-1.7l5.2-.8 2.3-4.8c.2-.4.5-.6.9-.6z" />
    </svg>
  );
}

/** Three short strokes, like a spark of movement. */
export function Sparkle({ className }: P) {
  return (
    <svg viewBox="0 0 34 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M3 7h9M2 15h7M5 23h9" />
    </svg>
  );
}

export function DotGrid({ className }: P) {
  return (
    <svg viewBox="0 0 80 80" fill="currentColor" className={className} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((r) =>
        [0, 1, 2, 3, 4].map((c) => (
          <circle key={`${r}-${c}`} cx={6 + c * 17} cy={6 + r * 17} r="3.4" />
        )),
      )}
    </svg>
  );
}

/** Soft organic shape used behind photographs and section corners. */
export function Blob({ className }: P) {
  return (
    <svg viewBox="0 0 200 200" fill="currentColor" className={className} aria-hidden="true">
      <path d="M45.5 -58.6C58 -47.9 65.6 -31.9 69.4 -14.9C73.2 2.1 73.2 20.1 65.2 33.8C57.2 47.5 41.2 56.9 24.6 62.4C8 67.9 -9.2 69.5 -25.9 64.8C-42.6 60.1 -58.8 49.1 -66.7 34C-74.6 18.9 -74.2 -0.3 -68.4 -16.8C-62.6 -33.3 -51.4 -47.1 -37.6 -57.4C-23.8 -67.7 -7.4 -74.5 8.3 -74.2C24 -73.9 33 -69.3 45.5 -58.6Z" transform="translate(100 100)" />
    </svg>
  );
}

export function CalendarIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

export function PhoneIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A15 15 0 0 1 4 5a1 1 0 0 1 1-1z" />
    </svg>
  );
}

export function ArrowIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function FacebookIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}
