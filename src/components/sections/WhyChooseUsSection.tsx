"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  FaTrophy,
  FaGlobe,
  FaUsers,
  FaLaptopCode,
  FaBrain,
  FaArrowRight,
} from "react-icons/fa6";
import { BrandButton } from "@/components/common/BrandButton";
import { cn } from "@/lib/utils";
import { BrandBadge } from "../common/BrandBadge";
import { TbTargetArrow } from "react-icons/tb";
import Link from "next/link";

const carouselCards = [
  {
    id: 1,
    title: "First in Bangladesh",
    description:
      "Pioneering AI education, automation, content and media for a smarter Bangladesh.",
    image:
      "https://res.cloudinary.com/vx7dgbed/image/upload/v1789815421/first_time_in_bangladesh_aiNativeGlobal.webp",
    icon: FaTrophy,
    overlayText: "FIRST IN BANGLADESH",
  },
  {
    id: 2,
    title: "International Affiliation",
    description:
      "Globally recognized partnerships and certifications to ensure world-class learning and standards.",
    image:
      "https://res.cloudinary.com/vx7dgbed/image/upload/v1789815421/international_affiliation_in_education.webp",
    icon: FaGlobe,
    overlayText: "Google • Microsoft • OpenAI",
  },
  {
    id: 3,
    title: "Skilled Resources",
    description:
      "A passionate team of AI experts, trainers and creators dedicated to your success.",
    image:
      "https://res.cloudinary.com/vx7dgbed/image/upload/v1789815421/skilled_resources_ai_native_global.webp",
    icon: FaUsers,
    overlayText: "LEARN • CREATE • SCALE",
  },
  {
    id: 4,
    title: "Industry-Ready Projects",
    description:
      "Work on real-world AI models and datasets to build a portfolio that employers actually want.",
    image:
      "https://res.cloudinary.com/vx7dgbed/image/upload/v1789815735/Industry-Ready_Projects.webp",
    icon: FaLaptopCode,
    overlayText: "REAL WORLD EXPERIENCE",
  },
  {
    id: 5,
    title: "Adaptive Learning",
    description:
      "Our AI-driven platform customizes your curriculum based on your learning speed and goals.",
    image:
      "https://res.cloudinary.com/vx7dgbed/image/upload/v1789815735/Adaptive_Learning.webp",
    icon: FaBrain,
    overlayText: "PERSONALIZED AI PATHS",
  },
];

