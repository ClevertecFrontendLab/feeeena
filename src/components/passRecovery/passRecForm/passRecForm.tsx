import React from 'react';

import { Input, Form, Button } from 'antd';
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';

import LayoutEnter from '@constants/layoutEnter.tsx';

import '@components/passRecovery/passRecForm/passRecForm.css';
import { EnterText } from '../../configFile/enterText';

const PassRecForm: React.FC = () => {
    return (
        <LayoutEnter>
            <div className='recovery_content_form'>
                <Form className='recovery_form'>
                    <div className='title_rec'>
                        <h1>{EnterText.RECOVERY}</h1>
                    </div>

                    <div className='inputs'>
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
                                placeholder={EnterText.NEW_PASS}
                                iconRender={(visible) =>
                                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                }
                            />
                        </Form.Item>
                        <Form.Item name='password'>
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
