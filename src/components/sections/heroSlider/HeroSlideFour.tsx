import Image from "next/image";
import { HeroSlideFourClient } from "./HeroSlideFourClient"; // Adjust path if necessary

export function HeroSlideFour() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-slate-50 pt-28 pb-20 lg:pt-0 lg:pb-0">
      {/* Full-Width Background Image Setup */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="https://res.cloudinary.com/vx7dgbed/image/upload/v1791523680/2_result.webp"
          alt="AI Platform Data Stream"
          fill
          priority
          className="object-cover object-right md:object-center opacity-90"
        />

        {/* Responsive Gradient Overlay: 
            Ensures left-aligned text is readable on mobile/tablet when the background image is squeezed */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent lg:hidden" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8">
        <HeroSlideFourClient />
      </div>
    </section>
  );
}