export function WhyChooseUsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(3);

  // NEW: State to detect mouse hover so auto-play pauses when the user is reading
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 768) setCardsVisible(1);
      else if (window.innerWidth < 1024) setCardsVisible(2);
      else setCardsVisible(3);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, carouselCards.length - cardsVisible);

  // NEW: Auto Card Movement Logic
  useEffect(() => {
    // Pause auto-movement if the user is dragging or hovering over the cards
    if (isDragging || isHovered) return;

    const autoPlayInterval = setInterval(() => {
      if (!carouselRef.current) return;
      const cardWidth = carouselRef.current.children[0].clientWidth + 24;

      // Calculate next index, loop back to 0 if at the end
      const nextIndex = activeIndex >= maxIndex ? 0 : activeIndex + 1;

      carouselRef.current.scrollTo({
        left: nextIndex * cardWidth,
        behavior: "smooth",
      });

      setActiveIndex(nextIndex);
    }, 3500); // Cards move every 3.5 seconds

    return () => clearInterval(autoPlayInterval);
  }, [activeIndex, maxIndex, isDragging, isHovered]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current!.offsetLeft);
    setScrollLeft(carouselRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current!.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollPosition = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.children[0].clientWidth + 24;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(Math.min(newIndex, maxIndex));
  };

  const scrollTo = (index: number) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.children[0].clientWidth + 24;
    carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <section
      className="relative w-full py-24 bg-white overflow-hidden"
      id="why-choose-us"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3 flex flex-col gap-6 relative z-20"
          >
            <div className="flex items-center gap-3">
              <BrandBadge
                text="Why Choose Us"
                icon={<TbTargetArrow className="w-5 h-5" />}
              />
            </div>

            <h2 className="font-outfit text-4xl md:text-5xl font-extrabold text-[#0B1221] leading-[1.1] tracking-tight">
              A Different <br />
              Tomorrow with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] via-[#00D4FF] to-[#00E676]">
                AI
              </span>
            </h2>

            <p className="font-sans text-base text-slate-600 leading-relaxed pt-2">
              We combine global expertise with local relevance to make AI
              education, automation, content and media accessible, practical and
              impactful for Bangladesh and beyond.
            </p>

            <div className="pt-4">
              <BrandButton
                icon={<FaArrowRight className="w-4 h-4" />}
                onClick={() => window.open("/services", "_self")}
                variant="primary"
              >
                Learn More
              </BrandButton>
            </div>
          </motion.div>

          {/* NEW: Right Column Entrance Animation 
              Added initial x: 150 to make all cards slide in from the right to left at once and stop */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-9 flex flex-col gap-8 w-full overflow-hidden"
          >
            <div
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseEnter={() => setIsHovered(true)} // NEW: Pause auto-play on hover
              onMouseLeave={(e) => {
                setIsHovered(false); // NEW: Resume auto-play on mouse leave
                handleMouseUpOrLeave();
              }}
              onMouseUp={handleMouseUpOrLeave}
              onMouseMove={handleMouseMove}
              onScroll={handleScroll}
              className={cn(
                "flex gap-6 overflow-x-auto pb-6 w-full select-none",
                "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
                isDragging
                  ? "snap-none cursor-grabbing"
                  : "snap-x snap-mandatory cursor-grab",
              )}
            >
              {carouselCards.map((card) => (
                <div
                  key={card.id}
                  className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start h-auto group/card"
                >
                  <div className="h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-200/50 transition-shadow duration-500 hover:shadow-2xl hover:shadow-[#00D4FF]/20 relative">
                    <div className="relative h-56 w-full overflow-hidden bg-[#0B1221]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover opacity-60 mix-blend-luminosity transition-transform duration-700 ease-in-out group-hover/card:scale-110 group-hover/card:opacity-80 group-hover/card:mix-blend-normal pointer-events-none"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      <div className="absolute top-4 right-4 md:top-6 md:right-6 flex flex-col items-end text-right">
                        <span className="text-[9px] md:text-[10px] font-sans font-bold text-white tracking-[0.15em] bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 uppercase">
                          {card.overlayText}
                        </span>
                      </div>
                    </div>

                    {/* CHANGED: Adjusted icon placement to account for the reduced padding below */}
                    <div className="absolute top-[12rem] left-5 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-50 z-20 transition-transform duration-700 ease-in-out group-hover/card:rotate-[360deg]">
                      <card.icon className="w-5 h-5 text-[#1D4ED8]" />
                    </div>

                    {/* CHANGED: Reduced Padding 
                        Changed p-8 pt-12 down to p-5 pt-8 for a tighter, cleaner text layout */}
                    <div className="p-5 pt-8 flex flex-col flex-grow">
                      <h3 className="font-outfit text-xl font-bold text-[#0B1221] mb-2">
                        {card.title}
                      </h3>
                      <p className="font-sans text-sm text-slate-500 leading-relaxed mb-4 flex-grow">
                        {card.description}
                      </p>

                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#00E676] flex items-center justify-center text-white self-end transition-transform duration-300 group-hover/card:scale-110 shadow-md shadow-[#00D4FF]/30">
                        <Link
                          href={`/services#feature-${card.id}`}
                          className="flex items-center justify-center w-full h-full"
                        >
                          <FaArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-3 pt-0">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "transition-all duration-300 rounded-full",
                    activeIndex === index
                      ? "w-8 h-2.5 bg-gradient-to-r from-[#1D4ED8] to-[#00D4FF]"
                      : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300",
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
