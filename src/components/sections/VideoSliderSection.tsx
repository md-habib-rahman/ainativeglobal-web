"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder images for the right-column slider
const SLIDER_IMAGES = [
  "https://res.cloudinary.com/vx7dgbed/image/upload/v1791628972/flash_1.jpg",
  "https://res.cloudinary.com/vx7dgbed/image/upload/v1791628971/flash_2.jpg",
  "https://res.cloudinary.com/vx7dgbed/image/upload/v1791628972/flash_3.jpg",
];

export function VideoSliderSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Slider State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Wrapped in useCallback so they can be safely used inside the useEffect dependency array
  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === SLIDER_IMAGES.length - 1 ? 0 : prevIndex + 1,
    );
  }, []);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? SLIDER_IMAGES.length - 1 : prevIndex - 1,
    );
  }, []);

  // Auto-play interval (pauses when user hovers over the slider)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      slideNext();
    }, 4000); // Changes slide every 4 seconds

    return () => clearInterval(timer);
  }, [isHovered, slideNext]);

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    }),
  };

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[30%] h-[50%] bg-gradient-to-bl from-[#00D4FF]/5 to-transparent pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-[#1D4ED8]/5 to-transparent pointer-events-none blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        {/* Responsive Grid: 1 col on mobile, 2 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* ================= LEFT COLUMN: VIDEO ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 bg-[#0B1221] group"
          >
            {!isVideoPlaying ? (
              <>
                {/* Video Poster Image */}
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="Video Thumbnail"
                  fill
                  className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Holographic Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-[#1D4ED8] transition-all duration-300 group/btn"
                  >
                    {/* Glowing outer rings */}
                    <div className="absolute inset-[-15px] rounded-full border border-white/20 animate-[ping_2s_ease-in-out_infinite]" />
                    <div className="absolute inset-[-30px] rounded-full border border-white/10 animate-[ping_2.5s_ease-in-out_infinite]" />

                    <Play className="w-8 h-8 md:w-10 md:h-10 ml-1.5 fill-current" />
                  </button>
                </div>

                {/* Optional Branding Overlay */}
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1D4ED8] to-[#00D4FF] flex items-center justify-center shadow-lg">
                    <span className="text-white font-outfit font-bold text-xs">
                      Ai
                    </span>
                  </div>
                  <span className="text-white font-sans font-semibold tracking-wide">
                    native
                  </span>
                </div>
              </>
            ) : (
              /* Active Video Player */
              <video
                src="https://techbita.com/wp-content/uploads/2026/10/ai_native_global_brand_video.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover outline-none"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </motion.div>

          {/* ================= RIGHT COLUMN: IMAGE SLIDER ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 bg-slate-100"
          >
            <div className="relative w-full h-full">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={SLIDER_IMAGES[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                  {/* Subtle gradient to ensure arrows remain visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
              <button
                onClick={slidePrev}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center hover:bg-white hover:text-[#1D4ED8] transition-all pointer-events-auto shadow-lg"
              >
                <ChevronLeft className="w-6 h-6 mr-1" />
              </button>

              <button
                onClick={slideNext}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center hover:bg-white hover:text-[#1D4ED8] transition-all pointer-events-auto shadow-lg"
              >
                <ChevronRight className="w-6 h-6 ml-1" />
              </button>
            </div>

            {/* Slider Pagination Dots */}
            <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2 pointer-events-none">
              {SLIDER_IMAGES.map((_, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === idx
                      ? "w-8 h-2.5 bg-[#00D4FF]"
                      : "w-2.5 h-2.5 bg-white/50 backdrop-blur-sm"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
