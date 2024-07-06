import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constant/apis";

export const tvShowApi = createApi({
  reducerPath: 'tvShowApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({

    getAllTvShows: builder.query({
      query: ({ page = 1 }) => ({
        url: `discover/tv?api_key=ce637d683aa8c718dde6b5e2b8ed0095&page=${page}`,
        method: "GET",
      })
    }),

    getPopularTvShow: builder.query({
      query: () => ({
        url: 'tv/popular',
        method: 'GET',
        params: {
          api_key: "ce637d683aa8c718dde6b5e2b8ed0095"
        }
      })
    }),

    getLatestTvShow: builder.query({
      query: () => ({
        url: 'tv/on_the_air',
        method: 'GET',
        params: {
          api_key: "ce637d683aa8c718dde6b5e2b8ed0095"
        }
      })
    })

    // getAllTvShows: builder.query({
    //   query: () => ({
    //     url: 'discover/tv',
    //     method: "GET",
    //     params: {
    //       api_key: "ce637d683aa8c718dde6b5e2b8ed0095"
    //     }
    //   })
    // })
  })
})

export const { useGetAllTvShowsQuery, useGetPopularTvShowQuery, useGetLatestTvShowQuery } = tvShowApi;