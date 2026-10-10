"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaArrowRight,
  FaPlay,
  FaCube,
  FaLayerGroup,
  FaChartPie,
} from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { BrandButton } from "@/components/common/BrandButton";
import { BrandBadge } from "@/components/common/BrandBadge";

const STATS = [
  { value: "50+", label: "Projects" },
  { value: "10+", label: "Industries" },
  { value: "150+", label: "AI Solutions" },
  { value: "98%", label: "Satisfaction" },
];

const TRACKING_WORDS = [
  "Intelligence",
  "Systems",
  "Products",
  "Automation",
  "Future",
];

export function FloatingFeatureBadge({
  icon: Icon,
  title,
  subtitle,
  delay = 0,
  className = "",
}: {
  icon: IconType;
  title: string;
  subtitle: string;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0, y: [-8, 8, -8] }}
      transition={{
        opacity: { duration: 0.5, delay },
        x: { type: "spring", stiffness: 100, damping: 15, delay },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.2,
        },
      }}
      className={`absolute z-20 flex items-center gap-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-100 p-4 shadow-2xl shadow-slate-200/50 pointer-events-auto ${className}`}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1D4ED8]/5 text-[#1D4ED8]">
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex flex-col pr-4">
        <span className="font-outfit text-sm font-bold text-slate-900">
          {title}
        </span>
        <span className="font-sans text-[11px] text-slate-500 leading-tight">
          {subtitle}
        </span>
      </div>
      <div className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-[#1D4ED8] hover:bg-[#1D4ED8]/5 transition-colors cursor-pointer border border-slate-100">
        <FaArrowRight className="h-3 w-3" />
      </div>
    </motion.div>
  );
}

export function HeroSlideTwoClient() {
  const router = useRouter();

  return (
    <>
      {/* 1. Main Hero Image
          Mobile/Tablet: sits in its own reserved area above the tracking line
          Desktop: anchored bottom-right behind the content */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.95, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        className="absolute right-0 bottom-14 md:bottom-20 lg:bottom-0 z-10 w-full sm:w-[85%] md:w-[80%] lg:w-[55%] h-[220px] sm:h-[280px] md:h-[360px] lg:h-[85%] pointer-events-none"
      >
        <Image
          src="https://res.cloudinary.com/vx7dgbed/image/upload/v1791572711/hero_2_banner_1.jpg"
          alt="AiNativeGlobal Intelligence"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-contain object-center lg:object-cover lg:object-center opacity-90"
        />
      </motion.div> */}

      {/* 2. Foreground Content */}
      <div className="container relative z-30 mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col relative z-40"
          >
            <div className="w-fit">
              <BrandBadge
                icon={<FaCube className="w-4 h-4" />}
                text="AI Native Technology Company"
              />
            </div>

            <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0B1221]">
              Building <br />
              What&apos;s Next <br />
              With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] via-[#00D4FF] to-[#00E676]">
                AI.
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg md:max-w-xl">
              AI-native systems, products and experiences designed for the next
              generation of work.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-6 pt-2 sm:pt-4">
              <BrandButton
                onClick={() => router.push("/contact")}
                variant="primary"
                icon={<FaArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto justify-center"
              >
                Start a Project
              </BrandButton>

              <button type="button" className="flex items-center gap-3 group">
                <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-full border border-slate-300 text-[#1D4ED8] group-hover:border-[#1D4ED8] transition-colors bg-white shadow-sm">
                  <FaPlay className="w-3.5 h-3.5 ml-1" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-sm text-slate-900 group-hover:text-[#1D4ED8] transition-colors">
                    WATCH OUR STORY
                  </span>
                  <span className="text-xs text-slate-500">2 min</span>
                </div>
              </button>
            </div>

            {/* Stats: 2 cols on mobile, 4 cols from sm up */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-5 sm:gap-4 mt-2 sm:mt-4 border-t border-slate-200/60 pt-5 sm:pt-6 max-w-lg md:max-w-xl">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-outfit text-2xl font-black text-[#0B1221]">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[10px] sm:text-[9px] md:text-[10px] uppercase font-bold tracking-wider text-slate-500 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Floating Cards (desktop only) */}
          <div className="hidden lg:block w-full h-[600px] relative pointer-events-none">
            <FloatingFeatureBadge
              icon={FaCube}
              title="AI STRATEGY"
              subtitle="Turn ideas into powerful AI-driven products."
              className="top-[15%] right-[5%]"
              delay={0}
            />
            <FloatingFeatureBadge
              icon={FaLayerGroup}
              title="PRODUCT DEVELOPMENT"
              subtitle="Scalable AI systems for real-world impact."
              className="top-[35%] right-[-4%] xl:right-[-5%]"
              delay={1.5}
            />
            <FloatingFeatureBadge
              icon={FaChartPie}
              title="BUSINESS AUTOMATION"
              subtitle="Work smarter. Grow faster with AI."
              className="top-[55%] right-[5%]"
              delay={0.7}
            />
          </div>
        </div>
      </div>

      {/* 3. Bottom Tracking Line */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="absolute bottom-5 md:bottom-10 left-0 w-full z-30 pointer-events-none"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="relative flex items-center">
            <div className="absolute right-full mr-4 w-[50vw] h-0.5 bg-gradient-to-r from-transparent via-[#1D4ED8] to-[#00D4FF] rounded-l-full" />

            <span className="font-sans text-[8px] sm:text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] text-slate-500 flex flex-wrap items-center gap-y-1">
              {TRACKING_WORDS.map((word, idx) => (
                <span key={word} className="inline-flex items-center">
                  {idx > 0 && (
                    <span className="text-slate-300 font-light mx-2 md:mx-3">
                      |
                    </span>
                  )}
                  {word}
                </span>
              ))}
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
