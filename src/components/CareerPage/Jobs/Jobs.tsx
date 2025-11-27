"use client";
import Container from "@/components/Shared/Container/Container";
import { useState } from "react";
import JobCard from "./JobCard";
import CustomDropdown from "@/components/Reusable/CustomDropdown/CustomDropdown";
import { jobs } from "@/data/jobs.data";
import { FiBriefcase } from "react-icons/fi";

const Jobs = () => {
  const positions = [
    { name: "All positions", count: 12 },
    { name: "Full Stack Web Development", count: 1 },
    { name: "CMS Web Development", count: 1 },
    { name: "App Development", count: 1 },
    { name: "UI/UX Design (Web and Mobile App)", count: 1 },
    { name: "Analytics and Conversion Tracking", count: 1 },
    { name: "Google Ads", count: 1 },
    { name: "Social Media Marketing", count: 1 },
    { name: "Graphics Design", count: 1 },
    { name: "Video Editing", count: 1 },
    { name: "Cyber Security", count: 1 },
    { name: "SEO Specialist", count: 1 },
    { name: "AI Agent Creation & Automation", count: 1 },
  ];

  const locations = ["All Locations", "Onsite", "Remote", "Hybrid", "Remote/On-Site"];

  const [showAll, setShowAll] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  // mobile & md: 3 items | lg+: all items
  const visiblePositions = showAll ? positions : positions.slice(0, 3);
  const [keyword, setKeyword] = useState("");
  const [activePosition, setActivePosition] = useState<string>("All positions");

  const filteredJobs = jobs?.filter((job) => {
  const matchesSearch = job.title
    .toLowerCase()
    .includes(keyword.toLowerCase());

  const matchesCategory =
    activePosition === "All positions" ||
    job.categoryMatch === activePosition ||
    job.category === activePosition;

  const matchesLocation =
    selectedLocation === "All Locations" ||
    job.location === selectedLocation;

  return matchesCategory && matchesLocation && matchesSearch;
});


  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-[30px] mt-20">
        <div className="bg-neutral-30 border border-gray-700 rounded-[10px] p-5 flex flex-col gap-6 w-full lg:w-[30%]">
          <div className="space-y-3">
            {/* Search bar */}
            <div className="flex flex-col gap-2">
              <input
                placeholder="Search jobs"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
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
                const isActive = activePosition === position?.name;

                return (
                  <button
                    key={index}
                    onClick={() => setActivePosition(position?.name)}
                    className={`
                  w-full px-4 py-3 rounded-lg text-left transition-colors duration-200
                  ${
                    isActive
                      ? "bg-primary-5 text-neutral-5 font-medium border border-primary-5"
                      : "bg-neutral-10 text-white border border-gray-600 hover:border-cyan-400"
                  }
                `}
                  >
                    {position?.name} ({position?.count})
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
  {filteredJobs && filteredJobs.length > 0 ? (
    filteredJobs?.map((job, index) => (
      <JobCard key={index} job={job} />
    ))
  ) : (
    <div className="flex flex-col items-center justify-center text-center py-20 gap-4 text-neutral-400">
      <FiBriefcase className="text-5xl text-neutral-500" />
      <h3 className="text-lg font-semibold text-white">
        No jobs found
      </h3>
      <p className="text-sm max-w-md">
        Try changing your search keywords, position, or location filters.
      </p>
    </div>
  )}
</div>
      </div>
    </Container>
  );
};

export default Jobs;
