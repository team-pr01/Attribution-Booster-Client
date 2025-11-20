/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/Shared/Container/Container";

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
    <Container>
      <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="max-w-[1000px] 2xl:max-w-[1200px] mx-auto mt-20 lg:mt-10 px-3 sm:px-5 relative"
    >
      {/* Shine Border Effect for full section */}
        <div className="shine-border absolute inset-0 rounded-2xl pointer-events-none z-50 m-0"></div>
        <div className="rounded-[10px] bg-neutral-5 backdrop-blur-[15px] relative z-10">
          {/* Responsive layout */}
          <div className="flex flex-col sm:flex-row items-center gap-6 p-4">
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
                className="object-contain w-[140px]"
              />
            </motion.div>

            {/* Right text content - slides from right */}
            <motion.div
              variants={slideInRight}
              className="text-center sm:text-left"
            >
              <motion.h1
                className="font-MartianBThai text-white sm:text-xl md:text-2xl 2xl:text-[36px] font-semibold leading-tight"
                variants={slideInRight}
              >
                Trusted by Google to deliver top-tier advertising performance
              </motion.h1>

              <motion.p
                className="text-neutral-300 text-base sm:text-lg 2xl:text-xl mt-2 leading-relaxed"
                variants={slideInRight}
                transition={{ delay: 0.1 }}
              >
                As a certified <a href="https://www.google.com/partners/agency?id=6137804524" target="_blank" className="text-primary-5 font-semibold">Google Partner</a>, our strategies are
                not just creative—they're conversion-proven.
              </motion.p>
            </motion.div>
          </div>
        </div>

    </motion.div>
    </Container>
  );
};

export default Partner;