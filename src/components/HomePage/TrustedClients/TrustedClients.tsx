/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ICONS } from "../../../../public/assets";
import { useRef } from "react";

const TrustedClients = () => {
  const logos = Array(8).fill(ICONS.clientDummyLogo);
  const containerRef = useRef(null);

  // Floating animation for logos
  const floatingAnimation: any = {
    initial: { y: 0 },
    float: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Staggered entrance animation
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8,
      },
    },
  };

  const itemVariants: any = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="mt-20 xl:mt-32 overflow-hidden px-5 2xl:px-0"
    >
      {/* Header Section */}
      <motion.h1
        variants={itemVariants}
        className="font-MartianBThai text-white text-2xl sm:text-3xl xl:text-[56px] font-semibold leading-8 xl:leading-[61px] text-center"
      >
        Our Trusted Clients and Partners
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-neutral-300 text-sm lg:text-lg leading-6 lg:leading-[30px] text-center max-w-[937px] mx-auto mt-5"
      >
       Proud to work with brands and partners who share our vision for measurable, performance-driven growth.
      </motion.p>

      {/* Marquee Section */}
      <motion.div
        variants={itemVariants}
        className="mt-10 overflow-hidden relative"
      >
        {/* First marquee */}
        <Marquee
          speed={40}
          pauseOnHover={true}
          gradient={false}
          className="flex gap-5 lg:gap-[30px] overflow-hidden py-0 lg:py-4"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="bg-neutral-10 rounded-[10px] flex flex-col items-center justify-center w-[150px] lg:w-[230px] h-20 lg:h-[101px] relative border border-transparent cursor-pointer mx-2 lg:mx-[15px] group"
              variants={floatingAnimation}
              initial="initial"
              whileHover="hover"
              animate="float"
              custom={index}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Main Card Content */}
              <motion.div
                className="absolute inset-0.5 bg-neutral-10 rounded-lg flex items-center justify-center"
                whileHover={{
                  scale: 0.98,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Logo with multiple animations */}
                <motion.div
                  className="relative"
                  whileHover={{
                    rotateY: 360,
                    transition: {
                      duration: 0.8,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  >
                    <Image
                      src={logo}
                      alt={`Client logo ${index + 1}`}
                      className="size-20 lg:size-[110px]"
                    />
                  </motion.div>

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{
                      opacity: 1,
                      scale: 1.2,
                      transition: { duration: 0.4 },
                    }}
                  />
                </motion.div>

                {/* Particle Effects on Hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      initial={{
                        x: "50%",
                        y: "50%",
                        scale: 0,
                        opacity: 0,
                      }}
                      whileHover={{
                        x: Math.random() * 100 - 50 + "%",
                        y: Math.random() * 100 - 50 + "%",
                        scale: 1,
                        opacity: [0, 1, 0],
                        transition: {
                          duration: 1,
                          delay: i * 0.1,
                        },
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </Marquee>

        {/* Second Marquee) */}
        <Marquee
          speed={35}
          pauseOnHover={true}
          gradient={false}
          direction="right"
          className="flex gap-[30px] overflow-hidden py-4 mt-4"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={`second-${index}`}
              className="bg-neutral-10 rounded-[10px] flex flex-col items-center justify-center w-[150px] lg:w-[230px] h-20 lg:h-[101px] relative border border-transparent cursor-pointer mx-2 lg:mx-[15px]"
              whileHover={{
                scale: 1.05,
                opacity: 1,
                transition: { duration: 0.3 },
              }}
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              <Image
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="size-20 lg:size-[110px] opacity-70"
              />
            </motion.div>
          ))}
        </Marquee>
      </motion.div>
    </motion.div>
  );
};

export default TrustedClients;
