import { AboutZigZag } from "@/components/pages/about/AboutZigZag";
import { PageHero } from "@/components/ui/pageHero/PageHero";

export default function Page() {
  return (
    <>
      <PageHero
        align="center"
        title="About Our Services"
        highlight="Services"
        description="Academy, Martech, Content and Media, powered by AI."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        backgroundImage={{
          src: "https://res.cloudinary.com/vx7dgbed/image/upload/v1791615136/about_banner.jpg",
          alt: "AI Platform Data Stream",
        }}
      />
      <AboutZigZag />
    </>
  );
}
