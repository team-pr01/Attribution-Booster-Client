/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../../../../public/assets";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useResetPasswordMutation } from "@/redux/features/Auth/authApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type TFormData = {
  newPassword: string;
  confirmNewPassword: string;
};

const ResetPassword = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TFormData>();

  const newPassword = watch("newPassword");

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const handleResetPassword = async (data: TFormData) => {
    try {
      const forgotPasswordEmail = localStorage.getItem("forgotPasswordEmail");

      if (!forgotPasswordEmail) {
        toast.error(
          "Email not found. Please restart the password reset process."
        );
        return;
      }

      const payload = {
        email: forgotPasswordEmail,
        newPassword: data.newPassword,
      };

      const response = await resetPassword(payload).unwrap();

      if (response?.success) {
        toast.success("Password reset successful");
        localStorage.removeItem("forgotPasswordEmail");
        router.push("/login");
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
        <div className="relative bg-linear-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
          {/* Shine Border */}
          <div className="shine-border absolute inset-0 rounded-2xl pointer-events-none"></div>

          {/* Header */}
          <div className="text-center mb-8 flex flex-col items-center">
            <Link href="/">
              <Image
                src={IMAGES.logo}
                alt="Logo"
                className="w-40 md:w-[200px]"
              />
            </Link>
            <h1 className="text-2xl font-bold text-white mt-4">
              Reset Password
            </h1>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(handleResetPassword)}
            className="space-y-6"
          >
            {/* New Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                New Password
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  {...register("newPassword", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#07f4fa] focus:ring-2 focus:ring-[#07f4fa]/20 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#07f4fa]"
                >
                  {showPassword ? (
                    <FiEyeOff className="h-5 w-5" />
                  ) : (
                    <FiEye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {errors.newPassword && (
                <p className="text-red-400 text-sm">
                  {errors.newPassword.message}
                </p>
              )}
            </div>

            {/* Confirm New Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Confirm New Password
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Re-enter password"
                  {...register("confirmNewPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === newPassword || "Passwords do not match",
                  })}
                  className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#07f4fa] focus:ring-2 focus:ring-[#07f4fa]/20 transition"
                />
              </div>

              {errors.confirmNewPassword && (
                <p className="text-red-400 text-sm">
                  {errors.confirmNewPassword.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center rounded-xl bg-linear-to-r from-[#07f4fa] to-primary-20 py-3 font-semibold text-gray-900 transition hover:shadow-lg hover:shadow-[#07f4fa]/30 disabled:opacity-60"
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>

      {/* Shine animation */}
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

export default ResetPassword;
