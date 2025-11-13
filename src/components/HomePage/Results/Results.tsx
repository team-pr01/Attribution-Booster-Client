import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import Counter from "@/components/Reusable/Counter/Counter";

const Results = () => {
  return (
    <div className="max-w-[1531px] mx-auto mt-20 2xl:mt-[130px] relative px-5 2xl:px-0">
      <Image
        src={IMAGES.globeCircle}
        alt="Globe circle"
        className="hidden md:block size-[114px] blur-[10px] absolute top-[500px] -left-60 z-10 pointer-events-none select-none animate-bounce"
      />

      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h1 className="font-MartianBThai text-white text-2xl sm:text-3xl xl:text-[56px] font-semibold leading-10 xl:leading-[61px] max-w-[572px]">
          Real Results. Global Reach. Proven Trust
        </h1>
        <p className="text-neutral-300 text-sm lg:text-lg leading-6 lg:leading-[30px] font-Poppins max-w-[651px]">
          Attribution Booster delivers measurable growth through full-stack
          development, performance marketing, and analytics-driven strategies.
          With a global footprint and a client-first mindset
        </p>
      </div>

      {/* 1st row */}
      <div className="flex flex-col md:flex-row items-center gap-5 mt-10 lg:mt-[70px]">
        <div className="w-full md:w-[60%] h-[302px] md:h-[440px] rounded-xl relative">
          <Image
            src={IMAGES.projects}
            alt=""
            className="w-full h-full rounded-xl object-cover"
          />
          <div className="absolute bottom-4 left-[30px]">
            <h1 className="font-Poppins text-white text-[64px] font-semibold leading-[70px]">
              <Counter from={0} to={1500} duration={3} />+
            </h1>
            <p className="text-white text-xl">Project Complete</p>
          </div>
        </div>

        <div className="bg-neutral-10 backdrop-blur-[15px] rounded-[10px] p-5 md:p-[30px] flex flex-col items-center justify-between border border-transparent cursor-pointer h-[302px] md:h-[440px] w-full md:w-[40%]">
          <div className="flex flex-col lg:flex-row justify-between w-full font-Poppins">
            <div>
              <h1 className=" text-white text-[64px] font-semibold">
                <Counter from={0} to={25} duration={3} />+
              </h1>
              <p className="text-white text-xl">Years Of Experience</p>
            </div>
            <Image
              src={IMAGES.experience}
              alt=""
              className="w-[110px] lg:w-[286px] h-[145px] lg:h-[232px] hidden md:block"
            />
          </div>
          <p className="text-neutral-300 text-sm lg:text-lg leading-6 lg:leading-[30px] font-Poppins mt-5 md:mt-3 lg:mt-0">
            Our deep industry knowledge drives innovative and reliable
            solutions. Trust our proven track record to deliver results that
            exceed expectations.
          </p>
        </div>
      </div>

      {/* 2nd row */}
      <div className="flex flex-col md:flex-row items-center gap-5 mt-[30px]">
        <div className="bg-neutral-10 backdrop-blur-[15px] rounded-[10px] p-[30px] flex flex-col items-center justify-center border border-transparent cursor-pointer h-[302px] md:h-[440px] w-full md:w-[40%]">
          <Image src={IMAGES.services} alt="" className="" />
        </div>

        <div className="w-full md:w-[60%] h-[302px] md:h-[440px] rounded-xl relative">
          <Image
            src={IMAGES.awards}
            alt=""
            className="w-full h-full rounded-xl object-cover"
          />
          <div className="absolute bottom-4 left-[30px]">
            <h1 className="font-Poppins text-white text-[64px] font-semibold leading-[70px]">
              <Counter from={0} to={24} duration={3} />+
            </h1>
            <p className="text-white text-xl font-Poppins">Award Wining</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
