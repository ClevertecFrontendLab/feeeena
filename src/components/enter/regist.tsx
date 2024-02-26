import { Form, Input, Button } from 'antd';
import { useState } from 'react';
import { GooglePlusOutlined } from '@ant-design/icons';

import { EnterText } from '../configFile/enterText';
import { regExp } from '@constants/regExp';
import { useRegisterMutation } from '@redux/api/session/apiSession';
import { RequestRegister } from '@redux/api/session/types';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';

import { sessionActions } from '@store/slice/session';

import { responseResultRegister } from './responseResultRegister';

export const Registration = () => {
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [form] = Form.useForm();
    const [register] = useRegisterMutation();
    const dispatch = useAppDispatch();

    const validForm = () => {
        const email = form.getFieldValue('email');
        const password = form.getFieldValue('password');
        const passwordConfirm = form.getFieldValue('confirmPassword');

        if (
            regExp.email.test(email) &&
            regExp.password.test(password) &&
            password === passwordConfirm
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    };

    const onFinish = ({ email, password }: RequestRegister) => {
        dispatch(sessionActions.setIsLoading(true));
        register({ email, password }).then((result) => {
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('password', password);

            responseResultRegister(result, dispatch);
        });
    };

    return (
        <Form
            className='regist_form'
            name='normal_login'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onChange={validForm}
            form={form}
        >
            <div className='inputs'>
                <Form.Item
                    name='email'
                    rules={[{ required: true }, { pattern: regExp.email, message: '' }]}
                    help={''}
                >
                    <Input addonBefore='e-mail:' size='large' data-test-id='registration-email' />
                </Form.Item>

                <Form.Item
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: '',
                        },
                        {
                            pattern: regExp.password,
                            message: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
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
                        placeholder={EnterText.PASS_I}
                        data-test-id='registration-password'
                    />
                </Form.Item>

                <Form.Item
                    name='confirmPassword'
                    dependencies={['password']}
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
                        data-test-id='registration-confirm-password'
                    />
                </Form.Item>
            </div>

            <Form.Item>
                <Button
                    size='large'
                    type='primary'
                    htmlType='submit'
                    className='login-form-button button-submit '
                    disabled={isButtonDisabled}
                    data-test-id='registration-submit-button'
                >
                    {EnterText.ENTER}
                </Button>

                <Button
                    size='large'
                    type='default'
                    className='login-form-button'
                    style={{
                        backgroundColor: 'var(--white)',
                    }}
                >
                    <GooglePlusOutlined />
                    {EnterText.REFISTER_VIA_GOOGLE}
                </Button>
            </Form.Item>
        </Form>
    );
};
