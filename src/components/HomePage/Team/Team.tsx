"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";
import TeamMemberCard from "./TeamMemberCard";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import Container from "@/components/Shared/Container/Container";

const Team = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  // Animation variants
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const headerVariants: any = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const textVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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

  const buttonAnimation: any = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const teamOverview = [
    {
      icon: IMAGES.fullStackInnovators,
      title: "Full-Stack Innovators",
      description:
        "Building scalable websites and apps with modern technologies that ensure speed, security, and seamless performance.",
    },
    {
      icon: IMAGES.dataExperts,
      title: "Performance Marketing & Data Experts",
      description:
        "Certified to run high-ROI campaigns and implement GDPR-compliant tracking that drives smarter decisions.",
    },
    {
      icon: IMAGES.strategicCreatives,
      title: "Strategic Creatives",
      description:
        "Designing user-centric interfaces and compelling content that boost engagement, conversions, and brand loyalty.",
    },
    {
      icon: IMAGES.projectManagers,
      title: "Results-Driven Project Managers",
      description:
        "Managing timelines and milestones efficiently to deliver consistent, measurable business outcomes.",
    },
  ];

  const teamMembers = Array(9).fill(null);

  // Navigation handlers
  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <Container>
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mt-20 md:mt-48 lg:mt-72"
      >
        {/* Header */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center justify-between"
        >
          <motion.h1
            variants={headerVariants}
            className="font-MartianBThai text-white text-2xl sm:text-3xl xl:text-[56px] font-semibold leading-10 xl:leading-[61px] max-w-[666px]"
          >
            Meet the Minds Behind Your Digital Growth
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-neutral-300 text-sm lg:text-lg leading-6 lg:leading-[30px] font-Poppins max-w-[600px] 2xl:max-w-[707px] mt-4 lg:mt-0"
          >
            At Attribution Booster, our team is your competitive edge. Each
            member brings deep expertise, relentless focus, and a results-driven
            mindset to transform your digital presence from code to conversions,
            campaigns to compliance.
          </motion.p>
        </motion.div>

        {/* Team Overview */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-14 lg:mt-20"
        >
          {teamOverview?.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative rounded-[10px] p-0.5 bg-linear-to-r from-transparent to-transparent hover:from-primary-500 hover:to-primary-300 transition-all duration-300"
            >
              {/* Shine Border Effect - Always visible */}
              <div className="shine-border absolute inset-0 rounded-[10px] pointer-events-none"></div>
              <div className="rounded-[10px] bg-[rgba(255,255,255,0.02)] border border-gray-700 backdrop-blur-[15px] p-5 lg:p-7 flex flex-col md:flex-row items-center justify-center gap-5 lg:gap-7 transition-all duration-300 h-full">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image src={item?.icon} alt="" className="w-[110px] h-20" />
                </motion.div>

                <div>
                  <h2 className="font-MartianBThai text-white text-2xl 2xl:text-[32px] leading-9 font-semibold">
                    {item?.title}
                  </h2>
                  <p className="text-neutral-300 font-Poppins mt-3">
                    {item?.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Swiper Section */}
        <motion.div variants={headerVariants} className="mt-20 relative">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={setSwiperInstance}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {teamMembers.map((_, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TeamMemberCard />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation + Pagination */}
          <div className="flex flex-col items-center gap-6 mt-8">
            {/* Pagination Dots */}
            <div className="custom-pagination flex justify-center gap-2" />

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={handlePrev}
                className="size-10 rounded-full bg-neutral-900 border border-gray-600 flex items-center justify-center text-white hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 text-sm cursor-pointer"
              >
                <FaArrowLeftLong />
              </button>
              <button
                onClick={handleNext}
                className="size-10 rounded-full bg-neutral-900 border border-gray-600 flex items-center justify-center text-white hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 text-sm cursor-pointer"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </motion.div>

        {/* View All Members Button */}
        <motion.button
          variants={buttonAnimation}
          whileHover="hover"
          whileTap="tap"
          className="pl-[30px] pr-1 py-1 bg-primary-5 font-Poppins text-neutral-5 rounded-[28px] font-medium text-base md:text-lg leading-5 cursor-pointer relative flex items-center gap-2.5 mt-11 mx-auto"
        >
          View All Members
          <div className="bg-neutral-5 size-10 md:size-12 rounded-full flex items-center justify-center">
            <Image src={ICONS.topRightArrow} alt="" className="size-6" />
          </div>
        </motion.button>
      </motion.div>
    </Container>
  );
};

export default Team;
