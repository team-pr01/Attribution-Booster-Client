/* eslint-disable react/no-unescaped-entities */
"use client";
import BlogCard from "@/components/BlogsPage/BlogCard/BlogCard";
import { categories } from "@/data/blogcategory";
import { useGetAllBlogsQuery } from "@/redux/features/Blog/blogApi";
import { useState } from "react";

export type TBlog = {
  _id: string;
  imageUrl: string;
  title: string;
  overview: string;
  category: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};


const AllBlogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { data: blogs, isLoading } = useGetAllBlogsQuery({
    category: activeCategory,
  });

  const filteredPosts =
    activeCategory === "All"
      ? blogs?.data
      : blogs?.data?.filter((post: TBlog) => post.category === activeCategory);
  return (
    <div className="w-full">
      {/* Loading Spinner */}
      {isLoading && (
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#07f4fa]"></div>
        </div>
      )}

      {/* Category Filter Section */}
      {!isLoading && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Browse by Category
          </h2>

          {/* Desktop Category Filters - Horizontal Scroll on Mobile */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 font-medium text-sm md:text-base whitespace-nowrap capitalize cursor-pointer ${
                  activeCategory === category
                    ? "bg-[#07f4fa] text-gray-900 border-[#07f4fa] shadow-lg shadow-[#07f4fa]/25 transform scale-105"
                    : "bg-gray-800/50 text-gray-300 border-gray-600 hover:bg-gray-700/50 hover:border-[#07f4fa]/30 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mobile Dropdown for smaller screens */}
          <div className="lg:hidden mt-6 max-w-md mx-auto">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 text-white focus:border-[#07f4fa] focus:ring-2 focus:ring-[#07f4fa]/20 transition-all duration-300 appearance-none cursor-pointer"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-gray-800">
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Active Category Indicator */}
          <div className="text-center mt-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#07f4fa]/10 border border-[#07f4fa]/20 text-[#07f4fa] text-sm">
              Showing: {activeCategory} ({filteredPosts?.length || 0} posts)
            </span>
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      {!isLoading && (
        <>
          {filteredPosts?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post: TBlog) => (
                <BlogCard key={post?._id} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-[#07f4fa] text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                No posts found
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                We couldn't find any blog posts in the {activeCategory}{" "}
                category. Try selecting a different category or check back later
                for new content.
              </p>
              <button
                onClick={() => setActiveCategory("all")}
                className="mt-6 px-6 py-3 bg-[#07f4fa] text-gray-900 rounded-full font-semibold hover:bg-primary-15 transition-colors duration-300 cursor-pointer"
              >
                View All Posts
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllBlogs;
