/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/Shared/Container/Container";

const Services = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Animation variants
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

  const slideInLeft: any = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const slideInRight: any = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const floatAnimation: any = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 0.3,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const staggerCards: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardItem: any = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
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

  const servicesData = [
    {
      name: "PPC Advertising",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.ppcAdvertising,
    },
    {
      name: "Analytics",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.analyticsConversionTracking,
    },
    {
      name: "Social Media Marketing",
      description:
        "Our expert team handles everything—from crafting engaging emails to analyzing campaign performance.",
      icon: IMAGES.socialMediaMarketing,
    },
    {
      name: "SEO",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.seo,
    },
    {
      name: "Cyber Security",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.cyberSecurity,
    },
    {
      name: "Web Development",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.webDevelopment,
    },
    {
      name: "Video Editing",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.videoEditing,
    },
    {
      name: "App Development",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.appDevelopment,
    },
    {
      name: "CMS Web Development",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.cmsDevelopment,
    },
    {
      name: "UI/UX Design",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.uiUxDesign,
    },
    {
      name: "Google Ads",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.googleAds,
    },
    {
      name: "Graphics Design",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.graphicsDesign,
    },
  ];

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div variants={floatAnimation} initial="hidden" animate="visible">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="size-[300px] 2xl:size-[523px] absolute top-10 2xl:top-32 -right-28 2xl:-right-56 opacity-[0.40] z-999"
        >
          <Image src={IMAGES.serviceCircle} alt="" className="w-full h-full" />
        </motion.div>
      </motion.div>

      <motion.div
        variants={floatAnimation}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5,
          }}
          className="size-[114px] blur-[10px] absolute top-[500px] -left-10"
        >
          <Image src={IMAGES.globeCircle} alt="" className="w-full h-full" />
        </motion.div>
      </motion.div>

      <Container>
        <div className="mt-20 xl:mt-48">
          {/* Header Section */}
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between"
            variants={containerVariants}
          >
            <motion.h1
              variants={slideInLeft}
              className="font-MartianBThai text-white text-2xl sm:text-3xl xl:text-[56px] font-semibold leading-10 xl:leading-[61px] max-w-[780px]"
            >
              Unleash server-side tracking's potential with us!
            </motion.h1>

            <motion.p
              variants={slideInRight}
              className="text-neutral-300 text-sm lg:text-lg leading-6 lg:leading-[30px] max-w-[430px] font-Poppins mt-4 lg:mt-0"
            >
              Maximize Your Campaign's Potential and Boost Your ROI with Our
              Advanced Tracking Tools and Techniques.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="mt-[70px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            variants={staggerCards}
          >
            {servicesData?.map((service, index) => (
              <motion.div
                key={service?.name}
                variants={cardItem}
                custom={index}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Services;
