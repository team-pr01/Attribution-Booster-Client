/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { IMAGES } from "../../../../public/assets";
import { useRef } from "react";

const TrustedClients = () => {
  const containerRef = useRef(null);

  // Filter out invalid logos
  const logos = [
    IMAGES.client1,
    IMAGES.client2,
    IMAGES.client3,
    IMAGES.client4,
    IMAGES.client5,
    IMAGES.client6,
    IMAGES.client7,
    IMAGES.client8,
    IMAGES.client9,
    IMAGES.client10,
    IMAGES.client11,
    IMAGES.client12,
    IMAGES.client12,
  ].filter(Boolean);

  // Floating animation
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

  // Staggered container animation
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.8 },
    },
  };

  // Individual item animation
  const itemVariants: any = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.6 },
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
      {/* Header */}
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

      {/* Marquee */}
      <motion.div variants={itemVariants} className="mt-10 overflow-hidden relative">
        <Marquee speed={40} pauseOnHover gradient={false} className="flex gap-5 lg:gap-[30px] overflow-hidden py-0 lg:py-4">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="bg-neutral-10 rounded-[10px] flex items-center justify-center w-[150px] lg:w-[230px] h-20 lg:h-[101px] relative border border-transparent cursor-pointer mx-2 lg:mx-[15px] group"
              variants={floatingAnimation}
              initial="initial"
              animate="float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Glow + Hover */}
              <motion.div
                className="absolute inset-0.5 bg-neutral-10 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 0.98, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ rotateY: 360, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                  <motion.div
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                  >
                    <Image
                      src={logo}
                      alt={`Client logo ${index + 1}`}
                      width={128}
                      height={64}
                      className="w-20 lg:w-32 object-contain"
                    />
                  </motion.div>

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.2, transition: { duration: 0.4 } }}
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
                      initial={{ x: "50%", y: "50%", scale: 0, opacity: 0 }}
                      whileHover={{
                        x: Math.random() * 100 - 50 + "%",
                        y: Math.random() * 100 - 50 + "%",
                        scale: 1,
                        opacity: [0, 1, 0],
                        transition: { duration: 1, delay: i * 0.1 },
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </Marquee>
      </motion.div>
    </motion.div>
  );
};

export default TrustedClients;
