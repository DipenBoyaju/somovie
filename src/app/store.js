import { configureStore } from "@reduxjs/toolkit";
import { MovieApi } from "../apis/MovieApi";
import { tvShowApi } from "../apis/TvShowApi";


const store = configureStore({
  reducer: {
    [MovieApi.reducerPath]: MovieApi.reducer,
    [tvShowApi.reducerPath]: tvShowApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    MovieApi.middleware,
    tvShowApi.middleware,
  ])
})

export default store;