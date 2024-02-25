import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import { sessionSlice } from './slice/session';
import { baseApi } from '@redux/api';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
});

const rootReducerCombine = combineReducers({
    router: routerReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [sessionSlice.name]: sessionSlice.reducer,
});

const createStore = () => {
    return configureStore({
        reducer: rootReducerCombine,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(baseApi.middleware, routerMiddleware),
    });
};
export const store = createStore();
export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type Store = ReturnType<typeof createStore>;
export type AppDispatch = typeof store.dispatch;
