import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="relative rounded-[10px] p-px bg-linear-to-r from-gray-300/50 via-transparent to-gray-600 max-w-[1420px] mx-auto">
      <div className="rounded-[10px] bg-neutral-5 backdrop-blur-[15px]">
        <div className="flex items-center justify-between px-[29px] py-3">
          <Link href={"/"}><Image src={IMAGES.logo} alt="Logo" className="w-[219px] h-[70px] relative" /></Link>
          <nav className="flex space-x-[30px] font-Poppins">
            <Link href="/" className="text-white text-lg leading-5">
              Home
            </Link>
            <Link href="/" className="text-white text-lg leading-5">
              About Us
            </Link>
            <Link href="/" className="text-white text-lg leading-5">
              Services
            </Link>
            <Link href="/" className="text-white text-lg leading-5">
              Blog
            </Link>
            <Link href="/" className="text-white text-lg leading-5">
              Contact Us
            </Link>
          </nav>
          <button className="px-[30px] py-[18px] bg-primary-5 font-Poppins text-neutral-5 rounded-[28px] font-medium text-lg leading-5 cursor-pointer relative">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
