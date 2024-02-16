import React from 'react';
import './login.css';

import { Form, Input, Tabs, Checkbox, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { GooglePlusOutlined } from '@ant-design/icons';

const Login: React.FC = () => {
    const isSmallScreen = window.innerWidth <= 360;
    return (
        <div className='enter'>
            <div className='container'>
                <div className='logo_cont'>
                    <img
                        src={
                            isSmallScreen
                                ? './public/logo-enter-small.png'
                                : './public/logo-enter.png'
                        }
                        alt='logo'
                        className='logo_enter'
                    />
                </div>

                <div className='form'>
                    <div
                        className='tabs'
                        style={{ display: 'flex', justifyContent: 'space-between' }}
                    >
                        <Tabs defaultActiveKey='1' className='tabs'>
                            <Tabs.TabPane tab='Вход' key='1'>
                                <Form
                                    className='login_form'
                                    name='normal_login'
                                    initialValues={{ remember: true }}
                                    /*onFinish={onFinish}*/
                                >
                                    <div className='inputs'>
                                        <Form.Item name='email' className='inp'>
                                            <Input addonBefore='e-mail:' className='inp' />
                                        </Form.Item>

                                        <Form.Item name='password'>
                                            <Input.Password
                                                className='inp'
                                                placeholder='Пароль'
                                                iconRender={(visible) =>
                                                    visible ? (
                                                        <EyeTwoTone />
                                                    ) : (
                                                        <EyeInvisibleOutlined />
                                                    )
                                                }
                                            />
                                        </Form.Item>
                                    </div>

                                    <Form.Item>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                marginTop: '12px',
                                                marginBottom: '0',
                                                paddingTop: '0',
                                            }}
                                            className='login-formforgot'
                                        >
                                            <Form.Item
                                                name='remember'
                                                valuePropName='checked'
                                                style={{
                                                    color: '#2F54EB',
                                                    fontWeight: '400',
                                                    margin: '0',
                                                }}
                                            >
                                                <Checkbox>Запомнить меня</Checkbox>
                                            </Form.Item>
                                            <a className='link_enter' href=''>
                                                Забыли пароль?
                                            </a>
                                        </div>
                                    </Form.Item>

                                    <div style={{ width: '100%', borderRadius: '2px' }}>
                                        <Form.Item>
                                            <Button
                                                type='primary'
                                                htmlType='submit'
                                                className='login-form-button'
                                                style={{
                                                    marginBottom: '16px',
                                                    background: '#2F54EB',
                                                }}
                                            >
                                                Войти
                                            </Button>

                                            <Button
                                                type='default'
                                                className='login-form-button google'
                                            >
                                                <GooglePlusOutlined />
                                                Войти через Google
                                            </Button>
                                        </Form.Item>
                                    </div>
                                </Form>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab='Регистрация' key='2'>
                                <Form
                                    className='regist_form'
                                    name='normal_login'
                                    initialValues={{ remember: true }}
                                    /*onFinish={onFinish}*/
                                >
                                    <div className='inputs'>
                                        <Form.Item name='email' className='inp'>
                                            <Input addonBefore='e-mail:' />
                                        </Form.Item>

                                        <Form.Item
                                            name='password'
                                            extra={
                                                <div
                                                    style={{
                                                        fontSize: '12px',
                                                        margin: '0px',
                                                        padding: '0px',
                                                    }}
                                                >
                                                    Пароль не менее 8 символов, с заглавной буквой и
                                                    цифрой
                                                </div>
                                            }
                                        >
                                            <Input.Password
                                                className='inp'
                                                placeholder='Пароль'
                                                iconRender={(visible) =>
                                                    visible ? (
                                                        <EyeTwoTone />
                                                    ) : (
                                                        <EyeInvisibleOutlined />
                                                    )
                                                }
                                            />
                                        </Form.Item>

                                        <Form.Item name='password'>
                                            <Input.Password
                                                className='inp'
                                                placeholder='Повторите пароль'
                                                iconRender={(visible) =>
                                                    visible ? (
                                                        <EyeTwoTone />
                                                    ) : (
                                                        <EyeInvisibleOutlined />
                                                    )
                                                }
                                            />
                                        </Form.Item>
                                    </div>

                                    <div style={{ width: '100%', borderRadius: '2px' }}>
                                        <Form.Item>
                                            <Button /* Регистрация*/
                                                type='primary'
                                                htmlType='submit'
                                                className='login-form-button'
                                                style={{
                                                    marginBottom: '16px',
                                                    background: '#2F54EB',
                                                }}
                                            >
                                                Войти
                                            </Button>

                                            <Button
                                                type='default'
                                                className='login-form-button google'
                                            >
                                                <GooglePlusOutlined />
                                                Регистрация через Google
                                            </Button>
                                        </Form.Item>
                                    </div>
                                </Form>
                            </Tabs.TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
