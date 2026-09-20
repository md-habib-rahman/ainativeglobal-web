"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingFeatureCardProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  className?: string;
  delay?: number;
  isAnimated?: boolean; // NEW: Toggle for continuous orbital animation
}

export function FloatingFeatureCard({
  title,
  subtitle,
  icon,
  className,
  delay = 0,
  isAnimated = true,
}: FloatingFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        isAnimated
          ? {
              opacity: 1,
              scale: 1,
              // Orbital motion path
              y: [0, -12, 0, 12, 0],
              x: [0, 8, 0, -8, 0],
            }
          : {
              // Static entry
              opacity: 1,
              scale: 1,
              y: 0,
              x: 0,
            }
      }
      transition={
        isAnimated
          ? {
              opacity: { duration: 0.6, delay },
              scale: { duration: 0.6, delay, type: "spring" },
              // Infinite orbital loop
              y: { duration: 6, repeat: Infinity, ease: "linear", delay },
              x: {
                duration: 6,
                repeat: Infinity,
                ease: "linear",
                delay: delay + 1.5,
              },
            }
          : {
              // Standard static spring entry
              duration: 0.6,
              delay,
              type: "spring",
            }
      }
      className={cn(
        "absolute z-40 flex flex-col items-center justify-center gap-1 min-w-[130px] p-4",
        "bg-white/80 backdrop-blur-md border border-white/60 rounded-3xl",
        "shadow-2xl shadow-[#1D4ED8]/10",
        className,
      )}
    >
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1D4ED8]/10 to-[#00D4FF]/10 flex items-center justify-center mb-1 text-[#1D4ED8]">
        {icon}
      </div>
      <h4 className="font-outfit font-bold text-slate-900 text-[15px] leading-tight">
        {title}
      </h4>
      <p className="font-sans text-[11px] text-slate-500 font-medium">
        {subtitle}
      </p>
    </motion.div>
  );
}
