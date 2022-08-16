import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://persatyi-superheroes.herokuapp.com";

export const heroesApi = createApi({
  reducerPath: "heroesApi",
  tagTypes: "Heroes",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getHeroes: build.query({
      query: (page = "") => `/api/heroes?${page && `page=${page}`}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id: id }) => ({ type: "Heroes", id })),
              { type: "Heroes", id: "LIST" },
            ]
          : [{ type: "Heroes", id: "LIST" }],
    }),
    addSuperhero: build.mutation({
      query: (body) => ({
        url: "/api/heroes",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Heroes", id: "LIST" }],
    }),
    removePicture: build.mutation({
      query: (data) => ({
        url: `/api/heroes/${data.id}&${data.image}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Heroes", id: "LIST" }],
    }),
    addPicture: build.mutation({
      query: ({ id, data }) => ({
        url: `/api/heroes/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [{ type: "Heroes", id: "LIST" }],
    }),
  }),
});

export const {
  useGetHeroesQuery,
  useAddSuperheroMutation,
  useRemovePictureMutation,
  useAddPictureMutation,
} = heroesApi;
