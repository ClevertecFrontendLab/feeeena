import React from 'react';
import { Button, Result } from 'antd';
import { LayoutEnter } from '@constants/layoutEnter/layoutEnter';

import './passRec505.css';

import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
import { sessionActions } from '@store/slice/session';
import { useCheckEmailMutation } from '@redux/api/session/apiSession';
import { authPath } from '@components/configFile/authPath';
import { responseResultCheckEmail } from '@components/enter/responseCheckEmail';
import { getSessionStorage } from '@constants/storageUtils';

export const PassRec505: React.FC = () => {
    const dispatch = useAppDispatch();
    const [checkEmail] = useCheckEmailMutation();

    const onClickErrorCheckEmail = () => {
        dispatch(push(authPath.LOGIN, { result: 'result' }));
        dispatch(sessionActions.setIsLoading(true));

        const email = getSessionStorage('email');

        checkEmail({ email }).then((result) => {
            responseResultCheckEmail(result, dispatch);
            dispatch(sessionActions.setIsLoading(false));
        });
    };
    return (
        <LayoutEnter>
            <div className='err_505_cont'>
                <div className='err_505_inner'>
                    <Result
                        className='text'
                        status='500'
                        title='Что-то пошло не так'
                        subTitle='Произошла ошибка, попробуйте отправить форму ещё раз.'
                        extra={[
                            <Button
                                size='large'
                                type='primary'
                                key='console'
                                className='button-error'
                                onClick={onClickErrorCheckEmail}
                                data-test-id='check-back-button'
                            >
                                Назад
                            </Button>,
                        ]}
                    />
                </div>
            </div>
        </LayoutEnter>
    );
};
