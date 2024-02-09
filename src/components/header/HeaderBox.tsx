import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import "./header.css";
import { Layout, Breadcrumb, Button} from 'antd';
import "./header.css";
import '@pages/main-page/mainPage.css';

const { Header } = Layout;

const HeaderBox: React.FC = () => {
  return (
  <Header className="header-content">
    <div className="container">
      <Breadcrumb className='breadcrumb'>
          <Breadcrumb.Item>Главная</Breadcrumb.Item>
        </Breadcrumb>
        <div className="blocks">
          <h1>Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!</h1>
          <Button type="text" className='btn'><SettingOutlined/>Настройки</Button>
        </div>
    </div>
        
    </Header>
  );
};

export default HeaderBox;