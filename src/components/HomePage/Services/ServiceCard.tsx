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
      className="bg-neutral-10 group backdrop-blur-[15px] rounded-[10px] px-4 py-[30px] flex flex-col items-center justify-between w-full max-w-[360px] relative border border-transparent cursor-pointer shadow-[inset_0_0_20px_rgba(7,244,250,0.5)] h-[300px]"
      whileHover="hover"
      whileTap="hover"
      initial="initial"
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      onTouchStart={(e) => {
        const shine = e.currentTarget.querySelector(".shine-border");
        shine?.classList.add("shine-active");
        setTimeout(() => shine?.classList.remove("shine-active"), 300);
      }}
      onClick={(e) => {
        const shine = e.currentTarget.querySelector(".shine-border");
        shine?.classList.add("shine-active");
        setTimeout(() => shine?.classList.remove("shine-active"), 300);
      }}
    >
      {/* Shine Border Effect */}
      <div className="shine-border absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100"></div>

      <div className="flex flex-col h-full">
        {/* Animated Arrow Icon */}
        <motion.div
          className="size-9 rounded-full flex items-center justify-center border absolute top-4 right-4 overflow-hidden"
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
          <Image src={icon} alt="" className="size-[110px] mx-auto" />
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
          <h1 className="font-MartianBThai text-white text-xl font-semibold text-center mt-4">
            {name}
          </h1>
          <p className="text-neutral-300 text-sm font-Poppins text-center mt-2">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
