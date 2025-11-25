import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
import { IMAGES } from "../../../../public/assets";
import RecentProjects from "@/components/HomePage/RecentProjects/RecentProjects";
import CTA from "@/components/Reusable/CTA/CTA";

const Portfolio = () => {
  return (
    <div>
      <HeroSection
        heading="Our Work Speaks for Itself"
        description="Explore a few of the solutions we’ve delivered for startups, enterprises, and global brands."
        btnText="Explore Our Services"
        image={IMAGES.portfolioHero}
        breadcrumbs={[{ label: "Portfolio" }]}
      />
      <RecentProjects />
      <CTA
        heading={"Ready to create your success story?"}
        description={
          "Have questions or need assistance? We’re here to help! Reach out to us for inquiries, collaborations, or service requests, and our team will respond promptly. Let’s start a conversation and explore how we can work together."
        }
        image={IMAGES.ctaPortfolio}
        buttonText={"Lets Talk"}
      />
    </div>
  );
};

export default Portfolio;
