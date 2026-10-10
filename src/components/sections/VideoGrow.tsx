"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export function VideoGrow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 1. Map scroll position to scale and border radius
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.65, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["48px", "0px"]);

  // 2. Detect when 40% of the section is visible in the viewport
  const isInView = useInView(containerRef, { amount: 0.4 });

  // 3. Autoplay or pause based on visibility
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current
          .play()
          .catch((err) => console.log("Autoplay blocked by browser:", err));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 md:py-32 bg-slate-50 flex items-center justify-center overflow-hidden"
    >
      {/* Light Theme Background Ambience */}
      <div className="absolute top-0 right-0 w-[40%] h-[50%] bg-gradient-to-bl from-[#00D4FF]/10 to-transparent pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-[#1D4ED8]/10 to-transparent pointer-events-none blur-3xl" />

      {/* 
        The Video Container: 
        aspect-video strictly maintains the 16:9 ratio.
        w-full forces it to span the entire screen width when scale reaches 1.
      */}
      <motion.div
        style={{ scale, borderRadius }}
        className="relative w-full aspect-video shadow-2xl shadow-slate-200/60 bg-[#0B1221] z-10 overflow-hidden transform-origin-center"
      >
        {/* Active Video Player */}
        <video
          ref={videoRef}
          src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
          muted
          loop
          playsInline
          controls={true}
          className="w-full h-full object-cover outline-none"
        />

        {/* Branding Overlay */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2 pointer-events-none">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D4ED8] to-[#00D4FF] flex items-center justify-center shadow-lg">
            <span className="text-white font-outfit font-bold text-sm">Ai</span>
          </div>
          <span className="text-white font-sans font-bold tracking-wide text-lg drop-shadow-md">
            native
          </span>
        </div>
      </motion.div>
    </section>
  );
}
