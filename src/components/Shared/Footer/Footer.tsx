"use client"
import Image from "next/image";
import Link from "next/link";
import { ICONS, IMAGES } from "../../../../public/assets";
import {
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoPinterest,
} from "react-icons/io";
import { motion } from 'framer-motion';

const Footer = () => {
  const contactInfo = [
    {
      icon: IMAGES.phone,
      title: "Phone Number",
      description: "+8801812526073",
      link: "tel:+8801812526073",
    },
    {
      icon: IMAGES.email,
      title: "Email Address",
      description: "info@attributionbooster.com",
      link: "mailto:info@attributionbooster.com",
    },
    {
      icon: IMAGES.location,
      title: "Location",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      link: "#",
    },
  ];

  const services = [
    "Full Stack Web Development",
    "WordPress",
    "Shopify",
    "Webflow",
    "Mobile App Development",
    "Video Editing",
    "Analytics and Conversion Tracking",
    "PPC Advertising",
    "Google Ads",
    "Social Media Marketing",
    "Graphics Design",
  ];

  const companyLinks = [
    {
      title: "About Us",
      link: "/",
    },
    {
      title: "Portfolio/Our Work",
      link: "/",
    },
    {
      title: "Our Team",
      link: "/",
    },
    {
      title: "Career",
      link: "/",
    },
    {
      title: "Blog",
      link: "/",
    },
    {
      title: "Contact Us",
      link: "/",
    },
  ];

  const companyLegalLinks = [
    {
      title: "Privacy Policy",
      link: "/",
    },
    {
      title: "Cookies Policy",
      link: "/",
    },
    {
      title: "Terms & Agreement",
      link: "/",
    },
  ];

  const socialMediaLinks = [
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com",
      icon: <IoLogoLinkedin className="text-[#368dff]" />,
    },
    {
      title: "Facebook",
      link: "https://www.facebook.com",
      icon: <IoLogoFacebook className="text-[#368dff]" />,
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com",
      icon: <IoLogoInstagram className="text-[#f95c90]" />,
    },
    {
      title: "YouTube",
      link: "https://www.youtube.com",
      icon: <IoLogoYoutube className="text-[#ff3232]" />,
    },
    {
      title: "Pinterest",
      link: "https://www.pinterest.com",
      icon: <IoLogoPinterest className="text-[#ff2b4a]" />,
    },
  ];
  return (
    <div className="bg-neutral-15 py-5 lg:py-10 2xl:py-16 mt-32">
      <div className="max-w-[1531px] mx-auto px-5 2xl:px-0">
        <div className="flex flex-col lg:flex-row justify-between gap-10 2xl:gap-0">
          {/* Company info + Contact details */}
          <div>
            <Link href={"/"}>
              <Image
                src={IMAGES.logo}
                alt="Logo"
                className="w-fit lg:w-[219px] h-[70px] relative"
              />
            </Link>
            <p className="text-neutral-300 mt-4 text-sm lg:text-base font-Poppins max-w-[436px]">
              Welcome to our Best Digital Analytics Agency, where innovation
              meets results! Our team specializes in crafting bespoke
              advertising strategies tailored
            </p>

            <div className="flex flex-col gap-3.5 mt-5 2xl:mt-[30px]">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3.5 cursor-pointer"
                >
                  <div className="size-10 rounded-full bg-neutral-10 backdrop-blur-[15px] p-2 flex items-center justify-center text-white text-2xl">
                    <Image src={item.icon} alt={item.title} className="w-8" />
                  </div>
                  {item.link && item.link !== "#" ? (
                    <a
                      href={item.link}
                      className="text-sm lg:text-base text-neutral-300 font-Poppins mt-2 hover:text-cyan-400 transition-colors duration-200 block"
                    >
                      {item.description}
                    </a>
                  ) : (
                    <p className="text-sm lg:text-base text-neutral-300 font-Poppins mt-2">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-medium text-white font-Poppins">
              Services
            </h2>
            <div className="flex flex-col md:flex-row gap-7 lg:gap-24 justify-between mt-5 2xl:mt-[30px]">
              <div className="flex flex-col gap-5">
                {services?.slice(0, 6)?.map((item) => (
                  <p
                    key={item}
                    className="text-sm lg:text-lg text-neutral-300 font-Poppins max-w-[143px]"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-5">
                {services?.slice(6, 11)?.map((item) => (
                  <p
                    key={item}
                    className="text-sm lg:text-lg text-neutral-300 font-Poppins max-w-[234px]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h2 className="text-2xl font-medium text-white font-Poppins">
              Company
            </h2>
            <div className="flex flex-col gap-5 mt-5 2xl:mt-[30px]">
              {companyLinks?.map((item) => (
                <a
                  key={item?.title}
                  href={item?.link}
                  className="text-sm lg:text-base text-neutral-300 font-Poppins hover:text-primary-5 hover:underline transition duration-300"
                >
                  {item?.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-7 lg:gap-0 mt-[60px]">
          <div className="space-y-5">
            <h2 className="text-lg font-medium text-white font-Poppins">
              Social media:
            </h2>
            <div className="flex items-center gap-5">
              {socialMediaLinks?.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="size-10 rounded-full bg-neutral-10 backdrop-blur-[15px] p-2 flex items-center justify-center text-white text-xl"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Google Partner Badge */}
          <motion.a
            className="border-l-4 border-cyan-400 rounded-lg px-5"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            href={'https://www.google.com/partners/agency?id=6137804524'}
            target="_blank"
          >
            <div className="flex items-center space-x-2 rounded-lg w-fit mt-3 cursor-pointer">
              <div className="text-sm font-bold">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </div>
            </div>
            <div className="text-white text-2xl font-medium mt-1">Partner</div>
          </motion.a>

          <Image src={ICONS.glassdoorReview} alt="" className="" />
        </div>
      </div>

      <hr className="border border-neutral-10 h-px mt-[60px]" />

      {/* Copyright */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-7 lg:gap-0 mt-10 max-w-[1531px] mx-auto px-5 2xl:px-0">
        <p className="text-sm lg:text-base text-neutral-300 font-Poppins">
          © 2025 Attribution Booster | All Rights Reserved | Serving clients
          since 2017
        </p>

        {/* Resources */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
          {companyLegalLinks?.map((item) => (
            <a
              key={item?.title}
              href={item?.link}
              className="text-sm lg:text-base text-neutral-300 font-Poppins hover:text-primary-5 hover:underline transition duration-300"
            >
              {item?.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
