import React from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { authPath } from '@components/configFile/authPath';
import { EnterPage } from '@pages/enter-page/EnterPage';

import MainPage from '@pages/main-page/MainPage';
import { ErrEmail } from '@components/passRecovery/errEmail/errEmail';
import { PassRec505 } from '@components/passRecovery/err505/passRec505';
import { PassRecovery } from '@components/passRecovery/passRecovery';

import 'normalize.css';
import './index.css';
import { HistoryRouter } from 'redux-first-history/rr6';
import { PassRecForm } from '@components/passRecovery/passRecForm/passRecForm';
import { history, store } from './store/store';
import { RegisterPage } from '@pages/register-page/RegisterPage';
import { Loader } from '@components/loader/loader';
import { AuthZone } from '@components/routerZone/authZone';
import { GuestZone } from '@components/routerZone/guestZone';
import { ResultZone } from '@components/routerZone/resultZone';
import { ErrorLogin } from '@components/errorsLog/errorLogin/errorLogin';
import { ErrorEmailExist } from '@components/errorsLog/errorEmailExist/errorEmailExist';
import { ErrorSaveData } from '@components/errorsLog/errorSaveData/errorSaveData';
import { SuccesRegistr } from '@components/errorsLog/succesRegistr/succesRegistr';
import { SuccesChangePass } from '@components/errorsLog/succesChangePass/succesChangePass';
import { ErrorChangePass } from '@components/errorsLog/errorChangePass/errorChangePass';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HistoryRouter history={history}>
                <Routes>
                    <Route>
                        <Route
                            path='/'
                            element={
                                <AuthZone>
                                    <Navigate to={authPath.MAIN} />
                                </AuthZone>
                            }
                        />
                        <Route
                            path={authPath.MAIN}
                            element={
                                <AuthZone>
                                    <MainPage />
                                </AuthZone>
                            }
                        />
                    </Route>

                    <Route>
                        <Route
                            path={authPath.LOGIN}
                            element={
                                <GuestZone>
                                    <EnterPage />
                                </GuestZone>
                            }
                        />
                        <Route
                            path={authPath.REGISTER}
                            element={
                                <GuestZone>
                                    <RegisterPage />
                                </GuestZone>
                            }
                        />
                        <Route
                            path={authPath.CONFIRM_EMAIL}
                            element={
                                <GuestZone>
                                    <ResultZone>
                                        <PassRecovery />
                                    </ResultZone>
                                </GuestZone>
                            }
                        />
                        <Route
                            path={authPath.NEW_PASS}
                            element={
                                <GuestZone>
                                    <ResultZone>
                                        <PassRecForm />
                                    </ResultZone>
                                </GuestZone>
                            }
                        />
                    </Route>
                    <Route>
                        <Route
                            path={authPath.LOGIN_ERROR}
                            element={
                                <ResultZone>
                                    <ErrorLogin />
                                </ResultZone>
                            }
                        />
                        <Route
                            path={authPath.SAVE_DATA_ERROR_EMAIL}
                            element={
                                <ResultZone>
                                    <ErrorEmailExist />
                                </ResultZone>
                            }
                        />
                        <Route
                            path={authPath.SAVE_DATA_ERROR}
                            element={
                                <ResultZone>
                                    <ErrorSaveData />
                                </ResultZone>
                            }
                        />
                        <Route
                            path={authPath.SUCCES_REGIST}
                            element={
                                <ResultZone>
                                    <SuccesRegistr />
                                </ResultZone>
                            }
                        />
                        <Route
                            path={authPath.REC_PASS_SUCCES}
                            element={
                                <ResultZone>
                                    <SuccesChangePass />
                                </ResultZone>
                            }
                        />
                        <Route
                            path={authPath.REC_PASS_ERROR}
                            element={
                                <ResultZone>
                                    <ErrorChangePass />
                                </ResultZone>
                            }
                        />
                        <Route
                            path={authPath.REC_EMAIL_ERROR}
                            element={
                                <ResultZone>
                                    <ErrEmail />
                                </ResultZone>
                            }
                        />
                        <Route
                            path={authPath.REC_505_ERROR}
                            element={
                                <ResultZone>
                                    <PassRec505 />
                                </ResultZone>
                            }
                        />
                    </Route>
                </Routes>
                {<Loader />}
            </HistoryRouter>
        </Provider>
    </React.StrictMode>,
);
