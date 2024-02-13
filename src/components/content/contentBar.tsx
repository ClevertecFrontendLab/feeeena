import React from 'react';

import { Layout } from 'antd';
const {Content } = Layout;

import ContentActions from '@components/content/ContentActions';
import ContentWrap from '@components/content/ContentWrap';
import ContentCards from '@components/content/ContentCards';
import FooterBox from '@components/footer/FooterBox';
 const ContentBar: React.FC = () => { 
 
   return (
     <Content>
     <div className='content'>
         <ContentActions />
         <ContentWrap />
         <ContentCards />
     </div>
     <FooterBox />
 </Content>
    );
};
export default ContentBar;