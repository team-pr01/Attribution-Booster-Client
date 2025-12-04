import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (loginData) => ({
        url: "/auth/signup",
        method: "POST",
        body: loginData,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    login: builder.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        body: loginData,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    forgotPassword: builder.mutation({
      query: (data ) => ({
        url: `/auth/forgot-password`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    resetPassword: builder.mutation({
      query: (data ) => ({
        url: `/auth/reset-password`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useForgotPasswordMutation, useResetPasswordMutation } = authApi;
