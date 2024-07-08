import { configureStore } from "@reduxjs/toolkit";
import { MovieApi } from "../apis/MovieApi";
import { tvShowApi } from "../apis/TvShowApi";
import { SearchApi } from "../apis/SearchApi";


const store = configureStore({
  reducer: {
    [MovieApi.reducerPath]: MovieApi.reducer,
    [tvShowApi.reducerPath]: tvShowApi.reducer,
    [SearchApi.reducerPath]: SearchApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    MovieApi.middleware,
    tvShowApi.middleware,
    SearchApi.middleware,
  ])
})

export default store;