import { Route, Routes } from 'react-router-dom';
import { authPath } from '@components/configFile/authPath';
import { Enter } from '@pages/enter-page/EnterPage';

import MainPage from '@pages/main-page/MainPage';
import ErrEmail from '@components/passRecovery/errEmail/errEmail';
import PassRec505 from '@components/passRecovery/err505/passRec505';
import PassRecovery from '@components/passRecovery/passRecovery';
import ErrorLogin from '@components/errorsLog/errorLogin/errorLogin';
import ErrorSaveData from '@components/errorsLog/errorSaveData/errorSaveData';
import ErrorEmailExist from '@components/errorsLog/errorEmailExist/errorEmailExist';
import SuccesRegistr from '@components/errorsLog/succesRegistr/succesRegistr';
import SuccesChangePass from '@components/errorsLog/succesChangePass/succesChangePass';
import ErrorChangePass from '@components/errorsLog/errorChangePass/errorChangePass';
export const routes = (
    <Routes>
        <Route path='/' element={<Enter />} />
        <Route path={authPath.MAIN} element={<MainPage />} />
        <Route path={authPath.LOGIN_ERROR} element={<ErrorLogin />} />
        <Route path={authPath.SAVE_DATA_ERROR_EMAIL} element={<ErrorEmailExist />} />
        <Route path={authPath.SAVE_DATA_ERROR} element={<ErrorSaveData />} />
        <Route path={authPath.SUCCES_REGIST} element={<SuccesRegistr />} />
        <Route path={authPath.REC_PASS_SUCCES} element={<SuccesChangePass />} />
        <Route path={authPath.REC_PASS_ERROR} element={<ErrorChangePass />} />
        <Route path={authPath.REC_EMAIL_ERROR} element={<ErrEmail />} />
        <Route path={authPath.REC_505_ERROR} element={<PassRec505 />} />
        <Route path={authPath.CONFIRM_EMAIL} element={<PassRecovery />} />
    </Routes>
);
