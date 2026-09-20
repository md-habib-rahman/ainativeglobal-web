// src/components/common/BrandCard.tsx
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface BrandCardProps {
  children: ReactNode;
  className?: string;
}

export function BrandCard({ children, className = "" }: BrandCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card
        className={`h-full overflow-hidden border-slate-200 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/15 hover:border-cyan-200 bg-white ${className}`}
      >
        {children}
      </Card>
    </motion.div>
  );
}
