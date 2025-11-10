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
    <div className="max-w-[1800px] h-[1030px] mx-auto mt-44">
      <div className="rounded-[20px]  bg-[rgba(255,255,255,0.02)] border border-gray-700 backdrop-blur-[15px] relative overflow-hidden p-32">
        <Image
          src={IMAGES.circle}
          alt=""
          className="w-[643px] h-[664px] absolute -top-64 -right-56 opacity-[0.30] z-999"
        />
        <Image
          src={IMAGES.circle}
          alt=""
          className="w-[643px] h-[664px] absolute -top-64 -left-56 opacity-[0.30] z-999"
        />
        <div className="flex flex-col z-9999 relative">
          <h1 className="font-MartianBThai text-white text-[56px] font-semibold leading-[61px] text-center">
            Recent Projects
          </h1>
          <p className="text-white text-lg leading-[30px] mt-3 text-center mx-auto">
            Maximize Your Campaign’s Potential and Boost Your ROI with Our
            Advanced Tracking Tools and Techniques.
          </p>

          <div className="bg-neutral-10 backdrop-blur-[15px] rounded-[10px] p-3 flex items-center gap-6 border border-transparent cursor-pointer w-fit mx-auto mt-7">
            {tabs?.map((tab) => (
              <button
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer text-lg leading-5 font-Poppins font-medium ${
                  activeTab === tab
                    ? "bg-primary-5 rounded-md px-6 py-3 text-neutral-5"
                    : "text-white bg-none"
                }`}
                key={tab}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-9 mt-12">
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
