"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCalendarDays,
  FaClock,
  FaLaptop,
  FaGift,
} from "react-icons/fa6";
import { BrandButton } from "@/components/common/BrandButton";
import { BrandBadge } from "@/components/common/BrandBadge";
import { MdVideoChat } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { CSSProperties } from "react";

export function HeroSlideFourClient() {
  const gradientBorderStyle: CSSProperties = {
    padding: 2,
    background: "linear-gradient(to right, #1D4ED8, #00D4FF, #00E676)",
    WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
    mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col w-full lg:max-w-2xl"
    >
      <div className="w-fit">
        <BrandBadge
          icon={<MdVideoChat className="w-5 h-5" />}
          text="Introducing a Webinar"
        />
      </div>

      <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-[#0B1221] ">
        The Future of <br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] via-[#00D4FF] to-[#131916]">
          AI-Driven Business <br className="hidden lg:block" />
        </span>
        Transformation
      </h1>

      {/* Responsive Feature Dots */}
      <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-slate-600 text-sm md:text-base leading-relaxed">
        <span className="inline-flex items-center gap-1.5 font-semibold">
          <GoDotFill color="#1D4ED8" className="w-4 h-4 shrink-0" /> AI Strategy
        </span>
        <span className="inline-flex items-center gap-1.5 font-semibold">
          <GoDotFill color="#00D4FF" className="w-4 h-4 shrink-0" /> Intelligent Automation
        </span>
        <span className="inline-flex items-center gap-1.5 font-semibold">
          <GoDotFill color="#00E676" className="w-4 h-4 shrink-0" /> Business Innovation
        </span>
      </div>

      {/* Responsive Event Info Box */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-1 sm:gap-4 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl px-5 py-3.5 shadow-sm w-full sm:w-fit mt-2">
        <div className="flex items-center gap-2.5">
          <FaCalendarDays className="text-[#1D4ED8] w-4 h-4 shrink-0" />
          <span>24 October 2026</span>
        </div>
        
        <div className="w-px h-5 bg-slate-300 hidden sm:block" />
        
        <div className="flex items-center gap-2.5">
          <FaClock className="text-[#1D4ED8] w-4 h-4 shrink-0" />
          <span>7:30 PM (BD Time)</span>
        </div>
        
        <div className="w-px h-5 bg-slate-300 hidden sm:block" />
        
        <div className="flex items-center gap-2.5">
          <FaLaptop className="text-[#1D4ED8] w-4 h-4 shrink-0" />
          <span>Online Webinar</span>
        </div>
      </div>

      {/* CTA & Gift Card Row (Wrap dynamically based on screen size) */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 w-full">
        <BrandButton
          variant="primary"
          icon={<FaArrowRight className="w-4 h-4" />}
          className="w-full sm:w-auto justify-center"
        >
          Register Now
        </BrandButton>

        {/* Divider only visible when side-by-side on sm+ screens */}
        <div className="hidden sm:block border-r-2 border-slate-300 h-10" />

        <div className="relative flex items-center gap-4 bg-[#F0FDF4]/90 backdrop-blur-sm rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-sm z-10 w-full sm:w-auto flex-1 flex-row sm:flex-none">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-xl"
            style={gradientBorderStyle}
          />
          <div className="relative z-10 w-10 h-10 shrink-0 rounded-lg bg-[#DCFCE7] flex items-center justify-center text-[#059669]">
            <FaGift className="w-5 h-5" />
          </div>
          <div className="relative z-10 flex flex-col">
            <span className="text-sm font-bold text-[#1D4ED8]">
              Register for free.
            </span>
            <span className="text-xs text-slate-600 font-medium leading-tight mt-0.5">
              Get free access to one <br className="hiddensm:block" />
              online course.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}