import { Form, Input, Button } from 'antd';
import { useState } from 'react';
import { EyeTwoTone, EyeInvisibleOutlined, GooglePlusOutlined } from '@ant-design/icons';
import '@components/enter/login.css';
import { EnterText } from '../configFile/enterText';

interface FormValues {
    email: string;
    password: string;
    confirmPassword: string;
}

const validateEmail = (_: any, value: string) => {
    if (!value || value.endsWith('.com') || value.endsWith('.ru')) {
        return Promise.resolve();
    }
    return Promise.reject('');
};

const validatePassword = (_: any, value: string) => {
    if (value.length >= 8 && /^(?=.*[A-Z])(?=.*\d)/.test(value)) {
        return Promise.resolve();
    }
    return Promise.reject('');
};

const Registration = () => {
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [isFormValid, setFormValid] = useState(true);
    const [form] = Form.useForm();

    const onFinish = (values: FormValues) => {
        console.log('Отправленные данные:', values);
        const { email, password, confirmPassword } = values;
        if (!email || !password || !confirmPassword || password !== confirmPassword) {
            setFormValid(false);
            setButtonDisabled(true);
            return;
        }
        setFormValid(true);
        setButtonDisabled(false);
    };

    return (
        <Form
            className='regist_form'
            name='normal_login'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            form={form}
        >
            <div className='inputs'>
                <Form.Item
                    name='email'
                    rules={[{ required: true }, { type: 'email' }, { validator: validateEmail }]}
                    validateStatus={
                        isButtonDisabled && !form.getFieldValue('email') ? 'error' : undefined
                    }
                    help={''}
                >
                    <Input addonBefore='e-mail:' size='large' />
                </Form.Item>

                <Form.Item
                    name='password'
                    rules={[{ required: true }, { validator: validatePassword }]}
                    help={
                        <div
                            style={{
                                fontSize: '12px',
                                margin: '0px',
                                padding: '0px',
                            }}
                        >
                            {EnterText.PASS}
                        </div>
                    }
                    validateStatus={
                        isButtonDisabled &&
                        (!form.getFieldValue('password') ||
                            form.getFieldValue('password') !==
                                form.getFieldValue('confirmPassword'))
                            ? 'error'
                            : undefined
                    }
                >
                    <Input.Password
                        size='large'
                        placeholder={EnterText.PASS_I}
                        iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
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
                        iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                    />
                </Form.Item>
            </div>

            <Form.Item>
                <Button
                    size='large'
                    type='primary'
                    htmlType='submit'
                    className='login-form-button'
                    style={{
                        marginBottom: '16px',
                        background: '#2F54EB',
                    }}
                    disabled={!isFormValid}
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

export default Registration;
