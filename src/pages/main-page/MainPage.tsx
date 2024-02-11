import React,{useState} from 'react';

import { Button, Layout } from 'antd';
const { Sider, Header, Content } = Layout;

import './mainPage.css';
import "@components/sider/sider.css"

import HeaderBox from '@components/header/HeaderBox';

import ContentActions from '@components/content/ContentActions';
import ContentWrap from '@components/content/ContentWrap';
import ContentCards from '@components/content/ContentCards';
import FooterBox from '@components/footer/FooterBox';

import {MenuFoldOutlined,MenuUnfoldOutlined } from '@ant-design/icons';
import Logo from "@components/sider/Logo.tsx"
import MenuList from '@components/sider/MenuList';
const logoExpanded = "./public/Logo.png";
const logoCollapsed = "./public/fit.png";


 const MainPage: React.FC = () => { 
  const [collapsed, setCollapsed] = useState(false);
   return (
    <Layout className={`sider-layout main-page`} style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed} className="sider-bar">
          <Logo src={collapsed ? logoCollapsed : logoExpanded} />
          <MenuList />
        </Sider>
        <Layout >
          <Header className='header-content'><HeaderBox /></Header>
            <Content>
              <Button
              type='text'
              className={`trigger trigger-col`}
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              />
              <ContentActions/>
              
              <ContentWrap/>
              <ContentCards/>
              <FooterBox/>
              </Content>
              
        </Layout>
      </Layout>
   
        
     
    );
};
export default MainPage;