import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";
import Navbar from "@/components/Shared/Navbar/Navbar";

const Hero = () => {
  return (
    <div className="max-w-[1800px] h-[1030px] mx-auto py-10">
      <div className="rounded-[20px]  bg-[rgba(255,255,255,0.02)] border border-gray-700 backdrop-blur-[15px] relative overflow-hidden">
        <div className="absolute w-full top-[30px] z-9999">
          <Navbar />
        </div>
        {/* Top globes */}
        <div className="flex items-center justify-between max-w-[1000px] absolute left-[450px] top-48 w-full">
          <Image src={IMAGES.globeCircle} alt="" className="size-12" />
          <Image src={IMAGES.globeCircle} alt="" className="size-9 blur-[10px]" />
        </div>
        <Image
          src={IMAGES.heroBg}
          alt=""
          className="opacity-[0.02] w-full max-h-[1125px]"
        />
        <Image
          src={IMAGES.circle}
          alt=""
          className="w-[643px] h-[664px] absolute -top-64 -right-56 opacity-[0.30] z-999"
        />
        {/* <Image
          src={IMAGES.heroRightGradient}
          alt=""
          className="w-[643px] h-[664px] absolute -top-64 -right-56 z-999"
        /> */}
        <Image
          src={IMAGES.circle}
          alt=""
          className="w-[643px] h-[664px] absolute -top-64 -left-56 opacity-[0.30] z-999"
        />
        <Image
          src={IMAGES.heroLeftGradient}
          alt=""
          className="w-[643px] h-[664px] absolute -top-64 -left-56 z-999"
        />
        <Image
          src={IMAGES.heroMiddleGradient}
          alt=""
          className="w-[643px] h-[664px] absolute top-32 left-1/3 z-999 opacity-30"
        />

        <div className="absolute top-56 w-full flex flex-col items-center justify-center">
          <h1 className="font-MartianBThai text-white text-[90px] font-semibold leading-[99px] max-w-[984px] text-center">
            Built to Scale. Optimized for Growth.
          </h1>
          <p className="text-white text-lg text-center leading-[30px] max-w-[760px] mt-5">
            Attribution Booster helps you scale smarter with full-stack web
            development, precision analytics, performance-driven ads, and
            conversion-first design.
          </p>
          <button className="pl-[30px] pr-1 py-1 bg-primary-5 font-Poppins text-neutral-5 rounded-[28px] font-medium text-lg leading-5 cursor-pointer relative flex items-center gap-2.5 mt-11">
            Explore Our Services
            <div className="bg-neutral-5 size-12 rounded-full flex items-center justify-center">
              <Image src={ICONS.topRightArrow} alt="" className="size-6" />
            </div>
          </button>

          {/* Rotate cards */}
          <div className="flex justify-between w-full max-w-[1500px] absolute top-[300px]">
            {/* Happy Clients Card (rotate left) */}
            <div className="relative rounded-[10px] p-px bg-linear-to-r from-gray-300/50 via-transparent to-gray-600 -rotate-30 hover:-rotate-[4deg] transition-transform duration-500">
              <div className="rounded-[10px] bg-neutral-5 backdrop-blur-[15px]">
                <div className="flex items-center justify-between gap-[30px] px-5 py-3">
                  <Image
                    src={IMAGES.happyClients}
                    alt=""
                    className="w-[77px] h-[82px]"
                  />
                  <div>
                    <h1 className="font-Poppins text-white text-[52px] font-semibold leading-[57px] text-center">
                      200+
                    </h1>
                    <p className="text-white text-lg text-center leading-[30px]">
                      Happy Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Completed Card (rotate right) */}
            <div className="relative rounded-[10px] p-px bg-linear-to-r from-gray-300/50 via-transparent to-gray-600 rotate-30 hover:rotate-[4deg] transition-transform duration-500">
              <div className="rounded-[10px] bg-neutral-5 backdrop-blur-[15px]">
                <div className="flex items-center justify-between gap-[30px] px-5 py-3">
                  <Image
                    src={IMAGES.projectCompleted}
                    alt=""
                    className="w-[77px] h-[82px]"
                  />
                  <div>
                    <h1 className="font-Poppins text-white text-[52px] font-semibold leading-[57px] text-center">
                      1500+
                    </h1>
                    <p className="text-white text-lg text-center leading-[30px]">
                      Project Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* Bottom globes */}
          <div className="flex items-center justify-between max-w-[1300px] absolute top-[600px] w-full">
            <Image
              src={IMAGES.globeCircle}
              alt=""
              className="size-16 blur-[10px]"
            />
            <Image
              src={IMAGES.globeCircle}
              alt=""
              className="size-16 blur-[10px]"
            />
          </div>
        </div>
        <Image
          src={IMAGES.heroImg}
          alt=""
          className="absolute bottom-0 mx-auto flex justify-self-center z-50"
        />
      </div>
    </div>
  );
};

export default Hero;
