"use client";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import Counter from "@/components/Reusable/Counter/Counter";
import { motion } from "framer-motion";
import Container from "@/components/Shared/Container/Container";
import { useState } from "react";

const Results = () => {
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);

  const handleLeftTap = () => {
    setLeftActive(true);
    setTimeout(() => setLeftActive(false), 1000);
  };

  const handleRightTap = () => {
    setRightActive(true);
    setTimeout(() => setRightActive(false), 1000);
  };
  return (
    <Container>
      <div className="mt-20 xl:mt-40 relative">
        <Image
          src={IMAGES.globeCircle}
          alt="Globe circle"
          className="hidden md:block size-[114px] blur-[10px] absolute top-[500px] -left-60 z-10 pointer-events-none select-none animate-bounce"
        />

        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h1 className="font-MartianBThai text-white text-center lg:text-left text-2xl sm:text-3xl xl:text-[56px] font-semibold md:leading-10 xl:leading-[61px] max-w-[572px]">
            Real Results. Global Reach. Proven Trust
          </h1>
          <p className="text-neutral-300 text-center lg:text-left text-sm lg:text-lg leading-6 lg:leading-[30px] font-Poppins max-w-[580px] 2xl:max-w-[651px] mt-3">
            Attribution Booster delivers measurable growth through full-stack
            development, performance marketing, and analytics-driven strategies.
            With a global footprint and a client-first mindset
          </p>
        </div>

        {/* 1st row */}
        <div className="flex flex-col md:flex-row items-center gap-5 mt-10 lg:mt-[70px]">
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            onClick={handleLeftTap}
            onTouchStart={handleLeftTap}
            className="w-full md:w-[60%] h-[302px] 2xl:h-[440px] rounded-xl relative pointer-events-auto overflow-hidden hover:border hover:border-cyan-400/50 transition-all duration-300"
          >
            {/* Background Image */}
            <Image
              src={IMAGES.projects}
              alt=""
              className="w-full h-full rounded-xl object-cover pointer-events-none"
            />

            {/* Dark Overlay */}
            <div className="bg-neutral-5 opacity-40 w-full h-full rounded-xl absolute top-0 left-0 pointer-events-none"></div>

            {/* Shine Effect */}
            <div
              className={`absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 pointer-events-none ${
                leftActive ? "translate-x-full" : "-translate-x-full"
              }`}
            ></div>

            {/* Text Content */}
            <div className="absolute bottom-4 left-[30px] pointer-events-none">
              <h1 className="font-Poppins text-white text-4xl xl:text-[64px] font-semibold">
                <Counter from={0} to={1500} duration={3} startWhenVisible />+
              </h1>
              <p className="text-white text-xl mt-2 xl:mt-0">
                Project Complete
              </p>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            whileHover={{ y: -10 }}
            onClick={handleRightTap}
            onTouchStart={handleRightTap}
            className="bg-neutral-10 backdrop-blur-[15px] rounded-[10px] p-5 md:p-[30px] flex flex-col items-center justify-between border border-transparent cursor-pointer h-[302px] 2xl:h-[440px] w-full md:w-[40%] relative overflow-hidden hover:border hover:border-cyan-400/50 transition-all duration-300"
          >
            {/* Shine Effect */}
            <div
              className={`absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 rounded-[10px] pointer-events-none ${
                rightActive ? "translate-x-full" : "-translate-x-full"
              }`}
            ></div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full font-Poppins pointer-events-none">
              <div>
                <h1 className="text-white text-4xl xl:text-[64px] font-semibold">
                  <Counter from={0} to={25} duration={3} startWhenVisible />+
                </h1>
                <p className="text-white text-xl mt-2 xl:mt-0">
                  Years Of Experience
                </p>
              </div>

              <Image
                src={IMAGES.experience}
                alt=""
                className="w-[110px] lg:w-[180px] 2xl:w-[286px] h-[145px] 2xl:h-[232px] hidden lg:block pointer-events-none"
              />
            </div>

            <p className="text-neutral-300 text-sm 2xl:text-lg leading-6 2xl:leading-[30px] font-Poppins mt-5 md:mt-3 lg:mt-5 2xl:mt-0 pointer-events-none">
              Our deep industry knowledge drives innovative and reliable
              solutions. Trust our proven track record to deliver results that
              exceed expectations.
            </p>
          </motion.div>
        </div>

        {/* 2nd row */}
        <div className="flex flex-col md:flex-row items-center gap-5 mt-[30px]">
          {/* SERVICE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            onClick={handleLeftTap}
            onTouchStart={handleLeftTap}
            className="bg-neutral-10 backdrop-blur-[15px] rounded-[10px] p-[30px] flex flex-col items-center justify-center border border-transparent cursor-pointer h-[302px] 2xl:h-[440px] w-full md:w-[40%] relative overflow-hidden transition-all duration-300 hover:border hover:border-cyan-400/50"
          >
            <Image
              src={IMAGES.services}
              alt=""
              className="w-fit lg:w-[70%] 2xl:w-fit"
            />

            {/* Shine Effect */}
            <div
              className={`absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 rounded-[10px] pointer-events-none ${
                leftActive ? "translate-x-full" : "-translate-x-full"
              }`}
            ></div>
          </motion.div>

          {/* AWARD CARD */}
          <motion.div
            whileHover={{ y: -10 }}
            onClick={handleRightTap}
            onTouchStart={handleRightTap}
            className="w-full md:w-[60%] h-[302px] 2xl:h-[440px] rounded-xl relative overflow-hidden cursor-pointer transition-all duration-300 hover:border hover:border-cyan-400/50"
          >
            <Image
              src={IMAGES.awards}
              alt=""
              className="w-full h-full rounded-xl object-cover"
            />
            <div className="bg-neutral-5 opacity-40 w-full h-full rounded-xl absolute top-0 left-0"></div>

            {/* Shine Effect */}
            <div
              className={`absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 rounded-[10px] pointer-events-none ${
                rightActive ? "translate-x-full" : "-translate-x-full"
              }`}
            ></div>

            {/* Counter and Text */}
            <div className="absolute bottom-4 left-[30px]">
              <h1 className="font-Poppins text-white text-4xl xl:text-[64px] font-semibold leading-[70px]">
                <Counter from={0} to={24} duration={3} startWhenVisible />+
              </h1>
              <p className="text-white text-xl font-Poppins">Award Wining</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Results;
