import { createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@/store/store';

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        prepareHeaders(headers: Headers, { getState }): void {
            const token = (getState() as RootState).profile.token;
            headers.set('Authorization', `Bearer ${token}`);
        }
    }),
    tagTypes: ['Profile'],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data): FetchArgs => ({
                url: '/auth/login',
                method: 'POST',
                body: data
            })
        }),
        logout: builder.query({
            query: () => '/auth/logout',
            providesTags: ['Profile']
        })
    })
});

export const { useLoginMutation, useLazyLogoutQuery } = profileApi;
