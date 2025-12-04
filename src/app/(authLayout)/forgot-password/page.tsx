/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../../../../public/assets";
import { FiMail } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useForgotPasswordMutation } from "@/redux/features/Auth/authApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type TFormData = {
  email: string;
};

const ForgotPassword = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleForgotPassword = async (data: TFormData) => {
    try {
      localStorage.setItem("forgotPasswordEmail", data.email);
      const payload = {
        ...data,
      };
      const response = await forgotPassword(payload).unwrap();
      if (response?.success) {
        router.push("/reset-password");
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#07f4fa]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-20/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Login Card */}
        <div className="relative bg-linear-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-[#07f4fa]/10 transition-all duration-500">
          {/* Shine Border Effect */}
          <div className="shine-border absolute inset-0 rounded-2xl pointer-events-none"></div>

          {/* Header */}
          <div className="text-center mb-8 flex flex-col items-center">
            <Link href={"/"}>
              <Image
                src={IMAGES.logo}
                alt="Logo"
                className="w-40 md:w-[200px]"
              />
            </Link>
            <h1 className="text-2xl font-bold text-white my-2">Admin Login</h1>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit(handleForgotPassword)}
            className="space-y-6"
          >
            {/* Email Field */}
            <div className="">
              <label className="text-sm font-medium text-gray-300">
                Email Address
              </label>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#07f4fa] focus:ring-2 focus:ring-[#07f4fa]/20 transition-all duration-300"
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full relative inline-flex items-center justify-center p-2 overflow-hidden group bg-linear-to-r from-[#07f4fa] to-primary-20 rounded-xl hover:from-primary-15 hover:to-primary-30 transition-all duration-300 hover:shadow-lg hover:shadow-[#07f4fa]/25 cursor-pointer disabled:cursor-not-allowed"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-sm">
          <div className="absolute top-0 left-0 w-4 h-4 bg-[#07f4fa] rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary-20 rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Add CSS for shine border effect */}
      <style jsx>{`
        .shine-border {
          background: linear-gradient(
            45deg,
            transparent 40%,
            #07f4fa15 50%,
            transparent 60%
          );
          background-size: 300% 300%;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
      `}</style>
    </div>
  );
};

export default ForgotPassword;
