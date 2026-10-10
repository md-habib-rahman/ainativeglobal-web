"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { FaArrowLeft } from "react-icons/fa6";

// Dynamically import Lottie for Next.js SSR compatibility
const Lottie = dynamic(() => import("@/components/common/LottiePlayer"), {
  ssr: false,
});
// Import your Lottie JSON file here
import aiAnimationData from "../../public/lottie/ai.json";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center overflow-hidden bg-slate-50 pt-16 pb-24">
      {/* Brand Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[400px] bg-gradient-to-r from-[#1D4ED8]/5 via-[#00D4FF]/10 to-[#00E676]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 flex max-w-2xl flex-col items-center px-4 md:px-8 text-center">
        {/* Lottie Animation Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 h-56 w-56 md:h-72 md:w-72"
        >
          <Lottie
            src={aiAnimationData}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "100%" }}
          />
        </motion.div>

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm"
        >
          <div className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-sans">
            System Update / 404
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 font-outfit text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
        >
          Upgrading the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] via-[#00D4FF] to-[#00E676]">
            Neural Network
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 max-w-lg font-sans text-base leading-relaxed text-slate-500"
        >
          The page you are looking for is currently undergoing maintenance, or
          the neural pathway does not exist. Let's redirect you back to the main
          platform.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#00D4FF] hover:scale-[1.02] text-white text-sm font-bold transition-all shadow-lg hover:shadow-[#00D4FF]/25 group"
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Return to Dashboard
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
