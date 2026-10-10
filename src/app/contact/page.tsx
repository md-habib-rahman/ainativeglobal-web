import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import Image from "next/image";
import { PageHero } from "@/components/ui/pageHero/PageHero";

export const metadata = {
  title: "Contact Us | AiNativeGlobal",
  description: "Get in touch with the AiNativeGlobal team today.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex flex-col z-9">
      {/* Deep Space Background Layer */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1D4ED8]/10 via-[#0B1221] to-[#0B1221] pointer-events-none" /> */}

      {/* Mounted Sections */}
      {/* <ContactHero /> */}
      <PageHero
        align="center"
        title="Get In Touch"
        highlight="Touch"
        description=" Let's Build the Future Together"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        backgroundImage={{
          src: "https://res.cloudinary.com/vx7dgbed/image/upload/v1791575209/wcu_5.png",
          alt: "AI Platform Data Stream",
        }}
      />
      <ContactInfo />
      <ContactForm />

      <div className="absolute inset-0 pointer-events-none opacity-50">
        <Image
          src="https://res.cloudinary.com/vx7dgbed/image/upload/v1789373277/abstract_bg.png"
          alt="Abstract Overlay"
          fill
          className=""
        />
      </div>
    </div>
  );
}
