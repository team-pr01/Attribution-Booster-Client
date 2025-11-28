"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../../../../../public/assets";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

interface LoginForm {
  email: string;
  password: string;
}

const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: LoginForm) => {
    console.log(data);
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#07f4fa]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#06a0ed]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Login Card */}
        <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-[#07f4fa]/10 transition-all duration-500">
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-300">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-[#07f4fa] hover:text-[#6ecaf8] transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#07f4fa] focus:ring-2 focus:ring-[#07f4fa]/20 transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#07f4fa] transition-colors cursor-pointer"
                >
                  {showPassword ? (
                    <FiEyeOff className="h-5 w-5" />
                  ) : (
                    <FiEye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full relative inline-flex items-center justify-center p-2 overflow-hidden group bg-gradient-to-r from-[#07f4fa] to-[#06a0ed] rounded-xl hover:from-[#6ecaf8] hover:to-[#0696e7] transition-all duration-300 hover:shadow-lg hover:shadow-[#07f4fa]/25 cursor-pointer"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Secure admin access only. Unauthorized attempts are prohibited.
            </p>
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-sm">
          <div className="absolute top-0 left-0 w-4 h-4 bg-[#07f4fa] rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#06a0ed] rounded-full opacity-20 animate-pulse delay-1000"></div>
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

export default AdminLogin;
