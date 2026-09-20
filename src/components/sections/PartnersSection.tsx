"use client";

import { ArrowRight } from "lucide-react";
import { VscOpenai } from "react-icons/vsc";
import { SiNvidia, SiDatabricks, SiMeta } from "react-icons/si";
import { BrandButton } from "@/components/common/BrandButton";
import { BrandBadge } from "../common/BrandBadge";
import { RiBrainAi3Fill } from "react-icons/ri";
import { LiaAdobe } from "react-icons/lia";
import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";

// Custom Multi-Color Google SVG
const GoogleIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

// Custom Multi-Color Microsoft SVG
const MicrosoftIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#f25022" d="M1 1h10.5v10.5H1z" />
    <path fill="#7fba00" d="M12.5 1H23v10.5H12.5z" />
    <path fill="#00a4ef" d="M1 12.5h10.5V23H1z" />
    <path fill="#ffb900" d="M12.5 12.5H23V23H12.5z" />
  </svg>
);

// Custom Multi-Color AWS SVG
const AwsIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* "aws" wordmark */}
    <path
      fill="#252F3E"
      d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167 4.577 4.577 0 0 1 1.005-.36 4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.44.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144a1.78 1.78 0 0 0 .758-.51 1.27 1.27 0 0 0 .272-.512c.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.264-.168.312a.51.51 0 0 1-.303.08h-.687c-.15 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32L12.32 6.347l-1.238 5.146c-.04.16-.088.264-.151.32-.064.056-.176.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.216-.151-.248-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.16.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926a2.157 2.157 0 0 1-.583.703c-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z"
    />
    {/* Orange smile arrow */}
    <path
      fill="#FF9900"
      d="M21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"
    />
  </svg>
);

const partners = [
  {
    id: 1,
    content: (
      <>
        <VscOpenai className="w-6 h-6 text-slate-900" />
        <span className="font-bold text-slate-900 text-lg tracking-tight">
          OpenAI
        </span>
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        <GoogleIcon className="w-6 h-6" />
        <span className="font-bold text-[#4285F4] text-lg tracking-tight">
          Google
        </span>
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        <MicrosoftIcon className="w-5 h-5" />
        <span className="font-bold text-slate-700 text-lg tracking-tight">
          Microsoft
        </span>
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
        <AwsIcon className="w-12 h-12 mt-1" />
      </>
    ),
  },
  {
    id: 5,
    content: (
      <>
        <LiaAdobe className="w-6 h-6 text-[#FF0000]" />
        <span className="font-bold text-[#FF0000] text-lg tracking-tight ml-1">
          Adobe
        </span>
      </>
    ),
  },
  {
    id: 6,
    content: (
      <>
        <SiNvidia className="w-6 h-6 text-[#76B900]" />
        <span className="font-bold text-slate-900 text-lg tracking-tight">
          NVIDIA
        </span>
      </>
    ),
  },
  {
    id: 7,
    content: (
      <>
        <SiDatabricks className="w-5 h-5 text-[#FF3621]" />
        <span className="font-bold text-slate-900 text-lg tracking-tight">
          databricks
        </span>
      </>
    ),
  },
  {
    id: 8,
    content: (
      <>
        <SiMeta className="w-6 h-6 text-[#0668E1]" />
        <span className="font-bold text-slate-900 text-lg tracking-tight">
          Meta
        </span>
      </>
    ),
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
};

export function PartnersSection() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section
      className="relative w-full py-20 md:py-32 bg-white z-10"
      id="about"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 z-0 h-[360px] w-[360px] -translate-y-1/2 translate-x-1/2 select-none md:h-[820px] md:w-[820px]"
      >
        <motion.div
          className="relative h-full w-full opacity-[.2]"
          animate={shouldReduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="https://res.cloudinary.com/vx7dgbed/image/upload/v1789890128/rounded_spiral.png"
            alt=""
            fill
            sizes="(min-width: 768px) 820px, 360px"
            className="object-contain"
          />
        </motion.div>
      </div>
      <div className="container mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 px-4 md:px-8">
        {/* Left Column: Typography & Action */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-4 flex flex-col gap-5 pr-0 lg:pr-4"
        >
          <BrandBadge icon={<RiBrainAi3Fill />} text="Our AI Partners" />

          <h2 className="font-outfit text-4xl md:text-5xl font-extrabold text-[#0B1221] leading-[1.1] tracking-tight">
            Trusted by <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] via-[#00D4FF] to-[#00E676]">
              Global AI Leaders
            </span>
          </h2>

          <p className="font-sans text-base text-slate-500 leading-relaxed pt-1">
            We collaborate with world-class technology partners to bring you the
            best AI tools, resources and learning opportunities.
          </p>

          <div className="pt-4">
            <BrandButton icon={<ArrowRight className="w-5 h-5" />}>
              Partner With Us
            </BrandButton>
          </div>
        </motion.div>

        {/* Right Column: Embedded SVG Partner Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group flex items-center justify-between p-4 md:p-5 h-[80px] bg-white border border-[#00D4FF]/10 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-[#00D4FF]/10 hover:border-[#00D4FF]/40 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-center gap-2 h-full">
                {partner.content}
              </div>

              <ArrowRight className="w-4 h-4 text-[#00D4FF]/60 group-hover:text-[#00D4FF] group-hover:translate-x-1 transition-all duration-300 shrink-0 ml-2" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
