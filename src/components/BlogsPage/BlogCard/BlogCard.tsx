import Image from "next/image";
import Link from "next/link";
import { ICONS } from "../../../../public/assets";
import { AiOutlineCalendar } from "react-icons/ai";
import { TBlog } from "@/app/(adminLayout)/dashboard/blogs/page";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);

  const day = date.getUTCDate(); // 28
  const month = date.toLocaleString("en-US", {
    month: "long",
    timeZone: "UTC",
  }); // "November"
  const year = date.getUTCFullYear(); // 2025

  // Function to get ordinal suffix
  const getOrdinal = (n: number) => {
    if (n >= 11 && n <= 13) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${getOrdinal(day)} ${month}, ${year}`;
}

const BlogCard = ({
  _id,
  title,
  overview,
  category,
  imageUrl,
  createdAt,
}: TBlog) => {
  return (
    <div className="group relative bg-linear-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-[#07f4fa]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#07f4fa]/5 hover:-translate-y-1">
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-linear-to-r from-[#07f4fa]/10 via-primary-15/5 to-primary-20/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Image container */}
        <div className="relative overflow-hidden">
          <div className="aspect-4/3 relative overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 via-transparent to-transparent opacity-50" />

            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center px-2 py-1 rounded-full bg-[#07f4fa]/90 backdrop-blur-sm text-gray-900 text-xs font-semibold border border-[#07f4fa]/30">
                {category}
              </span>
            </div>
          </div>
        </div>

        {/* Content container */}
        <div className="flex-1 p-4 flex flex-col">
          {/* Date and read time */}
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
            <span className="flex items-center gap-1">
              <AiOutlineCalendar
                className="opacity-60 text-[#07f4fa]"
                size={14}
              />
              {formatDate(createdAt)}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-white text-base mb-2 line-clamp-2 group-hover:text-[#07f4fa] transition-colors duration-300 leading-tight">
            {title}
          </h3>

          {/* Overview */}
          <p className="text-gray-300 text-xs mb-4 line-clamp-2 flex-1 leading-relaxed">
            {overview}
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
            <Link
              href={`/blog/${_id}`}
              className="relative inline-flex items-center gap-1.5 text-[#07f4fa] hover:text-primary-15 font-medium text-xs group/btn transition-colors duration-300"
            >
              Read More
              <div className="relative">
                <div className="w-4 h-4 bg-[#07f4fa]/20 rounded-full flex items-center justify-center group-hover/btn:bg-[#07f4fa]/30 transition-all duration-300">
                  <Image
                    src={ICONS.topRightArrow}
                    alt="Arrow"
                    width={10}
                    height={10}
                    className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
                  />
                </div>
              </div>
            </Link>

            {/* View button with primary colors */}
            <button className="relative inline-flex items-center justify-center overflow-hidden group/button bg-linear-to-r from-[#07f4fa] to-primary-20 hover:from-primary-15 hover:to-primary-30 text-gray-900 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#07f4fa]/20">
              <span className="relative z-10">View Post</span>

              {/* Shine effect */}
              <div className="absolute inset-0 -left-8 -top-8 w-16 h-16 bg-white/30 transform rotate-45 transition-all duration-700 group-hover/button:left-[110%] group-hover/button:top-[110%]" />
            </button>
          </div>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl bg-linear-to-r from-[#07f4fa]/0 via-[#07f4fa]/3 to-primary-20/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
    </div>
  );
};

export default BlogCard;
