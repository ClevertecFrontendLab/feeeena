import React from 'react';
import { Input, Form, Button } from 'antd';

import { LayoutEnter } from '@constants/layoutEnter/layoutEnter';

import '@components/passRecovery/passRecForm/passRecForm.css';
import { EnterText } from '../../configFile/enterText';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { RequestChangePassword } from '@redux/api/session/types';
import { useChangePasswordMutation } from '@redux/api/session/apiSession';

import { regExp } from '@constants/regExp';
import { sessionActions } from '@store/slice/session.ts';
import { responseResultChangePassword } from './responseResultChangePassword';

export const PassRecForm: React.FC = () => {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const [changePassword] = useChangePasswordMutation();

    const onFinish = ({ password, confirmPassword }: RequestChangePassword) => {
        dispatch(sessionActions.setIsLoading(true));

        changePassword({ password, confirmPassword }).then((result) => {
            sessionStorage.setItem('password', password);
            sessionStorage.setItem('confirmPassword', confirmPassword);

            responseResultChangePassword(result, dispatch);
        });
    };

    return (
        <LayoutEnter>
            <div className='recovery_content_form'>
                <Form
                    className='recovery_form'
                    form={form}
                    onFinish={onFinish}
                    initialValues={{ remember: true }}
                >
                    <div className='title_rec'>
                        <h1>{EnterText.RECOVERY}</h1>
                    </div>

                    <div className='inputs'>
                        <Form.Item
                            name='password'
                            className='password'
                            rules={[
                                {
                                    required: true,
                                    message: '',
                                },
                                {
                                    pattern: regExp.password,
                                    message:
                                        'Пароль не менее 8 символов, с заглавной буквой и цифрой',
                                },
                            ]}
                            help={
                                <div
                                    style={{
                                        fontSize: '12px',
                                        margin: '0',
                                        padding: '0',
                                    }}
                                >
                                    {EnterText.PASS}
                                </div>
                            }
                        >
                            <Input.Password
                                size='large'
                                placeholder={EnterText.NEW_PASS}
                                data-test-id='change-password'
                            />
                        </Form.Item>
                        <Form.Item
                            name='confirmPassword'
                            className='confirmPassword'
                            rules={[
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        const passwordFieldValue = getFieldValue('password');
                                        if (!passwordFieldValue || passwordFieldValue === value) {
                                            return Promise.resolve();
                                        } else {
                                            return Promise.reject('Пароли не совпадают');
                                        }
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                size='large'
                                placeholder={EnterText.PASS_RE}
                                data-test-id='change-confirm-password'
                            />
                        </Form.Item>
                    </div>
                    <Form.Item className='login-form-button'>
                        <Button
                            size='large'
                            type='primary'
                            htmlType='submit'
                            style={{
                                marginBottom: '16px',
                                background: '#2F54EB',
                                width: '100%',
                            }}
                            data-test-id='change-submit-button'
                        >
                            {EnterText.SAVE}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </LayoutEnter>
    );
};
