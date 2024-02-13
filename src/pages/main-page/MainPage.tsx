import React,{useState} from 'react';

import { Button, Layout } from 'antd';
const { Sider} = Layout;

import './mainPage.css';
import "@components/sider/sider.css"

import HeaderBox from '@components/header/HeaderBox';


import Exit from '@components/sider/Exit';
import ContentBar from '@components/content/contentBar';

import {MenuFoldOutlined,MenuUnfoldOutlined } from '@ant-design/icons';
import Logo from "@components/sider/Logo.tsx"
import MenuList from '@components/sider/MenuList';
const logoExpanded = "./public/Logo.png";
const logoCollapsed = "./public/fit.png";


 const MainPage: React.FC = () => { 
  const [collapsed, setCollapsed] = useState(false);
   return (
    <Layout className={`sider-layout main-page`} style={{ minHeight: '100vh' }}>
        <Sider breakpoint={"sm"} collapsedWidth={64}  trigger={null} collapsible collapsed={collapsed} className="sider-bar">
        <Button 
              type='text'
              className={`trigger trigger-col`}
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined />}
              />
          <Logo src={collapsed ? logoCollapsed : logoExpanded} />
          <MenuList />
          <Exit collapsed={collapsed} />
        </Sider>
        <Layout >
          <HeaderBox /> 
          <ContentBar/>
        </Layout>
      </Layout>
   
    );
};
export default MainPage;