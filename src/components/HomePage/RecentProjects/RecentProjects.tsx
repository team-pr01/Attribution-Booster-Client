/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const RecentProjects = () => {
  const [activeTab, setActiveTab] = useState("See All");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const tabs = [
    "See All",
    "Design",
    "Development",
    "UI/UX Design",
    "Marketing",
    "SEO",
  ];

  // Animation variants
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8
      }
    }
  };

  const fadeInUp: any = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const slideInLeft: any = {
    hidden: { 
      opacity: 0, 
      x: -100 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.7
      }
    }
  };

  const slideInRight: any = {
    hidden: { 
      opacity: 0, 
      x: 100 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.7
      }
    }
  };

  const tabContainerVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
        delay: 0.4
      }
    }
  };

  const tabButtonVariants: any = {
    inactive: {
      scale: 1,
      transition: { duration: 0.2 }
    },
    active: {
      scale: 1.05,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    },
    hover: {
      scale: 1.02,
      y: -2,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  const cardsContainerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardItemVariants: any = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // Mock project data for different categories
  const projects = Array(6).fill(null);

  return (
    <motion.div 
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="max-w-[1800px] h-fit mx-auto mt-32 2xl:mt-52"
    >
      <motion.div 
        variants={containerVariants}
        className="rounded-[20px] bg-[rgba(255,255,255,0.02)] border border-gray-700 backdrop-blur-[15px] relative overflow-hidden p-3 md:p-5 lg:p-10 2xl:p-32"
      >
        {/* Animated Background Circles */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={IMAGES.circle}
            alt=""
            className="w-[643px] h-[664px] absolute -top-64 -right-56 opacity-[0.10] z-999"
          />
        </motion.div>
        
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <Image
            src={IMAGES.circle}
            alt=""
            className="w-[643px] h-[664px] absolute -top-64 -left-56 opacity-[0.10] z-999"
          />
        </motion.div>

        <div className="flex flex-col z-9999 relative">
          {/* Header Section */}
          <motion.h1 
            variants={fadeInUp}
            className="font-MartianBThai text-white text-2xl sm:text-3xl xl:text-[56px] font-semibold leading-10 xl:leading-[61px] text-center"
          >
            Recent Projects
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-neutral-300 text-sm lg:text-lg leading-6 lg:leading-[30px] font-Poppins mt-3 text-center mx-auto"
          >
            Maximize Your Campaign's Potential and Boost Your ROI with Our
            Advanced Tracking Tools and Techniques.
          </motion.p>

          {/* Animated Tabs */}
          <motion.div 
  className="bg-neutral-10 backdrop-blur-[15px] rounded-[10px] p-3 flex items-center gap-6 border border-transparent cursor-pointer w-full lg:w-fit overflow-x-auto mx-auto mt-7 relative"
>
  {/* Animated sliding background */}
  <motion.div
    className="absolute bg-primary-5 rounded-md z-0"
    layoutId="activeTab"
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.5
    }}
  />
  
  {tabs?.map((tab) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`cursor-pointer text-xs lg:text-lg leading-5 font-Poppins font-medium text-nowrap ${
                  activeTab === tab
                    ? "bg-primary-5 rounded-md px-3 md:px-6 py-2 md:py-3 text-neutral-5"
                    : "text-white bg-none"
                }`}
      key={tab}
    >
      {tab}
    </button>
  ))}
</motion.div>

          {/* Animated Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={cardsContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-12"
            >
              {projects.map((_, index) => (
                <motion.div
                  key={`${activeTab}-${index}`}
                  variants={cardItemVariants}
                  layout
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    duration: 0.5
                  }}
                >
                  <ProjectCard />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RecentProjects;