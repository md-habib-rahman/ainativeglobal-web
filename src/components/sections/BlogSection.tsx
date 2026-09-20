"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion,Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { BrandBadge } from "@/components/common/BrandBadge";
import { BrandButton } from "@/components/common/BrandButton";
import { cn } from "@/lib/utils";
import { RiArticleFill } from "react-icons/ri";

interface BlogPost {
  id: number;
  date: string;
  image: string;
  authorImage: string;
  authorName: string;
  authorRole: string;
  title: string;
  description: string;
}

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

export function BlogSection() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Carousel Refs & Drag State
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load blogs:", err);
        setLoading(false);
      });
  }, []);

  // Carousel Navigation Function
  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0]?.clientWidth || 400;
      const scrollAmount =
        direction === "left" ? -(cardWidth + 24) : cardWidth + 24;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Mouse Drag Mechanics
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

  return (
    <section
      className="relative w-full py-24 bg-[#F8FAFC] overflow-hidden"
      id="blog"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-gradient-to-br from-[#00D4FF]/5 to-transparent pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[30%] h-[50%] bg-gradient-to-tl from-[#1D4ED8]/5 to-transparent pointer-events-none blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        {/* Header Area with Top-Right Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <BrandBadge
              icon={<RiArticleFill className="w-10, h-10" />}
              text="LATEST BLOG"
            />

            <h2 className="font-outfit text-4xl md:text-5xl font-extrabold text-[#0B1221] leading-[1.1] tracking-tight">
              Insights Today.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] via-[#00D4FF] to-[#00E676]">
                A Smarter Tomorrow.
              </span>
            </h2>

            <p className="font-sans text-base text-slate-500 leading-relaxed pt-1">
              Explore expert insights, practical guides and the latest trends in
              AI.
              <br className="hidden md:block" /> Stay informed. Stay ahead.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {/* Carousel Navigation Arrows */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border-2 border-[#1D4ED8]/10 bg-white flex items-center justify-center text-[#1D4ED8] hover:bg-[#1D4ED8] hover:text-white transition-all shadow-sm"
              >
                <FaChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border-2 border-[#1D4ED8]/10 bg-white flex items-center justify-center text-[#1D4ED8] hover:bg-[#1D4ED8] hover:text-white transition-all shadow-sm"
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
            </div>

            <BrandButton
              variant="gradient_outline"
              icon={<ArrowRight className="w-4 h-4" />}
              className="bg-[#00D4FF]/10 border-0 text-[#1D4ED8] hover:bg-[#00D4FF]/20 shadow-none px-6 py-5"
            >
              View All Blogs
            </BrandButton>
          </motion.div>
        </div>

        {/* Draggable Blog Carousel */}
        {!loading && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseUpOrLeave}
              onMouseUp={handleMouseUpOrLeave}
              onMouseMove={handleMouseMove}
              className={cn(
                "flex gap-6 overflow-x-auto pb-8 pt-2 w-full",
                "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
                isDragging
                  ? "snap-none cursor-grabbing"
                  : "snap-x snap-mandatory cursor-grab",
              )}
            >
              {blogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  className="w-[320px] sm:w-[380px] lg:w-[400px] shrink-0 snap-start group bg-white rounded-3xl p-4 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-[#00D4FF]/10 transition-all border border-slate-100 flex flex-col pointer-events-auto"
                >
                  {/* Image Container with Floating Date */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    />
                    <div className="absolute bottom-3 left-3 bg-gradient-to-r from-[#1D4ED8] to-[#00D4FF] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                      {blog.date}
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 mb-4 px-1">
                    <Image
                      src={blog.authorImage}
                      alt={blog.authorName}
                      width={32}
                      height={32}
                      className="rounded-full border border-slate-200 pointer-events-none"
                    />
                    <div className="flex flex-col">
                      <span className="font-outfit text-sm font-bold text-slate-900 leading-tight">
                        {blog.authorName}
                      </span>
                      <span className="font-sans text-[11px] text-slate-500 font-medium">
                        {blog.authorRole}
                      </span>
                    </div>
                  </div>

                  {/* Typography Content */}
                  <div className="flex flex-col flex-grow px-1">
                    <h3 className="font-outfit text-xl font-bold text-[#0B1221] leading-tight mb-3 group-hover:text-[#1D4ED8] transition-colors">
                      {blog.title}
                    </h3>
                    <p className="font-sans text-[13px] text-slate-600 leading-relaxed mb-6 flex-grow">
                      {blog.description}
                    </p>

                    {/* Continue Reading Button */}
                    <button className="self-start px-5 py-2.5 bg-gradient-to-r from-[#1D4ED8] via-[#00D4FF] to-[#00E676] text-white rounded-full text-xs font-bold flex items-center gap-2 transition-transform hover:scale-105 shadow-md shadow-[#00D4FF]/20">
                      Continue Reading
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
