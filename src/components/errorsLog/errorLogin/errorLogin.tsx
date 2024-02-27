import React from 'react';

import { LayoutEnter } from '@constants/layoutEnter/layoutEnter';
import { ErrCont } from '@constants/errorss/errCont/errCont.tsx';
import { ErrorInner } from '@constants/errorss/errInner/errorInner.tsx';

import './errorLogin.css';
import { Button, Result } from 'antd';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
import { authPath } from '@components/configFile/authPath.tsx';

export const ErrorLogin: React.FC = () => {
    const dispatch = useAppDispatch();

    const onClickErrorLogin = () => {
        dispatch(push(authPath.LOGIN), { result: 'result' });
    };
    return (
        <LayoutEnter>
            <ErrCont>
                <ErrorInner>
                    <Result
                        className='text'
                        status='warning'
                        title='Вход не выполнен'
                        subTitle='Что-то пошло не так. Попробуйте еще раз'
                        extra={[
                            <Button
                                size='large'
                                type='primary'
                                key='console'
                                className='button-error'
                                onClick={onClickErrorLogin}
                                data-test-id='login-retry-button'
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
