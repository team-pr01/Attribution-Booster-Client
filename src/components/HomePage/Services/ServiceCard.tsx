"use client";
import Image, { StaticImageData } from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

const ServiceCard = ({
  name,
  description,
  icon,
}: {
  name: string;
  description: string;
  icon: StaticImageData;
}) => {
  return (
    <motion.div
      className="bg-neutral-10 backdrop-blur-[15px] rounded-[10px] px-5 py-[30px] flex flex-col items-center justify-center w-full max-w-[360px] relative border border-transparent cursor-pointer"
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

      {/* Animated Arrow Icon */}
      <motion.div
        className="size-9 rounded-full flex items-center justify-center border absolute top-3 right-3 overflow-hidden"
        variants={{
          initial: {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(255, 255, 255, 0.3)",
            rotate: 0,
          },
          hover: {
            backgroundColor: "#07f4fa",
            borderColor: "#07f4fa",
            rotate: 45,
          },
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        <motion.div
          variants={{
            initial: { color: "#FFFFFF" },
            hover: { color: "#06101A" },
          }}
        >
          <GoArrowUpRight className="text-xl" />
        </motion.div>
      </motion.div>

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
        <Image src={icon} alt="" className="size-[110px]" />
      </motion.div>

      {/* Animated Text Content */}
      <motion.div
        variants={{
          initial: { y: 0 },
          hover: { y: -5 },
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        <h1 className="font-MartianBThai text-white text-xl lg:text-[28px] leading-[35px] font-semibold text-center mt-4">
          {name}
        </h1>
        <p className="text-neutral-300 text-sm lg:text-base font-Poppins text-center mt-2">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
