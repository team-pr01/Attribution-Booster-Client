"use client";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const RecentProjects = () => {
  const [activeTab, setActiveTab] = useState("See All");
  const tabs = [
    "See All",
    "Design",
    "Development",
    "UI/UX Design",
    "Marketing",
    "SEO",
  ];
  return (
    <div className="max-w-[1800px] h-fit mx-auto mt-32 2xl:mt-52">
      <div className="rounded-[20px]  bg-[rgba(255,255,255,0.02)] border border-gray-700 backdrop-blur-[15px] relative overflow-hidden p-3 md:p-5 lg:p-10 2xl:p-32">
        <Image
          src={IMAGES.circle}
          alt=""
          className="w-[643px] h-[664px] absolute -top-64 -right-56 opacity-[0.10] z-999"
        />
        <Image
          src={IMAGES.circle}
          alt=""
          className="w-[643px] h-[664px] absolute -top-64 -left-56 opacity-[0.10] z-999"
        />
        <div className="flex flex-col z-9999 relative">
          <h1 className="font-MartianBThai text-white text-2xl sm:text-3xl xl:text-[56px] font-semibold leading-10 xl:leading-[61px] text-center">
            Recent Projects
          </h1>
          <p className="text-neutral-300 text-sm lg:text-lg leading-6 lg:leading-[30px] font-Poppins mt-3 text-center mx-auto">
            Maximize Your Campaign’s Potential and Boost Your ROI with Our
            Advanced Tracking Tools and Techniques.
          </p>

          <div className="bg-neutral-10 backdrop-blur-[15px] rounded-[10px] p-3 flex items-center gap-6 border border-transparent cursor-pointer w-full lg:w-fit overflow-x-auto mx-auto mt-7">
            {tabs?.map((tab) => (
              <button
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer text-xs lg:text-lg leading-5 font-Poppins font-medium text-nowrap ${
                  activeTab === tab
                    ? "bg-primary-5 rounded-md px-3 md:px-6 py-2 md:py-3 text-neutral-5"
                    : "text-white bg-none"
                }`}
                key={tab}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-12">
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
