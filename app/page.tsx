import StructuredData from "@/components/StructuredData";
import Hero from "@/components/Hero";
import LocationBand from "@/components/LocationBand";
import Values from "@/components/Values";
import ProgramCards from "@/components/ProgramCards";
import ContentImageBlock from "@/components/ContentImageBlock";
import DailyRhythm from "@/components/DailyRhythm";
import FamilyTimeline from "@/components/FamilyTimeline";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />
      <LocationBand />
      <Values />
      <ProgramCards />

      <ContentImageBlock
        eyebrow="More than daycare"
        title="The day comes home with them"
        body="Children leave with paint on their sleeves and something to show you — a painting, a new word, a friend's name they keep repeating at dinner. That is the point of the whole day."
        points={[
          "Art, music and messy play every single day",
          "Photo and note updates while you are at work",
          "A real conversation at pick-up, not a wave from the doorway",
        ]}
        image="/images/child-artwork.jpg"
        imageAlt="A young child proudly holding up a drawing she made"
        cta={{ href: "/programs", label: "See how the day is built" }}
      />

      <DailyRhythm />
      <FamilyTimeline />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
