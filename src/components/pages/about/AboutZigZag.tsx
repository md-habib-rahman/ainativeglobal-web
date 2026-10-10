import Image from "next/image";
import { FaLayerGroup } from "react-icons/fa6";
import { BrandBadge } from "@/components/common/BrandBadge";

type Service = {
  title: string;
  image: { src: string; alt: string };
  from: string;
  to: string;
  paragraphs: string[];
};

const SERVICES: Service[] = [
  {
    title: "Academy",
    image: {
      src: "https://res.cloudinary.com/vx7dgbed/image/upload/v1791574283/1.png", // TODO: replace
      alt: "Learners studying AI with a mentor in the Academy",
    },
    from: "#1D4ED8",
    to: "#00D4FF",
    paragraphs: [
      "Our Academy makes artificial intelligence understandable and usable for everyone, from curious beginners to experienced professionals. Learning is structured, practical and guided by skilled mentors, so every lesson moves you closer to real capability.",
      "You do not simply study AI. You learn to apply it in your work, your studies and your daily life, building the confidence to stay relevant in a fast-changing world.",
    ],
  },
  {
    title: "Martech",
    image: {
      src: "https://res.cloudinary.com/vx7dgbed/image/upload/v1791574281/2.png", // TODO: replace
      alt: "Marketing analytics and automation dashboard",
    },
    from: "#00D4FF",
    to: "#00E676",
    paragraphs: [
      "Martech brings intelligent technology. We help businesses understand their audiences, streamline campaigns and make decisions guided by data rather than guesswork.",
      "By combining smart automation with sound strategy, we remove repetitive effort and free your team to focus on what matters, building stronger relationships and driving steady and measurable growth.",
    ],
  },
  {
    title: "Content",
    image: {
      src: "https://res.cloudinary.com/vx7dgbed/image/upload/v1791574281/3.png", // TODO: replace
      alt: "Creative team producing AI-assisted content",
    },
    from: "#00E676",
    to: "#1D4ED8",
    paragraphs: [
      "Every strong idea deserves to be expressed well. Our Content solutions help you transform raw thoughts into clear, compelling and consistent material, from written pieces to creative concepts, using AI to accelerate the process without losing your authentic voice.",
      "The outcome is content that is polished, purposeful and ready to capture attention, whatever your audience or platform.",
    ],
  },
  {
    title: "Media",
    image: {
      src: "https://res.cloudinary.com/vx7dgbed/image/upload/v1791574281/4.png", // TODO: replace
      alt: "Video and visual storytelling production",
    },
    from: "#1D4ED8",
    to: "#00E676",
    paragraphs: [
      "A great story only matters when it reaches people. Our Media services help individuals and organizations craft engaging visual and video narratives and carry them to broader audiences with the help of modern AI tools.",
      "We combine creativity with technology so your message is not only seen, but remembered, and your voice travels further than before.",
    ],
  },
];

export function AboutZigZag() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-28">
      {/* Soft background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#00D4FF]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#00E676]/10 blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center sm:mb-16 lg:mb-24">
          <BrandBadge
            icon={<FaLayerGroup className="h-4 w-4" />}
            text="What We Do"
          />
          <h2 className="font-outfit text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0B1221] sm:text-4xl md:text-5xl">
            Where{" "}
            <span className="bg-gradient-to-r from-[#1D4ED8] via-[#00D4FF] to-[#00E676] bg-clip-text text-transparent">
              AI
            </span>{" "}
            Meets Impact
          </h2>
        </div>

        {/* Zig-zag list */}
        <div className="relative">
          {/* Center line (desktop only) */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-300 to-transparent lg:block"
          />

          <div className="flex flex-col gap-14 sm:gap-20 lg:gap-28">
            {SERVICES.map((service, idx) => {
              const gradient = `linear-gradient(135deg, ${service.from}, ${service.to})`;
              const reversed = idx % 2 === 1;

              return (
                <article
                  key={service.title}
                  className={`relative flex flex-col gap-8 lg:items-center lg:gap-20 ${
                    reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* Center node (desktop only) */}
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 z-10 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-slate-50 shadow-md lg:block"
                    style={{ background: gradient }}
                  />

                  {/* Image */}
                  <div className="relative w-full lg:flex-1">
                    {/* Offset gradient frame behind the image */}
                    <div
                      aria-hidden="true"
                      className={`absolute -bottom-3 h-full w-full rounded-3xl opacity-40 ${
                        reversed ? "-left-3" : "-right-3"
                      }`}
                      style={{ background: gradient }}
                    />

                    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-200 shadow-2xl shadow-slate-300/50 transition-transform duration-500 hover:-translate-y-1">
                      <Image
                        src={service.image.src}
                        alt={service.image.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Subtle brand tint + bottom shade */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-15 mix-blend-multiply"
                        style={{ background: gradient }}
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-[#0B1221]/30 via-transparent to-transparent"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex w-full flex-col gap-4 lg:flex-1">
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#1D4ED8]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <h3 className="font-outfit text-3xl font-extrabold leading-tight tracking-tight text-[#0B1221] sm:text-4xl">
                      {service.title}
                    </h3>

                    <div
                      aria-hidden="true"
                      className="h-1 w-14 rounded-full"
                      style={{ background: gradient }}
                    />

                    {service.paragraphs.map((text, i) => (
                      <p
                        key={i}
                        className="font-sans text-base leading-relaxed text-slate-600 md:text-lg"
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
