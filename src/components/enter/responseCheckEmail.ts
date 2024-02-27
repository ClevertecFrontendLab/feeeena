import { authPath } from '@components/configFile/authPath';
import { SessionCheckEmai } from '@redux/api/session/types';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { sessionActions } from '@store/slice/session';
import { AppDispatch } from '@store/store';
import { push } from 'redux-first-history';
import { isApiError } from '@components/enter/SpecificError.ts';

export const responseResultCheckEmail = (
    result: { data: SessionCheckEmai } | { error: FetchBaseQueryError | SerializedError },
    dispatch: AppDispatch,
) => {
    if ('error' in result && isApiError(result.error)) {
        const error = result.error;

        if (
            error.data !== undefined &&
            'data' in error &&
            error.data !== null &&
            typeof error.data === 'object' &&
            'message' in error.data
        ) {
            if (error.status === 404 && error?.data?.message === 'Email не найден') {
                dispatch(push(authPath.REC_EMAIL_ERROR, { result: 'result' }));
                return;
            }
        }

        dispatch(push(authPath.REC_505_ERROR, { result: 'result' }));
        dispatch(sessionActions.setIsLoading(false));
        return;
    }

    dispatch(push(authPath.CONFIRM_EMAIL, { forgot: 'step_one' }));
    dispatch(sessionActions.setIsLoading(false));
};
