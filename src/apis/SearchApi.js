import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constant/apis";

export const SearchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    searchCollection: builder.query({
      query: ({ query, page = 1 }) => ({
        url: `search/multi`,
        params: {
          api_key: 'ce637d683aa8c718dde6b5e2b8ed0095',
          include_adult: false,
          language: 'en-US',
          page,
          query,
        },
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      }),
    }),
  }),
});

export const { useSearchCollectionQuery } = SearchApi;
