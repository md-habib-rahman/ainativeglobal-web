"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa6";
import { BrandBadge } from "@/components/common/BrandBadge";

export type Breadcrumb = { label: string; href?: string };

export type PageHeroContentProps = {
  /** Page title (h1). */
  title: string;
  /** A part of `title` to render with the brand gradient. Must match exactly. */
  highlight?: string;
  description?: string;
  badgeText?: string;
  /** Pass an element, e.g. <FaUsers className="w-4 h-4" /> */
  badgeIcon?: ReactNode;
  breadcrumbs?: Breadcrumb[];
  /** Buttons or links, e.g. <BrandButton>…</BrandButton> */
  actions?: ReactNode;
  align?: "left" | "center";
};

function renderTitle(title: string, highlight?: string) {
  if (!highlight) return title;
  const start = title.indexOf(highlight);
  if (start === -1) return title;

  return (
    <>
      {title.slice(0, start)}
      <span className="bg-gradient-to-r from-[#1D4ED8] via-[#00D4FF] to-[#00E676] bg-clip-text text-transparent">
        {highlight}
      </span>
      {title.slice(start + highlight.length)}
    </>
  );
}

export function PageHeroClient({
  title,
  highlight,
  description,
  badgeText,
  badgeIcon,
  breadcrumbs,
  actions,
  align = "left",
}: PageHeroContentProps) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex w-full max-w-3xl flex-col gap-5 sm:gap-6 ${
        centered ? "mx-auto items-center text-center" : "items-start text-left"
      }`}
    >
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav aria-label="Breadcrumb">
          <ol
            className={`flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500 ${
              centered ? "justify-center" : ""
            }`}
          >
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <li
                  key={`${crumb.label}-${idx}`}
                  className="flex items-center gap-2"
                >
                  {crumb.href && !isLast ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-[#1D4ED8]"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span
                      aria-current={isLast ? "page" : undefined}
                      className={isLast ? "font-semibold text-slate-900" : ""}
                    >
                      {crumb.label}
                    </span>
                  )}
                  {!isLast && (
                    <FaChevronRight className="h-2.5 w-2.5 shrink-0 text-slate-300" />
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}

      {badgeText && (
        <div className="w-fit">
          <BrandBadge icon={badgeIcon} text={badgeText} />
        </div>
      )}

      <h1 className="font-outfit text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0B1221] sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl">
        {renderTitle(title, highlight)}
      </h1>

      {description && (
        <p className="max-w-2xl font-sans text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
          {description}
        </p>
      )}

      {actions && (
        <div
          className={`flex flex-wrap items-center gap-4 pt-2 ${
            centered ? "justify-center" : ""
          }`}
        >
          {actions}
        </div>
      )}
    </motion.div>
  );
}
