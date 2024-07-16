import { createApi } from '@reduxjs/toolkit/query/react';
import { AxiosRequestConfig } from 'axios';
import axsioInstance from './axios';

const axiosBaseQuery =
  () =>
  async ({ url, method, data, params }: AxiosRequestConfig) => {
    try {
      const result = await axsioInstance({
        url: url,
        method,
        data,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
        //   status: err.response?.status,
        //   data: err.response?.data || err.message,
        },
      };
    }
  };

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getPosts: builder.query<any, void>({
      query: () => ({
         url: '/posts',
         method: 'GET' 
      }),
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        data: newPost,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = postsApi;