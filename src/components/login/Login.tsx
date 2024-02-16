import React from 'react';
import "./login.css";

import {Form, Input, Tabs, Checkbox, Button} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {GooglePlusOutlined} from '@ant-design/icons';

const Login: React.FC = () => {
  
  return (
      <div className="enter">
         <div className="container">
          <div className="logo_cont">
            <img src='./public/logo-enter.png' alt='logo' className='logo_enter'/>
          </div>
            
            <div className="form">
              <Tabs defaultActiveKey="1" className='tabs'>
                <Tabs.TabPane tab="Вход" key="1">
                  <Form 
                  className='login_form'
                  name="normal_login"
                  initialValues={{ remember: true }}
                  /*onFinish={onFinish}*/>

                    <Form.Item name="email" className='inp'>
                      <Input addonBefore="e-mail:" className='inp'/>
                    </Form.Item>
                    
                    <Form.Item name="password">
                      <Input.Password
                      placeholder="Пароль"
                      iconRender={visible => 
                        (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </Form.Item>
                    
                    <Form.Item>
                    <Form.Item name="remember" 
                    valuePropName="checked" 
                    noStyle>
                      <Checkbox >Запомнить меня</Checkbox>
                    </Form.Item>
                    <a className="login-formforgot" href="">
                      Забыли пароль?
                    </a>
                    </Form.Item>

                    <Form.Item>
                    <Button type="primary" 
                    htmlType="submit" 
                    className="login-form-button">
                      Войти
                    </Button>
                    
                    <Button type='default' 
                    className="login-form-button google">
                      <GooglePlusOutlined />
                      Войти через Google
                    </Button>
                  </Form.Item>

                    </Form>
                    
                    
                    </Tabs.TabPane>
                      <Tabs.TabPane tab="Регистрация" key="2">
                        <Form 
                        className='regist_form'
                        name="normal_login"
                        initialValues={{ remember: true }}
                        /*onFinish={onFinish}*/>

                          <Form.Item name="email">
                            <Input addonBefore="e-mail:"/>
                          </Form.Item>
                          
                          <Form.Item name="password" 
                          extra={
                          <div style={{ fontSize: '12px', margin: '0px',  padding: '0px'}}>
                            Пароль не менее 8 символов, с заглавной буквой и цифрой
                            </div>}>
                            <Input.Password
                            placeholder="Пароль"
                            iconRender={visible => 
                              (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
                          </Form.Item>

                  <Form.Item name="password" 
                rules={[{ required: true, 
                message: 'Please input your Password!' }]}>
                  <Input.Password
        placeholder="Повторите пароль"
        iconRender={visible => 
          (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" 
                    htmlType="submit" 
                    className="login-form-button">
                      Войти
                    </Button>
                    
                    <Button type='default' 
                    className="login-form-button google">
                      <GooglePlusOutlined />
                      Регистрация через Google
                    </Button>
                  </Form.Item>

                  </Form>
                  </Tabs.TabPane>
                  </Tabs>
                  
        </div>
      </div>
      </div>
  );
};

export default Login;