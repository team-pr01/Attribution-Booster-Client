"use client";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const TeamMemberCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const socialIcons = [
    { icon: <FaFacebook className="text-white text-lg" />, href: "#" },
    { icon: <FaLinkedin className="text-white text-lg" />, href: "#" },
    { icon: <FaInstagram className="text-white text-lg" />, href: "#" },
  ];

  const socialContainerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const socialItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="relative rounded-[10px] bg-[rgba(255,255,255,0.02)] border border-gray-700 backdrop-blur-[15px] flex flex-col overflow-hidden group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Image
          src={IMAGES.ceo}
          alt="Muhammad Nurullah - CEO"
          className="h-[310px] xl:h-[425px] rounded-t-[10px] object-cover w-full group-hover:scale-105 transition-transform duration-300"
        />

        {/* Social Icons Overlay */}
        <motion.div
          className="absolute top-4 right-4 flex flex-col gap-3"
          variants={socialContainerVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
        >
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="w-8 h-8 bg-black/50 hover:bg-blue-600 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors duration-300"
              variants={socialItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 xl:p-[30px]">
        <h2 className="font-MartianBThai text-white text-2xl 2xl:text-[32px] leading-9 font-semibold text-center">
          Muhammad Nurullah
        </h2>
        <p className="text-neutral-300 font-Poppins text-center mt-1">CEO</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
