import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
import { IMAGES } from "../../../../public/assets";
import Team from "@/components/HomePage/Team/Team";
import CTA from "@/components/Reusable/CTA/CTA";

const OurTeam = () => {
  return (
    <div>
      <HeroSection
        heading="Meet the Experts Behind the Impact"
        description="Attribution Booster is powered by a diverse team of developers, designers, strategists, and marketers, each bringing deep expertise and a shared commitment to client success. Our people-first culture, technical excellence, and passion for performance are the driving forces behind every project we deliver."
        btnText="Explore Our Services"
        image={IMAGES.teamHero}
        breadcrumbs={[{ label: "Our Expert Team" }]}
      />
      <Team />
      <CTA
        heading={"Let’s Build Something That Grows"}
        description={
          "Have questions or need assistance? We’re here to help! Reach out to us for inquiries, collaborations, or service requests, and our team will respond promptly. Let’s start a conversation and explore how we can work together."
        }
        image={IMAGES.ctaTeam}
        buttonText={"Lets Talk"}
      />
    </div>
  );
};

export default OurTeam;
