import OurServices from "@/components/HomePage/Services/Services";
import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
import { IMAGES } from "../../../../public/assets";

const Services = () => {
  return (
    <div>
      <HeroSection
        heading="Solutions Built to Perform. Services Designed to Scale."
        description="Attribution Booster offers a complete suite of digital solutions,
              from full-stack web and app development to performance marketing,
              analytics, UI/UX, content creation, and cybersecurity. Every
              service is built to scale with your business and optimized to
              deliver measurable results that drive growth."
        btnText="Explore Our Services"
        image={IMAGES.serviceHero}
        breadcrumbs={[{ label: "Services" }]}
        sectionHeight="h-[970px] md:h-[990px] lg:h-[890px] xl:h-[800px]"
      />
      
      <OurServices />
    </div>
  );
};

export default Services;
