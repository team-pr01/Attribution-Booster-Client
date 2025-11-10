"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ICONS } from "../../../../public/assets";

const TrustedClients = () => {
  const logos = Array(8).fill(ICONS.clientDummyLogo);

  return (
    <div>
      <h1 className="font-MartianBThai text-white text-[56px] font-semibold leading-[61px] text-center">
        Our Trusted Clients and Partners
      </h1>

      <p className="text-white text-lg text-center leading-[30px] max-w-[937px] mx-auto mt-5">
        After our services section there will be a section to showcase the logo
        of the brands, company or partner program that we have worked with and
        get partner certificates. Example:
      </p>

      {/* Swiper Section */}
      <div className="mt-10">
        <Swiper
          spaceBetween={30}
          slidesPerView={6}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 6, spaceBetween: 30 },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-neutral-10 backdrop-blur-[15px] rounded-[10px] flex flex-col items-center justify-center w-[230px] h-[101px] relative border border-transparent cursor-pointer"
                whileHover="hover"
                initial="initial"
                variants={{
                  initial: {
                    borderColor: "transparent",
                    scale: 1,
                  },
                  hover: {
                    borderColor: "#07f4fa",
                    scale: 1.02,
                  },
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                {/* Animated Border Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-[10px] border-2 pointer-events-none"
                  variants={{
                    initial: {
                      opacity: 0,
                      borderColor: "transparent",
                    },
                    hover: {
                      opacity: 1,
                      borderColor: "#07f4fa",
                    },
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                />

                {/* Animated Icon */}
                <motion.div
                  variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1.1 },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <Image
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    className="size-[110px]"
                  />
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrustedClients;
