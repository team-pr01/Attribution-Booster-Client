"use client";
import  { useState } from "react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import SelectDropdown from "@/components/Reusable/SelectDropdown/SelectDropdown";
import { categories } from "@/data/blogcategory";

// ✅ Dynamic import (SSR disabled)
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

type TAddBlogForm = {
  title: string;
  overview: string;
  category: string;
};

const AddBlog = () => {
  const [content, setContent] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAddBlogForm>();

  const onSubmit = (data: TAddBlogForm) => {
    const blogData = {
      ...data,
      description: content,
    };

    console.log("Blog Payload:", blogData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
    <div className="max-w-4xl w-full p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-6 text-white font-MartianBThai">
        Add New Blog
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Title */}
        <TextInput
          label="Title"
          placeholder="Enter blog title"
          error={errors.title}
          {...register("title", { required: "Title is required" })}
        />

        {/* Overview */}
        <TextInput
          label="Short Overview"
          placeholder="Short blog overview"
          error={errors.overview}
          {...register("overview", {
            required: "Overview is required",
          })}
        />

        {/* Category */}
        <SelectDropdown
          label="Category"
          options={categories}
          error={errors.category}
          {...register("category", {
            required: "Category is required",
          })}
        />

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1 text-white">
            Blog Description
          </label>
          <JoditEditor
            value={content}
            onBlur={(newContent) => setContent(newContent)}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full relative inline-flex items-center justify-center p-2 overflow-hidden group bg-gradient-to-r from-[#07f4fa] to-[#06a0ed] rounded-xl hover:from-[#6ecaf8] hover:to-[#0696e7] transition-all duration-300 hover:shadow-lg hover:shadow-[#07f4fa]/25 cursor-pointer"
        >
          Publish Blog
        </button>
      </form>
    </div>
  </div>
  );
};

export default AddBlog;
