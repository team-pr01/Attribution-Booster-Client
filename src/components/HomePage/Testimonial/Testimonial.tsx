"use client";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Thompson",
    title: "CEO of BlueBloom",
    feedback:
      "Working with this team was an absolute pleasure! They helped us scale our online presence and boost sales significantly.",
  },
  {
    name: "Michael Lee",
    title: "Founder of NovaTech",
    feedback:
      "Their innovative solutions and dedication truly impressed us. We’ve found a long-term partner for our digital needs.",
  },
  {
    name: "Emma Johnson",
    title: "Marketing Director, AdSpark",
    feedback:
      "Excellent communication and execution. They delivered beyond expectations and helped our brand grow faster.",
  },
  {
    name: "David Martinez",
    title: "COO, GreenWorks",
    feedback:
      "We experienced top-tier professionalism and creativity. Their work quality speaks for itself!",
  },
];

const Testimonial = () => {
  return (
    <div className="max-w-[1800px] mx-auto rounded-[20px] relative mt-28 2xl:mt-44">
      {/* Wrapper with relative positioning */}
      <div className="relative rounded-[20px] bg-[rgba(255,255,255,0.02)] border border-gray-700 backdrop-blur-[15px] py-5 lg:py-10 2xl:py-20 px-5 lg:px-10 2xl:px-[135px] overflow-hidden">
        {/* Globe placed behind everything */}
        <div
          className="absolute bottom-10 2xl:bottom-28 left-1/2 transform -translate-x-1/2 pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <Image
            src={IMAGES.offerGlobe}
            alt="Decorative Globe"
            className="w-[114px] opacity-80 blur-[2px] animate-spin"
          />
        </div>

        {/* Background circles */}
        <Image
          src={IMAGES.circle}
          alt="circle background"
          className="w-[643px] h-[664px] hidden 2xl:block absolute -top-64 -left-56 opacity-[0.06] z-1"
        />
        <Image
          src={IMAGES.circle}
          alt="circle background"
          className="w-[643px] h-[664px] absolute -top-64 -right-56 opacity-[0.06] z-1"
        />

        {/* Header section */}
        <div className="relative z-5 flex flex-col lg:flex-row items-center justify-between mb-16">
          <h1 className="font-MartianBThai text-white text-2xl sm:text-3xl xl:text-[56px] font-semibold leading-10 xl:leading-[61px] max-w-[727px]">
            Trusted by Clients Around the World
          </h1>
          <p className="text-neutral-300 text-sm lg:text-lg leading-6 lg:leading-[30px] font-Poppins max-w-[520px]">
            Hear from real clients who rely on our digital solutions,
            development expertise, and marketing strategies to grow and protect
            their businesses.
          </p>
        </div>

        {/* Swiper for testimonial cards */}
        <div className="relative z-10">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={2}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            className="pb-16!"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-neutral-10/60 backdrop-blur-[20px] rounded-[10px] px-5 py-[30px] flex flex-col relative border border-gray-600 cursor-pointer h-full">
                 {/* Ratings */}
                    <div className="lg:hidden flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-500 size-5" />
                      ))}
                    </div>
                  <p className="text-white text-lg leading-[30px] font-Poppins">
                    {item.feedback}
                  </p>

                  <div className="flex items-center justify-between mt-12">
                    {/* Reviewer */}
                    <div className="flex items-center gap-4">
                      <div className="size-14 lg:size-20 rounded-full bg-neutral-10 backdrop-blur-[15px] p-2 flex items-center justify-center">
                        <Image
                          src={IMAGES.dummyAvatar}
                          alt={item.name}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h1 className="font-MartianBThai text-white text-xl lg:text-2xl font-semibold">
                          {item.name}
                        </h1>
                        <p className="text-neutral-20 text-sm lg:text-base font-Poppins">
                          {item.title}
                        </p>
                      </div>
                    </div>

                    {/* Ratings */}
                    <div className="hidden lg:flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-500 size-5" />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom pagination dots */}
        <style jsx global>{`
          .swiper-pagination-bullet {
            background: #07f4fa !important;
            opacity: 0.4;
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
            transform: scale(1.2);
          }
        `}</style>
      </div>
    </div>
  );
};

export default Testimonial;
