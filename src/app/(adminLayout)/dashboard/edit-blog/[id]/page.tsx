import AddOrEditBlogForm from "@/components/AdminDashboard/AddOrEditBlogForm/AddOrEditBlogForm";
import { use } from "react";

const EditBlog = ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = use(params);

  return <AddOrEditBlogForm actionType="edit" id={resolvedParams.id} />;
};

export async function generateStaticParams() {
  // Fetch all blog IDs from your API
  const res = await fetch('https://attribution-booster-server.vercel.app/api/v1/blog', {
    cache: 'no-store'
  });
  
  if (!res.ok) return [];
  
  const blogs = await res.json();
  
  return blogs.data.map((blog: { _id: string }) => ({
    id: blog._id,
  }));
}

export default EditBlog;