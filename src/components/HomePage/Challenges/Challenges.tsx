import Image from "next/image";
import React from "react";
import { IMAGES } from "../../../../public/assets";

const Challenges = () => {
  const challengeData = [
    {
      title: "Let’s Create Something Amazing Together",
      description:
        "This phrase invites collaboration and emphasizes partnership. It suggests that by working together,",
    },
    {
      title: "Unlock Your Business Potential with Our Expertise",
      description:
        "This phrase communicates that our services can help you discover and maximize your business’s capabilities. It highlights our specialized knowledge and experience, suggesting that by",
    },
    {
      title: "Experience Professional Quality & Innovative Solutions",
      description:
        "This phrase assures you will encounter high standards of professionalism and cutting-edge solutions. It emphasizes our commitment to delivering innovative",
    },
  ];

  return (
    <div className="overflow-hidden relative px-5 2xl:px-0">
      {/* Decorative circle */}
      <Image
        src={IMAGES.circle}
        alt="Globe circle"
        className="w-[543px] h-[500px] opacity-[0.10] hidden md:block blur-[10px] absolute top-[50px] -right-72 z-10 pointer-events-none select-none"
      />

      <div className="max-w-[1531px] mx-auto mt-[111px]">
        <h1 className="font-MartianBThai text-white text-2xl sm:text-3xl xl:text-[56px] font-semibold leading-8 xl:leading-[61px] max-w-[850px] mx-auto text-center mb-12">
          Yes, we know your challenges as a Digital agency
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-[30px] mt-16 lg:mt-24">
          {challengeData.map((item, index) => (
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
              <div className="bg-neutral-10 rounded-[10px] backdrop-blur-[15px] p-[30px] flex flex-col items-center justify-center relative z-10 h-full">
                <Image
                  src={IMAGES.blueTick}
                  alt="Tick icon"
                  className="size-[110px] mx-auto"
                />
                <h1 className="font-MartianBThai text-white text-2xl 2xl:text-[32px] leading-9 font-semibold mt-10 text-center">
                  {item.title}
                </h1>
                <p className="text-neutral-300 mt-4 text-sm lg:text-base text-center font-Poppins">
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

export default Challenges;
