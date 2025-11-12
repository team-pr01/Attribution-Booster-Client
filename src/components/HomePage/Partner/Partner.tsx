/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Partner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
      scale: 0.8,
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
      scale: 0.8,
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

  const gradientBorder: any = {
    hidden: {
      background:
        "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)",
    },
    visible: {
      background: [
        "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)",
        "linear-gradient(to right, rgba(209,213,219,0.5) 0%, rgba(255,255,255,0) 50%, rgba(107,114,128,0.5) 100%)",
      ],
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="max-w-[95%] sm:max-w-[90%] md:max-w-[1100px] lg:max-w-[1300px] xl:max-w-[1500px] mx-auto mt-20 md:mt-32 lg:mt-48 px-3 sm:px-5"
    >
      <motion.div
        variants={gradientBorder}
        className="rounded-[10px] p-px bg-linear-to-r from-gray-300/50 via-transparent to-gray-600"
      >
        <motion.div
          className="rounded-[10px] bg-neutral-5 backdrop-blur-[15px]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.8,
            delay: 0.3,
          }}
        >
          {/* Responsive layout */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 md:px-10 py-5 sm:py-7 md:py-9">
            {/* Left image */}
            <motion.div
              variants={slideInLeft}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
              className="shrink-0"
            >
              <Image
                src={IMAGES.googlePartner}
                alt="Google Partner"
                className="object-contain w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] xl:w-[300px]"
              />
            </motion.div>

            {/* Right text content */}
            <motion.div
              variants={slideInRight}
              className="text-center sm:text-left max-w-[700px]"
            >
              <motion.h1
                className="font-MartianBThai text-white text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-semibold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                }}
              >
                Trusted by Google to deliver top-tier advertising performance
              </motion.h1>

              <motion.p
                className="text-neutral-300 text-base sm:text-lg md:text-xl mt-3 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                }}
              >
                As a certified <strong>Google Partner</strong>, our strategies are
                not just creative—they're conversion-proven.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Partner;
