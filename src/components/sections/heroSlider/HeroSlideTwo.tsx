import Image from "next/image";
import { HeroSlideTwoClient } from "./HeroSlideTwoClient";

export function HeroSlideTwo() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-slate-50 pt-28 pb-24 lg:pt-0 lg:pb-0">
      {/* Full-Width Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="https://res.cloudinary.com/vx7dgbed/image/upload/v1791572711/hero_2_banner_1.jpg"
          alt="AiNativeGlobal Intelligence"
          fill
          priority
          
          className="object-cover object-right md:object-center opacity-90"
        />

        {/* Mobile/tablet gradient so left-aligned text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent lg:hidden" />
      </div>

      {/* Abstract Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-30 -bottom-64">
        <Image
          src="https://res.cloudinary.com/vx7dgbed/image/upload/v1789402041/abstract_phase_1.png"
          alt="Abstract Overlay"
          fill
          className="object-contain object-left-bottom"
        />
      </div>

      <HeroSlideTwoClient />
    </section>
  );
}
