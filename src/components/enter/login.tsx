import { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { EyeTwoTone, EyeInvisibleOutlined, GooglePlusOutlined } from '@ant-design/icons';
import '@components/enter/login.css';
import { EnterText } from '../configFile/enterText';

interface FormValues {
    email: string;
    password: string;
    remember: boolean;
}

const Login = () => {
    const [isEmailValid, setEmailValid] = useState(true);

    const onFinish = (values: FormValues) => {
        console.log('Отправленные данные:', values);
    };

    const validateEmail = (_: any, value: string) => {
        if (!value || value.endsWith('.com') || value.endsWith('.ru')) {
            setEmailValid(true);
            return Promise.resolve();
        }
        setEmailValid(false);
        return Promise.reject();
    };

    return (
        <Form
            className='login_form'
            name='normal_login'
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <div className='inputs'>
                <Form.Item
                    name='email'
                    rules={[{ required: true }, { validator: validateEmail }]}
                    help=''
                >
                    <Input
                        addonBefore='e-mail:'
                        size='large'
                        style={{ borderColor: isEmailValid ? '#2f54eb' : 'red', color: '#2f54eb' }}
                    />
                </Form.Item>

                <Form.Item
                    name='password'
                    rules={[{ required: true }]}
                    style={{ borderColor: '#2f54eb', color: '#2f54eb' }}
                    help=''
                >
                    <Input.Password
                        size='large'
                        placeholder={EnterText.PASS_I}
                        iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                    />
                </Form.Item>
            </div>

            <Form.Item>
                <div className='remember_forgot'>
                    <Form.Item name='remember' className='rememberMe' valuePropName='checked'>
                        <Checkbox>{EnterText.REMEMBER_ME}</Checkbox>
                    </Form.Item>
                    <a className='link_enter' href=''>
                        {EnterText.FORGOT}
                    </a>
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

export default Login;
