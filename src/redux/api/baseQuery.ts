import { type BaseQueryFn } from 'node_modules/@reduxjs/toolkit/dist/query/baseQueryTypes';
import {
    type FetchArgs,
    type FetchBaseQueryError,
    type FetchBaseQueryMeta,
} from 'node_modules/@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError,
    object,
    FetchBaseQueryMeta
> = fetchBaseQuery({
    baseUrl: 'https://marathon-api.clevertec.ru',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');

        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }

        return headers;
    },
});
