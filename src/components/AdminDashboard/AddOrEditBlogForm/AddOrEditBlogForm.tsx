/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import TextInput from "@/components/Reusable/TextInput/TextInput";
import SelectDropdown from "@/components/Reusable/SelectDropdown/SelectDropdown";
import { categories } from "@/data/blogcategory";

import {
  useAddBlogMutation,
  useGetSingleBlogByIdQuery,
  useUpdateBlogMutation,
} from "@/redux/features/Blog/blogApi";
import { useRouter } from "next/navigation";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

type TAddBlogForm = {
  title: string;
  overview: string;
  category: string;
  thumbnail: FileList;
};

type Props = {
  id?: string;
  actionType: "add" | "edit";
};

const AddOrEditBlogForm = ({ id, actionType }: Props) => {
  const router = useRouter();
  // Fetch blog only in edit mode
  const { data } = useGetSingleBlogByIdQuery(id!, {
    skip: actionType !== "edit",
  });

  const blog = data?.data;

  const [content, setContent] = useState<string>("");

  const [addBlog, { isLoading }] = useAddBlogMutation();
  const [updateBlog, { isLoading: isUpdating }] = useUpdateBlogMutation();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<TAddBlogForm>();

  // ✅ Hydrate form ONLY once when editing
  useEffect(() => {
    if (actionType === "edit" && blog?._id) {
      setValue("title", blog.title);
      setValue("overview", blog.overview);
      setValue("category", blog.category);
      setContent(blog.description || "");
    }
  }, [actionType, blog?._id]);

  const onSubmit = async (data: TAddBlogForm) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("overview", data.overview);
      formData.append("category", data.category);
      formData.append("description", content);

      if (data.thumbnail?.[0]) {
        formData.append("file", data.thumbnail[0]);
      }

      // ✅ ADD BLOG
      if (actionType === "add") {
        if (!data.thumbnail?.[0]) {
          return toast.error("Thumbnail is required");
        }

        const response = await addBlog(formData).unwrap();

        if (response?.success) {
          toast.success("Blog published successfully");
          router.push("/dashboard/blogs")

          // ✅ Reset ONLY in add mode
          reset({
            title: "",
            overview: "",
            category: "",
            thumbnail: undefined,
          });

          setContent("");
        }
      }

      // ✅ UPDATE BLOG
      if (actionType === "edit") {
        const response = await updateBlog({
          id: blog._id,
          data: formData,
        }).unwrap();

        if (response?.success) {
          toast.success("Blog updated successfully");
        }
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full p-6 bg-linear-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          {actionType === "add" ? "Add New Blog" : "Edit Blog"}
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
              {...register("thumbnail")}
              required={actionType === "add"}
              className="block w-full rounded-lg border border-gray-600 bg-gray-800 text-white text-sm file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-[#07f4fa] file:text-black hover:file:bg-primary-15"
            />
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
            className="w-full inline-flex items-center justify-center rounded-xl bg-linear-to-r from-[#07f4fa] to-primary-20 py-3 font-semibold text-black transition hover:shadow-lg hover:shadow-[#07f4fa]/30 disabled:opacity-60 cursor-pointer"
          >
            {isLoading || isUpdating
              ? "Saving..."
              : actionType === "add"
              ? "Publish Blog"
              : "Update Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddOrEditBlogForm;