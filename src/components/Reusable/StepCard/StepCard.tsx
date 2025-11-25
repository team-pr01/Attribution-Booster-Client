"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { motion } from "framer-motion";
import Image from "next/image";
const StepCard = ({index, icon, title, description} : {index:number; icon: any; title: string; description: string }) => {
  const cardVariants: any = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const svgWaveVariants: any = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const iconVariants: any = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const textVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      className="relative h-full overflow-visible"
    >
      {/* Animated SVG Wave Background */}
      <motion.div
        className="absolute -top-5 xl:-top-7 inset-x-0 flex justify-center -z-1"
        variants={svgWaveVariants}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
      >
        <svg
          className="w-[274px] xl:w-[200px] h-[113px]"
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
      </motion.div>

      {/* Card Content */}
      <motion.div
        className="bg-neutral-10 rounded-[10px] backdrop-blur-[15px] p-5 flex flex-col relative z-10 h-full"
        whileHover={{
          boxShadow: "0 20px 40px rgba(7, 244, 250, 0.2)",
          transition: { duration: 0.3 },
        }}
      >
        {/* Step Number */}
        <motion.h1
          className="font-MartianBThai text-white text-[32px] leading-9 font-semibold text-center"
          variants={textVariants}
        >
          Step {index + 1}
        </motion.h1>

        {/* Animated Icon */}
        <motion.div variants={iconVariants} whileHover="hover" className="">
          <Image src={icon} alt="Process icon" className="size-20 mt-7" />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-MartianBThai text-white text-2xl font-semibold mt-[30px]"
          variants={textVariants}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-neutral-300 text-sm lg:text-base mt-2 font-Poppins"
          variants={textVariants}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default StepCard;
