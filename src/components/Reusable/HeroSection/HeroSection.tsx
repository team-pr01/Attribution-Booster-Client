/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";

const HeroSection = ({
  heading,
  description,
  btnText,
  image,
  breadcrumbs,
  sectionHeight = "h-[850px] md:h-[990px] lg:h-[800px]",
}: {
  heading: string;
  description: string;
  btnText: string;
  image: any;
  breadcrumbs: any[];
  sectionHeight?: string;
}) => {
  const { navigateAndScroll } = useScrollNavigation();
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
      className="max-w-[1300px] 2xl:max-w-[98%] mx-auto py-5 lg:py-10 px-3 2xl:px-0"
    >
      <motion.div
        className={`rounded-[20px] border border-gray-700 backdrop-blur-[15px] relative overflow-hidden w-full flex justify-center ${sectionHeight}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Hero bg */}
        <motion.div transition={{ duration: 1.5, delay: 0.5 }}>
          <Image
            src={IMAGES.heroBg}
            alt=""
            className="w-full h-[680px] md:h-[900px] 2xl:h-[1125px] opacity-[0.8] 2xl:opacity-[0.6] object-cover"
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

        {/* Contents */}
        <motion.div
          className="absolute top-28 md:top-32 lg:top-56 w-full flex flex-col lg:flex-row items-start lg:items-center justify-center gap-10 lg:gap-20 md:gap-10  max-w-[320px] md:max-w-[680px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1420px] mx-auto"
          variants={staggerContainer}
        >
          {/* Left side contents */}
          <div className="w-full lg:w-[60%] relative z-10">
            {/* Breadcrumbs */}
            <div className="font-Poppins flex items-center gap-2.5">
              {/* Static Home */}
              <Link
                href="/"
                className="text-white text-sm md:text-lg hover:underline"
              >
                Home
              </Link>

              {breadcrumbs.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <p className="text-white text-sm md:text-lg">{">"}</p>

                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-primary-5 text-sm md:text-lg hover:underline"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <p className="text-primary-5 text-sm md:text-lg">
                      {item.label}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <motion.h1
              variants={fadeInUp}
              className="font-MartianBThai text-white text-[32px] md:text-[50px] lg:text-[45px] xl:text-[50px] font-semibold leading-10 md:leading-12 max-w-[700px] mt-5"
            >
              {heading}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-neutral-300 text-sm md:text-lg leading-6 md:leading-[30px] max-w-[644px] mt-5 font-Poppins"
            >
              {description}
            </motion.p>

            <div
              onClick={() => navigateAndScroll("/services", "services")}
              className="mt-11 cursor-pointer"
            >
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
                  {btnText}
                  <div className="bg-neutral-5 size-10 md:size-12 rounded-full flex items-center justify-center group-hover:bg-neutral-4 transition-colors duration-300">
                    <Image
                      src={ICONS.topRightArrow}
                      alt=""
                      className="size-6"
                    />
                  </div>
                </span>
              </button>
            </div>

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
                className="size-9 md:size-12 absolute -top-[100px] md:-top-32 right-24 md:right-32 opacity-30 lg:opacity-100"
              />
            </motion.div>
          </div>

          {/* Right side image */}
          <div className="relative w-full lg:w-[45%] xl:w-[40%]">
            <Image
              src={IMAGES.offerGlobe}
              alt="Decorative Globe"
              className="
                size-[130px] lg:size-[200px] 
                opacity-80 blur-[2px] animate-spin
                absolute -top-14 lg:-top-20 -left-16 lg:-left-20
                "
            />
            <div className="relative max-w-[691px] h-full md:h-[340px] lg:h-full xl:h-[280px] 2xl:h-[340px] rounded-[10px] backdrop-blur-[15px] bg-neutral-10 p-2">
              <img
                src={image}
                alt=""
                className="object-cover rounded-[10px]"
              />
            </div>
          </div>
        </motion.div>

        {/* Marquee text */}
        <div className="absolute -bottom-1 md:-bottom-2 lg:-bottom-3 w-full">
          <Marquee
            speed={40}
            pauseOnHover
            gradient={false}
            className="flex gap-5 lg:gap-[30px] overflow-hidden text-[50px] lg:text-[100px] text-primary-5/20 font-MartianBThai font-semibold z-0"
          >
            Digital Agency * Creative Solution *
          </Marquee>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
