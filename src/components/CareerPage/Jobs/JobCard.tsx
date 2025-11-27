import { useState } from "react";
import { motion } from "framer-motion";

const JobCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="group relative rounded-[10px] bg-[rgba(255,255,255,0.02)] border border-gray-700 backdrop-blur-[15px] flex flex-col overflow-hidden cursor-pointer"
      onTouchStart={() => setIsHovered(true)}
      onClick={(e) => {
        setIsHovered(true);
        const shine = e.currentTarget.querySelector(".shine-border");
        shine?.classList.add("shine-active");
        setTimeout(() => shine?.classList.remove("shine-active"), 300);
      }}
      /* ⭐ DESKTOP HOVER */
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Shine Border Effect */}
      <div className="shine-border absolute inset-0 rounded-[10px] pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300"></div>

      {/* Image Container */}
      <div className="relative overflow-hidden p-1">
        <p className="text-primary-5 text-sm lg:text-lg font-Pogit"></p>
      </div>
    </motion.div>
  );
};

export default JobCard;
