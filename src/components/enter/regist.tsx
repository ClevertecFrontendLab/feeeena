import { Form, Input, Button } from 'antd';
import { EyeTwoTone, EyeInvisibleOutlined, GooglePlusOutlined } from '@ant-design/icons';
import '@components/enter/login.css';
import { EnterText } from '../configFile/enterText';

const Registration = () => {
    return (
        <Form className='regist_form' name='normal_login' initialValues={{ remember: true }}>
            <div className='inputs'>
                <Form.Item name='email'>
                    <Input addonBefore='e-mail:' size='large' />
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
                            {EnterText.PASS}
                        </div>
                    }
                >
                    <Input.Password
                        size='large'
                        placeholder='Пароль'
                        iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                    />
                </Form.Item>

                <Form.Item name='password'>
                    <Input.Password
                        size='large'
                        placeholder='Повторите пароль'
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
