import Container from "@/components/Shared/Container/Container";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";

const MissionAndVision = () => {
  const missionAndVision = [
    {
      image: IMAGES.mission,
      title: "Our Mission",
      description:
        "To empower businesses with data-driven strategies, custom-built technology, and performance-focused marketing solutions accelerate growth, maximize ROI, and deliver real, measurable impact.",
    },
    {
      image: IMAGES.vision,
      title: "Our Vision",
      description:
        "To become a global leader in digital transformation, known for our innovation, reliability, and results, helping brands scale confidently through smart technology, seamless user experiences, and strategic execution.",
    },
  ];
  return (
    <Container>
      <div className="flex flex-col gap-10 md:gap-12 lg:gap-16 mt-12 lg:mt-20">
        {missionAndVision?.map((item, index) => (
          <div
            key={item?.title}
            className={`flex items-center ${index % 2 === 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"} justify-between gap-0 md:gap-12 lg:gap-16`}
          >
            {/* Left side image */}
            <div className="group relative rounded-[10px] p-0.5 bg-linear-to-r from-transparent to-transparent hover:from-primary-500 hover:to-primary-300 transition-all duration-300 max-w-[653px] max-h-[438px]-">
              {/* Shine Border Effect - Always visible */}
              <div className="shine-border absolute inset-0 rounded-[10px] pointer-events-none"></div>
              <div className="rounded-[10px] bg-[rgba(255,255,255,0.02)] border border-gray-700 backdrop-blur-[15px] flex flex-col md:flex-row items-center justify-center transition-all duration-300 p-2">
                <div>
                  <Image
                    src={item?.image}
                    alt=""
                    className="w-full h-full rounded-[10px]"
                  />
                </div>
              </div>
            </div>

            <div>
              <h1 className="font-MartianBThai text-white text-2xl md:text-3xl lg:text-[45px] xl:text-[50px] font-semibold leading-10 md:leading-12 max-w-[641px]">
                {item?.title}
              </h1>

              <p className="text-neutral-300 text-sm md:text-base lg:text-lg leading-6 md:leading-[30px] max-w-[644px] mt-1 lg:mt-5 font-Poppins">
                {item?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MissionAndVision;
