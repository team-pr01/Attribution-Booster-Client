"use client";
import Container from "@/components/Shared/Container/Container";
import { useState } from "react";
import JobCard from "./JobCard";

const Jobs = () => {
  const positions = [
    "All positions (12)",
    "Full Stack Web Development (1)",
    "CMS Web Development (1)",
    "App Development (1)",
    "UI/UX Design (Web and Mobile App) (1)",
    "Analytics and Conversion Tracking (1)",
    "Google Ads (1)",
    "Social Media Marketing (1)",
    "Graphics Design (1)",
    "Video Editing (1)",
    "Cyber Security (1)",
    "SEO Specialist (1)",
    "AI Agent Creation & Automation (1)",
  ];

  const [activePosition, setActivePosition] =
    useState<string>("All positions (12)");

  return (
    <Container>
      <div className="flex gap-5 lg:gap-[30px] mt-20">
        <div className="bg-neutral-30 border border-gray-700 rounded-[10px] p-5 w-full max-w-sm flex flex-col gap-4">
          {/* Search bar */}
          <div className="flex flex-col gap-2 mb-5">
            <input
              placeholder="Search jobs"
              className="w-full px-4 py-3 bg-neutral-10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
            />
          </div>

          {/* Positions */}
          <div className="flex flex-col gap-3">
            {positions.map((position, index) => {
              const isActive = activePosition === position;

              return (
                <button
                  key={index}
                  onClick={() => setActivePosition(position)}
                  className={`
                    w-full px-4 py-3 rounded-lg text-left transition-colors duration-200 cursor-pointer
                    ${
                      isActive
                        ? "bg-primary-5 text-neutral-5 font-medium border border-primary-5"
                        : "bg-neutral-10 text-white border border-gray-600 hover:border-cyan-400 font-normal"
                    }
                  `}
                >
                  {position}
                </button>
              );
            })}
          </div>
          <p className="text-neutral-300 text-sm lg:text-base mt-2 font-Poppins">
            We are always seeking talented people. In case you cannot find your
            desired position here, please send us your LinkedIn profile and give
            us your contact information. We will be in touch.
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:gap-[30px]">
            <JobCard/>
        </div>
      </div>
    </Container>
  );
};

export default Jobs;
