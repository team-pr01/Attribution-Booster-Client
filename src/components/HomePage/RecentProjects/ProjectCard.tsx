import React from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";

const ProjectCard = () => {
  return (
    <motion.div
      className="bg-neutral-10 backdrop-blur-[15px] rounded-[7px] flex flex-col group relative border border-transparent cursor-pointer"
      whileHover="hover"
      initial="initial"
      variants={{
        initial: {
          borderColor: "transparent",
          scale: 1,
        },
        hover: {
          borderColor: "#07f4fa",
          scale: 1.02,
        },
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {/* Shine Border Effect - Only visible on hover */}
                <div className="shine-border absolute inset-0 rounded-[10px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      {/* Animated Border Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-[7px] border-2 pointer-events-none"
        variants={{
          initial: {
            opacity: 0,
            borderColor: "transparent",
          },
          hover: {
            opacity: 1,
            borderColor: "#07f4fa",
          },
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      />

      <Image
        src={IMAGES.dummyProject1}
        alt=""
        className="h-[376px] rounded-t-[7px]"
      />

      {/* Animated Text Content */}
      <motion.div
        variants={{
          initial: { y: 0 },
          hover: { y: -5 },
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="flex items-center justify-between p-5"
      >
        <div>
          <h1 className="font-MartianBThai text-white text-xl lg:text-[28px] leading-[35px] font-semibold">
            Travel Website
          </h1>
          <p className="text-neutral-300 text-sm lg:text-base font-Poppins mt-2">Creative Design</p>
        </div>

        {/* Animated Arrow Icon */}
        <motion.div
          className="size-12 md:size-[60px] rounded-full flex items-center justify-center border overflow-hidden"
          variants={{
            initial: {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.3)",
              rotate: 0,
            },
            hover: {
              backgroundColor: "#07f4fa",
              borderColor: "#07f4fa",
              rotate: 45,
            },
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          <motion.div
            variants={{
              initial: { color: "#FFFFFF" },
              hover: { color: "#06101A" },
            }}
          >
            <GoArrowUpRight className="text-2xl" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
