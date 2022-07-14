import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const robotsApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints(builder) {
    return {
      fetchRobots: builder.query({
        query(limit = 10) {
          return `/users?limit=${limit}`
        },
      }),
    }
  },
})

export const { useFetchRobotsQuery } = robotsApiSlice
