import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

type SessionSliceStateType = {
    isAuthorized: boolean;
    isError: boolean;
    isLoading: boolean;
};

const initialState: SessionSliceStateType = {
    isAuthorized: false,
    isError: false,
    isLoading: false,
};

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        clearSessionData: (state) => {
            state.isAuthorized = false;
        },
        setIsError: (state: SessionSliceStateType, { payload }: PayloadAction<boolean>) => {
            state.isError = payload;
        },
        setIsLoading: (state: SessionSliceStateType, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
        setAuthorized: (state: SessionSliceStateType, { payload }: PayloadAction<boolean>) => {
            console.log("ssdf")
            state.isAuthorized = payload;
        },
    },
});

export const selectIsAuthorized = (state: RootState) => state.session.isAuthorized;
export const selectIsError = (state: RootState) => state.session.isError;
export const selectIsLoadingn = (state: RootState) => state.session.isLoading;

export const { actions: sessionActions } = sessionSlice;
