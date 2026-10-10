"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  FaStar,
  FaUserTie,
  FaChartPie,
  FaLightbulb,
  FaPenToSquare,
} from "react-icons/fa6";
import { BrandButton } from "@/components/common/BrandButton";
import { BrandBadge } from "@/components/common/BrandBadge";
import { GiTeacher } from "react-icons/gi";
import Link from "next/link";

const TRAVELING_BORDER =
  "conic-gradient(from 0deg, transparent 0deg, transparent 220deg, #1D4ED8 270deg, #00D4FF 320deg, #00E676 355deg, transparent 360deg)";

const instructors = [
  {
    name: "Rafid Hasan",
    role: "AI Educator & Prompt Engineer",
    bio: "Helps learners unlock the power of AI with practical, hands-on learning.",
    rating: 4.8,
    tags: ["Generative AI", "Prompting", "Productivity"],
    image:
      "https://res.cloudinary.com/vx7dgbed/image/upload/v1789836637/Rafid_Hasan_result.webp",
    icon: FaUserTie,
    theme: {
      bg: "bg-[#1D4ED8]/5",
      iconBg: "bg-[#1D4ED8]/10",
      text: "text-[#1D4ED8]",
      tagBg: "bg-[#1D4ED8]/10",
      gradient: "from-[#1D4ED8] to-[#00D4FF]",
    },
  },
  {
    name: "Nusrat Jahan",
    role: "AI & Data Scientist",
    bio: "Brings complex AI concepts to life with real-world applications.",
    rating: 4.9,
    tags: ["Data Analysis", "Machine Learning", "AI Tools"],
    image:
      "https://res.cloudinary.com/vx7dgbed/image/upload/v1789836637/Nusrat_Jahan_result.webp",
    icon: FaChartPie,
    theme: {
      bg: "bg-[#1D4ED8]/5",
      iconBg: "bg-[#1D4ED8]/10",
      text: "text-[#1D4ED8]",
      tagBg: "bg-[#1D4ED8]/10",
      gradient: "from-[#1D4ED8] to-[#00D4FF]",
    },
  },
  {
    name: "Tanvir Ahmed",
    role: "AI Automation & Business Strategist",
    bio: "Helps professionals and businesses drive efficiency with AI automation.",
    rating: 4.7,
    tags: ["AI Automation", "Business Strategy", "No-code"],
    image:
      "https://res.cloudinary.com/vx7dgbed/image/upload/v1789836637/Tanvir_Ahmed_result.webp",
    icon: FaLightbulb,
    theme: {
      bg: "bg-[#1D4ED8]/5",
      iconBg: "bg-[#1D4ED8]/10",
      text: "text-[#1D4ED8]",
      tagBg: "bg-[#1D4ED8]/10",
      gradient: "from-[#1D4ED8] to-[#00D4FF]",
    },
  },
  {
    name: "Sadia Rahman",
    role: "AI Content & Creative Specialist",
    bio: "Teaches how to create stunning content with AI and build a digital presence.",
    rating: 4.8,
    tags: ["AI Content", "Video Creation", "Personal Branding"],
    image:
      "https://res.cloudinary.com/vx7dgbed/image/upload/v1789836637/Sadia_Rahman_result.webp",
    icon: FaPenToSquare,
    theme: {
      bg: "bg-[#1D4ED8]/5",
      iconBg: "bg-[#1D4ED8]/10",
      text: "text-[#1D4ED8]",
      tagBg: "bg-[#1D4ED8]/10",
      gradient: "from-[#1D4ED8] to-[#00D4FF]",
    },
  },
];

