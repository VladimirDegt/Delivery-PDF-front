import { createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@/store/store';

export const deliveryPDFApi = createApi({
    reducerPath: 'deliveryPDFApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        prepareHeaders(headers: Headers, { getState }): void {
            const token = (getState() as RootState).profile.token;
            headers.set('Authorization', `Bearer ${token}`);
        }
    }),
    tagTypes: ['deliveryPDF'],
    endpoints: (builder) => ({
        sendPDF: builder.mutation({
            query: (data): FetchArgs => ({
                url: '/files/acts',
                method: 'POST',
                body: data
            })
        })
    })
});

export const { useSendPDFMutation } = deliveryPDFApi;
