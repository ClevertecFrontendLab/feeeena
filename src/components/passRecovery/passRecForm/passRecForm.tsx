import React from 'react';
import { Input, Form, Button } from 'antd';
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import LayoutEnter from '@constants/layoutEnter/layoutEnter';
import '@components/passRecovery/passRecForm/passRecForm.css';
import { EnterText } from '../../configFile/enterText';

interface FormValues {
    password: string;
    confirmPassword: string;
}

const PassRecForm: React.FC = () => {
    const [isButtonDisabled, setButtonDisabled] = React.useState(false);
    const [isFormValid, setFormValid] = React.useState(true);
    const [form] = Form.useForm();

    const onFinish = (values: FormValues) => {
        console.log('Отправленные данные:', values);
        const { password, confirmPassword } = values;
        if (!password || !confirmPassword || password !== confirmPassword) {
            setFormValid(false);
            setButtonDisabled(true);
            return;
        }
        setFormValid(true);
        setButtonDisabled(false);
    };

    const validatePassword = (_: any, value: string) => {
        if (value.length >= 8 && /^(?=.*[A-Z])(?=.*\d)/.test(value)) {
            return Promise.resolve();
        }
        return Promise.reject('');
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
                                placeholder={EnterText.NEW_PASS}
                                iconRender={(visible) =>
                                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                }
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
                                placeholder={EnterText.PASS_RE}
                                iconRender={(visible) =>
                                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                }
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
                            disabled={!isFormValid}
                        >
                            {EnterText.SAVE}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </LayoutEnter>
    );
};

export default PassRecForm;
