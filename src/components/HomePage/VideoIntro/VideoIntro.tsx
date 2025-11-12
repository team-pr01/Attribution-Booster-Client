/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import { motion, useInView, easeOut } from "framer-motion";
import { useRef, useState } from "react";
import Modal from "@/components/Reusable/Modal/Modal";
import "./VideoIntro.css";

const VideoIntro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const isVideoInView = useInView(videoRef, { once: true, amount: 0.3 });
  const isContainerInView = useInView(containerRef, {
    once: true,
    amount: 0.2,
  });

  const scaleUpVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const transition = { duration: 0.8, ease: easeOut };

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

  const playButtonVariants: any = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.6,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const cardContainerVariants: any = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 1,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isContainerInView ? "visible" : "hidden"}
      className="max-w-[1800px] mx-auto mt-20 2xl:mt-[130px] relative px-5 2xl:px-0"
    >
      <div className="max-w-[1531px] mx-auto">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center justify-between"
        >
          <motion.h1
            variants={headerVariants}
            className="font-MartianBThai text-white text-2xl sm:text-3xl xl:text-[56px] font-semibold leading-10 xl:leading-[61px] max-w-[643px]"
          >
            Attribution Booster In a Minute
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-neutral-300 text-sm lg:text-lg leading-6 lg:leading-[30px] font-Poppins max-w-[750px] mt-4 lg:mt-0"
          >
            In this section, we would love to integrate a short video about
            Attribution Booster, which will cover our unique services, why you
            should work with Attribution Booster, how we work, and our core
            values that we provide to our clients.
          </motion.p>
        </motion.div>

        <motion.div
          ref={videoRef}
          variants={scaleUpVariants}
          initial="hidden"
          animate={isVideoInView ? "visible" : "hidden"}
          transition={{ ...transition, delay: 0.2 }}
          className="relative flex flex-col items-center justify-center w-full h-full mt-14 z-50"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          <Image
            src={IMAGES.videoDummyImage}
            alt=""
            className="w-full max-h-[700px] object-cover rounded-2xl z-10 opacity-70"
          />
          {/* video play btn */}
          <div className="absolute top-0 bottom-0 right-0 left-0 z-20 flex items-center justify-center">
            {" "}
            {/* Increased z-index */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="video-button cursor-pointer size-10 md:size-20 flex items-center justify-center"
              aria-label="Play video"
              variants={playButtonVariants}
              whileHover="hover"
              whileTap="tap"
              animate="visible"
            >
              <svg
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="size-5 md:size-6"
              >
                <path
                  d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                  fill="currentColor"
                ></path>
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Card container */}
      <motion.div
        ref={videoRef}
        variants={cardContainerVariants}
        initial="hidden"
        animate={isVideoInView ? "visible" : "hidden"}
        className="absolute -bottom-40 w-full -z-10 hidden xl:block"
      >
        <motion.div
          variants={containerVariants}
          className="relative rounded-[20px] bg-[rgba(255,255,255,0.02)] border border-gray-700 backdrop-blur-[15px] min-h-[573px] overflow-hidden"
        >
          <Image
            src={IMAGES.circle}
            alt=""
            className="size-[400px] absolute -bottom-40 -left-32 opacity-[0.30] z-0"
          />

          {/* Main content */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-10 xl:gap-0 items-center justify-between relative z-10 w-full"></div>
        </motion.div>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="w-full aspect-video mx-auto">
          {/* <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full rounded"
          /> */}
        </div>
      </Modal>
    </motion.div>
  );
};

export default VideoIntro;
