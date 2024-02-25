import { authPath } from '@components/configFile/authPath';
import { SessionRegister } from '@redux/api/session/types';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { sessionActions } from '@store/slice/session';
import { AppDispatch } from '@store/store';
import { push } from 'redux-first-history';

export const responseResultRegister = (
    result: { data: SessionRegister } | { error: FetchBaseQueryError | SerializedError },
    dispatch: AppDispatch,
) => {
    if ('error' in result) {
        const error = result.error;

        if (typeof error === 'object' && error !== null && 'status' in error) {
            if (error.status === 409) {
                dispatch(push(authPath.SAVE_DATA_ERROR_EMAIL, { result: 'result' }));
                dispatch(sessionActions.setIsLoading(false));
                return;
            }

            dispatch(push(authPath.SAVE_DATA_ERROR, { result: 'result' }));
            dispatch(sessionActions.setIsLoading(false));
            return;
            
        }
    }

    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
    dispatch(push(authPath.SUCCES_REGIST, { result: 'result' }));
    dispatch(sessionActions.setIsLoading(false));
};
