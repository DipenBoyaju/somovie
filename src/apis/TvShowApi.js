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

    getTvShowById: builder.query({
      query: (id) => ({
        url: `tv/${id}`,
        method: 'GET',
        params: {
          api_key: "ce637d683aa8c718dde6b5e2b8ed0095"
        }
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
    }),

    getTvShowRecommendation: builder.query({
      query: (id) => ({
        url: `tv/${id}/recommendations`,
        method: 'GET',
        params: {
          api_key: "ce637d683aa8c718dde6b5e2b8ed0095"
        }
      })
    }),

    getSimilarTvShow: builder.query({
      query: (id) => ({
        url: `tv/${id}/similar`,
        method: 'GET',
        params: {
          api_key: 'ce637d683aa8c718dde6b5e2b8ed0095'
        }
      })
    }),
    getTvShowCasts: builder.query({
      query: (id) => ({
        url: `tv/${id}/credits`,
        method: 'GET',
        params: {
          api_key: 'ce637d683aa8c718dde6b5e2b8ed0095'
        }
      })
    }),

    getTvShowVideo: builder.query({
      query: (id) => ({
        url: `tv/${id}/videos`,
        method: 'GET',
        params: {
          api_key: 'ce637d683aa8c718dde6b5e2b8ed0095'
        }
      })
    }),

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

export const { useGetAllTvShowsQuery, useGetPopularTvShowQuery, useGetLatestTvShowQuery, useGetTvShowByIdQuery, useGetTvShowRecommendationQuery, useGetSimilarTvShowQuery, useGetTvShowCastsQuery, useGetTvShowVideoQuery } = tvShowApi;