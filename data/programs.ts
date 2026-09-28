export type Program = {
  slug: string;
  name: string;
  ages: string;
  ratio: string;
  summary: string;
  highlights: string[];
  accent: "teal" | "coral" | "sun" | "sky";
};

/**
 * TODO: confirm age bands, staff-to-child ratios and programme details
 * against the centre's licence and daily practice before launch.
 */
export const programs: Program[] = [
  {
    slug: "infants",
    name: "Infant Nest",
    ages: "6 weeks – 18 months",
    ratio: "1 caregiver : 4 infants",
    summary:
      "Unhurried, responsive care built around each baby's own rhythm of feeding, sleeping and discovering.",
    highlights: [
      "Individual feeding and nap schedules",
      "Daily written updates for parents",
      "Tummy time, songs and sensory baskets",
      "Safe-sleep certified caregivers",
    ],
    accent: "coral",
  },
  {
    slug: "toddlers",
    name: "Toddler Garden",
    ages: "18 months – 3 years",
    ratio: "1 caregiver : 6 toddlers",
    summary:
      "Busy hands and big feelings get room to grow, with gentle routines that make the day feel predictable.",
    highlights: [
      "Potty-training partnership with families",
      "Messy play, music and movement daily",
      "First words, first friendships",
      "Outdoor time every morning and afternoon",
    ],
    accent: "teal",
  },
  {
    slug: "preschool",
    name: "Preschool Explorers",
    ages: "3 – 5 years",
    ratio: "1 teacher : 10 children",
    summary:
      "Play-based learning that quietly builds the letters, numbers and social skills kindergarten asks for.",
    highlights: [
      "Letter, number and early-writing centres",
      "Show-and-tell and story circle",
      "STEM discovery table",
      "Kindergarten-readiness check-ins",
    ],
    accent: "sun",
  },
  {
    slug: "school-age",
    name: "After-School Club",
    ages: "5 – 12 years",
    ratio: "1 teacher : 12 children",
    summary:
      "A calm landing spot after the school bell — homework first, then games, crafts and a proper run-around.",
    highlights: [
      "Quiet homework hour with help on hand",
      "Healthy afternoon snack",
      "Art, board games and team sports",
      "Full-day care on school holidays",
    ],
    accent: "sky",
  },
];
