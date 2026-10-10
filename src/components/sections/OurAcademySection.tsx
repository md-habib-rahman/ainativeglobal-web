"use client";

import { useRef, type MouseEvent } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight, LayoutGrid } from "lucide-react";
import {
  FaChildReaching,
  FaGraduationCap,
  FaRocket,
  FaUserTie,
  FaBuildingColumns,
  FaWrench,
  FaBookOpen,
  FaPenToSquare,
  FaChartSimple,
  FaGear,
  FaLaptop,
  FaUserGroup,
} from "react-icons/fa6";
import { BrandBadge } from "@/components/common/BrandBadge";
import Link from "next/link";

const academyCategories = [
  {
    title: "AI for Kids",
    subtitle: "Play. Learn. Create.",
    icon: FaChildReaching,
  },
  {
    title: "AI for Students",
    subtitle: "Skills for a brighter future",
    icon: FaGraduationCap,
  },
  {
    title: "AI for Entrepreneurs",
    subtitle: "Innovate. Build. Scale.",
    icon: FaRocket,
  },
  {
    title: "AI for Professionals",
    subtitle: "Work smarter, go further.",
    icon: FaUserTie,
  },
  {
    title: "AI for Gov't Concern",
    subtitle: "Smarter public services",
    icon: FaBuildingColumns,
  },
  {
    title: "Skill Development Tools",
    subtitle: "Practice. Build. Grow.",
    icon: FaWrench,
  },
  {
    title: "AI Foundations",
    subtitle: "Start your AI journey",
    icon: FaBookOpen,
  },
  { title: "Content AI", subtitle: "Create with AI", icon: FaPenToSquare },
  { title: "Marketing & Sales", subtitle: "Grow with AI", icon: FaChartSimple },
  { title: "AI Automation", subtitle: "Automate. Save. Scale.", icon: FaGear },
  { title: "Freelancing", subtitle: "Turn skills into income", icon: FaLaptop },
  {
    title: "AI for Founders",
    subtitle: "From idea to impact",
    icon: FaUserGroup,
  },
];

/* ---------- Animation variants ---------- */

const headerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const headerItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const gridContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.92, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 90, damping: 16 },
  },
};

/* ---------- Single category card ---------- */

function CategoryCard({
  category,
}: {
  category: (typeof academyCategories)[number];
}) {
  const Icon = category.icon;

  // Writes the pointer position into CSS variables (no React re-render per mouse move)
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      className="group relative flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-[#00D4FF]/10 bg-linear-to-r from-[#1D4ED8]/3 to-[#00D4FF]/5 p-3 pr-5 transition-[border-color,box-shadow] duration-300 hover:border-[#00D4FF]/40 hover:shadow-lg hover:shadow-[#00D4FF]/15"
    >
      <Link
        href={`/academy/${category.title.toLowerCase().replace(/\s+/g, "-")}`}
        className="flex w-full items-center gap-4"
      >
        {/* Fill sweep: gradient wipes in from the left on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-linear-to-r from-[#1D4ED8]/10 to-[#00D4FF]/15 transition-transform duration-500 ease-out group-hover:scale-x-100"
        />

        {/* Cursor spotlight */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(180px circle at var(--x, 50%) var(--y, 50%), rgba(0,212,255,0.22), transparent 70%)",
          }}
        />

        {/* min-w-0 lets the text truncate without needing overflow-hidden here */}
        <div className="relative flex min-w-0 items-center gap-4">
          {/* Icon circle: the glow ring is a box-shadow, so it always follows the round shape */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#1D4ED8] shadow-sm transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-linear-to-br group-hover:from-[#1D4ED8] group-hover:to-[#00D4FF] group-hover:text-white group-hover:shadow-[0_0_0_5px_rgba(0,212,255,0.2)]">
            <Icon className="h-5 w-5" />
          </div>

          <div className="flex min-w-0 flex-col items-start truncate">
            <span className="w-full truncate font-outfit text-[15px] font-bold leading-tight text-[#1D4ED8]">
              {category.title}
            </span>
            <span className="mt-0.5 w-full truncate font-sans text-[11px] font-medium text-slate-500">
              {category.subtitle}
            </span>
          </div>
        </div>

        <ArrowRight className="relative ml-2 h-4 w-4 shrink-0 text-[#1D4ED8]/40 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-[#1D4ED8]" />
      </Link>
    </motion.div>
  );
}

/* ---------- Section ---------- */

export function OurAcademySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // Scroll-linked parallax for the background orbs
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.5,
  });
  const orbY1 = useTransform(smooth, [0, 1], [-80, 120]);
  const orbY2 = useTransform(smooth, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white py-24"
      id="academy"
    >
      {/* Dot grid, faded toward the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(29,78,216,0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Drifting, parallaxing orbs */}
      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { y: orbY1 }}
        className="pointer-events-none absolute -top-20 right-0 h-[420px] w-[420px]"
      >
        <motion.div
          animate={
            reduceMotion ? undefined : { x: [0, 40, 0], scale: [1, 1.15, 1] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full rounded-full bg-[#00D4FF]/15 blur-3xl"
        />
      </motion.div>

      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { y: orbY2 }}
        className="pointer-events-none absolute -bottom-20 left-0 h-[380px] w-[380px]"
      >
        <motion.div
          animate={
            reduceMotion ? undefined : { x: [0, -30, 0], scale: [1, 1.2, 1] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full rounded-full bg-[#1D4ED8]/10 blur-3xl"
        />
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? undefined : { y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-10 top-20 h-24 w-24 rounded-full bg-[#00E676]/10 blur-2xl"
      />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 flex flex-col items-center space-y-6 text-center"
        >
          <motion.div variants={headerItem}>
            <BrandBadge
              icon={<LayoutGrid className="h-4 w-4" />}
              text="OUR ACADEMY"
            />
          </motion.div>

          <motion.h2
            variants={headerItem}
            className="font-outfit text-3xl font-extrabold tracking-tight text-[#0B1221] md:text-4xl lg:text-5xl"
          >
            Learn AI for a{" "}
            <span className="relative inline-block">
              {/* Gradient that flows continuously through the text */}
              <motion.span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #1D4ED8, #00D4FF, #00E676, #00D4FF, #1D4ED8)",
                  backgroundSize: "200% auto",
                }}
                animate={
                  reduceMotion
                    ? undefined
                    : { backgroundPosition: ["0% 50%", "200% 50%"] }
                }
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                Brighter Tomorrow
              </motion.span>

              {/* Hand-drawn underline that draws itself in */}
              <svg
                aria-hidden="true"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-2.5 w-full"
              >
                <defs>
                  <linearGradient
                    id="academy-underline"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#1D4ED8" />
                    <stop offset="50%" stopColor="#00D4FF" />
                    <stop offset="100%" stopColor="#00E676" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M2 8 C 50 2, 120 12, 198 4"
                  fill="none"
                  stroke="url(#academy-underline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.7, ease: "easeInOut" }}
                />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            variants={headerItem}
            className="mx-auto max-w-2xl font-sans text-base text-slate-500 md:text-lg"
          >
            Practical AI education for every stage of life — designed for
            individuals, professionals and organizations.
          </motion.p>
        </motion.div>

        {/* 12-item grid */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
        >
          {academyCategories.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
