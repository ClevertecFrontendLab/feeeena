import { baseApi } from '../baseApi';
import { SESSION_TAG } from '../tags';
import {
    RequestChangePassword,
    RequestCheckEmail,
    RequestConfirmEmail,
    RequestLogin,
    RequestRegister,
    SessionChangePassword,
    SessionCheckEmai,
    SessionConfirmEmail,
    SessionLogin,
    SessionRegister,
} from './types';

export const sessionApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<SessionLogin, RequestLogin>({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
            invalidatesTags: [SESSION_TAG],
            
        }),
        register: build.mutation<SessionRegister, RequestRegister>({
            query: (body) => ({
                url: '/auth/registration',
                method: 'POST',
                body,
            }),
            invalidatesTags: [SESSION_TAG],
        }),
        checkEmail: build.mutation<SessionCheckEmai, RequestCheckEmail>({
            query: (body) => ({
                url: '/auth/check-email',
                method: 'POST',
                body,
                credentials: 'include',
            }),
            invalidatesTags: [SESSION_TAG],
        }),
        confirmEmail: build.mutation<SessionConfirmEmail, RequestConfirmEmail>({
            query: (body) => ({
                url: '/auth/confirm-email',
                method: 'POST',
                body,
                credentials: 'include',
            }),
            invalidatesTags: [SESSION_TAG],
        }),
        changePassword: build.mutation<SessionChangePassword, RequestChangePassword>({
            query: (body) => ({
                url: '/auth/change-password',
                method: 'POST',
                body,
                credentials: 'include',
            }),
            invalidatesTags: [SESSION_TAG],
        }),
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useChangePasswordMutation,
    useCheckEmailMutation,
    useConfirmEmailMutation,
} = sessionApi;
