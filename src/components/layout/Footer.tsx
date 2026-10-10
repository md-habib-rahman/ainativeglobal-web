import Link from "next/link";
import Image from "next/image";
import { ArrowRightCircle, Phone, Mail, MapPin } from "lucide-react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { NewsletterForm, BackToTopButton } from "./footer/FooterClient";

const socialLinks = [
  {
    id: "facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/share/1GgHupvAvH/",
  },
  { id: "twitter", icon: FaXTwitter, href: "https://x.com/AiNativeGlobal" },
  {
    id: "linkedin",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/ainative-global/",
  },
  {
    id: "youtube",
    icon: FaYoutube,
    href: "https://youtube.com/@ainativeglobal?si=4UfkZYgzsF4MdbfO",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/ainativeglobal?xtok=MXFmZnliOTg4ZTFzaw==",
  },
];

// const platformLinks = [
//   { name: "AI Academy", href: "#" },
//   { name: "Corporate Training", href: "#" },
//   { name: "AI Tools & Resources", href: "#" },
//   { name: "Instructors", href: "#" },
//   { name: "Certification", href: "#" },
//   { name: "Enterprise Solutions", href: "#" },
//   { name: "Community", href: "#" },
//   { name: "Become an Instructor", href: "#" },
// ];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Latest Blog", href: "/blogs" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
  //   { name: "Privacy Policy", href: "/privacy-policy" },
  //   { name: "Terms of Service", href: "/terms-of-service" },
  //   { name: "FAQ's", href: "/faqs" },
];

const recentPosts = [
  {
    title: "10 Essential AI Skills for a Future-Ready Career",
    date: "8 Aug, 2026",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=200&auto=format&fit=crop",
  },
  {
    title: "Top AI Tools to Supercharge Your Productivity",
    date: "5 Sep, 2026",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=200&auto=format&fit=crop",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#070B14] pt-20 overflow-hidden z-8">
      {/* Background Ambience Wave/Glow */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-bl from-[#00D4FF]/10 via-[#1D4ED8]/5 to-transparent pointer-events-none blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-[#1D4ED8]/5 pointer-events-none blur-[100px]" />

      <div className="container relative z-8 mx-auto px-4 md:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          {/* Column 1: Brand & Contact (Span 4) */}
          <div className="lg:col-span-5 flex flex-col gap-6 pr-0 lg:pr-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <Image
                src="/AI-Native-Logo-High-Resolution_white.png"
                width={160}
                height={50}
                priority
                alt="ai native logo"
              />
            </Link>

            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#00D4FF]">
              Learn • Create • Lead with AI
            </span>

            <p className="font-sans text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering individuals and organizations with real-world AI skills
              to create opportunities, drive innovation and build a brighter
              tomorrow.
            </p>

            {/* Contact Info */}
            <ul className="flex flex-col gap-3.5 mt-2">
              <li className="flex items-center gap-3 text-slate-300 font-sans text-sm">
                <Phone className="w-4 h-4 text-[#00D4FF]" />
                <a
                  href="tel:+8801711090585"
                  className="hover:text-[#00D4FF] transition-colors"
                >
                  +8801711090585
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-300 font-sans text-sm">
                <Mail className="w-4 h-4 text-[#00D4FF]" />
                <a
                  href="mailto:ainativeglobal@gmail.com"
                  className="hover:text-[#00D4FF] transition-colors"
                >
                  ainativeglobal@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-300 font-sans text-sm">
                <MapPin className="w-4 h-4 text-[#00D4FF]" />
                <span>
                  446/B, Love Road, Tejgaon Industrial Area, Dhaka - 1208
                </span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-slate-700 bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-[#00D4FF] hover:border-[#00D4FF] hover:bg-[#00D4FF]/10 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Our Platform Links (Span 2) */}
          {/* <div className="lg:col-span-2">
            <h3 className="font-outfit text-lg font-bold text-white mb-6">
              Our Platform
            </h3>
            <ul className="flex flex-col gap-3.5">
              {platformLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <ArrowRightCircle className="w-4 h-4 text-[#00D4FF]/60 group-hover:text-[#00D4FF] transition-colors shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Column 3: Quick Links (Span 2) */}
          <div className="lg:col-span-3">
            <h3 className="font-outfit text-lg font-bold text-white mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <ArrowRightCircle className="w-4 h-4 text-[#00D4FF]/60 group-hover:text-[#00D4FF] transition-colors shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Recent Posts & Newsletter (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Recent Posts */}
            <div>
              <h3 className="font-outfit text-lg font-bold text-white mb-6">
                Recent Posts
              </h3>
              <div className="flex flex-col gap-5">
                {recentPosts.map((post, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="group flex items-center gap-4"
                  >
                    <div className="relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border border-slate-700">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-sans text-sm font-semibold text-white group-hover:text-[#00D4FF] transition-colors line-clamp-2 leading-tight">
                        {post.title}
                      </h4>
                      <span className="text-xs text-[#00D4FF] mt-1">
                        {post.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h3 className="font-outfit text-lg font-bold text-white mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="font-sans text-sm text-slate-400 leading-relaxed">
                Get the latest updates, insights and AI resources delivered to
                your inbox.
              </p>
              {/* Interactive Form Component */}
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-sans text-slate-500">
            © {currentYear} AI Native. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <div className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span>Learn</span>
              <span className="text-[#00D4FF]">•</span>
              <span>Create</span>
              <span className="text-[#00D4FF]">•</span>
              <span>Lead with AI</span>
            </div>

            {/* Interactive Scroll to Top Component */}
            <BackToTopButton />
          </div>
        </div>
      </div>
      {/* Abstract Background Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40 -bottom-24 z-0">
        <Image
          src="https://res.cloudinary.com/vx7dgbed/image/upload/v1789373277/abstract_bg.png"
          alt="Abstract Overlay"
          fill
          className="object-cover md:object-fill"
        />
      </div>
      {/* Abstract Background Overlay */}
      {/* <div className="absolute inset-0 pointer-events-none opacity-40 -top-24 z-0">
        <Image
          src="https://res.cloudinary.com/vx7dgbed/image/upload/v1789373277/abstract_bg.png"
          alt="Abstract Overlay"
          fill
          className="object-cover md:object-fill rotate-180"
        />
      </div> */}
    </footer>
  );
}
