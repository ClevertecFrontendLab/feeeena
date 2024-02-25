import { authPath } from '@components/configFile/authPath';

import { SessionLogin } from '@redux/api/session/types';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { sessionActions } from '@store/slice/session';
import { AppDispatch } from '@store/store';

import { push } from 'redux-first-history';

export const responseResultLogin = (
    result: { data: SessionLogin } | { error: FetchBaseQueryError | SerializedError },
    remember: boolean | undefined,
    dispatch: AppDispatch,
) => {
    if ('error' in result) {
        const error = result.error;
        if (typeof error === 'object' && error !== null && 'status' in error) {
            dispatch(push(authPath.LOGIN_ERROR, { result: 'result' }));
        }
        dispatch(sessionActions.setIsLoading(false));
        return;
    }

    if ('data' in result) {
        if (remember) {
            localStorage.setItem('token', result.data.accessToken as unknown as string);
        }
        dispatch(sessionActions.setAuthorized(true));
    }
    dispatch(sessionActions.setIsLoading(false));
};
