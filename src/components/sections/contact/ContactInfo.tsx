"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const infoCards = [
  {
    icon: Mail,
    title: "Chat with us",
    description: "Our friendly team is here to help.",
    detail: "ainativeglobal@gmail.com",
    delay: 0,
  },
  {
    icon: MapPin,
    title: "Visit us",
    description: "Come say hello at our HQ.",
    detail: "446/B, Love Road, Tejgaon Industrial Area, Dhaka - 1208",
    delay: 0.2,
  },
  {
    icon: Phone,
    title: "Call us",
    description: "Sun-Thu from 10am to 6pm.",
    detail: "+880 1711 090585",
    delay: 0.4,
  },
];

// +8801711090585
// ainativeglobal@gmail.com
// 446/B, Love Road, Tejgaon Industrial Area, Dhaka - 1208

export function ContactInfo() {
  return (
    <section className="relative w-full py-12 z-12 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {infoCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: card.delay }}
              className="flex flex-col items-start p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1D4ED8]/5 border border-[#1D4ED8]/10 flex items-center justify-center mb-6 group-hover:bg-[#1D4ED8]/10 group-hover:scale-110 transition-all duration-300">
                <card.icon className="w-6 h-6 text-[#1D4ED8]" />
              </div>
              <h3 className="font-outfit text-xl font-bold text-slate-900 mb-2">
                {card.title}
              </h3>
              <p className="font-sans text-sm text-slate-500 mb-6">
                {card.description}
              </p>
              <span className="font-sans text-sm font-bold text-[#1D4ED8]">
                {card.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
