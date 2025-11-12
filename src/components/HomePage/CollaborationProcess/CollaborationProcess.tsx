import Image from "next/image";
import { IMAGES } from "../../../../public/assets";

const CollaborationProcess = () => {
  const collaborationProcess = [
    {
      icon: IMAGES.discovery,
      title: "Discovery & Alignment",
      description:
        "We begin with a deep dive strategy session to understand your business, goals, and pain points",
    },
    {
      icon: IMAGES.strategicPlanning,
      title: "Strategic Planning",
      description:
        "Our team outlines the roadmap, defines deliverables, allocates resources, and establishes",
    },
    {
      icon: IMAGES.seamlessExecution,
      title: "Seamless Execution",
      description:
        "From design to development, tracking to campaign launch — we execute with precision, keeping you updated",
    },
    {
      icon: IMAGES.continuousOptimization,
      title: "Continuous Optimization",
      description:
        "We monitor, analyze, and refine, ensuring performance improves over time and your digital presence ",
    },
  ];
  return (
    <div className="overflow-hidden relative px-5 2xl:px-0">
      {/* Decorative circle */}
      <Image
        src={IMAGES.collaborationProcessBg}
        alt="Globe circle"
        className="opacity-[0.05] blur-[10px] absolute left-1/5 -top-[200px]"
      />

      <div className="max-w-[1531px] mx-auto mt-[111px]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h1 className="font-MartianBThai text-white text-2xl sm:text-3xl xl:text-[56px] font-semibold leading-10 xl:leading-[61px] max-w-[619px]">
            Our Collaboration Process
          </h1>
          <p className="text-neutral-300 text-sm lg:text-lg leading-6 lg:leading-[30px] font-Poppins text-center max-w-[707px]">
            We prioritize open communication, transparency, and strategy from
            day one, ensuring every project starts with clarity and ends with
            measurable success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px] mt-16 lg:mt-24">
          {collaborationProcess?.map((item, index) => (
            <div key={index} className="relative h-full">
              {/* SVG background */}
              <div className="absolute -top-5 inset-x-0 flex justify-center -z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="274"
                  height="113"
                  viewBox="0 0 274 113"
                  fill="none"
                >
                  <path
                    d="M258.824 0C267.66 0 274.96 7.21541 273.447 15.9215C269.262 40.006 255.657 62.5004 234.404 79.9031C208.524 101.095 173.423 113 136.824 113C100.224 113 65.1229 101.095 39.2428 79.9031C17.9901 62.5005 4.38526 40.0061 0.19967 15.9215C-1.31333 7.21542 5.98701 1.52588e-05 14.8236 1.52588e-05L136.824 0H258.824Z"
                    fill="#07F4FA"
                    fillOpacity="0.3"
                  />
                </svg>
              </div>

              {/* Card content */}
              <div className="bg-neutral-10 rounded-[10px] backdrop-blur-[15px] p-5 flex flex-col relative z-10 h-full">
                <h1 className="font-MartianBThai text-white text-[32px] leading-9 font-semibold text-center">
                  Step {index + 1}
                </h1>

                <Image
                  src={item?.icon}
                  alt="Tick icon"
                  className="size-20 mt-[60px]"
                />
                <h1 className="font-MartianBThai text-white text-2xl font-semibold mt-[30px]">
                  {item.title}
                </h1>
                <p className="text-neutral-300 text-sm lg:text-base mt-4 font-Poppins">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollaborationProcess;
