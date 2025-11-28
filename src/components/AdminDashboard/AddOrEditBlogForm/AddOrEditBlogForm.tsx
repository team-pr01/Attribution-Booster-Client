/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import SelectDropdown from "@/components/Reusable/SelectDropdown/SelectDropdown";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import { categories } from "@/data/blogcategory";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import {
  useAddBlogMutation,
  useGetSingleBlogByIdQuery,
  useUpdateBlogMutation,
} from "@/redux/features/Blog/blogApi";
import toast from "react-hot-toast";

type TAddBlogForm = {
  title: string;
  overview: string;
  category: string;
  thumbnail: FileList;
};
const AddOrEditBlogForm = ({
  id,
  actionType,
}: {
  id?: any;
  actionType: string;
}) => {
    const {data} = useGetSingleBlogByIdQuery(id);
    const defaultValues = data?.data || {};
  const [addBlog, { isLoading }] = useAddBlogMutation();
  const [updateBlog, { isLoading: isUpdating }] = useUpdateBlogMutation();
  const [content, setContent] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TAddBlogForm>();

  useEffect(() => {
    if (defaultValues) {
      setValue("title", defaultValues.title);
      setValue("overview", defaultValues.overview);
      setValue("category", defaultValues.category);
      setContent(defaultValues?.description || "");
    }
  }, [setValue, defaultValues]);

  const onSubmit = async (data: TAddBlogForm) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("overview", data.overview);
      formData.append("category", data.category);
      formData.append("description", content);
      formData.append("file", data.thumbnail[0]);
      if (actionType === "add") {
        if (!data.thumbnail?.[0]) {
          return toast.error("Thumbnail is required");
        }
        await addBlog(formData).unwrap();

        toast.success("Blog published successfully");
        reset();
        setContent("");
      } else {
        await updateBlog({
          id: defaultValues?._id,
          data:formData,
        }).unwrap();
        toast.success("Blog updated successfully");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
    <div className="max-w-4xl w-full p-6 bg-linear-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow">
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

        {/* Thumbnail */}
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Blog Thumbnail
          </label>
          <input
            type="file"
            accept="image/*"
            {...register("thumbnail",)}
            required={actionType === "add"}
            className="block w-full rounded-lg border border-gray-600 bg-gray-800 text-white text-sm file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-[#07f4fa] file:text-black hover:file:bg-primary-15"
          />
          {errors.thumbnail && (
            <p className="text-red-400 text-xs mt-1">
              {errors.thumbnail.message}
            </p>
          )}
        </div>

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
          disabled={isLoading || isUpdating}
          className="w-full relative inline-flex items-center justify-center p-2 overflow-hidden group bg-linear-to-r from-[#07f4fa] to-primary-20 rounded-xl hover:from-primary-15 hover:to-primary-30 transition-all duration-300 hover:shadow-lg hover:shadow-[#07f4fa]/25 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading || isUpdating ? "Publishing..." : "Publish Blog"}
        </button>
      </form>
    </div>
    </div>
  );
};

export default AddOrEditBlogForm;
