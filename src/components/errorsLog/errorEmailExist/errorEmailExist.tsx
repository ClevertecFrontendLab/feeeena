import React from 'react';

import LayoutEnter from '@constants/layoutEnter/layoutEnter';
import ErrCont from '@constants/errorss/errCont/errCont.tsx';
import ErrorInner from '@constants/errorss/errInner/errorInner.tsx';

import './errorEmailExist.css';
import { Button, Result } from 'antd';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
import { authPath } from '@components/configFile/authPath.tsx';
const ErrorEmailExist: React.FC = () => {
    const dispatch = useAppDispatch();
    const onClickErrorUserExist = () => {
        dispatch(push(authPath.REGISTER, { result: 'result' }));
    };
    return (
        <LayoutEnter>
            <ErrCont>
                <ErrorInner>
                    <Result
                        className='text'
                        status='error'
                        title='Данные не сохранились'
                        subTitle='Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.'
                        extra={[
                            <Button
                                size='large'
                                type='primary'
                                key='console'
                                className='button-error'
                                onClick={onClickErrorUserExist}
                                data-test-id='registration-back-button'
                            >
                                Назад к регистрации
                            </Button>,
                        ]}
                    />
                </ErrorInner>
            </ErrCont>
        </LayoutEnter>
    );
};

export default ErrorEmailExist;
