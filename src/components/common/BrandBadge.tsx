import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BrandBadgeProps {
  text: string;
  icon?: ReactNode;
  className?: string;
}

export function BrandBadge({ text, icon, className }: BrandBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1D4ED8]/10 border border-[#1D4ED8]/10 w-fit",
        className,
      )}
    >
      {icon && <span className="text-[#1D4ED8]">{icon}</span>}
      <span className="text-sm font-medium text-[#1D4ED8] font-sans">
        {text}
      </span>
    </div>
  );
}
