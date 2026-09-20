"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Menu, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { BrandButton } from "@/components/common/BrandButton"; // 1. Import our reusable button

export function TopNav() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="sticky top-0 z-50 w-full z-10 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        {/* Left Side: Brand Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/AI-Native-Logo-High-Resolution.png"
            alt="AiNativeGlobal"
            width={160}
            height={50}
            priority
            className="object-contain"
          />
        </Link>

        {/* Right Side: Navigation & Actions Grouped Together */}
        <div className="flex items-center gap-6 md:gap-8 ml-auto">
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-outfit text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-[#00D4FF] transition-colors">
              HOME
            </Link>
            <Link
              href="/about"
              className="hover:text-[#00D4FF] transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="/services"
              className="hover:text-[#00D4FF] transition-colors"
            >
              SERVICE
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#00D4FF] transition-colors"
            >
              CONTACT
            </Link>
            <Link
              href="/blog"
              className="hover:text-[#00D4FF] transition-colors"
            >
              BLOG
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className="text-slate-600 hover:text-[#00D4FF] transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* 2. Utilize the Reusable BrandButton */}
            <BrandButton
              variant="primary"
              className="hidden md:inline-flex cursor-pointer py-6"
            >
              <UserRound className="w-4 h-4" /> Login
            </BrandButton>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-slate-600 hover:text-[#00D4FF]">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
