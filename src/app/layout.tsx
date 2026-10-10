import type { Metadata } from "next";
import { Outfit, Open_Sans } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";
import { FloatingSocials } from "@/components/common/FloatingSocials";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AiNativeGlobal | Grow up Your Learning Skill",
    template: "%s | AiNativeGlobal",
  },
  description:
    "Experience an innovative and effective learning approach with AiNativeGlobal. Master new skills faster with personalized, data-driven AI courses for professionals, students, and corporates.",
  keywords: [
    "AI courses",
    "artificial intelligence education",
    "online learning platform",
    "AI Native Global",
    "tech academy",
    "machine learning tutorials",
    "corporate AI training",
  ],
  authors: [{ name: "AiNativeGlobal Team" }],
  creator: "AiNativeGlobal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ainativeglobal.ai",
    title: "AiNativeGlobal | Master AI-Powered Learning",
    description:
      "Experience an innovative and effective learning approach powered by artificial intelligence. Master new skills 3x faster.",
    siteName: "AiNativeGlobal",
    images: [
      {
        url: "/ai-native-global-social-preview.png",
        width: 1200,
        height: 630,
        alt: "AiNativeGlobal Platform Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AiNativeGlobal | Next-Gen AI Education",
    description:
      "Join the future of learning. Personalized, data-driven AI courses.",
    images: ["/ai-native-global-social-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased text-slate-900 bg-slate-50 selection:bg-cyan-500/30">
        <TopNav />
        <FloatingSocials />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
