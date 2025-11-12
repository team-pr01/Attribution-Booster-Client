/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

// Types for the component props
interface CustomDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

// Animation variants with types
const dropdownVariants: any = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.2
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3
    }
  })
};

// Custom Dropdown Component
const CustomDropdown = ({ 
  options, 
  value, 
  onChange, 
  placeholder = "Select a service...",
  disabled = false 
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <motion.button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`w-full px-4 py-3 bg-neutral-10 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-all duration-200 flex items-center justify-between ${
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:border-gray-400"
        } ${isOpen ? "border-cyan-400" : ""}`}
        whileHover={!disabled ? { scale: 1.02 } : {}}
        whileTap={!disabled ? { scale: 0.98 } : {}}
      >
        <span className={`${!value ? "text-gray-400" : "text-white"}`}>
          {value || placeholder}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-white"
        >
          <IoIosArrowDown />
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 right-0 mt-2 bg-neutral-5 border border-gray-600 rounded-lg shadow-2xl shadow-black/50 backdrop-blur-lg z-50 max-h-60 overflow-y-auto overflow-x-hidden"
          >
            <div className="py-2">
              {options.map((option: string, index: number) => (
                <motion.div
                  key={option}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="px-4 py-3 cursor-pointer hover:bg-cyan-500/10 transition-colors duration-200 border-b border-gray-700 last:border-b-0"
                  onClick={() => handleSelect(option)}
                  whileHover={{ 
                    x: 5,
                    backgroundColor: "rgba(7, 244, 250, 0.1)"
                  }}
                >
                  <span className="text-white font-Poppins">{option}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomDropdown;