"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaLightbulb,
  FaRegFileLines,
  FaShareNodes,
  FaChartSimple,
} from "react-icons/fa6";
import { BrandButton } from "@/components/common/BrandButton";

export function HeroSlideThreeClient() {
  return (
    <>
      {/* 
        Heartbeat AI Square 
        Positioned absolute relative to the section to stick to the right edge across all screens.
      */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[38%] right-[19%] sm:right-[8%] md:top-[40%] md:right-[39.2%] lg:top-[39%] lg:right-[27%] -translate-y-1/2 z-10 w-24 h-24 sm:w-32 sm:h-32 md:w-24 md:h-24 lg:w-40 lg:h-40 hidden md:flex items-center justify-center pointer-events-none"
      >
        <Image
          src="https://res.cloudinary.com/vx7dgbed/image/upload/v1791485547/8_1.png"
          alt="AI Square"
          fill
          priority
          className="object-contain opacity-90 object-center"
        />
      </motion.div>

      {/* Foreground Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col w-full lg:max-w-2xl"
        >
          {/* Pre-heading */}
          <div className="flex items-center gap-3">
            <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Create Smarter Content
            </span>
            <div className="w-8 h-0.5 bg-linear-to-r from-[#1D4ED8] to-[#00D4FF]" />
          </div>

          {/* Main Headline */}
          <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-[#0B1221]">
            Content <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1D4ED8] via-[#00D4FF] to-[#00E676]">
              That Works
              <br />
            </span>
            {/* That Works <br className="hidden sm:block" /> */}
            Harder for You
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
            Plan. Create. Automate. Scale. <br className="hidden sm:block" />
            Turn ideas into high-performing content with AI.
          </p>

          {/* Responsive Feature Grid (Stacks to 2x2 on small mobiles, inline on larger screens) */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-start sm:items-center gap-4 sm:gap-6 py-4 sm:py-6 border-b border-slate-200">
            {[
              {
                icon: FaLightbulb,
                label: "Idea\nGeneration",
                color: "text-[#1D4ED8]",
                bg: "bg-[#1D4ED8]/10",
              },
              {
                icon: FaRegFileLines,
                label: "Content\nCreation",
                color: "text-[#00D4FF]",
                bg: "bg-[#00D4FF]/10",
              },
              {
                icon: FaShareNodes,
                label: "Multi-Channel\nDistribution",
                color: "text-[#1D4ED8]",
                bg: "bg-[#1D4ED8]/10",
              },
              {
                icon: FaChartSimple,
                label: "Performance\nInsights",
                color: "text-[#00E676]",
                bg: "bg-[#00E676]/10",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 sm:gap-3">
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${item.bg} flex items-center justify-center ${item.color} shrink-0`}
                >
                  <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-600 leading-tight whitespace-pre-line">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-2 w-full sm:w-auto">
            <BrandButton
              onClick={() => window.open("/services", "_self")}
              variant="primary"
              icon={<FaArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto justify-center"
            >
              Explore AI Content Solutions
		</BrandButton>
          </div>
        </motion.div>
      </div>
    </>
  );
}
