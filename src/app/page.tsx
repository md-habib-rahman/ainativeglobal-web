import { AboutSection } from "@/components/sections/AboutSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CtaSection } from "@/components/sections/CtaSection.tsx";
import { HeroSection } from "@/components/sections/HeroSection";
import { OurAcademySection } from "@/components/sections/OurAcademySection";
import { OurInstructorsSectionUpdated } from "@/components/sections/OurInstructorsSection_updated";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <OurAcademySection />
      {/* <OurInstructorsSection /> */}
      <OurInstructorsSectionUpdated />
      <PartnersSection />
      <CtaSection />
      <BlogSection />
      {/* We will plug in the AboutGrid, FeatureCards, and BlogPreview below this line next */}
    </div>
  );
}
