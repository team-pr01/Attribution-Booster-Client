/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import Link from "next/link";
import { FaAlignRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import { servicesData } from "@/components/HomePage/Services/Services";
import { BiChevronDown } from "react-icons/bi";
import { ICONS } from "../../../../out/assets";

const Navbar = () => {
  const { navigateAndScroll } = useScrollNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Services", hasDropdown: true },
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

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Get main services (top-level services without parent)
  const mainServices = servicesData;

  // Close dropdown when clicking outside or moving mouse away
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (isServicesOpen && servicesDropdownRef.current) {
        const rect = servicesDropdownRef.current.getBoundingClientRect();
        const dropdownArea = document.querySelector("[data-dropdown-content]");

        if (dropdownArea) {
          const dropdownRect = dropdownArea.getBoundingClientRect();
          const buffer = 50; // 50px buffer zone

          const isInTriggerArea =
            event.clientX >= rect.left - buffer &&
            event.clientX <= rect.right + buffer &&
            event.clientY >= rect.top - buffer &&
            event.clientY <= rect.bottom + buffer;

          const isInDropdownArea =
            event.clientX >= dropdownRect.left &&
            event.clientX <= dropdownRect.right &&
            event.clientY >= dropdownRect.top &&
            event.clientY <= dropdownRect.bottom;

          if (!isInTriggerArea && !isInDropdownArea) {
            setIsServicesOpen(false);
          }
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isServicesOpen]);

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
          {navLinks.map((nav) => (
            <motion.div
              key={nav.label}
              className="relative"
              initial="initial"
              whileHover="hover"
              variants={itemVariants}
              ref={nav.hasDropdown ? servicesDropdownRef : null}
            >
              {nav.hasDropdown ? (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="relative z-50"
                  ref={servicesDropdownRef}
                >
                  <motion.button
                    className="text-white/80 hover:text-[#22d3ee] transition-colors text-sm xl:text-base flex items-center space-x-1"
                    whileHover={{ scale: 1.03, color: "#22d3ee" }}
                    tabIndex={0}
                    aria-expanded={isServicesOpen}
                    aria-haspopup="true"
                  >
                    <motion.span
                      variants={linkVariants}
                      className="leading-5 block cursor-pointer"
                    >
                      {nav.label}
                    </motion.span>

                    <motion.div animate={{ rotate: isServicesOpen ? 180 : 0 }}>
                      <BiChevronDown className="text-xl" />
                    </motion.div>
                  </motion.button>

                  {/* Animated underline for the top-level button */}
                  <motion.div
                    variants={underlineVariants}
                    className="absolute bottom-0 left-0 h-0.5 bg-cyan-400"
                    style={{ width: 0 }}
                  />

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute container left-0 right-0 top-full mt-2 bg-slate-900 shadow-2xl z-50"
                        style={{
                          width: "1220px",
                          marginLeft: "calc(-41vw + 50%)",
                        }}
                        data-dropdown-content
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <div className="px-4 sm:px-6 lg:px-8 py-8">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-w-7xl mx-auto h-full">
                            {mainServices.map((service, serviceIndex) => (
                              <motion.div
                                key={service.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.25,
                                  delay: serviceIndex * 0.05,
                                }}
                              >
                                <Link
                                  href={`/services/${service.slug}`}
                                  className="block p-5 rounded-xl bg-slate-800/50 transition-all duration-300 group border border-transparent hover:border-[#22d3ee]/30 backdrop-blur-sm hover:bg-slate-700 h-full"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  <div className="flex">
                                    <div className="w-16 h-16 shrink-0 bg-linear-to-br from-[#22d3ee]/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-[#22d3ee]/30 group-hover:to-blue-500/30 transition-all duration-300">
                                      {service.icon ? (
                                        <Image
                                          src={service.icon}
                                          alt={service.name}
                                          className="w-8 h-8 object-contain"
                                        />
                                      ) : (
                                        <div className="w-8 h-8" />
                                      )}
                                    </div>
                                    <div className="ml-4">
                                      <h4 className="text-white font-semibold text-sm mb-2 group-hover:text-[#22d3ee] transition-colors">
                                        {service.name}
                                      </h4>
                                      <p className="text-white/60 text-xs leading-relaxed line-clamp-3">
                                        {service.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>

                          {/* Footer CTA */}
                          <Link href={"/services"}>
                            <motion.button
                              whileHover="hover"
                              whileTap="tap"
                              className="pl-[30px] pr-1 py-1 bg-primary-5 font-Poppins text-neutral-5 rounded-[28px] font-medium text-base md:text-lg leading-5 cursor-pointer relative flex items-center gap-2.5 mt-8 mx-auto"
                            >
                              View All Services
                              <div className="bg-neutral-5 size-10 md:size-12 rounded-full flex items-center justify-center">
                                <Image
                                  src={ICONS.topRightArrow}
                                  alt=""
                                  className="size-6"
                                />
                              </div>
                            </motion.button>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <>
                  <Link href={nav.href || "#"}>
                    <motion.span
                      variants={linkVariants}
                      className="text-white leading-5 block cursor-pointer text-sm xl:text-base"
                    >
                      {nav.label}
                    </motion.span>
                  </Link>

                  {/* underline for normal links */}
                  <motion.div
                    variants={underlineVariants}
                    className="absolute bottom-0 left-0 h-0.5 bg-cyan-400 w-0"
                  />
                </>
              )}
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
