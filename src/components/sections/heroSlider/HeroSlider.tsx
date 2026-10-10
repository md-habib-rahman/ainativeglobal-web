"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// import { HeroSlideOne } from "./HeroSlideOne";

import { HeroSlideFour } from "./HeroSlideFour";
import { HeroSlideTwo } from "./HeroSlideTwo";
import { HeroSlideThree } from "./HeroSlideThree";

// Array of your hero components to map through
const slides = [
  //   { id: "hero-1", component: <HeroSlideOne /> },
  { id: "hero-2", component: <HeroSlideTwo /> },
  { id: "hero-3", component: <HeroSlideThree /> },
  { id: "hero-4", component: <HeroSlideFour /> },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = moving left, -1 = moving right
  const [isHovered, setIsHovered] = useState(false);

  // Automatically forces the next slide to enter from the right
  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  // Forces the previous slide to enter from the left
  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-play interval (Always loops forward infinitely)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      slideNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [isHovered, slideNext]);

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 250, damping: 30 },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 1,
      transition: { type: "spring", stiffness: 250, damping: 30 },
    }),
  };

  return (
    <section
      className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden bg-slate-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Seamless AnimatePresence Stack */}
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
          {slides[currentIndex].component}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
        <button
          onClick={slidePrev}
          className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-md border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-white hover:text-[#1D4ED8] transition-all shadow-lg pointer-events-auto"
          aria-label="Previous Slide"
        >
          <FaChevronLeft className="w-5 h-5 pr-1" />
        </button>

        <button
          onClick={slideNext}
          className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-md border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-white hover:text-[#1D4ED8] transition-all shadow-lg pointer-events-auto"
          aria-label="Next Slide"
        >
          <FaChevronRight className="w-5 h-5 pl-1" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-3 z-30 pointer-events-none">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              // Calculate direction based on whether the user clicked a dot ahead of or behind the current slide
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`transition-all duration-300 rounded-full pointer-events-auto shadow-sm ${
              currentIndex === idx
                ? "w-8 h-2.5 bg-gradient-to-r from-[#1D4ED8] to-[#00D4FF]"
                : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
