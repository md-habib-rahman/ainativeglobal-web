import Image from "next/image";
import { FaAward } from "react-icons/fa6";
import { BrandBadge } from "@/components/common/BrandBadge";

type Feature = {
  title: string;
  image: { src: string; alt: string };
  from: string;
  to: string;
  paragraphs: string[];
};

const FEATURES: Feature[] = [
  {
    title: "First in Bangladesh",
    image: {
      src: "https://res.cloudinary.com/vx7dgbed/image/upload/v1791575206/wcu_1.png", // TODO: replace
      alt: "Pioneering AI education across Bangladesh",
    },
    from: "#1D4ED8",
    to: "#00D4FF",
    paragraphs: [
      "We are pioneering AI education, automation, content and media for a smarter Bangladesh. Our work begins with a clear understanding of the country, its learners, its businesses, its creators and the opportunities that lie ahead. We believe a nation grows fastest when its people are equipped with the skills of the future, and we are committed to being the first to make that possible at scale.",
      "From classrooms to boardrooms, we bring practical, accessible AI knowledge to every corner of Bangladesh. We shape each program around local needs and align it with the standards the wider world expects. The result is a learning experience that is proudly local in spirit and global in ambition.",
    ],
  },
  {
    title: "International Affiliation",
    image: {
      src: "https://res.cloudinary.com/vx7dgbed/image/upload/v1791575206/wcu_22.png", // TODO: replace
      alt: "Globally recognized AI standards and partnerships",
    },
    from: "#00D4FF",
    to: "#00E676",
    paragraphs: [
      "Our programs are built on globally recognized standards and best practices, so that what you learn carries credibility far beyond Bangladesh. We keep a close eye on how the international AI community is evolving, and we continually refine our curriculum to remain current, rigorous and relevant. This ensures that our learners are never studying yesterday's knowledge.",
      "At the same time, we never lose sight of local context. We adapt world-class thinking to the realities of Bangladeshi learners and industries, so that international quality becomes practical and usable at home. You receive the confidence of a global standard, delivered with the understanding of a local guide.",
    ],
  },
  {
    title: "Skilled Resources",
    image: {
      src: "https://res.cloudinary.com/vx7dgbed/image/upload/v1791575201/wcu_3.jpg", // TODO: replace
      alt: "Experienced AI mentors teaching a class",
    },
    from: "#00E676",
    to: "#1D4ED8",
    paragraphs: [
      "Behind every program stands a passionate team of highly skilled AI professionals, trainers and creators who work with these technologies in the real world. They bring deep experience, sound judgment and a genuine love for teaching. Rather than reading from a script, they draw on live projects and practical challenges to make each lesson meaningful.",
      "Our mentors take the time to simplify complex ideas, offer thoughtful and personal feedback, and support you at every stage of the journey. Their commitment does not end when the session does. They remain invested in your progress, because your success is the true measure of their work.",
    ],
  },
  {
    title: "Industry-Ready Projects",
    image: {
      src: "https://res.cloudinary.com/vx7dgbed/image/upload/v1791575201/wcu_4.jpg", // TODO: replace
      alt: "Learners building real-world AI projects",
    },
    from: "#1D4ED8",
    to: "#00E676",
    paragraphs: [
      "Learning becomes powerful when it is applied. That is why you will work on real-world AI models and datasets, tackling the same kinds of problems that professionals and businesses face today. Each project is designed to stretch your thinking, strengthen your technical skills and give you something tangible to show for your effort.",
      "Over time, these projects form a portfolio that employers genuinely value, one that demonstrates not just what you know but what you can build. You step into the job market with proof of your ability, practical confidence and a clear advantage over those who have only studied theory.",
    ],
  },
  {
    title: "Adaptive Learning",
    image: {
      src: "https://res.cloudinary.com/vx7dgbed/image/upload/v1791575209/wcu_5.png", // TODO: replace
      alt: "AI-driven platform personalizing a learning path",
    },
    from: "#00D4FF",
    to: "#1D4ED8",
    paragraphs: [
      "Every learner is different, and our AI-driven platform is designed to respect that. It studies your learning speed, strengths and goals, then shapes your curriculum accordingly. If you move quickly, you are challenged with more advanced material. If you need more time, the path slows down and reinforces the foundations.",
      "This personalized approach removes the pressure of keeping up with a fixed pace and the frustration of being held back. Your learning stays focused, efficient and motivating, and it evolves as you do. The outcome is steady, confident growth that is built entirely around you.",
    ],
  },
];

export function ServicesZigZag() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      {/* Soft background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#1D4ED8]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#00E676]/10 blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center sm:mb-16 lg:mb-24">
          <BrandBadge
            icon={<FaAward className="h-4 w-4" />}
            text="Why Choose Us"
          />
          <h2 className="font-outfit text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0B1221] sm:text-4xl md:text-5xl">
            Learn with a{" "}
            <span className="bg-gradient-to-r from-[#1D4ED8] via-[#00D4FF] to-[#00E676] bg-clip-text text-transparent">
              Global Standard
            </span>
            , Built for Bangladesh
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
            {FEATURES.map((feature, idx) => {
              const gradient = `linear-gradient(135deg, ${feature.from}, ${feature.to})`;
              const reversed = idx % 2 === 1;

              return (
                <article
                  id={`feature-${idx + 1}`}
                  key={feature.title}
                  className={`relative flex flex-col gap-8 lg:items-center lg:gap-20 ${
                    reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* Center node (desktop only) */}
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 z-10 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white shadow-md lg:block"
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
                        src={feature.image.src}
                        alt={feature.image.alt}
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
                      {feature.title}
                    </h3>

                    <div
                      aria-hidden="true"
                      className="h-1 w-14 rounded-full"
                      style={{ background: gradient }}
                    />

                    {feature.paragraphs.map((text, i) => (
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
