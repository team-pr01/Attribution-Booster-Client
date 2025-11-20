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
      name: "Full Stack Web Development",
      description:
        "End-to-end full-stack solutions with scalable frontend and backend expertise.",
      icon: IMAGES.webDevelopment,
    },
    {
      name: "AI Automation & AI Agent Development",
      description:
        "Developing AI automation and smart agents to improve efficiency and streamline workflows.",
      icon: IMAGES.aiAutomation,
    },
    {
      name: "CMS Web Development",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.cmsDevelopment,
    },
    {
      name: "App Development",
      description:
        "Innovative Android and iOS app solutions designed to drive business growth and enhance user engagement.",
      icon: IMAGES.appDevelopment,
    },
    {
      name: "UI/UX Design",
      description:
        "User-focused UI/UX design delivering intuitive, engaging, and impactful experiences.",
      icon: IMAGES.uiUxDesign,
    },
    {
      name: "Analytics and Conversion Tracking",
      description:
        "Accurate analytics with advanced tracking to maximize conversions and revenue.",
      icon: IMAGES.analyticsConversionTracking,
    },
    {
      name: "Google Ads",
      description:
        "Targeted Google Ads campaigns built to drive traffic, leads, and measurable ROI.",
      icon: IMAGES.googleAds,
    },
    {
      name: "SEO",
      description:
        "Comprehensive SEO strategies crafted to improve search rankings, increase online visibility, and drive organic traffic effectively.",
      icon: IMAGES.seo,
    },
    {
      name: "Graphics Design",
      description:
        "Creative graphic designs that strengthen branding, marketing, and visual identity.",
      icon: IMAGES.graphicsDesign,
    },
    {
      name: "Video Editing",
      description:
        "High-quality video editing tailored for marketing, branding, and storytelling.",
      icon: IMAGES.videoEditing,
    },
    {
      name: "Cyber Security",
      description:
        "Advanced cybersecurity services to protect digital assets from evolving threats.",
      icon: IMAGES.cyberSecurity,
    },
    {
      name: "Social Media Marketing",
      description:
        "Strategic social media campaigns that grow visibility, engagement, and authority.",
      icon: IMAGES.socialMediaMarketing,
    },

    // {
    //   name: "PPC Advertising",
    //   description:
    //     "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
    //   icon: IMAGES.ppcAdvertising,
    // },
  ];

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative overflow-hidden"
      id="services"
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
        <div className="mt-20 xl:mt-40">
          {/* Header Section */}
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-5"
            variants={containerVariants}
          >
            <motion.h1
              variants={slideInLeft}
              className="font-MartianBThai text-white text-center lg:text-left text-2xl sm:text-3xl xl:text-[56px] font-semibold md:leading-10 xl:leading-[61px] max-w-[780px]"
            >
              Unleash server-side tracking's potential with us!
            </motion.h1>

            <motion.p
              variants={slideInRight}
              className="text-neutral-300 text-center lg:text-left text-sm lg:text-lg leading-6 lg:leading-[30px] max-w-[410px] font-Poppins"
            >
              Maximize Your Campaign's Potential and Boost Your ROI with Our
              Advanced Tracking Tools and Techniques.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-5"
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
