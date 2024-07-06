import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constant/apis";

export const MovieApi = createApi({
  reducerPath: 'MovieApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({

    getAllMovies: builder.query({
      query: ({ page = 1 }) => ({
        url: `discover/movie?api_key=ce637d683aa8c718dde6b5e2b8ed0095&page=${page}`,
        method: 'GET'
      })
    }),

    getMovieById: builder.query({
      query: (id) => ({
        url: `movie/${id}`,
        method: 'GET',
        params: {
          api_key: 'ce637d683aa8c718dde6b5e2b8ed0095',
        },
      })
    }),

    getMoviesByPopular: builder.query({
      query: () => ({
        url: 'trending/movie/week',
        method: 'GET',
        params: {
          api_key: 'ce637d683aa8c718dde6b5e2b8ed0095'
        }
      })
    }),

    getMoviesByTrending: builder.query({
      query: () => ({
        url: 'trending/movie/day',
        method: 'GET',
        params: {
          api_key: 'ce637d683aa8c718dde6b5e2b8ed0095'
        }
      })
    }),

    getMoviesByLatest: builder.query({
      query: () => ({
        url: 'movie/now_playing',
        method: 'GET',
        params: {
          api_key: 'ce637d683aa8c718dde6b5e2b8ed0095'
        }
      })
    }),

    getMoviesByUpcoming: builder.query({
      query: () => ({
        url: 'movie/upcoming',
        method: 'GET',
        pparams: {
          api_key: 'ce637d683aa8c718dde6b5e2b8ed0095'
        }
      })
    })
  })
})

export const { useGetAllMoviesQuery, useGetMovieByIdQuery, useGetMoviesByPopularQuery, useGetMoviesByTrendingQuery, useGetMoviesByLatestQuery, useGetMoviesByUpcomingQuery } = MovieApi;