/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";

const Partner = () => {
  return (
    <div className="relative rounded-[10px] p-px bg-linear-to-r from-gray-300/50 via-transparent to-gray-600 max-w-[1531px] mx-auto mt-48">
      <div className="rounded-[10px] bg-neutral-5 backdrop-blur-[15px]">
        <div className="flex items-center gap-8 px-[29px] py-5">
          <div className="">
            <Image
              src={IMAGES.googlePartner}
              alt="Google Partner"
              className="object-cover shadow-lg"
            />
          </div>
          <div>
            <h1 className="font-MartianBThai text-white text-[36px] font-semibold">
              Trusted by Google to deliver top-tier advertising performance
            </h1>
            <p className="text-white text-lg mt-1">
              As a certified <strong>Google Partner</strong>, our strategies are
              not just creative, they're conversion-proven
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;