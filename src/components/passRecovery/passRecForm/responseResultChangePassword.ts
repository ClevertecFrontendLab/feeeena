import { authPath } from '@components/configFile/authPath';
import { SessionChangePassword } from '@redux/api/session/types';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { sessionActions } from '@store/slice/session';
import { AppDispatch } from '@store/store';
import { push } from 'redux-first-history';

export const responseResultChangePassword = (
    result: { data: SessionChangePassword } | { error: FetchBaseQueryError | SerializedError },
    dispatch: AppDispatch,
) => {
    if ('error' in result) {
        console.log('result', result);
        const error = result.error;
        if (typeof error === 'object' && error !== null && 'status' in error) {
            dispatch(push(authPath.REC_PASS_ERROR, { result: 'result' }));
        }
        dispatch(sessionActions.setIsLoading(false));
        return;
    }
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('confirmPassword');
    dispatch(push(authPath.REC_PASS_SUCCES, { result: 'result' }));
    dispatch(sessionActions.setIsLoading(false));
};
