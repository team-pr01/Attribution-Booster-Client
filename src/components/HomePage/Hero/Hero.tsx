/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Counter from "@/components/Reusable/Counter/Counter";

const Hero = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // Animation variants
  const fadeInUp: any = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const rotateCardLeft: any = {
    hidden: { opacity: 0, x: -100, rotate: -45 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: -30,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    hover: {
      rotate: -4,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const rotateCardRight: any = {
    hidden: { opacity: 0, x: 100, rotate: 45 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 30,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    hover: {
      rotate: 4,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const floatAnimation: any = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.3,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const globeAnimation: any = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const heroImageAnimation: any = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  const customCss = `
    /* This is the key to the seamless animation.
      The @property rule tells the browser that '--angle' is a custom property
      of type <angle>. This allows the browser to smoothly interpolate it
      during animations, preventing the "jump" at the end of the loop.
    */
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    /* The keyframe animation simply transitions the --angle property
      from its start (0deg) to its end (360deg).
    */
    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="max-w-[1300px] 2xl:max-w-[1800px] mx-auto py-5 lg:py-10 px-3 2xl:px-0"
    >
      <motion.div
        className="rounded-[20px] border border-gray-700 backdrop-blur-[15px] relative overflow-hidden h-[730px] md:h-[1000px] 2xl:h-[1080px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          // variants={globeAnimation}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 -translate-y-1/2 right-0 z-0 lg:z-9999"
        >
          <Image src={IMAGES.halfGlobeCircle} alt="" className="" />
        </motion.div>

        {/* Top globes */}
        <motion.div
          className="flex items-center justify-between max-w-[320px] md:max-w-[500px] xl:max-w-[1000px] mx-auto absolute left-4 md:left-20 lg:left-[250px] 2xl:left-[380px] top-48 w-full"
          variants={staggerContainer}
        >
          <motion.div
            variants={globeAnimation}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={IMAGES.globeCircle}
              alt=""
              className="size-9 md:size-12"
            />
          </motion.div>

          <motion.div
            variants={globeAnimation}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
          >
            <Image
              src={IMAGES.globeCircle}
              alt=""
              className="size-7 md:size-9 blur-[10px]"
            />
          </motion.div>
        </motion.div>

        {/* Hero bg */}
        <motion.div transition={{ duration: 1.5, delay: 0.5 }}>
          <Image
            src={IMAGES.heroBg}
            alt=""
            className="w-full h-[1125px] opacity-[0.6]"
          />
        </motion.div>

        {/* Right circle */}
        <motion.div
          variants={floatAnimation}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="size-[150px] lg:size-[400px] 2xl:size-[643px] absolute -top-10 lg:-top-28 2xl:-top-64 -right-10 lg:-right-28 2xl:-right-56 opacity-[0.30] z-999"
          >
            <Image
              style={{
                mixBlendMode: "hard-light",
                filter: "saturate(200%)",
              }}
              src={IMAGES.circle}
              alt=""
              className="w-full h-full mix-blend-color-dodge"
            />
          </motion.div>
        </motion.div>

        {/* Left circle */}
        <motion.div
          variants={floatAnimation}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="size-[150px] lg:size-[400px] 2xl:size-[643px] absolute -top-10 lg:-top-28 2xl:-top-64 -left-10 lg:-left-28 2xl:-left-56 opacity-[0.30] z-999"
          >
            <Image
              style={{
                mixBlendMode: "hard-light",
                filter: "saturate(200%)",
              }}
              src={IMAGES.circle}
              alt=""
              className="w-full h-full mix-blend-color-dodge"
            />
          </motion.div>
        </motion.div>

        {/* Middle gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Image
            src={IMAGES.heroMiddleGradient}
            alt=""
            className="w-[643px] h-[664px] absolute top-32 left-1/3 z-999 opacity-30"
          />
        </motion.div>

        {/* Contents */}
        <motion.div
          className="absolute top-56 w-full flex flex-col items-center justify-center"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeInUp}
            className="font-MartianBThai text-white text-[32px] md:text-[40px] lg:text-[61px] 2xl:text-[90px] font-semibold leading-10 md:leading-12 lg:leading-[70px] 2xl:leading-[99px] max-w-full md:max-w-[450px] lg:max-w-[700px] 2xl:max-w-[984px] text-center"
          >
            Built to Scale. Optimized for Growth.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-white text-sm md:text-lg text-center leading-6 md:leading-[30px] max-w-[760px] mt-5 px-3"
          >
            Attribution Booster helps you scale smarter with full-stack web
            development, precision analytics, performance-driven ads, and
            conversion-first design.
          </motion.p>

          <div className="flex items-center justify-center font-sans mt-11">
            <style>{customCss}</style>
            <button className="relative inline-flex items-center justify-center p-[3px] bg-primary-5 dark:bg-black rounded-full overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "conic-gradient(from var(--angle), transparent 70%, #ffffff, transparent 100%)",
                  animation: "shimmer-spin 2s linear infinite",
                }}
              />
              <span className="pl-[30px] pr-1 py-1 bg-primary-5 font-Poppins text-neutral-5 rounded-[28px] font-medium text-base md:text-lg leading-5 cursor-pointer relative flex items-center gap-2.5 group-hover:bg-primary-6 transition-colors duration-300">
                Explore Our Services
                <div className="bg-neutral-5 size-10 md:size-12 rounded-full flex items-center justify-center group-hover:bg-neutral-4 transition-colors duration-300">
                  <Image src={ICONS.topRightArrow} alt="" className="size-6" />
                </div>
              </span>
            </button>
          </div>

          {/* Rotate cards */}
          <div className="hidden md:flex justify-between w-full max-w-[900px] 2xl:max-w-[1500px] absolute top-[380px] 2xl:top-[350px] sm:top-[250px] md:top-[370px] lg:top-[400px] px-2 sm:px-5">
            {/* Happy Clients Card */}
            <motion.div
              variants={rotateCardLeft}
              whileHover="hover"
              animate="visible"
              className="relative rounded-lg sm:rounded-[10px] p-px bg-linear-to-r from-gray-300/50 via-transparent to-gray-600"
            >
              <motion.div className="rounded-lg sm:rounded-[10px] bg-neutral-5 backdrop-blur-[15px]">
                <div className="flex items-center justify-between gap-3 sm:gap-5 md:gap-[30px] px-3 sm:px-5 py-2 sm:py-3">
                  <motion.div
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      style={{
                        mixBlendMode: "hard-light",
                        filter: "saturate(160%)",
                      }}
                      src={IMAGES.happyClients}
                      alt="Happy Clients"
                      className="w-9 md:w-[77px] h-12 sm:h-[65px] md:h-[82px]"
                    />
                  </motion.div>
                  <div>
                    <motion.h1
                      className="font-Poppins text-white text-lg sm:text-2xl md:text-[52px] font-semibold leading-tight md:leading-[57px] text-center"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                    >
                      <Counter from={0} to={200} duration={2} />+
                    </motion.h1>
                    <p className="text-white text-xs sm:text-base md:text-lg text-center leading-5 sm:leading-[30px]">
                      Happy Clients
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Projects Completed Card */}
            <motion.div
              variants={rotateCardRight}
              whileHover="hover"
              animate="visible"
              className="relative rounded-lg sm:rounded-[10px] p-px bg-linear-to-r from-gray-300/50 via-transparent to-gray-600"
            >
              <motion.div className="rounded-lg sm:rounded-[10px] bg-neutral-5 backdrop-blur-[15px]">
                <div className="flex items-center justify-between gap-3 sm:gap-5 md:gap-[30px] px-3 sm:px-5 py-2 sm:py-3">
                  <motion.div
                    animate={{ rotate: [0, -5, 0, 5, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <Image
                      style={{
                        mixBlendMode: "hard-light",
                        filter: "saturate(160%)",
                      }}
                      src={IMAGES.projectCompleted}
                      alt="Project Completed"
                      className="w-9 md:w-[77px] h-10 sm:h-[55px] md:h-[82px]"
                    />
                  </motion.div>
                  <div>
                    <motion.h1
                      className="font-Poppins text-white text-lg sm:text-2xl md:text-[52px] font-semibold leading-tight md:leading-[57px] text-center"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.3,
                      }}
                    >
                      <Counter from={0} to={1500} duration={2.5} />+
                    </motion.h1>
                    <p className="text-white text-xs sm:text-base md:text-lg text-center leading-5 sm:leading-[30px]">
                      Project Completed
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom globes */}
          <motion.div
            className="flex items-center justify-between max-w-[300px] md:max-w-[500px] xl:max-w-[1100px] 2xl:max-w-[1300px] absolute left-5 md:left-20 lg:left-auto top-[350px] md:top-[550px] xl:top-[500px] 2xl:top-[600px] mx-auto w-full"
            variants={staggerContainer}
          >
            <motion.div
              variants={globeAnimation}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={IMAGES.globeCircle}
                alt=""
                className="size-10 xl:size-16"
              />
            </motion.div>

            <motion.div
              variants={globeAnimation}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5, // small delay for alternating bounce
              }}
            >
              <Image
                src={IMAGES.globeCircle}
                alt=""
                className="size-10 xl:size-16 blur-[10px]"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={heroImageAnimation}
          initial="hidden"
          animate="visible"
        >
          <Image
            style={{
              mixBlendMode: "hard-light",
              filter: "saturate(160%)",
            }}
            src={IMAGES.heroImg}
            alt=""
            className="absolute bottom-0 w-full lg:w-1/2 2xl:w-4/7 mx-auto justify-self-center z-50 flex "
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
