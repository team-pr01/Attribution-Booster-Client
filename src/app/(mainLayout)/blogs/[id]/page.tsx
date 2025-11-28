import BlogDetailsPage from "@/components/BlogsPage/BlogDetailsPage/BlogDetailsPage";
import { use } from "react";

const BlogDetails = ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = use(params);

  return <BlogDetailsPage id={resolvedParams.id} />;
};

export async function generateStaticParams() {
  const res = await fetch(
    "https://attribution-booster-server.vercel.app/api/v1/blog",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return [];

  const blogs = await res.json();

  return blogs.data.map((blog: { _id: string }) => ({
    id: blog._id,
  }));
}

export default BlogDetails;
