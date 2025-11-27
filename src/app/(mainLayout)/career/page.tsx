import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
import { IMAGES } from "../../../../public/assets";
import Jobs from "@/components/CareerPage/Jobs/Jobs";

const Career = () => {
  return (
    <div>
      <HeroSection
        heading="Build the Future With Us"
        description="Our spaces are crafted to spark innovation, fuel bold ideas, and foster a community of forward-thinkers"
        btnText="Explore Our Services"
        image={IMAGES.careerHero}
        breadcrumbs={[{ label: "Reach Out To Us" }]}
      />
      <Jobs/>
    </div>
  );
};

export default Career;
