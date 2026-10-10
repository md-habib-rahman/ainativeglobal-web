"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { BrandButton } from "@/components/common/BrandButton";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting:", formData);
  };

  return (
    <section className="relative w-full py-16 mb-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl z-11">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[2.5rem] bg-white border border-slate-100 p-8 md:p-12 shadow-2xl shadow-slate-200/60 overflow-hidden z-11"
        >
          {/* Subtle Light Form Background Glow */}
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#00D4FF]/5 blur-3xl rounded-full pointer-events-none" />

          <div className="mb-10 relative z-10">
            <h2 className="font-outfit text-3xl font-bold text-slate-900 mb-3">
              Send us a message
            </h2>
            <p className="font-sans text-slate-500 text-sm">
              We'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tonmoy Khandakar"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="hello@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">
                Subject
              </label>
              <input
                type="text"
                required
                placeholder="How can we help you?"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell us a little about your project or inquiry..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-all resize-none"
              />
            </div>

            <BrandButton variant="primary" type="submit" className="group">
              Send Message
              <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </BrandButton>

            {/* <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#1D4ED8] to-[#00D4FF] hover:scale-[1.02] text-white text-sm font-bold transition-all shadow-lg hover:shadow-[#00D4FF]/25 group"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button> */}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
