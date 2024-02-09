import React, { useState } from 'react';

import { Button, Layout } from 'antd';
import {MenuFoldOutlined,MenuUnfoldOutlined } from '@ant-design/icons';

import "./Sider.css"
import Logo from "./Logo"
import MenuList from './MenuList';
import Exit from './Exit';

const {Sider,Content} = Layout;

const SiderBar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
     <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}> 
            <Logo />
            <MenuList/>
            <Exit/>
        </Sider>
        <Layout>
          <Content>
            <Button type='text' onClick={()=>setCollapsed(!collapsed)} icon={collapsed ? 
            <MenuUnfoldOutlined/> : <MenuFoldOutlined /> }
            />
          </Content>
        </Layout>
     </Layout>
    );
  };

  export default SiderBar;
  