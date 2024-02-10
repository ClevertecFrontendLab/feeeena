import React, { useState } from 'react';

import { Button, Layout } from 'antd';
import {MenuFoldOutlined,MenuUnfoldOutlined } from '@ant-design/icons';


import "./sider.css";
import "@pages/main-page/mainPage.css"
import Logo from "./Logo"
import MenuList from './MenuList';
const logoExpanded = "./public/Logo.png";
const logoCollapsed = "./public/fit.png";


const {Sider} = Layout;

const SiderBar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout className={`sider-layout ${collapsed ? 'sider-collapsed' : ''}`}>
        <Sider trigger={null} collapsible collapsed={collapsed} className="sider-bar">
          <Logo src={collapsed ? logoCollapsed : logoExpanded} />
          <MenuList />
        </Sider>
        <div className="trigger-container">
          <Button
            type='text'
            className={`trigger btn-col ${collapsed ? 'collapsed' : ''}`}
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
        </div>
      </Layout>
    );
  };
  

  export default SiderBar;
  