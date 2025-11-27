"use client";
import Container from "@/components/Shared/Container/Container";
import { useState } from "react";
import JobCard from "./JobCard";
import CustomDropdown from "@/components/Reusable/CustomDropdown/CustomDropdown";

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

  const locations = ["All Locations", "Onsite", "Remote", "Hybrid"];

  const [showAll, setShowAll] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  // mobile & md: 3 items | lg+: all items
  const visiblePositions = showAll ? positions : positions.slice(0, 3);

  const [activePosition, setActivePosition] =
    useState<string>("All positions (12)");

  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-[30px] mt-20">
        <div className="bg-neutral-30 border border-gray-700 rounded-[10px] p-5 flex flex-col gap-6 w-full lg:w-[30%]">
          <div className="space-y-3">
            {/* Search bar */}
            <div className="flex flex-col gap-2">
              <input
                placeholder="Search jobs"
                className="w-full px-4 py-3 bg-neutral-10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
              />
            </div>
            {/* Service Selection */}
            <CustomDropdown
              options={locations}
              value={selectedLocation}
              onChange={setSelectedLocation}
              placeholder="Choose a location..."
              required
            />
          </div>

          <hr className="border border-gray-700" />

          {/* Positions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 w-full">
            {(window.innerWidth >= 1024 ? positions : visiblePositions).map(
              (position, index) => {
                const isActive = activePosition === position;

                return (
                  <button
                    key={index}
                    onClick={() => setActivePosition(position)}
                    className={`
                  w-full px-4 py-3 rounded-lg text-left transition-colors duration-200
                  ${
                    isActive
                      ? "bg-primary-5 text-neutral-5 font-medium border border-primary-5"
                      : "bg-neutral-10 text-white border border-gray-600 hover:border-cyan-400"
                  }
                `}
                  >
                    {position}
                  </button>
                );
              }
            )}
          </div>

          {/* See More / Less (ONLY mobile & md) */}
          <button
            onClick={() => setShowAll(!showAll)}
            className="
          text-primary-5 text-sm font-medium text-left
          hover:underline
          lg:hidden
        "
          >
            {showAll ? "See less" : "See more"}
          </button>

          {/* Info text */}
          <p className="text-neutral-300 text-sm lg:text-base mt-2 font-Poppins">
            We are always seeking talented people. In case you cannot find your
            desired position here, please send us your LinkedIn profile and give
            us your contact information. We will be in touch.
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:gap-[30px] w-full lg:w-[70%]">
          <JobCard />
        </div>
      </div>
    </Container>
  );
};

export default Jobs;
