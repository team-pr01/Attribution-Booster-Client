/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PackageOffer = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const slideInLeft: any = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const slideInRight: any = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  const fadeInUp: any = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const buttonAnimation: any = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="relative overflow-hidden h-fit pb-10">
      <Image
        src={IMAGES.offerGlobe}
        alt="Decorative Globe"
        className="
    w-[114px] lg:w-[230px] 
    opacity-80 blur-[2px] animate-spin
    absolute bottom-0 right-0
    translate-x-1/3 translate-y-0
    z-[-1]
  "
      />
      <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="max-w-[1800px] mx-auto rounded-[20px] relative mt-28 2xl:mt-44 px-5 2xl:px-0 overflow-hidden"
    >
      

      {/* Card container */}
      <motion.div
        variants={containerVariants}
        className="relative rounded-[20px] bg-[rgba(255,255,255,0.02)] border border-gray-700 backdrop-blur-[15px] py-5 lg:py-10 xl:py-20 lg:px-10 px-4 2xl:px-[135px] overflow-hidden"
      >
        {/* Faint background circle */}
        <motion.div
          // variants={circleAnimation}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={IMAGES.circle}
            alt=""
            className="w-[643px] h-[664px] absolute -top-64 -left-56 opacity-[0.03] z-0"
          />
        </motion.div>

        <motion.div variants={slideInRight} initial="hidden" animate="visible">
          <Image
            src={IMAGES.circle}
            alt=""
            className="w-[643px] h-[664px] absolute -top-64 -right-56 opacity-[0.03] z-999"
          />
        </motion.div>

        {/* <Image
          src={IMAGES.circle}
          alt=""
          className="w-[643px] h-[664px] absolute -bottom-64 -right-56 opacity-[0.06] z-999"
        /> */}

        {/* Main content */}
        <div className="flex flex-col p-5 lg:p-0 lg:flex-row gap-16 lg:gap-10 xl:gap-0 items-center justify-between relative z-10 w-full">
          {/* Left side content */}
          <motion.div variants={slideInLeft} className="w-full">
            <motion.h1
              variants={fadeInUp}
              className="font-MartianBThai text-white text-2xl sm:text-3xl xl:text-[56px] font-semibold md:leading-10 xl:leading-[61px] w-full max-w-[898px]"
            >
              Enjoy 10% Off When You Choose Our Annual Package
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-neutral-300 text-sm lg:text-lg leading-6 lg:leading-[30px] max-w-[808px] font-Poppins mt-5"
            >
              Take advantage of a special 10% discount on your first annual
              subscription. This limited-time offer is exclusively available for
              new customers. Don't miss out—subscribe today and start enjoying
              premium features while saving money on your yearly plan!
            </motion.p>

            <motion.button
              variants={buttonAnimation}
              whileHover="hover"
              whileTap="tap"
              className="pl-[30px] pr-1 py-1 bg-primary-5 font-Poppins text-neutral-5 rounded-[28px] font-medium text-base md:text-lg leading-5 cursor-pointer relative flex items-center gap-2.5 mt-8"
            >
              Start Now
              <div className="bg-neutral-5 size-10 md:size-12 rounded-full flex items-center justify-center">
                <Image src={ICONS.topRightArrow} alt="" className="size-6" />
              </div>
            </motion.button>
          </motion.div>

          {/* Right side image with spinning animation */}
          <motion.div variants={slideInRight} className="relative">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.02, 1],
              }}
              transition={{
                rotate: {
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.05,
                rotate: 360, // Continue rotation on hover
                transition: {
                  rotate: {
                    duration: 12, // Faster spin on hover
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: { duration: 0.3 },
                },
              }}
            >
              <Image
                src={IMAGES.packageOffer}
                alt="Special Offer"
                className="w-full md:w-[440px] lg:w-[300px] xl:w-[440px]"
              />
            </motion.div>

            {/* Optional: Add a subtle glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-primary-5/10 blur-xl -z-10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default PackageOffer;
