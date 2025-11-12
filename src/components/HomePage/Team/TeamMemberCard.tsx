import Image from "next/image";
import { IMAGES } from "../../../../public/assets";

const TeamMemberCard = () => {
    return (
        <div className="rounded-[10px] bg-[rgba(255,255,255,0.02)] border border-gray-700 backdrop-blur-[15px] flex flex-col">
            <Image src={IMAGES.ceo} alt="" className="h-[310px] xl:h-[425px] rounded-t-[10px]" />
            <div className="p-5 xl:p-[30px]">
                <h2 className="font-MartianBThai text-white text-2xl 2xl:text-[32px] leading-9 font-semibold text-center">
                Muhammad Nurullah
              </h2>
              <p className="text-neutral-300 font-Poppins text-center mt-1">
                CEO
              </p>
            </div>
        </div>
    );
};

export default TeamMemberCard;