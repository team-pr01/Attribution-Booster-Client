import Image from "next/image";
import { IMAGES } from "../../../../public/assets";

const Results = () => {
  return (
    <div className="max-w-[1531px] mx-auto mt-[130px] relative">
      <Image
        src={IMAGES.globeCircle}
        alt="Globe circle"
        className="hidden md:block size-[114px] blur-[10px] absolute top-[500px] -left-60 z-10 pointer-events-none select-none"
      />

      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h1 className="font-MartianBThai text-white text-[56px] font-semibold leading-[61px] max-w-[572px]">
          Real Results. Global Reach. Proven Trust
        </h1>
        <p className="text-white text-lg leading-[30px] max-w-[651px] font-Poppins">
          Attribution Booster delivers measurable growth through full-stack
          development, performance marketing, and analytics-driven strategies.
          With a global footprint and a client-first mindset
        </p>
      </div>

      {/* 1st row */}
      <div className="flex items-center gap-5 mt-[70px]">
        <div className="w-[60%] h-[440px] rounded-xl relative">
          <Image
            src={IMAGES.projects}
            alt=""
            className="w-full h-full rounded-xl object-cover"
          />
          <div className="absolute bottom-4 left-[30px]">
            <h1 className="font-Poppins text-white text-[64px] font-semibold leading-[70px]">
              1,500+
            </h1>
            <p className="text-white text-xl">Project Complete</p>
          </div>
        </div>

        <div className="bg-neutral-10 backdrop-blur-[15px] rounded-[10px] p-[30px] flex flex-col items-center justify-between border border-transparent cursor-pointer h-[440px] w-[40%]">
          <div className="flex justify-between w-full">
            <div>
              <h1 className="font-Poppins text-white text-[64px] font-semibold">
                25+
              </h1>
              <p className="text-white text-xl">Years Of Experience</p>
            </div>
            <Image
              src={IMAGES.experience}
              alt=""
              className="w-[286px] h-[232px]"
            />
          </div>
          <p className="text-white text-lg leading-[30px]">
            Our deep industry knowledge drives innovative and reliable
            solutions. Trust our proven track record to deliver results that
            exceed expectations.
          </p>
        </div>
      </div>

      {/* 2nd row */}
      <div className="flex items-center gap-5 mt-[30px]">
        <div className="bg-neutral-10 backdrop-blur-[15px] rounded-[10px] p-[30px] flex flex-col items-center justify-center border border-transparent cursor-pointer h-[440px] w-[40%]">
          <Image src={IMAGES.services} alt="" className="" />
        </div>

        <div className="w-[60%] h-[440px] rounded-xl relative">
          <Image
            src={IMAGES.awards}
            alt=""
            className="w-full h-full rounded-xl object-cover"
          />
          <div className="absolute bottom-4 left-[30px]">
            <h1 className="font-Poppins text-white text-[64px] font-semibold leading-[70px]">
              24+
            </h1>
            <p className="text-white text-xl">Award Wining</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
