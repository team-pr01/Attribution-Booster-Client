import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";

const PackageOffer = () => {
  return (
    <div className="max-w-[1800px] mx-auto rounded-[20px] relative mt-44">
      {/* Card container */}
      <div className="relative rounded-[20px] bg-[rgba(255,255,255,0.02)] border border-gray-700 backdrop-blur-[15px] py-20 px-[135px] overflow-hidden">
        {/* Faint background circle */}
        <Image
          src={IMAGES.circle}
          alt=""
          className="w-[643px] h-[664px] absolute -top-64 -left-56 opacity-[0.06] z-0"
        />

        <Image
          src={IMAGES.circle}
          alt=""
          className="w-[643px] h-[664px] absolute -top-64 -right-56 opacity-[0.06] z-999"
        />

        {/* Main content */}
        <div className="flex items-center justify-between relative z-10">
          {/* Left side content */}
          <div>
            <h1 className="font-MartianBThai text-white text-[56px] font-semibold leading-[61px] max-w-[898px]">
              Enjoy 10% Off When You Choose Our Annual Package
            </h1>
            <p className="text-white text-lg leading-[30px] max-w-[808px] font-Poppins mt-5">
              Take advantage of a special 10% discount on your first annual
              subscription. This limited-time offer is exclusively available for
              new customers. Don’t miss out—subscribe today and start enjoying
              premium features while saving money on your yearly plan!
            </p>
            <button className="pl-[30px] pr-1 py-1 bg-primary-5 font-Poppins text-neutral-5 rounded-[28px] font-medium text-lg leading-5 cursor-pointer relative flex items-center gap-2.5 mt-8">
              Start Now
              <div className="bg-neutral-5 size-12 rounded-full flex items-center justify-center">
                <Image src={ICONS.topRightArrow} alt="" className="size-6" />
              </div>
            </button>
          </div>

          {/* Right side image */}
          <Image src={IMAGES.packageOffer} alt="" className="w-[440px]" />
        </div>

        {/* Globe should stay inside bottom right of the card */}
        {/* <Image
          src={IMAGES.offerGlobe}
          alt="Decorative globe"
          className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 z-0"
        /> */}
      </div>
    </div>
  );
};

export default PackageOffer;
