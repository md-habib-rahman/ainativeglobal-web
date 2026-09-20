"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { ComponentProps, CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

// Omit shadcn's own `variant`, because ours ("primary" | "outline" | ...) has different values
interface BrandButtonProps
  extends Omit<ComponentProps<typeof Button>, "variant"> {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "outline" | "gradient_outline";
}

const gradient = "bg-linear-to-r from-[#1D4ED8] via-[#00D4FF] to-[#00E676]";

// Gradient ring: the gradient fills the whole box, then the mask
// subtracts the inner (content) box so only the padding area remains.
const gradientBorderStyle: CSSProperties = {
  padding: 2, // border thickness in px
  background: "linear-gradient(to right, #1D4ED8, #00D4FF, #00E676)",
  WebkitMask:
    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
};

export function BrandButton({
  children,
  icon,
  className,
  variant = "primary",
  ...props
}: BrandButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-block rounded-full"
    >
      {variant === "gradient_outline" && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full"
          style={gradientBorderStyle}
        />
      )}

      <Button
        className={cn(
          "rounded-full px-8 py-6 font-outfit text-base font-medium transition-all cursor-pointer",

          variant === "primary" &&
            `${gradient} border-0 text-white shadow-lg shadow-[#00D4FF]/25 hover:opacity-90 hover:shadow-[#00D4FF]/40`,

          variant === "outline" &&
            "border-2 border-[#1D4ED8]/10 bg-white text-[#1D4ED8] shadow-sm hover:bg-[#1D4ED8]/5",

          variant === "gradient_outline" &&
            "relative border-0 bg-transparent text-[#1D4ED8] shadow-none hover:bg-transparent",

          className,
        )}
        {...props}
      >
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </Button>
    </motion.div>
  );
}