/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const AboutUsHero = () => {
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

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="max-w-[1300px] 2xl:max-w-[98%] mx-auto py-5 lg:py-10 px-3 2xl:px-0"
    >
      <motion.div
        className="rounded-[20px] border border-gray-700 backdrop-blur-[15px] relative overflow-hidden h-[700px] w-full flex justify-center"
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
          className="absolute top-32 md:top-40 lg:top-56 w-full flex justify-center max-w-[320px] md:max-w-[680px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1420px] mx-auto"
          variants={staggerContainer}
        >
          {/* Left side contents */}
          <div className="w-[60%] relative">
            {/* Breadcrumbs */}
            <div className="font-Poppins flex items-center gap-2.5">
              <Link
                href={"/"}
                className="text-white text-sm md:text-lg hover:underline"
              >
                Home
              </Link>
              <p className="text-white text-sm md:text-lg">{">"}</p>
              <p className="text-primary-5 text-sm md:text-lg">About Us</p>
            </div>
            <motion.h1
              variants={fadeInUp}
              className="font-MartianBThai text-white text-[32px] md:text-[50px] font-semibold leading-10 md:leading-12 max-w-[641px] mt-5"
            >
              Driven by Data. Designed for Growth
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-neutral-300 text-sm md:text-lg leading-6 md:leading-[30px] max-w-[644px] mt-5 font-Poppins"
            >
              Attribution Booster is a results-driven digital agency that blends
              advanced analytics, creative execution, and full-stack technology
              to help businesses scale faster and smarter. As a certified Google
              Partner, we don’t just deliver services, we engineer growth
              strategies that convert.
            </motion.p>

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
              className="size-9 md:size-12 absolute right-20"
            />
          </motion.div>
          </div>

          {/* Right side image */}
          <div className="relative w-[40%]">
            <Image
              src={IMAGES.offerGlobe}
              alt="Decorative Globe"
              className="
                size-[200px] 
                opacity-80 blur-[2px] animate-spin
                absolute -top-20 -left-20
                "
            />
            <div className="max-w-[691px] h-[340px] object-cover rounded-[10px] backdrop-blur-[15px] bg-neutral-10 p-2">
              <Image
                src={IMAGES.aboutUsHero}
                alt=""
                className="w-full h-full rounded-[10px]"
              />
            </div>
          </div>
        </motion.div>

        <div className="absolute -bottom-3 w-full">
          <Marquee
            speed={40}
            pauseOnHover
            gradient={false}
            className="flex gap-5 lg:gap-[30px] overflow-hidden text-[100px] text-[#17212a] font-MartianBThai font-semibold z-0"
          >
            Digital Agency * Creative Soluation *
          </Marquee>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUsHero;
