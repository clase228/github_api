import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const api = createApi({
   reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com",
   
  }),
  endpoints: (builder) => ({
   searchUsers: builder.mutation({
      query: (query) => `search/users?q=${query}`
    }),
    
   searchUserRepos: builder.mutation({
      query: (url) => url,
    }),
    
    
  }),
});


export const { useSearchUsersMutation,useSearchUserReposMutation } = api;