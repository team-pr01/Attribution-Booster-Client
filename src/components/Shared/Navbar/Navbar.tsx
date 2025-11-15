/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import Link from "next/link";
import { FaAlignRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/", label: "About Us" },
    { href: "/", label: "Services" },
    { href: "/", label: "Blog" },
    { href: "/", label: "Contact Us" },
  ];

  const linkVariants: any  = {
    hover: {
      y: -2,
      color: "#07f4fa",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
        duration: 0.3,
      },
    },
  };

  const underlineVariants: any = {
    hover: {
      width: "100%",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
      <div className="rounded-[10px] bg-neutral-10 border border-neutral-20/10 backdrop-blur-[15px] w-full max-w-[320px] md:max-w-[680px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1420px] mx-auto">
        <div className="flex items-center justify-between px-3 lg:px-[29px] py-3">
          <Link href={"/"}>
            <Image
              src={IMAGES.logo}
              alt="Logo"
              className="w-40 md:w-[200px] 2xl:w-[290px]"
            />
          </Link>

          <nav className="hidden xl:flex space-x-[30px] font-Poppins">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                className="relative"
                initial="initial"
                whileHover="hover"
              >
                <Link href={link.href}>
                  <motion.span
                    variants={linkVariants}
                    className="text-white text-lg leading-5 block cursor-pointer"
                  >
                    {link.label}
                  </motion.span>
                </Link>

                {/* Animated underline */}
                <motion.div
                  variants={underlineVariants}
                  className="absolute bottom-0 left-0 h-0.5 bg-cyan-400 w-0"
                />
              </motion.div>
            ))}
          </nav>

          <button className="px-5 lg:px-[30px] py-3 lg:py-[18px] bg-primary-5 font-Poppins text-neutral-5 rounded-[28px] font-medium text-sm md:text-lg leading-5 cursor-pointer relative hidden lg:block transition-all duration-200 hover:bg-primary-5/80 active:scale-95">
            Get Started
          </button>

          <button className="block lg:hidden">
            <FaAlignRight className="text-white text-2xl" />
          </button>
        </div>
      </div>
  );
};

export default Navbar;
