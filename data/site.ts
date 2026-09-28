/**
 * Every real-world detail the site displays lives here.
 *
 * Contact details below are the center's real ones, taken from its Facebook
 * page. The values still marked `TODO` are placeholders written by the build,
 * not facts — replace them before the site goes live.
 */
export const site = {
  name: "Missing Love Daycare",
  tagline: "Nurturing Hearts & Minds",
  shortDescription:
    "A warm, licensed early-learning home in Chantilly, Virginia where every child is met with patience, play and plenty of love.",

  phone: "(602) 733-7957",
  phoneHref: "tel:+16027337957",
  email: "drukhsana@ymail.com",
  address: {
    street: "42971 Golf View Dr",
    city: "Chantilly",
    state: "VA",
    zip: "20152",
    country: "US",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=42971+Golf+View+Dr,+Chantilly,+VA+20152",

  // TODO: add the Virginia licence number. While this is empty the line is
  // hidden rather than showing a placeholder.
  licenseNumber: "",

  // TODO: confirm real opening hours.
  hours: [
    { days: "Monday – Friday", time: "6:30 AM – 6:00 PM" },
    { days: "Saturday", time: "By arrangement" },
    { days: "Sunday", time: "Closed" },
  ],

  ageRange: "6 weeks – 12 years",

  /**
   * Facebook rating as shown on the center's page. TODO: update the count when
   * it moves, or set `show: false` to hide the badge.
   */
  reviews: {
    show: true,
    source: "Facebook",
    recommendPercent: 100,
    count: 24,
  },

  social: {
    // TODO: paste the Facebook page URL to turn the footer link on.
    facebook: "",
    instagram: "",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/tuition", label: "Tuition" },
  { href: "/contact", label: "Contact" },
] as const;
