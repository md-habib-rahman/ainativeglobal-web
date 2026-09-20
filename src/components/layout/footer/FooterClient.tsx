"use client";

import { useState } from "react";
import { ArrowRight, ArrowUp, Mail } from "lucide-react";
import { BrandButton } from "@/components/common/BrandButton";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect to your newsletter API endpoint here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative mt-4 w-full">
      <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
        <Mail className="h-4 w-4" />
      </div>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required
        className="w-full rounded-full border border-slate-700/50 bg-[#1A2235] py-3 pl-11 pr-36 text-sm text-white placeholder-slate-400 transition-all focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]"
      />

      {/* Positioning lives on this wrapper, so it never fights BrandButton's hover/tap transform */}
      <div className="absolute right-1.5 top-1/2 -translate-y-1/2">
        <BrandButton
          type="submit"
          variant="primary"
          className="h-9 px-5 py-0 text-sm"
        >
          Subscribe <ArrowRight className="h-4 w-4" />
        </BrandButton>
      </div>
    </form>
  );
}

export function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
      aria-label="Back to top"
    >
      <div className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-[#00D4FF] group-hover:bg-[#00D4FF]/10 transition-all">
        <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
      </div>
      <span className="text-sm">Back to Top</span>
    </button>
  );
}
