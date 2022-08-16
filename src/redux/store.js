import { configureStore } from "@reduxjs/toolkit";
import { heroesApi } from "./backendApi";

export const store = configureStore({
  reducer: {
    [heroesApi.reducerPath]: heroesApi.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(heroesApi.middleware),
});
