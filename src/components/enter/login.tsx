import { Form, Input, Button, Checkbox } from 'antd';
import { EyeTwoTone, EyeInvisibleOutlined, GooglePlusOutlined } from '@ant-design/icons';
import '@components/enter/login.css';
import { EnterText } from '../configFile/enterText';
const Login = () => {
    return (
        <Form className='login_form' name='normal_login' initialValues={{ remember: true }}>
            <div className='inputs'>
                <Form.Item name='email'>
                    <Input addonBefore='e-mail:' size='large' />
                </Form.Item>

                <Form.Item name='password'>
                    <Input.Password
                        size='large'
                        placeholder='Пароль'
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
