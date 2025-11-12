"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Challenges = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const challengeData = [
    {
      title: "Let's Create Something Amazing Together",
      description:
        "This phrase invites collaboration and emphasizes partnership. It suggests that by working together,",
    },
    {
      title: "Unlock Your Business Potential with Our Expertise",
      description:
        "This phrase communicates that our services can help you discover and maximize your business's capabilities. It highlights our specialized knowledge and experience, suggesting that by",
    },
    {
      title: "Experience Professional Quality & Innovative Solutions",
      description:
        "This phrase assures you will encounter high standards of professionalism and cutting-edge solutions. It emphasizes our commitment to delivering innovative",
    },
  ];

  const titleVariants: any = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const cardsContainerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants: any = {
    hidden: {
      opacity: 0,
      y: 80,
      rotateY: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const svgWaveVariants: any = {
    hidden: {
      scale: 0,
      opacity: 0,
      y: 20,
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  const tickIconVariants: any = {
    hidden: {
      scale: 0,
      pathLength: 0,
    },
    visible: {
      scale: 1,
      pathLength: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.8,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.3,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const textVariants: any = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const circleAnimation: any = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -180,
    },
    visible: {
      opacity: 0.1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="overflow-hidden relative px-5 2xl:px-0"
    >
      {/* Animated Decorative circle */}
      <motion.div
        variants={circleAnimation}
        initial="hidden"
        animate={{
          ...circleAnimation.visible,
          rotate: 360,
        }}
        transition={{
          rotate: {
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <Image
          src={IMAGES.circle}
          alt="Globe circle"
          className="w-[543px] h-[500px] opacity-[0.10] hidden md:block blur-[10px] absolute top-[50px] -right-72 z-10 pointer-events-none select-none"
        />
      </motion.div>

      <div className="max-w-[1531px] mx-auto mt-[111px]">
        {/* Main Title */}
        <motion.h1
          variants={titleVariants}
          className="font-MartianBThai text-white text-2xl sm:text-3xl xl:text-[56px] font-semibold leading-8 xl:leading-[61px] max-w-[850px] mx-auto text-center mb-12"
        >
          Yes, we know your challenges as a Digital agency
        </motion.h1>

        {/* Cards Grid */}
        <motion.div
          variants={cardsContainerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-[30px] mt-16 lg:mt-24"
        >
          {challengeData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -15,
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                },
              }}
              className="relative h-full"
            >
              {/* Animated SVG Wave Background */}
              <motion.div
                className="absolute -top-5 inset-x-0 flex justify-center -z-10"
                variants={svgWaveVariants}
                whileHover={{
                  scale: 1.15,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="274"
                  height="113"
                  viewBox="0 0 274 113"
                  fill="none"
                >
                  <path
                    d="M258.824 0C267.66 0 274.96 7.21541 273.447 15.9215C269.262 40.006 255.657 62.5004 234.404 79.9031C208.524 101.095 173.423 113 136.824 113C100.224 113 65.1229 101.095 39.2428 79.9031C17.9901 62.5005 4.38526 40.0061 0.19967 15.9215C-1.31333 7.21542 5.98701 1.52588e-05 14.8236 1.52588e-05L136.824 0H258.824Z"
                    fill="#07F4FA"
                    fillOpacity="0.3"
                  />
                </svg>
              </motion.div>

              {/* Card Content */}
              <motion.div
                className="bg-neutral-10 rounded-[10px] backdrop-blur-[15px] p-[30px] flex flex-col items-center justify-center relative z-10 h-full"
                whileHover={{
                  boxShadow: "0 25px 50px rgba(7, 244, 250, 0.25)",
                  background: "rgba(255,255,255,0.05)",
                  transition: { duration: 0.4 },
                }}
              >
                {/* Animated Tick Icon */}
                <motion.div
                  variants={tickIconVariants}
                  whileHover="hover"
                  className="mb-4"
                >
                  <Image
                    src={IMAGES.blueTick}
                    alt="Tick icon"
                    className="size-[110px] mx-auto"
                  />
                </motion.div>

                {/* Title */}
                <motion.h1
                  className="font-MartianBThai text-white text-2xl 2xl:text-[32px] leading-9 font-semibold mt-10 text-center"
                  variants={textVariants}
                  transition={{ delay: 0.1 }}
                >
                  {item.title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="text-neutral-300 mt-4 text-sm lg:text-base text-center font-Poppins"
                  variants={textVariants}
                  transition={{ delay: 0.2 }}
                >
                  {item.description}
                </motion.p>

                {/* Floating Particles Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none overflow-hidden rounded-[10px]"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                      initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        scale: 0,
                        opacity: 0,
                      }}
                      whileHover={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        scale: [0, 1, 0],
                        opacity: [0, 0.8, 0],
                        transition: {
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                        },
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Challenges;
