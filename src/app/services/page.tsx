import { ServicesZigZag } from "@/components/pages/service/ServicesZigZag";
import { PageHero } from "@/components/ui/pageHero/PageHero";

export default function Page() {
  return (
    <>
      <PageHero
        align="center"
        title="Our Services"
        highlight="Services"
        description="Academy, Martech, Content and Media, powered by AI."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        backgroundImage={{
          src: "https://res.cloudinary.com/vx7dgbed/image/upload/v1791615245/service_banner.jpg",
          alt: "AI Platform Data Stream",
        }}
      />
      <ServicesZigZag />
    </>
  );
}
