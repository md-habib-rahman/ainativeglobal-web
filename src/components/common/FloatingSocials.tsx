"use client";

import { useState, useEffect, useRef, CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

const socialLinks = [
  { id: "facebook", icon: FaFacebookF, href: "#" },
  { id: "twitter", icon: FaXTwitter, href: "#" },
  { id: "linkedin", icon: FaLinkedinIn, href: "#" },
  { id: "youtube", icon: FaYoutube, href: "#" },
  { id: "instagram", icon: FaInstagram, href: "#" },
];

// The brand gradient border configuration
const gradientBorderStyle: CSSProperties = {
  padding: 2, // border thickness in px
  background: "linear-gradient(to right, #1D4ED8, #00D4FF, #00E676)",
  WebkitMask:
    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
};

export function FloatingSocials() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Detect Screen Size & Set Initial State
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768; // Tailwind 'md' breakpoint
      setIsMobile(mobile);
      setIsOpen(!mobile); // Default open on desktop, closed on mobile
    };

    handleResize(); // Check immediately on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2. Handle the 5-second Auto-Close Timer on Mobile
  useEffect(() => {
    if (isMobile && isOpen) {
      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 5000);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isOpen, isMobile]);

  return (
    <motion.div
      initial={false}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 250, damping: 25 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center"
    >
      {/* Mobile Toggle Arrow */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        // Removed standard borders, added overflow-hidden for the mask to sit cleanly
        className="md:hidden absolute -left-8 flex h-14 w-8 items-center justify-center rounded-l-xl bg-white/90 shadow-[-4px_0_10px_rgba(0,0,0,0.05)] text-slate-500 backdrop-blur-md transition-colors hover:text-[#1D4ED8] overflow-hidden"
        aria-label="Toggle Socials"
      >
        {/* Gradient Border Span */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-l-xl"
          style={gradientBorderStyle}
        />

        {/* Added relative z-10 so the icon stays above the border span */}
        <span className="relative z-10">
          {isOpen ? (
            <FaChevronRight className="w-4 h-4" />
          ) : (
            <FaChevronLeft className="w-4 h-4" />
          )}
        </span>
      </button>

      {/* Main Socials Container */}
      <div className="relative flex flex-col gap-3 p-2.5 rounded-l-2xl bg-white/90 backdrop-blur-md shadow-2xl shadow-slate-200/50">
        {/* Gradient Border Span */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-l-2xl"
          style={gradientBorderStyle}
        />

        {socialLinks.map((social) => (
          <motion.a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, x: -4 }}
            whileTap={{ scale: 0.95 }}
            // Added relative z-10 to ensure links are clickable above the border span
            className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-500 transition-colors duration-300 hover:bg-[#1D4ED8]/5 hover:border-[#1D4ED8]/30 hover:text-[#1D4ED8]"
            aria-label={social.id}
          >
            <social.icon className="w-[18px] h-[18px]" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
