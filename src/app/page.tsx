import { AboutSection } from "@/components/sections/AboutSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CtaSection } from "@/components/sections/CtaSection";

import { HeroSlider } from "@/components/sections/heroSlider/HeroSlider";
import { OurAcademySection } from "@/components/sections/OurAcademySection";
import { VideoGrow } from "@/components/sections/VideoGrow";
import { VideoSliderSection } from "@/components/sections/VideoSliderSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSlider />
      <AboutSection />
      <WhyChooseUsSection />
      <VideoGrow />
      <OurAcademySection />
      {/* <OurInstructorsSection /> */}
      {/* <OurInstructorsSectionUpdated /> */}
      <VideoSliderSection />
      {/* <PartnersSection /> */}
      <CtaSection />
      <BlogSection />
      {/* We will plug in the AboutGrid, FeatureCards, and BlogPreview below this line next */}
    </div>
  );
}
