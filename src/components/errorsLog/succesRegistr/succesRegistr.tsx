import React from 'react';

import { LayoutEnter } from '@constants/layoutEnter/layoutEnter';
import { ErrCont } from '@constants/errorss/errCont/errCont.tsx';
import { ErrorInner } from '@constants/errorss/errInner/errorInner.tsx';

import './succesRegistr.css';
import { Button, Result } from 'antd';

import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
import { authPath } from '@components/configFile/authPath.tsx';

export const SuccesRegistr: React.FC = () => {
    const dispatch = useAppDispatch();
    const onClickRegisterSuccess = () => {
        dispatch(push(authPath.LOGIN, { result: 'result' }));
    };
    return (
        <LayoutEnter>
            <ErrCont>
                <ErrorInner>
                    <Result
                        className='text'
                        status='success'
                        title='Регистрация успешна'
                        subTitle='Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.'
                        extra={[
                            <Button
                                size='large'
                                type='primary'
                                key='console'
                                className='button-error'
                                onClick={onClickRegisterSuccess}
                                data-test-id='registration-enter-button'
                            >
                                Войти
                            </Button>,
                        ]}
                    />
                </ErrorInner>
            </ErrCont>
        </LayoutEnter>
    );
};
