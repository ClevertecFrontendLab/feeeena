import { Layout } from 'antd';
import React from 'react';

import HeaderBox from '@components/header/HeaderBox';
import SiderBar from '@components/sider/SiderBar';
import { Content } from 'antd/lib/layout/layout';
import { Footer } from 'antd/lib/layout/layout';

import { Header } from 'antd/lib/layout/layout';
const {Sider} = Layout;
import './main-page.css';

 const MainPage: React.FC = () => {

    return (
        <>
        <Layout>
        <Sider><SiderBar/> </Sider>
        <Layout>
          <Header><HeaderBox/></Header>
          <Content/>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
        </>
    );
};
export default MainPage;
