/**
 * Real recommendations from the Missing Love Daycare Facebook page.
 *
 * PROOFREAD BEFORE LAUNCH: these were transcribed from screenshots of the
 * page, not copied from the posts themselves. The first seven were read from
 * a high-resolution capture; the rest came from smaller screenshots, so check
 * the spelling of names and wording against the original posts. Quotes ending
 * in "…" were truncated by Facebook's "See more" link — paste the full text in.
 */
export type Testimonial = {
  quote: string;
  name: string;
  date: string;
  /** Four-digit year, used by the family timeline. */
  year: number;
  /**
   * A short verbatim extract from `quote`, for the timeline. Must stay an
   * exact substring of the full quote — never paraphrase a parent.
   */
  pullQuote?: string;
  featured?: boolean;
  truncated?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Our daughter enjoys going to Missing Love Daycare. We feel at ease knowing that she's well taken care of by the caregivers, and that she's enjoying different activities with the friends she's made.",
    name: "Malahat AQ",
    date: "September 3, 2025",
    year: 2025,
    featured: true,
  },
  {
    quote:
      "We tried a few daycares before this one, and changing to this daycare was truly the best decision we made. A special thanks to Rukhsana for understanding our situation and helping us through the transition. We are so grateful to Mary and Mansoora for taking such wonderful care of our son, making him feel safe, and helping him learn and grow every single day. We recommend this place to anyone looking for a warm, safe, and nurturing en…",
    name: "Ramya Swetha",
    date: "September 2, 2025",
    year: 2025,
    truncated: true,
  },
  {
    quote:
      "This is a wonderful place. I've been bringing my daughter since she was 3 months old. She's over a year old now and gets so excited in the morning when I tell her it's time for school. The ladies are attentive and loving, they serve good food and do fun activities. They are very strict about health and safety and I have never had any concerns. I would recommend it to anyone in the area!",
    name: "Stephanie McLarty",
    date: "August 27, 2025",
    year: 2025,
    pullQuote:
      "She's over a year old now and gets so excited in the morning when I tell her it's time for school.",
    featured: true,
  },
  {
    quote:
      "Although we didn't stay long, we loved being with Ms Rukhsana and Ms Mary 💗 they were super sweet with my infant and I had no worries with him being in their great care!",
    name: "Elizabeth",
    date: "January 21, 2025",
    year: 2025,
  },
  {
    quote:
      "My son, 10 months old, Sawyer, just started with Ms Rukhsana a few weeks ago and he loves it there! I love that Ms Mary and Ms Rukhsana takes great care of him as well as keeps him clean! I don't pick him up with food on his clothes and he hasn't had any diaper rashes since he's started (which he gets a rash very easily!). I would highly recommend!",
    name: "Amy Schug",
    date: "August 15, 2024",
    year: 2024,
    pullQuote:
      "My son, 10 months old, Sawyer, just started with Ms Rukhsana a few weeks ago and he loves it there!",
    featured: true,
  },
  {
    quote:
      "My son has found a home away from home at your daycare! So much so that he misses his teachers even during vacation! I am forever grateful to you for taking care of my precious baby like one your own! The growth we see in him is incredible and the love you shower on him is unparalleled! Thank you for bringing positive energy into this world! You wont be disappointed if you choose this daycare.",
    name: "Vinita Lahoti",
    date: "April 2, 2024",
    year: 2024,
  },
  {
    quote:
      "We are lucky to have found Missing Love Daycare! From the very start, Rukhsana and her team were so welcoming, loving and caring. We never had a feeling of worry, we knew our children are well taken care of and loved. The connection and bond they have formed with Rukhsana's team is amazing, they are happy to see them each day and happy to go to daycare! I would 100% recommend this daycare to anyone who is looking. The prices are very…",
    name: "Alonzo Lucas",
    date: "March 19, 2024",
    year: 2024,
    truncated: true,
  },
  {
    quote:
      "I cannot say enough to express the gratitude and affection we have for Missing Love Daycare for the 2 years they took care of my son. He had lots and lots of fun, but most importantly he learned, matured and grew to have lots of friends and be ready for kindergarten. Ms. Rukhsana, Ms. Angie and Ms. Mery pampered him with lots of love and patience. We will truly miss them now that he is going to Kinder. I highly recommend this dayca…",
    name: "Carolina Madrid-Gil",
    date: "August 19, 2023",
    year: 2023,
    pullQuote:
      "He had lots and lots of fun, but most importantly he learned, matured and grew to have lots of friends and be ready for kindergarten.",
    truncated: true,
  },
  {
    quote:
      "My son absolutely loves it here. He always comes out dancing and so happy. Rukhsana and Ms Angie and other assistants are great",
    name: "Danielle Sims",
    date: "April 4, 2023",
    year: 2023,
  },
  {
    quote:
      "We are so lucky to have found Missing Love Daycare! As first time parents, it's overwhelming, and finding a safe, loving place to send our child was one of the most important decisions. From the very start, Rukhsana and her team were so welcoming, loving and caring. We never had a feeling of worry, we knew our son was well taken care of and loved. The connection and bond he has formed with Rukhsana's team is amazing, he is happy to se…",
    name: "Heather Marie",
    date: "August 2, 2022",
    year: 2022,
    pullQuote:
      "As first time parents, it's overwhelming, and finding a safe, loving place to send our child was one of the most important decisions.",
    truncated: true,
  },
  {
    quote:
      "We have taken our son to Rukhsana, Ms Sunny and Naji for over a year (14+ months). The three of them are absolutely wonderful and genuinely love and care for the little ones as if they were their own. From the moment I met Rukhsana I knew I could trust her with my baby. I just KNEW. She is a former educator and mom herself, and is the warmest, kindest person. She has exceeded my expectations in every way and we dread the day our s…",
    name: "Cathy Thomas Ivey",
    date: "February 18, 2021",
    year: 2021,
    pullQuote:
      "From the moment I met Rukhsana I knew I could trust her with my baby. I just KNEW.",
    truncated: true,
  },
  {
    quote:
      "My son has been at Missing Love Daycare since he was 3 months old. I was very scared to send him anywhere but he absolutely loves it here. I'm actually a little jealous how much he loves Ms. Naji and the staff! I'm very grateful to have such a great environment for my son to be taken care of each day to grow and learn with friends.",
    name: "Becki Gell Kreil",
    date: "November 22, 2019",
    year: 2019,
    pullQuote:
      "I was very scared to send him anywhere but he absolutely loves it here.",
  },
  {
    quote:
      "I am so thankful that I found Rukhsana and Angie thru a referral on a community page. I was so worried about having to leave my first baby and return to work but after having met her I knew this would be the perfect place for my son and I wasn't disappointed. My little guy came home after his first day with a smile on his face and was happy as can be. Thanks to her my little guy is thriving and I am so happy.",
    name: "Cherie Chang",
    date: "May 9, 2016",
    year: 2016,
    pullQuote:
      "My little guy came home after his first day with a smile on his face and was happy as can be.",
  },
];

/**
 * Kept for re-use: nothing renders this since the home page's testimonial
 * section was removed in favour of the family timeline.
 */
export const featuredTestimonials = testimonials.filter((t) => t.featured);

/** One entry per year that has a pull quote, oldest first — the timeline. */
export const timelineEntries = testimonials
  .filter((t) => t.pullQuote)
  .sort((a, b) => a.year - b.year);

export const firstReviewYear = Math.min(...testimonials.map((t) => t.year));
export const latestReviewYear = Math.max(...testimonials.map((t) => t.year));
