import React from 'react';
import { SettingOutlined } from '@ant-design/icons';

import { Layout, Breadcrumb, Button} from 'antd';

import '@pages/main-page/mainPage.css';

const { Header } = Layout;

const HeaderBox: React.FC = () => {
  return (
  <Header className='header-content'>
    <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item>Главная</Breadcrumb.Item>
    </Breadcrumb>
    <div className='container'>
        <div className='blocks'>
            <h1>
                Приветствуем тебя в CleverFit — приложении,
                <br /> которое поможет тебе добиться своей мечты!
            </h1>
        </div>
        <div className='setting'>
            <Button type='text' className='btn1'>
                <SettingOutlined className='set-icon' />
                <p className='ok'>Настройки</p>
            </Button>
        </div>
    </div>
</Header>
  );
};

export default HeaderBox;