"use client";
import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
import Container from "@/components/Shared/Container/Container";
import { useGetSingleBlogByIdQuery } from "@/redux/features/Blog/blogApi";

const BlogDetailsPage = ({id} : {id: string}) => {
    const { data } = useGetSingleBlogByIdQuery(id);
     const blogDetail = data?.data;
    return (
        <div>
      <HeroSection
        heading={blogDetail?.title}
        description={blogDetail?.overview}
        btnText="Reach Out To Us"
        image={blogDetail?.imageUrl}
        breadcrumbs={[{ label: blogDetail?.category || "" }, { label: "Blog" }]}
      />
      <Container>
        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl space-y-8 relative overflow-hidden h-fit mt-16">
          {/* Category */}
          {blogDetail?.category && (
            <div className="text-neutral-300 font-Poppins">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {blogDetail?.category}
              </span>
            </div>
          )}

          {/* Description */}
          {blogDetail?.description && (
            <div
              className="text-neutral-300 font-Poppins prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: blogDetail?.description }}
            />
          )}
        </div>
      </Container>
    </div>
    );
};

export default BlogDetailsPage;