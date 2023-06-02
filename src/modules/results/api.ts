import { delay } from '@helpers'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AnimalSearch, ApiResponse, PaginatedData } from '@types'

export const resultsApi = createApi({
    reducerPath: 'resultsApi',
    baseQuery: fetchBaseQuery(),
    endpoints: (builder) => ({
        getResults: builder.query<
            ApiResponse<PaginatedData<AnimalSearch>>,
            { search: string; page: number }
        >({
            query: ({ search, page }) =>
                `/api/get-results?search=${search}&page=${page}`,
            transformResponse: async (
                response: ApiResponse<PaginatedData<AnimalSearch>>,
            ) => {
                await delay(1000) // Agrega un retraso de 2 segundos
                return response
            },
        }),
    }),
})

export const { useGetResultsQuery } = resultsApi
