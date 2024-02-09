import React, { useState } from 'react';

import { Button, Layout } from 'antd';
import {MenuFoldOutlined,MenuUnfoldOutlined } from '@ant-design/icons';


import "./sider.css";
import "@pages/main-page/mainPage.css"
import Logo from "./Logo"
import MenuList from './MenuList';
const logoExpanded = "./public/Logo.png";
const logoCollapsed = "./public/fit.png";

const {Sider,Content} = Layout;

const SiderBar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <>
      <Layout>
        <Sider width={208} trigger={null} collapsible collapsed={collapsed} className="sider-bar"> 
        <Logo src={collapsed ? logoCollapsed : logoExpanded} />
            <MenuList />
        </Sider>
        <Layout >
          <Content>
            <Button type='text' className='trigger' 
            onClick={()=>setCollapsed(!collapsed)} icon={collapsed ? 
            <MenuUnfoldOutlined/> : <MenuFoldOutlined /> }
            />
          </Content>
        </Layout>
     </Layout>
      </>
     
    );
  };

  export default SiderBar;
  