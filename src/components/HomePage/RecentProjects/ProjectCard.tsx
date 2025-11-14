/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

const ProjectCard = ({image, name, category} : any) => {
  const itemVariants: any = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      className="group relative bg-white/5 backdrop-blur-md border-[3px] border-white/10 rounded-[7px] overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full max-w-xs sm:max-w-none mx-auto hover:border-transparent min-h-[340px] sm:min-h-[360px] md:min-h-[380px]"
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Shine Border Effect - Only visible on hover */}
      <div className="shine-border absolute inset-0 rounded-[7px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      {/* Animated Border Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-[7px] pointer-events-none"
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

      <div className="relative h-[300px] 2xl:h-[376px] rounded-t-[7px]">
        <Image
          src={image}
          alt=""
          className="h-full rounded-t-[7px]"
        />
        {/* Dark Overlay */}
        <div className="bg-neutral-5 opacity-30 w-full h-full rounded-[7px] absolute top-0 left-0 pointer-events-none"></div>
      </div>

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
          <h1 className="font-MartianBThai text-white text-xl lg:text-2xl leading-[35px] font-semibold">
            {name}
          </h1>
          <p className="text-neutral-300 text-sm lg:text-base font-Poppins mt-2">
            {category}
          </p>
        </div>

        {/* Animated Arrow Icon */}
        <motion.div className="size-12 md:size-[60px] rounded-full flex items-center justify-center border overflow-hidden bg-white/10 border-white/30 group-hover:bg-primary-5 group-hover:border-primary-5 group-hover:rotate-45 text-white group-hover:text-neutral-5 transition-all duration-300">
          <motion.div>
            <GoArrowUpRight className="text-2xl" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