// Upgraded Animations: Added scaling and optimized spring physics for a premium landing feel
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export function OurInstructorsSectionUpdated() {
  return (
    <section
      className="relative w-full py-20 bg-slate-50 overflow-hidden"
      id="instructors"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-linear-to-bl from-[#00D4FF]/5 to-transparent rounded-bl-full pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-linear-to-tr from-[#1D4ED8]/5 to-transparent pointer-events-none blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-4 max-w-2xl"
          >
            {/* Integrated BrandBadge Component */}
            <BrandBadge
              text="OUR INSTRUCTORS"
              icon={<GiTeacher className="w-4 h-4" />}
            />

            <h2 className="font-outfit text-4xl md:text-5xl font-extrabold text-[#0B1221] leading-[1.1] tracking-tight">
              Learn from AI Experts. <br />
              Build Skills for
              <span> </span>
              <span className="text-transparent bg-clip-text bg-gralineardient-to-r from-[#1D4ED8] via-[#00D4FF] to-[#00E676]">
                What's Next.
              </span>
            </h2>

            <p className="font-sans text-sm md:text-base text-slate-500 leading-relaxed pt-1">
              Industry professionals, AI practitioners and educators — guiding
              you with real-world experience and future-ready skills.
            </p>
          </motion.div>

          {/* Integrated BrandButton Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <BrandButton
              variant="gradient_outline"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View All Instructors
            </BrandButton>
          </motion.div>
        </div>

        {/* 4-Column Instructor Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {instructors.map((instructor) => {
            const slug = instructor.name.toLowerCase().replace(/\s+/g, "-");

            return (
              <motion.div
                key={instructor.name}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className="h-full"
              >
                <Link
                  href={`/instructors/${slug}`}
                  aria-label={`View ${instructor.name}'s profile`}
                  className="group relative block h-full rounded-2xl p-0.5 shadow-lg shadow-slate-200/40 transition-shadow duration-300 hover:shadow-xl hover:shadow-[#00D4FF]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
                >
                  {/* Glow layer: blurred copy of the traveling gradient */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70 group-focus-visible:opacity-70"
                  >
                    <span
                      className="aspect-square w-[250%] shrink-0 animate-spin motion-reduce:animate-none"
                      style={{
                        background: TRAVELING_BORDER,
                        animationDuration: "3s",
                        animationTimingFunction: "linear",
                      }}
                    />
                  </span>

                  {/* Crisp border layer: same gradient, only the 2px ring is visible */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    <span
                      className="aspect-square w-[250%] shrink-0 animate-spin motion-reduce:animate-none"
                      style={{
                        background: TRAVELING_BORDER,
                        animationDuration: "3s",
                        animationTimingFunction: "linear",
                      }}
                    />
                  </span>

                  {/* Card content (opaque, sits on top and leaves only the 2px ring exposed) */}
                  <div className="relative flex h-full flex-col rounded-[14px] border border-slate-100 bg-white p-3">
                    {/* Image Container */}
                    <div
                      className={`relative mb-3 aspect-4/3 w-full overflow-hidden rounded-xl ${instructor.theme.bg}`}
                    >
                      <Image
                        src={instructor.image}
                        alt={instructor.name}
                        fill
                        className="object-cover object-top mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Floating Icon */}
                      <div className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
                        <div
                          className={`flex h-6 w-6 items-center justify-center rounded-md ${instructor.theme.iconBg}`}
                        >
                          <instructor.icon
                            className={`h-3.5 w-3.5 ${instructor.theme.text}`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex grow flex-col px-1">
                      <h3 className="truncate font-outfit text-lg font-bold leading-tight text-slate-900">
                        {instructor.name}
                      </h3>
                      <p className="mb-2.5 mt-0.5 truncate font-sans text-[11px] text-slate-500">
                        {instructor.role}
                      </p>

                      <div className="mb-2.5 flex flex-wrap gap-1.5">
                        {instructor.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`rounded px-1.5 py-0.5 text-[9px] font-bold ${instructor.theme.tagBg} ${instructor.theme.text}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="mb-4 line-clamp-2 grow font-sans text-[12px] leading-snug text-slate-600">
                        {instructor.bio}
                      </p>

                      {/* Footer: Rating + decorative arrow (not a button) */}
                      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3">
                        <div className="flex items-center gap-1.5">
                          <div className="flex gap-0.5 text-[#FF8A00]">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <FaStar key={star} className="h-3 w-3" />
                            ))}
                          </div>
                          <span className="ml-1 font-sans text-xs font-bold text-slate-700">
                            ({instructor.rating})
                          </span>
                        </div>

                        <span
                          aria-hidden="true"
                          className={`${instructor.theme.text} transition-transform duration-300 group-hover:translate-x-1`}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
