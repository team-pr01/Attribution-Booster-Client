/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/Shared/Container/Container";

const CollaborationProcess = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const collaborationProcess = [
    {
      icon: IMAGES.discovery,
      title: "Discovery & Alignment",
      description:
        "We begin with a deep dive strategy session to understand your business, goals, and pain points",
    },
    {
      icon: IMAGES.strategicPlanning,
      title: "Strategic Planning",
      description:
        "Our team outlines the roadmap, defines deliverables, allocates resources, and establishes",
    },
    {
      icon: IMAGES.seamlessExecution,
      title: "Seamless Execution",
      description:
        "From design to development, tracking to campaign launch — we execute with precision, keeping you updated",
    },
    {
      icon: IMAGES.continuousOptimization,
      title: "Continuous Optimization",
      description:
        "We monitor, analyze, and refine, ensuring performance improves over time and your digital presence ",
    },
  ];

  // Animation variants
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const headerVariants: any = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const cardContainerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

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

  const floatingAnimation: any = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 0.05,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="overflow-visible relative"
    >
      {/* Animated Decorative circle */}
      <motion.div
        variants={floatingAnimation}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={IMAGES.collaborationProcessBg}
          alt="Globe circle"
          className="opacity-[0.05] blur-[10px] absolute left-1/5 -top-[200px]"
        />
      </motion.div>

      <Container>
        <div className="mt-20 xl:mt-40">
          {/* Header Section */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col lg:flex-row items-center justify-between"
          >
            <motion.h1
              variants={headerVariants}
              className="font-MartianBThai text-white text-center lg:text-left text-2xl sm:text-3xl xl:text-[56px] font-semibold md:leading-10 xl:leading-[61px] max-w-[619px]"
            >
              Our Collaboration Process
            </motion.h1>

            <motion.p
              variants={headerVariants}
              transition={{ delay: 0.1 }}
              className="text-neutral-300 text-center lg:text-left text-sm lg:text-lg leading-6 lg:leading-[30px] font-Poppins max-w-[600px] 2xl:max-w-[707px] mt-3 lg:mt-0"
            >
              We prioritize open communication, transparency, and strategy from
              day one, ensuring every project starts with clarity and ends with
              measurable success.
            </motion.p>
          </motion.div>

          {/* Process Cards Grid */}
          <motion.div
            variants={cardContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px] gap-y-10 mt-16 lg:mt-24 overflow-visible"
          >
            {collaborationProcess?.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="relative h-full overflow-visible"
              >
                {/* Animated SVG Wave Background */}
                <motion.div
                  className="absolute -top-5 inset-x-0 flex justify-center -z-10"
                  variants={svgWaveVariants}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
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
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className=""
                  >
                    <Image
                      src={item?.icon}
                      alt="Process icon"
                      className="size-20 mt-[60px]"
                    />
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    className="font-MartianBThai text-white text-2xl font-semibold mt-[30px]"
                    variants={textVariants}
                    transition={{ delay: 0.1 }}
                  >
                    {item.title}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    className="text-neutral-300 text-sm lg:text-base mt-4 font-Poppins"
                    variants={textVariants}
                    transition={{ delay: 0.2 }}
                  >
                    {item.description}
                  </motion.p>

                  {/* Connection Line (for visual flow) */}
                  {index < collaborationProcess.length - 1 && (
                    <motion.div
                      className="hidden xl:block absolute -right-4 top-1/2 w-4 h-0.5 bg-primary-5/50 z-20"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8 + index * 0.2 }}
                    />
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default CollaborationProcess;
