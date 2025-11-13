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
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const slideInLeft: any = {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
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
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="max-w-[1531px] mx-auto mt-20 md:mt-32 lg:mt-48 px-3 sm:px-5"
    >
      {/* Moving Border Container - No animation on the card itself */}
      <div className="moving-border-container rounded-[10px] p-px">
        <div className="rounded-[10px] bg-neutral-5 backdrop-blur-[15px] relative z-10">
          {/* Responsive layout */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 md:px-10 py-5 sm:py-7 md:py-9">
            {/* Left image - slides from left */}
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

            {/* Right text content - slides from right */}
            <motion.div
              variants={slideInRight}
              className="text-center sm:text-left"
            >
              <motion.h1
                className="font-MartianBThai text-white text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-semibold leading-tight"
                variants={slideInRight}
              >
                Trusted by Google to deliver top-tier advertising performance
              </motion.h1>

              <motion.p
                className="text-neutral-300 text-base sm:text-lg md:text-xl mt-3 leading-relaxed"
                variants={slideInRight}
                transition={{ delay: 0.1 }}
              >
                As a certified <strong>Google Partner</strong>, our strategies are
                not just creative—they're conversion-proven.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Add CSS for moving border */}
      <style jsx>{`
        .moving-border-container {
          position: relative;
          background: linear-gradient(
            90deg,
            #ff6b6b,
            #4ecdc4,
            #45b7d1,
            #96ceb4,
            #ffeaa7,
            #ff6b6b
          );
          background-size: 400% 400%;
          animation: gradientMove 3s ease infinite;
          border-radius: 10px;
        }

        .moving-border-container::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(
            90deg,
            #ff6b6b,
            #4ecdc4,
            #45b7d1,
            #96ceb4,
            #ffeaa7,
            #ff6b6b
          );
          background-size: 400% 400%;
          border-radius: 12px;
          z-index: -1;
          animation: gradientMove 3s ease infinite;
          filter: blur(8px);
          opacity: 0.7;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Partner;