/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ICONS } from "../../../../public/assets";
import Link from "next/link";

const JobCard = ({ job }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="group relative rounded-[10px] bg-[rgba(255,255,255,0.02)] border border-gray-700 backdrop-blur-[15px] flex flex-col overflow-hidden cursor-pointer"
      onTouchStart={() => setIsHovered(true)}
      onClick={(e) => {
        setIsHovered(true);
        const shine = e.currentTarget.querySelector(".shine-border");
        shine?.classList.add("shine-active");
        setTimeout(() => shine?.classList.remove("shine-active"), 300);
      }}
      /* ⭐ DESKTOP HOVER */
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Shine Border Effect */}
      <div className="shine-border absolute inset-0 rounded-[10px] pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300"></div>

      {/* Contents */}
      <div className="relative overflow-hidden px-5 py-7 flex flex-col md:flex-row items-start md:items-center gap-7 md:gap-0 justify-between w-full">
        <div className=" flex flex-col gap-4">
          <p className="text-primary-5 text-sm lg:text-lg font-Poppins">
            {job?.category}
          </p>
          <h2 className="font-MartianBThai text-white group-hover:text-primary-5 text-xl 2xl:text-[32px] leading-9 font-semibold">
            {job?.title}
          </h2>

          <div className="flex items-center gap-3">
            <div className="bg-neutral-10 px-4 py-2 rounded-[42px] flex items-center gap-2.5 text-neutral-40 text-sm md:text-base">
              <Image
                src={ICONS.locationGray}
                alt=""
                className="size-4 md:size-5"
              />
              {job?.location}
            </div>
            <div className="bg-neutral-10 px-4 py-2 rounded-[42px] flex items-center gap-2.5 text-neutral-40 text-sm md:text-base">
              <Image src={ICONS.jobType} alt="" className="size-4 md:size-5" />
              {job?.type}
            </div>
          </div>
        </div>

        <div className=" flex flex-row md:flex-col gap-5">
          <div className="flex items-center gap-2.5 text-neutral-40">
            <Image src={ICONS.deadline} alt="" className="size-5" />
            {job?.date}
          </div>
          <Link href={`/career/${job.slug}`} className="relative inline-flex items-center justify-center p-[3px] bg-primary-5 dark:bg-black rounded-full overflow-hidden group hover:scale-105 transition-transform duration-300">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "conic-gradient(from var(--angle), transparent 70%, #ffffff, transparent 100%)",
                animation: "shimmer-spin 2s linear infinite",
              }}
            />
            <span className="pl-[30px] pr-1 py-1 md:py-0 bg-primary-5 font-Poppins text-neutral-5 rounded-[28px] font-medium text-sm md:text-lg leading-5 cursor-pointer relative flex items-center gap-2.5 group-hover:bg-primary-6 transition-colors duration-300">
              See Details
              <div className="bg-neutral-5 size-7 md:size-12 rounded-full flex items-center justify-center group-hover:bg-neutral-4 transition-colors duration-300">
                <Image src={ICONS.topRightArrow} alt="" className="size-6" />
              </div>
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
