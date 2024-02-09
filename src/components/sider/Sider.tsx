import React, { useState } from 'react';
import { Layout } from 'antd';

import Logo from "/Logo.svg"
import "./Sider.css"
import MenuList from './MenuList';

const {Sider} = Layout;
interface SiderBarProps {
    children: React.ReactNode;
  }

const SiderBar: React.FC<SiderBarProps> = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
     <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}> 
            <Logo />
            <MenuList/>
        </Sider>
        <Content>
          
        </Content>
     </Layout>
    );
  };

  export default SiderBar;
  