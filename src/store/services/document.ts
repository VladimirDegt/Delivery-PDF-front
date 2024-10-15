import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@/store/store';

export const documentApi = createApi({
    reducerPath: 'documentApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        prepareHeaders(headers: Headers, { getState }): void {
            const token = (getState() as RootState).profile.token;
            headers.set('Authorization', `Bearer ${token}`);
        }
    }),
    tagTypes: ['document'],
    endpoints: (builder) => ({
        getLastDocument: builder.query({
            query: () => '/document/last',
            providesTags: ['document']
        }),
        getDocumentByDate: builder.mutation({
            query: (data) => ({
                url: '/document/date',
                method: 'POST',
                body: data
            })
        })
    })
});

export const { useGetLastDocumentQuery, useGetDocumentByDateMutation } = documentApi;
