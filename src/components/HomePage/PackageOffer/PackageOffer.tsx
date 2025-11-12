import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";

const PackageOffer = () => {
  return (
    <div className="max-w-[1800px] mx-auto rounded-[20px] relative mt-28 2xl:mt-44 px-5 2xl:px-0">
      {/* Card container */}
      <div className="relative rounded-[20px] bg-[rgba(255,255,255,0.02)] border border-gray-700 backdrop-blur-[15px] py-5 lg:py-10 xl:py-20 lg:px-10 px-4 2xl:px-[135px] overflow-hidden">
        {/* Faint background circle */}
        <Image
          src={IMAGES.circle}
          alt=""
          className="w-[643px] h-[664px] absolute -top-64 -left-56 opacity-[0.06] z-0"
        />

        {/* <Image
          src={IMAGES.circle}
          alt=""
          className="w-[643px] h-[664px] absolute -bottom-64 -right-56 opacity-[0.06] z-999"
        /> */}

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-10 xl:gap-0 items-center justify-between relative z-10 w-full">
          {/* Left side content */}
          <div className="w-full">
            <h1 className="font-MartianBThai text-white text-2xl sm:text-3xl xl:text-[56px] font-semibold leading-10 2xl:leading-[61px] w-full max-w-[898px]">
              Enjoy 10% Off When You Choose Our Annual Package
            </h1>
            <p className="text-neutral-300 text-sm lg:text-lg leading-6 lg:leading-[30px] max-w-[808px] font-Poppins mt-5">
              Take advantage of a special 10% discount on your first annual
              subscription. This limited-time offer is exclusively available for
              new customers. Don’t miss out—subscribe today and start enjoying
              premium features while saving money on your yearly plan!
            </p>
            <button className="pl-[30px] pr-1 py-1 bg-primary-5 font-Poppins text-neutral-5 rounded-[28px] font-medium text-base md:text-lg leading-5 cursor-pointer relative flex items-center gap-2.5 mt-8">
              Start Now
              <div className="bg-neutral-5 size-10 md:size-12 rounded-full flex items-center justify-center">
                <Image src={ICONS.topRightArrow} alt="" className="size-6" />
              </div>
            </button>
          </div>

          {/* Right side image */}
          <Image src={IMAGES.packageOffer} alt="" className="w-full md:w-[440px] lg:w-[300px] xl:w-[440px]" />
        </div>
      </div>
    </div>
  );
};

export default PackageOffer;
