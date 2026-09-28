/**
 * Every real-world detail the site displays lives here.
 *
 * IMPORTANT: the values marked `TODO` are placeholders written by the build,
 * not facts about the centre. Replace them with the real address, phone,
 * licence number, hours and tuition before the site goes live.
 */
export const site = {
  name: "Missing Love Daycare",
  tagline: "Nurturing Hearts & Minds",
  shortDescription:
    "A warm, licensed early-learning home where every child is met with patience, play and plenty of love.",

  // TODO: replace with the centre's real contact details.
  phone: "(000) 000-0000",
  phoneHref: "tel:+10000000000",
  email: "hello@missinglovedaycare.com",
  address: {
    street: "123 Example Street",
    city: "Your City",
    state: "ST",
    zip: "00000",
  },

  // TODO: replace with the real state licence number, or remove the line
  // from components/Footer.tsx if it should not be displayed.
  licenseNumber: "TODO-LICENSE-000000",

  // TODO: confirm real opening hours.
  hours: [
    { days: "Monday – Friday", time: "6:30 AM – 6:00 PM" },
    { days: "Saturday", time: "By arrangement" },
    { days: "Sunday", time: "Closed" },
  ],

  ageRange: "6 weeks – 12 years",

  social: {
    // TODO: add real profile URLs, or leave empty to hide the link.
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
