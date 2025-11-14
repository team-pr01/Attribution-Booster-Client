/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import CustomDropdown from "@/components/Reusable/CustomDropdown/CustomDropdown";
import Container from "@/components/Shared/Container/Container";

// Reusable TextInput Component
const TextInput = ({
  type = "text",
  placeholder = "",
  register,
  name,
  required = false,
  disabled = false,
}: {
  type?: string;
  placeholder?: string;
  register: any;
  name: string;
  required?: boolean;
  disabled?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name, { required })}
        className="w-full px-4 py-3 bg-neutral-10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      />
    </div>
  );
};

const ContactUs = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [selectedServiceValue, setSelectedServiceValue] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    // Handle form submission here
  };

const contactInfo = [
  {
    icon: IMAGES.location,
    title: "Location",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    link: "#",
  },
  {
    icon: IMAGES.email,
    title: "Email Address",
    description: "info@attributionbooster.com",
    link: "mailto:info@attributionbooster.com",
  },
  {
    icon: IMAGES.phone,
    title: "Phone Number",
    description: "+8801725896489 , 01866545648",
    link: "tel:+8801725896489",
  },
  {
    icon: IMAGES.workingHours,
    title: "Working Hours",
    description: "Sunday - Monday (10 am - 05 pm)",
    link: "#",
  },
];

  const services = [
    "PPC Advertising",
    "Analytics and Conversion Tracking",
    "Social Media Marketing",
    "SEO",
    "Cyber Security",
    "Web Development",
    "Video Editing",
    "App Development",
    "CMS Web Development",
    "UI/UX Design",
    "Google Ads",
    "Graphics Design",
  ];

  // Animation variants
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const formVariants: any = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  return (
    <Container>
      <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mt-[130px]"
    >
      <div>
        <div className="flex flex-col lg:flex-row gap-10 w-full">
          {/* Left side details */}
          <div className="w-full lg:w-1/2">
            <div>
              <motion.h2
                variants={itemVariants}
                className="font-MartianBThai text-white text-2xl sm:text-3xl xl:text-[56px] font-semibold leading-10 xl:leading-[61px] max-w-[619px]"
              >
                Contact Us
              </motion.h2>

              <motion.p
                variants={itemVariants}
                transition={{ delay: 0.1 }}
                className="text-neutral-300 text-sm lg:text-lg leading-6 lg:leading-[30px] font-Poppins max-w-[664px] mt-4 lg:mt-0"
              >
                Get in touch with us today! We're always happy to set up a time
                for us to talk about your digital marketing goals.
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-[30px] mt-[60px] "
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="border-b border-neutral-30 pb-6 flex items-center gap-5 cursor-pointer"
                >
                  <motion.div
                    className="size-[60px] rounded-full bg-neutral-10 backdrop-blur-[15px] p-2 flex items-center justify-center text-white text-2xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image src={item.icon} alt={item.title} className="w-8" />
                  </motion.div>
                  <div>
                    <h2 className="text-white text-xl font-semibold font-MartianBThai">
                      {item.title}
                    </h2>
                    {item.link && item.link !== "#" ? (
                      <a
                        href={item.link}
                        className="text-sm lg:text-lg text-neutral-300 font-Poppins mt-2 hover:text-cyan-400 transition-colors duration-200 block"
                      >
                        {item.description}
                      </a>
                    ) : (
                      <p className="text-sm lg:text-lg text-neutral-300 font-Poppins mt-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            variants={formVariants}
            className="relative rounded-[20px] bg-[rgba(255,255,255,0.02)] border border-gray-700 backdrop-blur-[15px] p-5 lg:p-8 overflow-hidden w-full lg:w-1/2"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <h1 className="font-MartianBThai text-white text-xl lg:text-[28px] leading-[35px] font-semibold mb-6">
                I am looking for
              </h1>

              {/* Service Selection */}
              <CustomDropdown
                options={services}
                value={selectedServiceValue}
                onChange={setSelectedServiceValue}
                placeholder="Choose a service..."
                required
              />

              {errors.service && (
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm"
                >
                  Service is required
                </motion.span>
              )}

              {/* Other fields - disabled until service is selected */}
              <TextInput
                placeholder="Enter your full name"
                register={register}
                name="name"
                required
                disabled={!selectedServiceValue}
              />

              <TextInput
                type="tel"
                placeholder="Enter your WhatsApp number"
                register={register}
                name="whatsapp"
                required
                disabled={!selectedServiceValue}
              />

              <TextInput
                type="email"
                placeholder="Enter your email address"
                register={register}
                name="email"
                required
                disabled={!selectedServiceValue}
              />

              <TextInput
                type="url"
                placeholder="Enter your company website (Optional)"
                register={register}
                name="website"
                disabled={!selectedServiceValue}
              />

              {/* Project Description */}
              <div className="flex flex-col">
                <textarea
                  placeholder="Describe your project requirements..."
                  {...register("projectDetails")}
                  disabled={!selectedServiceValue}
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <motion.button
                disabled={!selectedServiceValue}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pl-3 lg:pl-[30px] pr-1 py-1 bg-primary-5 font-Poppins text-neutral-5 rounded-[28px] font-medium text-base md:text-lg leading-5 cursor-pointer relative flex items-center gap-2.5"
              >
                Request Free Consultancy
                <div className="bg-neutral-5 size-10 md:size-12 rounded-full flex items-center justify-center">
                  <Image src={ICONS.topRightArrow} alt="" className="size-6" />
                </div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
    </Container>
  );
};

export default ContactUs;
