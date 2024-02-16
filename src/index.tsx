import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { store } from '@redux/configure-store';

import 'normalize.css';
import './index.css';
/*import Login from '@components/login/Login';*/
import ErrorYellow from '@components/errorsLog/ErrorYellow';
/*import MainPage  from './pages/main-page/MainPage';*/

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<ErrorYellow />} />
                </Routes>
            </HashRouter>
        </Provider>
    </React.StrictMode>,
);
