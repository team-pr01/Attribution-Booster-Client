/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/Shared/Container/Container";

const testimonials = [
  {
    name: "Sarah Thompson",
    title: "CEO of BlueBloom",
    feedback:
      "Working with this team was an absolute pleasure! They helped us scale our online presence and boost sales significantly.",
  },
  {
    name: "Michael Lee",
    title: "Founder of NovaTech",
    feedback:
      "Their innovative solutions and dedication truly impressed us. We've found a long-term partner for our digital needs.",
  },
  {
    name: "Emma Johnson",
    title: "Marketing Director, AdSpark",
    feedback:
      "Excellent communication and execution. They delivered beyond expectations and helped our brand grow faster.",
  },
  {
    name: "David Martinez",
    title: "COO, GreenWorks",
    feedback:
      "We experienced top-tier professionalism and creativity. Their work quality speaks for itself!",
  },
];

const Testimonial = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

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

  const fadeInUp: any = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
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
      opacity: 0.8,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const cardAnimation: any = {
    hidden: {
      opacity: 0,
      y: 50,
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
        duration: 0.6,
      },
    },
  };

  return (
    <Container>
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="rounded-[20px] relative mt-28 2xl:mt-44"
      >
        {/* Wrapper with relative positioning */}
        <motion.div
          variants={containerVariants}
          className="relative rounded-[20px] bg-[rgba(255,255,255,0.02)] border border-gray-700 backdrop-blur-[15px] py-5 lg:py-10 2xl:py-20 px-5 lg:px-10 2xl:px-[135px] overflow-hidden"
        >
          {/* Animated Globe */}
          <motion.div
            className="absolute bottom-10 2xl:bottom-28 left-1/2 transform -translate-x-1/2 pointer-events-none"
            style={{ zIndex: 0 }}
            variants={floatAnimation}
            animate={{
              rotate: 360,
              y: [0, -10, 0],
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src={IMAGES.offerGlobe}
              alt="Decorative Globe"
              className="w-[114px] opacity-80 blur-[2px] animate-spin"
            />
          </motion.div>

          {/* Background circles */}
          <motion.div variants={slideInLeft} initial="hidden" animate="visible">
            <Image
              src={IMAGES.circle}
              alt="circle background"
              className="w-[643px] h-[664px] hidden 2xl:block absolute -top-64 -left-56 opacity-[0.03] z-1"
            />
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <Image
              src={IMAGES.circle}
              alt="circle background"
              className="w-[643px] h-[664px] absolute -top-64 -right-56 opacity-[0.03] z-1"
            />
          </motion.div>

          {/* Header section */}
          <div className="relative z-5 flex flex-col lg:flex-row items-center justify-between mb-16">
            <motion.h1
              variants={fadeInUp}
              className="font-MartianBThai text-white text-2xl sm:text-3xl xl:text-[56px] font-semibold leading-10 xl:leading-[61px] max-w-[727px]"
            >
              Trusted by Clients Around the World
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-neutral-300 text-sm lg:text-lg leading-6 lg:leading-[30px] font-Poppins max-w-[520px]"
            >
              Hear from real clients who rely on our digital solutions,
              development expertise, and marketing strategies to grow and
              protect their businesses.
            </motion.p>
          </div>

          {/* Swiper for testimonial cards */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="relative z-10"
          >
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={2}
              pagination={{
                clickable: true,
                bulletActiveClass: "swiper-pagination-bullet-active",
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
              }}
              className="pb-16!"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    variants={cardAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                    className="bg-neutral-10/60 backdrop-blur-[20px] rounded-[10px] px-5 py-[30px] flex flex-col relative border border-gray-600 cursor-pointer h-full"
                  >
                    {/* Ratings */}
                    <motion.div
                      className="lg:hidden flex items-center gap-1 mb-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <FaStar className="text-yellow-500 size-5" />
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.p
                      className="text-white text-lg leading-[30px] font-Poppins"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {item.feedback}
                    </motion.p>

                    <div className="flex items-center justify-between mt-12">
                      {/* Reviewer */}
                      <motion.div
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <motion.div
                          className="size-14 lg:size-20 rounded-full bg-neutral-10 backdrop-blur-[15px] p-2 flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Image
                            src={IMAGES.dummyAvatar}
                            alt={item.name}
                            className="rounded-full"
                          />
                        </motion.div>
                        <div>
                          <h1 className="font-MartianBThai text-white text-xl lg:text-2xl font-semibold">
                            {item.name}
                          </h1>
                          <p className="text-neutral-20 text-sm lg:text-base font-Poppins">
                            {item.title}
                          </p>
                        </div>
                      </motion.div>

                      {/* Ratings */}
                      <motion.div
                        className="hidden lg:flex items-center gap-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + i * 0.1 }}
                          >
                            <FaStar className="text-yellow-500 size-5" />
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Custom pagination dots */}
          <style jsx global>{`
            .swiper-pagination-bullet {
              background: #07f4fa !important;
              opacity: 0.4;
              transition: all 0.3s ease;
            }
            .swiper-pagination-bullet-active {
              opacity: 1;
              transform: scale(1.2);
            }
          `}</style>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Testimonial;
