"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  FaBrain,
  FaChartSimple,
  FaUserLock,
  FaRocket,
  FaGlobe,
  FaBriefcase,
} from "react-icons/fa6";
import { BrandButton } from "@/components/common/BrandButton";
import { ComponentType } from "react";
import { redirect } from "next/navigation";

interface FloatingCtaBadgeProps {
  title: string;
  subtitle?: string; // optional, since you already guard with {subtitle && ...}
  icon: ComponentType<{ className?: string }>;
  className?: string;
  delay?: number;
  borderHex?: string;
}
// Internal Reusable Component for the CTA Floating Badges
const FloatingCtaBadge = ({
  title,
  subtitle,
  icon: Icon,
  className,
  delay = 0,
  borderHex = "#00D4FF",
}: FloatingCtaBadgeProps) => (
  // 1. OUTER WRAPPER: Strictly handles the entrance animation (Opacity & Scale)
  <motion.div
    initial={{ opacity: 0, scale: 0.7 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay,
      type: "spring",
      stiffness: 100,
      damping: 15,
    }}
    className={`absolute z-30 flex ${className}`}
  >
    {/* 2. INNER WRAPPER: Strictly handles the continuous infinite float (Y-Axis) */}
    <motion.div
      animate={{ y: [0, -8, 0, 8, 0] }} // A proper closed-loop 5-step float
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay * 0.5,
      }}
      className="scale-[0.65] sm:scale-75 md:scale-90 lg:scale-100 origin-center"
    >
      {/* Outer Track with 1.5px padding for the border */}
      <div className="relative p-[1.5px] rounded-full overflow-hidden flex items-center shadow-lg shadow-[#00D4FF]/10">
        {/* The Continuous Glowing Slow-Running Border */}
        <div
          className="absolute -inset-full animate-[spin_4s_linear_infinite] z-0"
          style={{
            background: `conic-gradient(from 90deg at 50% 50%, transparent 0%, ${borderHex} 50%, transparent 100%)`,
          }}
        />

        {/* Inner Glass Pill */}
        <div className="relative z-10 flex items-center gap-3 p-1.5 pr-5 rounded-full bg-[#0B1221]/95 backdrop-blur-xl">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#1D4ED8] to-[#00D4FF] flex items-center justify-center shrink-0 shadow-inner">
            <Icon className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-outfit text-sm font-bold text-white leading-tight whitespace-nowrap">
              {title}
            </span>
            {subtitle && (
              <span className="font-sans text-[10px] text-[#00D4FF] font-medium leading-tight whitespace-nowrap">
                {subtitle}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export function CtaSection() {
  return (
    <section
      className="relative w-full py-12 md:py-16 bg-[#0B1221] overflow-hidden"
      id="cta"
    >
      {/* Deep Space Glowing Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-[#1D4ED8]/10 via-[#0B1221] to-[#0B1221] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] bg-[#00D4FF]/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[60%] bg-[#00E676]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="relative w-full rounded-[2rem] bg-linear-to-br from-white/3 to-transparent border border-white/10 p-6 md:p-8 lg:p-10 shadow-2xl">
          {/* Inner Glow mask */}
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[#00D4FF]/5 blur-3xl" />
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center relative z-10">
            {/* Left Column: Typography & Action */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-2 max-w-lg relative z-40"
            >
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-slate-400">
                Skills Today • A Brighter Tomorrow
              </span>

              <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
                Enhance Your <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1D4ED8] via-[#00D4FF] to-[#00E676]">
                  Career with AI
                </span>
              </h2>

              <div className="space-y-0.5 mt-1">
                <p className="font-sans text-base md:text-lg text-slate-300 font-medium">
                  Learn. Practice. Apply. Grow.
                </p>
                <p className="font-sans text-sm text-slate-400">
                  Real Skills. Real Opportunities. A Smarter You.
                </p>
              </div>

              <div className="pt-4">
                <BrandButton
                  icon={<ArrowRight className="w-5 h-5" />}
                  onClick={() => redirect("/contact")}
                >
                  Get Start
                </BrandButton>
              </div>
            </motion.div>

            {/* Right Column: 3D Robot & Floating Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-64 sm:h-72 md:h-80 flex items-center justify-center mt-2 lg:mt-0"
            >
              {/* Background Pedestal/Platform */}
              <div className="absolute bottom-6 w-[70%] h-8 bg-[#00D4FF]/20 rounded-[100%] blur-xl" />
              <div className="absolute bottom-8 w-[50%] h-3 bg-[#00D4FF]/40 rounded-[100%] shadow-[0_0_30px_rgba(0,212,255,0.8)]" />

              {/* Central 3D Robot Image */}
              <div className="relative z-20 w-[80%] h-[85%] lg:w-[90%] lg:h-[95%]">
                <Image
                  src="https://res.cloudinary.com/vx7dgbed/image/upload/v1789840572/ai_robot_03.png"
                  alt="AI Career Assistant"
                  fill
                  className="object-contain drop-shadow-[0_0_40px_rgba(0,212,255,0.3)]"
                />
              </div>

              {/* Floating Badges - Left Side */}
              <FloatingCtaBadge
                title="Learn"
                subtitle="New Skills"
                icon={FaBrain}
                borderHex="#1D4ED8"
                className="top-[0%] left-[0%] lg:left-[-5%]"
                delay={0}
              />
              <FloatingCtaBadge
                title="Boost"
                subtitle="Productivity"
                icon={FaChartSimple}
                borderHex="#00E676"
                className="top-[40%] left-[-5%] lg:left-[-10%]"
                delay={0.4}
              />
              <FloatingCtaBadge
                title="Unlock"
                subtitle="Opportunities"
                icon={FaUserLock}
                borderHex="#00D4FF"
                className="bottom-[10%] left-[0%] lg:left-[-5%]"
                delay={0.8}
              />

              {/* Floating Badges - Right Side */}
              <FloatingCtaBadge
                title="Stay"
                subtitle="Future Ready"
                icon={FaRocket}
                borderHex="#00D4FF"
                className="top-[5%] right-[0%] lg:right-[5%]"
                delay={0.2}
              />
              <FloatingCtaBadge
                title="Go"
                subtitle="Global"
                icon={FaGlobe}
                borderHex="#1D4ED8"
                className="top-[40%] right-[-5%] lg:right-[-2%]"
                delay={0.6}
              />
              <FloatingCtaBadge
                title="Build a"
                subtitle="Better You"
                icon={FaBriefcase}
                borderHex="#00E676"
                className="bottom-[15%] right-[0%] lg:right-[5%]"
                delay={1.0}
              />
            </motion.div>
          </div>

          {/* Bottom Right Tracked Text (sits in the card's bottom padding) */}
          <div className="absolute bottom-3 right-6 hidden md:block">
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.4em] text-slate-500">
              Learn <span className="text-[#00D4FF] mx-2">•</span>
              Create <span className="text-[#00D4FF] mx-2">•</span>
              Lead with AI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
