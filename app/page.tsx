import StructuredData from "@/components/StructuredData";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import ProgramCards from "@/components/ProgramCards";
import DailyRhythm from "@/components/DailyRhythm";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />
      <Values />
      <ProgramCards />
      <DailyRhythm />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
