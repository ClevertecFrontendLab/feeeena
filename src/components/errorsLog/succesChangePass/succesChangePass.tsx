import React from 'react';

import LayoutEnter from '@constants/layoutEnter/layoutEnter';
import ErrCont from '@constants/errorss/errCont/errCont.tsx';
import ErrorInner from '@constants/errorss/errInner/errorInner.tsx';
import './succesChangePass.css';
import { Button, Result } from 'antd';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
import { authPath } from '@components/configFile/authPath.tsx';

const SuccesChangePass: React.FC = () => {
    const dispatch = useAppDispatch();

    const onClickSuccessChangePassword = () => {
        dispatch(push(authPath.LOGIN, { result: 'result' }));
    };
    return (
        <LayoutEnter>
            <ErrCont>
                <ErrorInner>
                    <Result
                        className='text'
                        status='success'
                        title='Пароль успешно изменен'
                        subTitle='Теперь можно войти в аккаунт, используя свой логин и новый пароль'
                        extra={[
                            <Button
                                size='large'
                                type='primary'
                                key='console'
                                className='button-error'
                                onClick={onClickSuccessChangePassword}
                                data-test-id='change-entry-button'
                            >
                                Вход
                            </Button>,
                        ]}
                    />
                </ErrorInner>
            </ErrCont>
        </LayoutEnter>
    );
};

export default SuccesChangePass;
