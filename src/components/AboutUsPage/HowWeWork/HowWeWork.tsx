"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Shared/Container/Container";
import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";
import StepCard from "@/components/Reusable/StepCard/StepCard";
import { motion } from 'framer-motion';

const HowWeWork = () => {
    const cardContainerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const workProcess = [
    {
      icon: ICONS.understandAndAlign,
      title: "Understand & Align",
      description:
        "We begin by listening, diving deep into your business goals, current challenges, and customer journey. We define objectives and align on the right services and success metrics.",
    },
    {
      icon: ICONS.strategizeAndPlan,
      title: "Strategize & Plan",
      description:
        "Our experts craft a tailored strategy and execution plan. From tech stacks to campaign flows, we define timelines, assign specialists, and set your project up for smooth execution.",
    },
    {
      icon: ICONS.buildAndOptimize,
      title: "Build, Launch & Optimize",
      description:
        "We execute with agility, designing, developing, and deploying your solution. Real-time testing, quality assurance, and iterative improvements are built into every phase.",
    },
    {
      icon: ICONS.deliverAndSupport,
      title: "Deliver & Support",
      description:
        "We launch with confidence and back you with ongoing support. Whether it’s performance reporting, technical handover, or campaign optimization, your success is our priority",
    },
  ];
  return (
    <Container>
      <div className="h-fit mx-auto mt-20 xl:mt-40 relative">
        {/* Shine Border Effect for full section */}
        <div className="shine-border absolute inset-0 rounded-2xl pointer-events-none z-50 m-0"></div>
        <div className="rounded-[20px] bg-[rgba(255,255,255,0.02)] border border-gray-700 backdrop-blur-[15px] relative overflow-hidden p-5 lg:p-10">
          {/* Animated Background Circles */}
          <div>
            <Image
              src={IMAGES.circle}
              alt=""
              className="w-[643px] h-[664px] absolute -top-64 -right-56 opacity-[0.03] z-999"
            />
          </div>

          <div>
            <Image
              src={IMAGES.circle}
              alt=""
              className="w-[643px] h-[664px] absolute -top-64 -left-56 opacity-[0.03] z-999"
            />
          </div>

          <div className="flex flex-col z-9999 relative w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full">
              {/* Header Section */}
              <h1 className="font-MartianBThai text-white text-2xl sm:text-3xl xl:text-[56px] font-semibold md:leading-10 xl:leading-[61px]">
                How We Work
              </h1>

              <p className="text-neutral-300 text-center lg:text-left text-sm lg:text-lg leading-6 lg:leading-[30px] font-Poppins max-w-[600px] 2xl:max-w-[749px] mt-3">
                Every project at Attribution Booster is executed with precision,
                transparency, and a clear process — whether it's a full-stack
                web build
              </p>
            </div>

            {/* Process Cards Grid */}
          <motion.div
            variants={cardContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px] gap-y-10 mt-16 overflow-visible"
          >
            {workProcess?.map((item, index) => (
              <StepCard key={index} index={index} {...item} />
            ))}
          </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HowWeWork;
