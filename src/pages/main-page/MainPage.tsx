import React,{useState, useEffect } from 'react';

import { Button, Layout } from 'antd';
const { Sider} = Layout;

import './mainPage.css';


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
  const [collapsedWidth, setCollapsedWidth] = useState(64);
  const [expandedWidth, setExpandedWidth] = useState(200);
  const [siderTestId, setSiderTestId] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const newCollapsedWidth = screenWidth <= 360 ? 0 : 64;
      const newExpandedWidth = screenWidth <= 360 ? 106 : 200;

      setCollapsedWidth(newCollapsedWidth);
      setExpandedWidth(newExpandedWidth);

      const newSiderTestId = screenWidth <= 360 ? 'sider-switch-mobile' : 'sider-switch';
      setSiderTestId(newSiderTestId);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout className={`sider-layout main-page`} style={{ minHeight: '100vh' }}>
      <Sider breakpoint="sm" trigger={null} collapsible collapsed={collapsed} collapsedWidth={collapsedWidth} width={expandedWidth} className="sider-bar">
        <Button
          type='text'
          className={`trigger trigger-col`}
          onClick={() => setCollapsed(!collapsed)}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          data-test-id={siderTestId}
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