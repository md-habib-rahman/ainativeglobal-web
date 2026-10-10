"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneVolume, FaBars, FaXmark } from "react-icons/fa6";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "SERVICE", href: "/services" },

  //   { name: "BLOG", href: "/blog" },
  { name: "SEMINAR", href: "/seminars" },
  { name: "CONTACT", href: "/contact" },
];

export function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle Navbar Squeeze & Background on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine Active Link Status
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div
          className={`container mx-auto flex items-center justify-between px-4 md:px-8 transition-all duration-300 ${
            isScrolled ? "h-16" : "h-24"
          }`}
        >
          {/* Left Side: Brand Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/AI-Native-Logo-High-Resolution.png"
              alt="AiNativeGlobal"
              width={160}
              height={50}
              priority
              className={`object-contain transition-all duration-300 ${isScrolled ? "scale-90" : "scale-100"}`}
            />
          </Link>

          {/* Right Side: Navigation & Actions */}
          <div className="flex items-center gap-6 md:gap-8 ml-auto">
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 font-outfit text-sm font-bold text-slate-600">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors relative py-2 ${
                    isActive(link.href)
                      ? "text-[#1D4ED8]"
                      : "hover:text-[#00D4FF]"
                  }`}
                >
                  {link.name}
                  {/* Active Indicator Dot/Line */}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1D4ED8] to-[#00D4FF] rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* User Actions */}
            <div className="flex items-center gap-4">
              {/* Call to Action Wrapper */}
              <Link href="tel:01715983652" className="hidden md:block">
                <div className="hidden md:flex items-center gap-3 cursor-pointer py-2 px-4 rounded-full hover:bg-[#1D4ED8]/5 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#00D4FF] to-[#00E676] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <FaPhoneVolume className="w-4 h-4 text-white" />
                  </div>{" "}
                  <div className="flex flex-col leading-tight">
                    <span className="text-[11px] font-sans text-slate-500 uppercase tracking-wider font-semibold">
                      Book a Call
                    </span>
                    <span className="font-outfit font-bold text-slate-900 text-sm">
                      01715983652
                    </span>
                  </div>
                </div>
              </Link>
              {/* Mobile Menu Toggle (Fill Icons) */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-slate-700 hover:text-[#1D4ED8] p-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <FaXmark className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[64px] z-40 bg-white border-b border-slate-200 shadow-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-base font-outfit font-bold py-2 px-4 rounded-xl transition-colors ${
                      isActive(link.href)
                        ? "bg-slate-50 text-[#1D4ED8]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-[#00D4FF]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="pt-4 mt-2 border-t border-slate-100">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-linear-to-r from-[#1D4ED8] via-[#00D4FF] to-[#00E676] flex items-center justify-center shadow-md">
                    <FaPhoneVolume className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[11px] font-sans text-slate-500 uppercase tracking-wider font-semibold">
                      Book a Call
                    </span>
                    <span className="font-outfit font-bold text-slate-900 text-sm">
                      01715983652
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
