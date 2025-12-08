/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import { FaPlay, FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Container from "../Shared/Container/Container";

// Testimonial data type
interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  videoThumbnail: string;
  videoUrl: string;
  rating: number;
  quote: string;
  duration: string;
}

// Mock data - replace with your actual data
const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp Inc.",
    videoThumbnail: "/api/placeholder/400/250",
    videoUrl: "#",
    rating: 5,
    quote:
      "This platform transformed our marketing strategy and increased our ROI by 300% in just 3 months!",
    duration: "2:30",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CEO",
    company: "StartUp Ventures",
    videoThumbnail: "/api/placeholder/400/250",
    videoUrl: "#",
    rating: 5,
    quote:
      "The analytics and insights provided helped us make data-driven decisions that skyrocketed our growth.",
    duration: "1:45",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "Innovate Labs",
    videoThumbnail: "/api/placeholder/400/250",
    videoUrl: "#",
    rating: 4,
    quote:
      "Outstanding customer support and cutting-edge features. Our team couldn't be happier with the results.",
    duration: "3:15",
  },
  {
    id: "4",
    name: "David Thompson",
    role: "CTO",
    company: "Digital Solutions",
    videoThumbnail: "/api/placeholder/400/250",
    videoUrl: "#",
    rating: 5,
    quote:
      "The platform's scalability and reliability have been crucial for our expanding business needs.",
    duration: "2:10",
  },
  {
    id: "5",
    name: "Lisa Wang",
    role: "Head of Operations",
    company: "Global Enterprises",
    videoThumbnail: "/api/placeholder/400/250",
    videoUrl: "#",
    rating: 5,
    quote:
      "Implementation was seamless and the results were immediate. Highly recommended for any business!",
    duration: "4:05",
  },
  {
    id: "6",
    name: "Alex Martinez",
    role: "Digital Strategist",
    company: "Creative Minds",
    videoThumbnail: "/api/placeholder/400/250",
    videoUrl: "#",
    rating: 4,
    quote:
      "The intuitive interface and powerful features make this an essential tool for modern marketers.",
    duration: "2:50",
  },
];

const VideoTestimonial = () => {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: any = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const hoverVariants: any = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        size={16}
        className={
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
        }
      />
    ));
  };

  return (
    <Container>
      <div className="mt-10 lg:mt-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#07f4fa]/10 border border-[#07f4fa]/20 text-[#07f4fa] text-sm mb-4">
            <FaQuoteLeft size={16} />
            <span>What Our Clients Say</span>
          </div>
          <h2 className="font-MartianBThai text-white text-center text-2xl sm:text-3xl xl:text-[56px] font-semibold md:leading-10 xl:leading-[61px] max-w-[780px] mx-auto">
            Video Testimonials
          </h2>
          <p className="text-neutral-300 text-center text-sm lg:text-lg leading-6 lg:leading-[30px] max-w-[410px] font-Poppins mx-auto mt-5">
            Hear directly from our satisfied clients about their experiences and
            success stories.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover="hover"
              className="group cursor-pointer"
            >
              <motion.div
                variants={hoverVariants}
                className="bg-neutral-10 border border-neutral-30 rounded-2xl p-6 h-full flex flex-col overflow-hidden backdrop-blur-sm"
              >
                {/* Video Thumbnail */}
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <div className="aspect-video bg-neutral-15 rounded-xl flex items-center justify-center">
                    {/* Replace with actual thumbnail image */}
                    <div className="w-full h-full bg-linear-to-br from-[#07f4fa]/10 to-[#07f4fa]/5 flex items-center justify-center">
                      <div className="relative">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 bg-[#07f4fa] rounded-full flex items-center justify-center shadow-lg shadow-[#07f4fa]/25"
                        >
                          <FaPlay size={24} className="text-neutral-5 ml-1" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 rounded-full text-xs text-white">
                    {testimonial.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-neutral-20 text-sm leading-relaxed mb-4 line-clamp-3">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="mt-auto pt-4 border-t border-neutral-30">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-white text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-neutral-40 text-xs">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>

                      {/* Play Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-[#07f4fa] rounded-full flex items-center justify-center shadow-lg shadow-[#07f4fa]/25"
                      >
                        <FaPlay size={16} className="text-neutral-5 ml-0.5" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-[#07f4fa]/0 via-[#07f4fa]/5 to-[#07f4fa]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
};

export default VideoTestimonial;
