/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/Shared/Container/Container";
import StepCard from "@/components/Reusable/StepCard/StepCard";

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
             <StepCard key={index} index={index} {...item} />
            ))}
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default CollaborationProcess;
