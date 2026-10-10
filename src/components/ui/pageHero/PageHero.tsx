import Image from "next/image";
import { PageHeroClient, type PageHeroContentProps } from "./PageHeroClient"; // Adjust path if necessary

export type PageHeroProps = PageHeroContentProps & {
  /** Optional full-width background image. Without it, a soft brand glow + dot grid is used. */
  backgroundImage?: { src: string; alt: string };
  className?: string;
};

export function PageHero({
  backgroundImage,
  className = "",
  ...content
}: PageHeroProps) {
  const centered = content.align === "center";

  return (
    <section
      className={`relative flex w-full items-center overflow-hidden bg-slate-50 min-h-[45vh] md:min-h-[50vh] pt-32 pb-14 sm:pb-16 md:pb-20 lg:pt-36 ${className}`}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {backgroundImage ? (
          <>
            <Image
              src={backgroundImage.src}
              alt={backgroundImage.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-right md:object-center opacity-90"
            />
            {/* Keeps text readable over the image */}
            <div
              className={
                centered
                  ? "absolute inset-0 bg-slate-50/80"
                  : "absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent lg:via-slate-50/60"
              }
            />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
            <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#00D4FF]/15 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#00E676]/15 blur-3xl" />
            <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-[#1D4ED8]/10 blur-3xl" />
          </>
        )}
      </div>

      {/* Bottom hairline */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 z-10 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8">
        <PageHeroClient {...content} />
      </div>
    </section>
  );
}
