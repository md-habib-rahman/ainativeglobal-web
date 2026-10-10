import Image from "next/image";
import { HeroSlideThreeClient } from "./HeroSlideThreeClient";

export function HeroSlideThree() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-slate-50 pt-28 pb-20 lg:pt-0 lg:pb-0">
      {/* Full-Width Background Image Setup */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="https://res.cloudinary.com/vx7dgbed/image/upload/v1791485386/1_result.webp"
          alt="AI Platform Data Stream"
          fill
          priority
          className="object-cover object-right opacity-90"
        />

        {/* Responsive Gradient Overlay: Ensures text on the left stays readable on mobile/tablet */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent lg:hidden" />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/50 to-transparent hidden lg:block" /> */}
      </div>

      {/* Renders the interactive client content */}
      <HeroSlideThreeClient />
    </section>
  );
}
