import OurServices from "@/components/HomePage/Services/Services";
import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
import { IMAGES } from "../../../../public/assets";
import VideoTestimonial from "@/components/VideoTestimonial/VideoTestimonial";

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
      />
      <VideoTestimonial/>
      <OurServices />
    </div>
  );
};

export default Services;
