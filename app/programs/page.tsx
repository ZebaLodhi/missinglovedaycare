import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProgramCards from "@/components/ProgramCards";
import DailyRhythm from "@/components/DailyRhythm";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Programs",
  description: `Infant, toddler, preschool and after-school programs for children ${site.ageRange} at ${site.name}.`,
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title={`Care and learning for ages ${site.ageRange}`}
        intro="Each room has its own rhythm, but the thread is the same throughout: small groups, hands-on play and teachers who know exactly where your child is in their own development."
      />
      <ProgramCards showIntro={false} />
      <DailyRhythm />
      <FAQ />
      <CTA />
    </>
  );
}
