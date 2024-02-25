import React from 'react';
import { Button, Result } from 'antd';
import LayoutEnter from '@constants/layoutEnter/layoutEnter';

import './errEmail.css';

import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
import { authPath } from '@components/configFile/authPath';

const ErrEmail: React.FC = () => {
    const dispatch = useAppDispatch();
    const onClickErrorCheckEmailNOExist = () => {
        dispatch(push(authPath.LOGIN, { result: 'result' }));
    };
    return (
        <LayoutEnter>
            <div className='err_Email'>
                <div className='err_Email_inner'>
                    <Result
                        className='text'
                        status='error'
                        title='Такой e-mail не зарегистрирован'
                        subTitle='Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.'
                        extra={[
                            <Button
                                size='large'
                                type='primary'
                                key='console'
                                className='button-error-em'
                                onClick={onClickErrorCheckEmailNOExist}
                                data-test-id='check-retry-button'
                            >
                                Попробовать снова
                            </Button>,
                        ]}
                    />
                </div>
            </div>
        </LayoutEnter>
    );
};

export default ErrEmail;
