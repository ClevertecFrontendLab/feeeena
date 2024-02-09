import React from 'react';

import { Layout } from 'antd';
const { Sider, Header, Content, Footer } = Layout;

import './mainPage.css';

import HeaderBox from '@components/header/HeaderBox';
import SiderBar from '@components/sider/SiderBar';
import ContentActions from '@components/content/ContentActions';
import ContentWrap from '@components/content/ContentWrap';
import ContentCards from '@components/content/ContentCards';
import FooterBox from '@components/footer/FooterBox';

 const MainPage: React.FC = () => {

    return (
      <div className="main-page">
        <Layout style={{ minHeight: '100vh' }}>
      <Sider className="sider-bar" style={{ zIndex: 1 }}>
        <SiderBar/>
        </Sider>
        <Layout >

          <Header style={{ zIndex: 2 }} className='header-content'>
            <HeaderBox />
            </Header>

          <Content >
            <ContentActions/>
            <ContentWrap/>
            <ContentCards/>
          </Content>

          <Footer >
            <FooterBox/>
          </Footer>

        </Layout>
      </Layout>
      </div>
    
        
    );
};
export default MainPage;