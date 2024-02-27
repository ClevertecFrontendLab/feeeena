import React from 'react';

import { LayoutEnter } from '@constants/layoutEnter/layoutEnter';
import { ErrCont } from '@constants/errorss/errCont/errCont.tsx';
import { ErrorInner } from '@constants/errorss/errInner/errorInner.tsx';

import './errorChangePass.css';
import { Button, Result } from 'antd';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
import { authPath } from '@components/configFile/authPath.tsx';
import { useChangePasswordMutation } from '@redux/api/session/apiSession';

import { responseResultChangePassword } from '@components/passRecovery/passRecForm/responseResultChangePassword';
import { getSessionStorage } from '@constants/storageUtils';
export const ErrorChangePass: React.FC = () => {
    const dispatch = useAppDispatch();

    const [changePassword] = useChangePasswordMutation();
    const onClickErrorChangePassword = () => {
        dispatch(push(authPath.NEW_PASS), { forgot: 'step_two' });

        const password = getSessionStorage('password');
        const confirmPassword = getSessionStorage('confirmPassword');

        changePassword({ password, confirmPassword }).then((result) => {
            responseResultChangePassword(result, dispatch);
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
                        subTitle='Что-то пошло не так. Попробуйте ещё раз'
                        extra={[
                            <Button
                                size='large'
                                type='primary'
                                key='console'
                                className='button-error'
                                onClick={onClickErrorChangePassword}
                                data-test-id='change-retry-button'
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
