import { baseApi } from "@/redux/api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: ({
        keyword,
        category,
      }: {
        keyword?: string;
        category?: string;
      }) => {
        const params = new URLSearchParams();

        if (keyword) params.append("keyword", keyword);
        if (category) params.append("category", category);

        return {
          url: `/blog${params.toString() ? `?${params.toString()}` : ""}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["blog"],
    }),

    getSingleBlogById: builder.query({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["blog"],
    }),

    addBlog: builder.mutation({
      query: (data) => ({
        url: `/blog/add`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["blog"],
    }),

    updateBlog: builder.mutation({
      query: ({ id, data }) => ({
        url: `/blog/update/${id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["blog"],
    }),

    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/delete/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetSingleBlogByIdQuery,
  useAddBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
