import { Layout } from 'antd';
import React from 'react';

import Header from '@components/header/Header';
import SiderBar from '@components/sider/Sider';
import { Content } from 'antd/lib/layout/layout';
import { Footer } from 'antd/lib/layout/layout';


import './main-page.css';

 const MainPage: React.FC = () => {

    return (
        <>
        <Layout>
        <SiderBar>Sider</SiderBar>
        <Layout>
          <Header></Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
        </>
    );
};
export default MainPage;
