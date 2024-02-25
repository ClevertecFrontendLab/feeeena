import React from 'react';

import LayoutEnter from '@constants/layoutEnter/layoutEnter';
import ErrCont from '@constants/errorss/errCont/errCont.tsx';
import ErrorInner from '@constants/errorss/errInner/errorInner.tsx';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
import { authPath } from '@components/configFile/authPath.tsx';
import './errorSaveData.css';
import { Button, Result } from 'antd';
import { useRegisterMutation } from '@redux/api/session/apiSession';
import { sessionActions } from '@store/slice/session';

import { responseResultRegister } from '@components/enter/responseResultRegister';

const ErrorSaveData: React.FC = () => {
    const dispatch = useAppDispatch();
    const [register] = useRegisterMutation();

    const onClickRegisterError = () => {
        dispatch(push(authPath.REGISTER, { result: 'result' }));
        dispatch(sessionActions.setIsLoading(true));

        const email = sessionStorage.getItem('email') || '';
        const password = sessionStorage.getItem('password') || '';

        register({ email, password }).then((result) => {
            responseResultRegister(result, dispatch);
            dispatch(sessionActions.setIsLoading(false));
        });
    };
    return (
        <LayoutEnter>
            <ErrCont>
                <ErrorInner>
                    <Result
                        className='text'
                        status='error'
                        title='Данные не сохранились'
                        subTitle='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.'
                        extra={[
                            <Button
                                size='large'
                                type='primary'
                                key='console'
                                className='button-error'
                                onClick={onClickRegisterError}
                                data-test-id='registration-retry-button'
                            >
                                Повторить
                            </Button>,
                        ]}
                    />
                </ErrorInner>
            </ErrCont>
        </LayoutEnter>
    );
};

export default ErrorSaveData;
