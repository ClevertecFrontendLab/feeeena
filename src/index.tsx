import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { store } from '@redux/configure-store';

import 'normalize.css';
import './index.css';
import { Enter } from '@pages/enter-page/EnterPage';
import { pathAuth } from '@components/configFile/path.tsx';
import Error from '@components/errorsLog/Error';
import MainPage from '@pages/main-page/MainPage';
import PassRec505 from '@components/errorsLog/err505/passRec505.tsx';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<PassRec505 />} />
                    {/*<Route path={pathAuth.ENTER} element={<Enter />} />
                    <Route path={pathAuth.MAIN} element={<MainPage />} />
                    <Route
                        path={pathAuth.LOGIN_ERROR}
                        element={<Error errorType='login-error' />}
                    />*/}
                    {/*<Route
                        path={pathAuth.SAVE_DATA_ERROR_EMAIL}
                        element={<Error errorType='save-data-error-email' />}
                    />
                    <Route
                        path={pathAuth.SAVE_DATA_ERROR}
                        element={<Error errorType='save-data-error' />}
                    />
                    <Route
                        path={pathAuth.REGIST_SUCCES}
                        element={<Error errorType='regist-succes' />}
                    />
                    <Route
                        path={pathAuth.CHANGE_PASS_SUCCES}
                        element={<Error errorType='change-pass-succes' />}
                    />
                    <Route
                        path={pathAuth.CHANGE_PASS_ERROR}
                        element={<Error errorType='change-pass-error' />}
/>*/}
                </Routes>
            </HashRouter>
        </Provider>
    </React.StrictMode>,
);
