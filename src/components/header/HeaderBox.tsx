import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import "./header.css";
import { Layout, Breadcrumb } from 'antd';
import "./header.css";
import '@pages/main-page/mainPage.css';

const { Header } = Layout;

const HeaderBox: React.FC = () => {
  return (
  <Header className="header-content">
        <Breadcrumb style={{ margin: '16px 0' }} className='breadcrumb'>
          <Breadcrumb.Item>Главная</Breadcrumb.Item>
        </Breadcrumb>
        <div className="blocks">
          Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!
          <button> <SettingOutlined/>Настройки</button>
        </div>
    </Header>
  );
};

export default HeaderBox;