/**
 * PLACEHOLDER PRICING — these weekly rates were invented for the template.
 * Replace every amount with the centre's real tuition before publishing.
 */
export const tuitionPlans = [
  {
    program: "Infant Nest",
    ages: "6 weeks – 18 months",
    fullTime: "$000 / week",
    partTime: "$000 / week (3 days)",
    accent: "coral",
  },
  {
    program: "Toddler Garden",
    ages: "18 months – 3 years",
    fullTime: "$000 / week",
    partTime: "$000 / week (3 days)",
    accent: "teal",
  },
  {
    program: "Preschool Explorers",
    ages: "3 – 5 years",
    fullTime: "$000 / week",
    partTime: "$000 / week (3 days)",
    accent: "sun",
  },
  {
    program: "After-School Club",
    ages: "5 – 12 years",
    fullTime: "$000 / week",
    partTime: "$000 / day (drop-in)",
    accent: "sky",
  },
] as const;

/** TODO: confirm what tuition covers and which fees apply. */
export const included = [
  "Breakfast, hot lunch and two snacks",
  "All learning materials and art supplies",
  "Daily photo and note updates",
  "Outdoor play every day, weather permitting",
  "Kindergarten-readiness assessments",
];

export const feeNotes = [
  { label: "Registration fee", value: "$000, once per family" },
  { label: "Supply fee", value: "$000, billed each autumn" },
  { label: "Sibling discount", value: "0% off the second child" },
  { label: "Late pick-up", value: "$0 per minute after closing" },
];
