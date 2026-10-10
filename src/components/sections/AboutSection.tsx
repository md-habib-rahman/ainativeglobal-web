"use client";

import Image from "next/image";
import {
  motion,
  animate,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import {
  FaGraduationCap,
  FaAlignLeft,
  FaChartSimple,
  FaVideo,
  FaArrowRight,
} from "react-icons/fa6";
import { useEffect } from "react";
import { BrandBadge } from "@/components/common/BrandBadge";
import { FloatingFeatureCard } from "@/components/common/FloatingFeatureCard";
import { ActionCard } from "../common/actionCard";
import { FaInfoCircle } from "react-icons/fa";
import { BrandButton } from "../common/BrandButton";

// angle = position on the ring in degrees (0° = right, 90° = bottom, clockwise)
const orbitCards = [
  {
    title: "Academy",
    subtitle: "Learn with AI",
    icon: FaGraduationCap,
    angle: 225,
  },
  {
    title: "Martech",
    subtitle: "Grow with AI",
    icon: FaChartSimple,
    angle: 315,
  },
  { title: "Media", subtitle: "Tell with AI", icon: FaVideo, angle: 45 },
  {
    title: "Content",
    subtitle: "Create with AI",
    icon: FaAlignLeft,
    angle: 135,
  },
];

// Converts an angle to left/top percentages on a circle inscribed in its box
const pointOnRing = (angle: number) => {
  const rad = (angle * Math.PI) / 180;
  return {
    left: `${(50 + 50 * Math.cos(rad)).toFixed(3)}%`,
    top: `${(50 + 50 * Math.sin(rad)).toFixed(3)}%`,
  };
};

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  // One shared rotation value: the ring layer spins, the cards counter-spin.
  // Because both derive from the same value, they can never drift out of sync.
  const rotate = useMotionValue(0);
  const counterRotate = useTransform(rotate, (v) => -v);

  useEffect(() => {
    if (reduceMotion) return;
    const controls = animate(rotate, 360, {
      duration: 40,
      ease: "linear",
      repeat: Infinity,
    });
    return () => controls.stop();
  }, [rotate, reduceMotion]);

  return (
    <section
      className="relative w-full py-20 md:py-32 bg-white overflow-hidden"
      id="about"
    >
      {/* Soft Background Wave/Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-slate-50 to-white pointer-events-none" />
      <div className="absolute bottom-0 left-[-20%] w-[60%] h-[50%] bg-[#00D4FF]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column: 3D Robot & Planetary Floating Cards */}
          {/* Left Column: Robot, orbital ring & floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            // aspect-square is what keeps the ring a true circle at every screen size
            className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[560px]"
          >
            {/* Glowing aura */}
            <div className="pointer-events-none absolute inset-[10%] z-0 flex items-center justify-center">
              <div className="absolute h-full w-full rounded-full bg-[#1D4ED8]/25 blur-[90px]" />
              <div className="absolute h-[60%] w-[60%] rounded-full bg-[#00D4FF]/35 blur-[70px]" />
            </div>

            {/* Faint outer dashed ring for depth */}
            <div className="pointer-events-none absolute inset-[2%] z-10 rounded-full border border-dashed border-[#1D4ED8]/15" />

            {/* Main orbital ring (static, always a perfect circle) */}
            <div className="pointer-events-none absolute inset-[8%] z-10 rounded-full border border-[#00D4FF]/70" />

            {/* Robot */}
            <div className="absolute inset-[14%] z-20">
              <Image
                src="https://res.cloudinary.com/vx7dgbed/image/upload/v1789546212/ai_robot_01_with_radial_ray"
                alt="AI Assistant Robot"
                fill
                sizes="(min-width: 1024px) 400px, 80vw"
                className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* Orbit layer: exactly the same box as the ring, so cards sit ON the ring */}
            <motion.div
              style={{ rotate }}
              className="pointer-events-none absolute inset-[8%] z-30"
            >
              {orbitCards.map(({ title, subtitle, icon: Icon, angle }) => (
                <div
                  key={title}
                  style={pointOnRing(angle)}
                  // w-max stops the card from being squeezed by its absolute position
                  className="absolute w-max -translate-x-1/2 -translate-y-1/2"
                >
                  {/* Counter-rotation keeps the card upright while it travels */}
                  <motion.div style={{ rotate: counterRotate }}>
                    {/* Smaller cards on smaller screens */}
                    <div className="origin-center scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100">
                      <FloatingFeatureCard
                        title={title}
                        subtitle={subtitle}
                        icon={<Icon className="h-5 w-5" />}
                        className="!relative left-0 top-0"
                        isAnimated={false}
                      />
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Typography & Interactive Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Header Area */}
            <div className="space-y-6">
              <BrandBadge
                icon={<FaInfoCircle className="w-5 h-5" />}
                text="About Us"
              />

              <h2 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B1221] leading-tight tracking-tight">
                Empowering a Smarter <br />
                Tomorrow with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] via-[#00D4FF] to-[#00E676]">
                  AI
                </span>
              </h2>

              <p className="font-sans text-base md:text-lg text-slate-600 leading-relaxed">
                At AI native, we make artificial intelligence practical,
                accessible, and impactful for individuals and businesses.
                Through education, technology, and creative solutions, we help
                you learn, create, grow, and lead in an AI-driven world.
              </p>
            </div>

            {/* 2x2 Action Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <ActionCard
                title="Academy"
                subtitle="Build future AI skills"
                icon={<FaGraduationCap className="w-5 h-5 md:w-6 md:h-6" />}
                variant="blue-cyan"
              />
              <ActionCard
                title="Martech"
                subtitle="Accelerate your growth"
                icon={<FaChartSimple className="w-5 h-5 md:w-6 md:h-6" />}
                variant="cyan-emerald"
              />
              <ActionCard
                title="Content"
                subtitle="Turn ideas into impact"
                icon={<FaAlignLeft className="w-5 h-5 md:w-6 md:h-6" />}
                variant="blue-cyan"
              />
              <ActionCard
                title="Media"
                subtitle="Tell your story, wider"
                icon={<FaVideo className="w-5 h-5 md:w-6 md:h-6" />}
                variant="cyan-emerald"
              />
            </div>
            {/* <BrandButton
              onClick={() => window.open("/about", "_self")}
              icon={<FaArrowRight className="w-4 h-4" />}
            >
              Learn More
            </BrandButton> */}
          </motion.div>
        </div>
      </div>

      {/* Abstract Background Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <Image
          src="https://res.cloudinary.com/vx7dgbed/image/upload/v1789373277/abstract_bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
