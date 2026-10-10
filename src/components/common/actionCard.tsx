"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ActionCardProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  variant: "blue-cyan" | "cyan-emerald";
  className?: string;
}

export function ActionCard({
  title,
  subtitle,
  icon,
  variant,
  className,
}: ActionCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group flex items-center justify-between w-full p-4 md:p-5 rounded-2xl shadow-lg transition-all",
        variant === "blue-cyan"
          ? "bg-linear-to-r from-[#1D4ED8] to-[#00D4FF] shadow-[#00D4FF]/20 hover:shadow-[#00D4FF]/40"
          : "bg-linear-to-r from-[#00D4FF] to-[#00E676] shadow-[#00E676]/20 hover:shadow-[#00E676]/40",
        className,
      )}
    >
      <Link
        href={`/about#${title.toLowerCase().replace(/\s+/g, "-")}`}
        className="flex items-center justify-between w-full"
      >
        <div className="flex items-center gap-4">
          {/* White Icon Container */}
          <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl text-white">
            {icon}
          </div>

          {/* Typography */}
          <div className="flex flex-col items-start text-left">
            <span className="font-outfit font-bold text-white text-base md:text-lg leading-tight">
              {title}
            </span>
            <span className="font-sans text-white/80 text-xs md:text-sm font-medium">
              {subtitle}
            </span>
          </div>
        </div>

        {/* Interactive Arrow */}
        <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.button>
  );
}
