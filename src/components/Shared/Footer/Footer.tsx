"use client";
import Image from "next/image";
import Link from "next/link";
import { ICONS, IMAGES } from "../../../../public/assets";
import { motion } from "framer-motion";
import Container from "../Container/Container";
import { FaStar } from "react-icons/fa";
import { servicesData } from "@/components/HomePage/Services/Services";

const Footer = () => {
  const contactInfo = [
    {
      icon: IMAGES.phone,
      title: "Phone Number",
      description: "+447848145804",
      link: "tel:+447848145804",
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
      description:
        "Suite A, 82 James Carter Road, Mildenhall, Bury St. Edmunds, United Kingdom, IP28 7DE",
      link: "#",
    },
  ];

  const servicesLinks = servicesData.map((service) => ({
    title: service.name,
    link: `/services/${service.slug}`,
  }));

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
      link: "/privacy-policy",
    },
    // {
    //   title: "Cookies Policy",
    //   link: "/",
    // },
    // {
    //   title: "Terms & Agreement",
    //   link: "/",
    // },
  ];

  const socialMediaLinks = [
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/company/attribution-booster/about/",
      icon: ICONS.linkedin,
      iconSize: "size-[30px]",
    },
    {
      title: "Facebook",
      link: "https://www.facebook.com/attributioinbooster",
      icon: ICONS.facebook,
      iconSize: "size-6",
    },
    {
      title: "YouTube",
      link: "https://www.youtube.com/@attributionbooster",
      icon: ICONS.youtube,
      iconSize: "size-6",
    },
    {
      title: "Pinterest",
      link: "https://www.pinterest.com/attributionbooster/",
      icon: ICONS.pinterest,
      iconSize: "size-[20px]",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/attribution_booster/",
      icon: ICONS.instagram,
      iconSize: "size-[22px]",
    },
  ];
  return (
    <div className="bg-neutral-15 py-10 2xl:py-16 mt-32">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-10 2xl:gap-0">
          {/* Company info + Contact details */}
          <div>
            <Link href={"/"}>
              <Image
                src={IMAGES.logo}
                alt="Logo"
                className="w-40 md:w-[200px] 2xl:w-[290px] relative"
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
                      className="text-sm lg:text-base text-neutral-300 font-Poppins hover:text-cyan-400 transition-colors duration-200 block"
                    >
                      {item.description}
                    </a>
                  ) : (
                    <p className="text-sm lg:text-base text-neutral-300 font-Poppins max-w-[400px]">
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
                {servicesLinks?.slice(0, 6)?.map((item) => (
                  <Link
                    key={item?.title}
                    href={item?.link}
                    className="text-sm lg:text-base text-neutral-300 font-Poppins w-full  hover:underline"
                  >
                    {item?.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-5">
                {servicesLinks?.slice(6, 11)?.map((item) => (
                  <Link
                    key={item?.title}
                    href={item?.link}
                    className="text-sm lg:text-base text-neutral-300 font-Poppins w-full hover:underline"
                  >
                    {item?.title}
                  </Link>
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
            <h2 className="text-lg font-medium text-white font-Poppins leading-2">
              Social media:
            </h2>
            <div className="flex items-center gap-5">
              {socialMediaLinks?.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="size-13 rounded-full bg-neutral-10 hover:bg-primary-5/20 transition-all duration-300 backdrop-blur-[15px] p-2 flex items-center justify-center text-white text-xl hover:-translate-y-1"
                >
                  <Image
                    src={item?.icon}
                    alt={item?.title}
                    className={item.iconSize}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Google Partner Badge */}
          <motion.a
            className="border-l-4 border-cyan-400 rounded-lg px-5"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            href={"https://www.google.com/partners/agency?id=6137804524"}
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

          {/* Glassdoor Review */}
          <motion.div
            className="bg-gray-800/40 rounded-xl p-4 border border-gray-600/50 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Shine Border Effect */}
            <div className="shine-border absolute inset-0 rounded-xl pointer-events-none"></div>

            <div className="flex justify-between items-start relative z-10">
              {/* Left side - Clutch logo and rating */}
              <div className="flex flex-col">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">C</span>
                  </div>
                  <div className="flex text-cyan-400 text-sm">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 text-sm font-medium">50 review</p>
              </div>

              {/* Right side - Glassdoor */}
              <div className="flex flex-col items-end">
                <span className="text-green-400 font-bold text-lg mb-2">
                  glassdoor
                </span>
                <div className="flex items-center space-x-1">
                  <span className="text-green-400 font-bold text-lg">4.9</span>
                  <div className="flex text-green-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <hr className="border border-neutral-10 h-px mt-[60px]" />

      {/* Copyright */}
      <Container>
        <div className="flex flex-col lg:flex-row items-start md:items-center lg:items-start justify-between gap-7 lg:gap-0 mt-10">
          <p className="text-sm lg:text-base text-neutral-300 font-Poppins text-start md:text-center lg:text-start">
            © 2025 Attribution Booster | All Rights Reserved | Serving clients
            since 2017
          </p>

          {/* Resources */}
          <div className="flex flex-col sm:flex-row items-start lg:items-center gap-5">
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
      </Container>
    </div>
  );
};

export default Footer;
