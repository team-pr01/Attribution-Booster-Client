import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
import { IMAGES } from "../../../../public/assets";
import Jobs from "@/components/CareerPage/Jobs/Jobs";

const Career = () => {
  return (
    <div>
      <HeroSection
        heading="Build the Future With Us"
        description="Our spaces are crafted to spark innovation, fuel bold ideas, and foster a community of forward-thinkers"
        btnText="Reach Out To Us"
        image={IMAGES.careerHero}
        breadcrumbs={[{ label: "Career" }]}
        sectionHeight="h-[840px] md:h-[830px] lg:h-[780px] xl:h-[760px]"
      />
      <Jobs/>
    </div>
  );
};

export default Career;
