import { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';

import { EnterText } from '../configFile/enterText';
import '@components/enter/login.css';
import { regExp } from '@constants/regExp';
import { useCheckEmailMutation, useLoginMutation } from '@redux/api/session/apiSession';
import { RequestLogin } from '@redux/api/session/types';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { sessionActions } from '@store/slice/session';

import { responseResultLogin } from './responseResultLogin';
import { responseResultCheckEmail } from './responseCheckEmail';

export const Login = () => {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();

    const [isEmailValid, setEmailValid] = useState(false);

    const [checkEmailForgot] = useCheckEmailMutation();
    const [login] = useLoginMutation();

    const onForgotPasswordClick = async () => {
        try {
            const result = await checkEmail();

            if (result.email) {
                sessionStorage.setItem('email', result.email);
                dispatch(sessionActions.setIsLoading(true));
                await checkEmailForgot(result).then((result) => {
                    responseResultCheckEmail(result, dispatch);
                });
            }
        } catch (error) {
            console.log('Check e-mail', error);
        } finally {
            dispatch(sessionActions.setIsLoading(false));
        }
    };

    const checkEmail = async () => {
        try {
            const result = await form.validateFields(['email']);

            setEmailValid(false);
            return result;
        } catch (error) {
            setEmailValid(true);
            console.log('Valitade e-mail', error);
        }
    };

    const onFinish = ({ email, password, remember }: RequestLogin) => {
        dispatch(sessionActions.setIsLoading(true));

        login({ email, password }).then((result) => {
            responseResultLogin(result, remember, dispatch);
        });
    };

    return (
        <Form
            form={form}
            className='login_form'
            name='normal_login'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onChange={checkEmail}
        >
            <div className='inputs'>
                <Form.Item
                    name='email'
                    rules={[{ required: true }, { pattern: regExp.email, message: '' }]}
                    help=''
                >
                    <Input
                        addonBefore='e-mail:'
                        size='large'
                        style={{
                            borderColor: isEmailValid ? '#2f54eb' : 'red',
                            color: '#2f54eb',
                            maxWidth: '100%',
                            height: '40px',
                            boxSizing: 'border-box',
                        }}
                        data-test-id='login-email'
                    />
                </Form.Item>

                <Form.Item
                    name='password'
                    rules={[{ required: true, min: 8, message: '' }]}
                    style={{ borderColor: '#2f54eb', color: '#2f54eb' }}
                    help=''
                >
                    <Input.Password
                        size='large'
                        placeholder={EnterText.PASS_I}
                        data-test-id='login-password'
                    />
                </Form.Item>
            </div>

            <Form.Item>
                <div className='remember_forgot'>
                    <Form.Item name='remember' className='rememberMe' valuePropName='checked'>
                        <Checkbox data-test-id='login-remember'>{EnterText.REMEMBER_ME}</Checkbox>
                    </Form.Item>
                    <Button
                        type='link'
                        block
                        className='link_enter'
                        onClick={onForgotPasswordClick}
                        disabled={isEmailValid}
                        data-test-id='login-forgot-button'
                    >
                        {EnterText.FORGOT}
                    </Button>
                </div>
            </Form.Item>

            <div>
                <Form.Item>
                    <Button
                        type='primary'
                        htmlType='submit'
                        className='login-form-button'
                        size='large'
                        style={{
                            marginBottom: '16px',
                            background: '#2F54EB',
                        }}
                        data-test-id='login-submit-button'
                    >
                        {EnterText.ENTER}
                    </Button>

                    <Button
                        type='default'
                        size='large'
                        className='login-form-button'
                        style={{
                            backgroundColor: 'var(--white)',
                        }}
                        disabled={!isEmailValid}
                    >
                        <GooglePlusOutlined />
                        {EnterText.ENTER_VIA_GOOGLE}
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
};
