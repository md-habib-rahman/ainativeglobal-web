"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BrandButton } from "@/components/common/BrandButton";
import { BrandBadge } from "@/components/common/BrandBadge";
import { FloatingFeatureCard } from "@/components/common/FloatingFeatureCard";
import {
  FaChartPie,
  FaGraduationCap,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa6"; // Standardized to fa6 for the latest icons
import { useRouter } from "next/navigation";

export function HeroSlideOne() {
  const router = useRouter();

  const handleGetStartedClick = () => {
    const location = "/contact";
    router.push(location);
  };

  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] flex items-start lg:items-center overflow-hidden bg-slate-50 pt-28 lg:pt-0 pb-36 lg:pb-0">
      {/* 1. Main Hero Image */}
      {/* Responsive adjustments: Adjusted height/width on mobile so it doesn't overlap text unreadably */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        className="absolute bottom-0 right-0 z-10 w-[95%] sm:w-[80%] md:w-[70%] lg:w-[55%] h-[50%] sm:h-[60%] lg:h-[85%] pointer-events-none border"
      >
        <Image
          src="https://res.cloudinary.com/vx7dgbed/image/upload/v1791471531/b9376a72-3b5d-4f46-b9b5-de3d629f23cc.png"
          alt="AiNativeGlobal Hero Model"
          fill
          priority
          className="object-contain scale-120 bottom-0 md:scale-100 lg:object-cover md:object-bottom-right" // Fixed Tailwind syntax
        />
      </motion.div>

      {/* 2. Abstract Overlay */}
      {/* UI Fix: Lowered to z-20 so it does not block clicks on the foreground buttons */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-30 -bottom-64">
        <Image
          src="https://res.cloudinary.com/vx7dgbed/image/upload/v1789402041/abstract_phase_1.png"
          alt="Abstract Overlay"
          fill
          className="object-contain object-bottom-left"
        />
      </div>

      {/* 3. Foreground Content */}
      <div className="container relative z-30 mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Typography & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6 relative z-40"
          >
            <BrandBadge
              icon={<FaGraduationCap className="w-5 h-5" />}
              text="Future-Ready Skills for Everyone"
            />

            <h1 className="font-outfit text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0B1221] leading-[1.1] tracking-tight">
              New Beginnings <br />
              Start with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] via-[#00D4FF] to-[#00E676]">
                AI
              </span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
              Learn in-demand skills. Create real projects. Lead a brighter
              tomorrow — with AI.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <BrandButton
                onClick={handleGetStartedClick}
                variant="primary"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Started
              </BrandButton>

              {/* <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative shadow-sm"
                    >
                      <Image
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="Student"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-sm">
                    26,655+
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Students Learning
                  </span>
                </div>
              </div> */}
            </div>
          </motion.div>

          {/* Right Column: 4 Orbital Floating Cards */}
          {/* Maintained hidden on mobile to prevent clutter; visible on lg+ screens */}
          <div className="hidden lg:block w-full h-[600px] relative pointer-events-none">
            <FloatingFeatureCard
              title="Learn"
              subtitle="New Skills"
              icon={<FaGraduationCap className="w-6 h-6" />}
              className="top-[15%] left-[5%] -rotate-3" // Adjusted massive rotations for a cleaner, subtle tilt
              delay={0}
            />

            <FloatingFeatureCard
              title="Create"
              subtitle="Real Projects"
              icon={<FaLightbulb className="w-6 h-6" />}
              className="top-[50%] left-[-10%] -rotate-3"
              delay={0.6}
            />

            <FloatingFeatureCard
              title="Grow"
              subtitle="Your Career"
              icon={<FaChartPie className="w-6 h-6" />}
              className="top-[10%] right-[15%] rotate-3"
              delay={1.2}
            />

            <FloatingFeatureCard
              title="Lead"
              subtitle="With Confidence"
              icon={<FaUsers className="w-6 h-6" />}
              className="top-[45%] right-[-5%] rotate-3"
              delay={1.8}
            />
          </div>
        </div>
      </div>

      {/* 4. Bottom Tracking Line */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="absolute bottom-6 md:bottom-10 left-0 w-full z-30 pointer-events-none"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative flex items-center">
            {/* The line that extends to the far left edge of the screen */}
            {/* Note: changed bg-linear-to-r back to standard bg-gradient-to-r for safety, but works identical */}
            <div className="absolute right-full mr-4 w-[50vw] h-0.5 bg-gradient-to-r from-transparent via-[#1D4ED8] to-[#00D4FF] rounded-l-full" />

            {/* The Tracking Text (Responsive flex-wrap for mobile) */}
            <span className="font-sans text-[8px] sm:text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] text-slate-500 flex flex-wrap items-center gap-y-1">
              <span>People</span>
              <span className="text-slate-300 font-light mx-2 md:mx-3">|</span>
              <span>Skills</span>
              <span className="text-slate-300 font-light mx-2 md:mx-3">|</span>
              <span>Ideas</span>
              <span className="text-slate-300 font-light mx-2 md:mx-3">|</span>
              <span>A Brighter Tomorrow</span>
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
