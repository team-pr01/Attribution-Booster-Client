"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Shared/Container/Container";
import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";
import StepCard from "@/components/Reusable/StepCard/StepCard";
import { motion } from "framer-motion";

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
        "We begin by deeply understanding your business goals, challenges, and requirements. Our team works closely with you to align our strategy with your vision.",
    },
    {
      icon: ICONS.strategizeAndPlan,
      title: "Strategize & Plan",
      description:
        "Based on our analysis, we develop a comprehensive strategy and detailed project plan that outlines timelines, milestones, and deliverables.",
    },
    {
      icon: ICONS.buildAndOptimize,
      title: "Build, Launch & Optimize",
      description:
        "We execute the plan with precision, building robust solutions, launching them successfully, and continuously optimizing for peak performance.",
    },
    {
      icon: ICONS.deliverAndSupport,
      title: "Deliver & Support",
      description:
        "We ensure smooth delivery and provide ongoing support, maintenance, and updates to keep your solutions running at their best.",
    },
  ];
  return (
    <Container>
      <div className="h-fit mx-auto mt-20 xl:mt-40 relative">
        {/* Shine Border Effect for full section */}
        <div className="shine-border absolute inset-0 rounded-2xl pointer-events-none z-50 m-0"></div>
        <div className="rounded-[20px] bg-[rgba(255,255,255,0.02)] border border-gray-700 relative overflow-hidden p-5 lg:p-10">
          {/* Animated Background Circles */}
          <div>
            <Image
              src={IMAGES.circle}
              alt=""
              className="w-[300px] xl:w-[400px] 2xl:w-[500px] absolute -top-32 -right-44 opacity-[0.03] "
            />
          </div>

          <div>
            <Image
              src={IMAGES.circle}
              alt=""
              className="w-[300px] xl:w-[400px] 2xl:w-[500px] absolute -top-32 -left-44 opacity-[0.03] "
            />
          </div>

          <div className="flex flex-col relative w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full">
              {/* Header Section */}
              <h1 className="font-MartianBThai text-white text-2xl sm:text-3xl xl:text-[56px] font-semibold md:leading-10 xl:leading-[61px]">
                How We Work
              </h1>

              <p className="text-neutral-300 text-center lg:text-left text-sm lg:text-lg leading-6 lg:leading-[30px] font-Poppins max-w-[600px] 2xl:max-w-[749px] mt-3">
                Every project we undertake follows a structured approach, from initial consultation to final delivery and beyond.
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
