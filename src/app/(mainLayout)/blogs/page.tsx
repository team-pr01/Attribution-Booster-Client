/* eslint-disable react/no-unescaped-entities */
"use client";
import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
import React, { useState } from "react";
import { IMAGES } from "../../../../public/assets";
import BlogCard from "@/components/BlogsPage/BlogCard/BlogCard";
import Container from "@/components/Shared/Container/Container";

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = [
    "All",
    "Web Development",
    "Next.js", 
    "AI & Machine Learning",
    "UI/UX Design",
    "Mobile Development",
    "DevOps",
    "Career Tips"
  ];

  const blogPosts = [
    {
      id: "1",
      title: "The Future of Web Development in 2024",
      excerpt:
        "Explore the latest trends and technologies shaping the future of web development, from AI integration to new frameworks.",
      category: "Web Development",
      image: IMAGES.blogsHero,
      readTime: "5 min read",
      date: "Dec 15, 2024",
      slug: "future-of-web-development-2024",
    },
    {
      id: "2",
      title: "Mastering Next.js 14 Server Components",
      excerpt:
        "Deep dive into the new features of Next.js 14 and how server components can improve your application performance.",
      category: "Next.js",
      image: IMAGES.blogsHero,
      readTime: "8 min read",
      date: "Dec 12, 2024",
      slug: "mastering-nextjs-14-server-components",
    },
    {
      id: "3",
      title: "AI-Powered Applications in 2024",
      excerpt:
        "Discover how AI is revolutionizing modern applications and creating better user experiences.",
      category: "AI & Machine Learning",
      image: IMAGES.blogsHero,
      readTime: "6 min read",
      date: "Dec 10, 2024",
      slug: "ai-powered-applications-2024",
    },
    {
      id: "4",
      title: "Modern UI/UX Design Principles",
      excerpt:
        "Learn the essential design principles that create engaging and user-friendly interfaces.",
      category: "UI/UX Design",
      image: IMAGES.blogsHero,
      readTime: "7 min read",
      date: "Dec 8, 2024",
      slug: "modern-ui-ux-design-principles",
    },
    {
      id: "5",
      title: "React Native Performance Optimization",
      excerpt:
        "Advanced techniques to optimize your React Native applications for better performance.",
      category: "Mobile Development",
      image: IMAGES.blogsHero,
      date: "Dec 5, 2024",
      slug: "react-native-performance-optimization",
    },
    {
      id: "6",
      title: "DevOps Best Practices for Startups",
      excerpt:
        "Essential DevOps practices that can help startups scale efficiently and reliably.",
      category: "DevOps",
      image: IMAGES.blogsHero,
      date: "Dec 3, 2024",
      slug: "devops-best-practices-startups",
    },
    // Add more posts...
  ];

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div>
      <HeroSection
        heading="Insights, Stories & Ideas"
        description="Explore our blog to discover a wealth of knowledge, from the latest industry trends and expert insights to inspiring stories and practical tips. Stay ahead, fuel your curiosity, and gain valuable perspectives that can help you grow personally and professionally."
        btnText="Explore Our Services"
        image={IMAGES.blogsHero}
        breadcrumbs={[{ label: "Blogs" }]}
      />

      <Container>
        {/* Category Filter Section */}
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
                className={`px-6 py-3 rounded-full border transition-all duration-300 font-medium text-sm md:text-base whitespace-nowrap ${
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
              Showing: {activeCategory} ({filteredPosts.length} posts)
            </span>
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-[#07f4fa] text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-white mb-3">No posts found</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              We couldn't find any blog posts in the {activeCategory} category. 
              Try selecting a different category or check back later for new content.
            </p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-6 px-6 py-3 bg-[#07f4fa] text-gray-900 rounded-full font-semibold hover:bg-primary-15 transition-colors duration-300"
            >
              View All Posts
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Blogs;