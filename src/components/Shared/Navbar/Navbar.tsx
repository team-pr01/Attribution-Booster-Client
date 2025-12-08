/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import Link from "next/link";
import { FaAlignRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";

const Navbar = () => {
  const { navigateAndScroll } = useScrollNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blogs", label: "Blog" },
    { href: "/team", label: "Team" },
    { href: "/career", label: "Career" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const linkVariants: any = {
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

  // Mobile menu animations
  const mobileMenuVariants: any = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const mobileLinkVariants = {
    closed: {
      opacity: 0,
      x: -20,
    },
    open: {
      opacity: 1,
      x: 0,
    },
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="rounded-[10px] bg-neutral-10 border border-neutral-20/10 backdrop-blur-[15px] w-full max-w-[320px] md:max-w-[680px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1420px] mx-auto z-9999">
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
                  className="text-white leading-5 block cursor-pointer"
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

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigateAndScroll("/contact-us", "contact-us")}
            className="px-5 lg:px-[30px] py-3 lg:py-[18px] bg-primary-5 font-Poppins text-neutral-5 rounded-[28px] font-medium text-sm md:text-lg leading-5 cursor-pointer relative hidden lg:block transition-all duration-200 hover:bg-primary-5/80 active:scale-95"
          >
            Get Started
          </button>

          <button className="block xl:hidden" onClick={toggleMobileMenu}>
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaAlignRight className="text-white text-2xl" />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="xl:hidden overflow-hidden"
          >
            <div className="px-3 lg:px-[29px] py-4 border-t border-neutral-20/20">
              <nav className="flex flex-col space-y-4 font-Poppins">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    variants={mobileLinkVariants}
                    initial="closed"
                    animate="open"
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-white text-lg leading-5 block cursor-pointer py-2 hover:text-cyan-400 transition-colors duration-200">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
