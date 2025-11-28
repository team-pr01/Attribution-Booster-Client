"use client";
import { MdArticle, MdPostAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { logout, useCurrentUser } from "@/redux/features/Auth/authSlice";
import { IMAGES } from "../../../../public/assets";

const Sidebar = () => {
  const user = useSelector(useCurrentUser);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const adminSidebarLinks = [
    {
      label: "Blogs",
      icon: <MdArticle size={20} />,
      path: "/dashboard/blogs",
    },
    {
      label: "Add Blog",
      icon: <MdPostAdd size={20} />,
      path: "/dashboard/add-blog",
    },
  ];

  const handleLogout = async () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <div className="w-[280px] bg-linear-to-br from-gray-900/80 to-gray-800/60 h-screen px-4 py-6 flex flex-col justify-between sticky top-0 left-0 font-Poppins">
      <div className="flex flex-col gap-16">
        <Link href={"/"}>
          <Image src={IMAGES.logo} alt="Logo" className="w-40 md:w-[200px]" />
        </Link>

        <div className="flex flex-col gap-4">
          {adminSidebarLinks?.map((item) => (
            <Link
              key={item?.label}
              href={item?.path}
              className={`p-3 rounded-lg font-medium transition duration-300 ease-in-out flex items-center gap-2 ${
                pathname === item?.path
                  ? "bg-primary-5/5 text-white border border-primary-5/50"
                  : "text-gray-300"
              }`}
            >
              {item?.icon}
              {item?.label}
            </Link>
          ))}
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="relative inline-flex items-center justify-center p-2 bg-primary-5 rounded-full overflow-hidden group hover:scale-105 transition-transform duration-300 font-medium"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
