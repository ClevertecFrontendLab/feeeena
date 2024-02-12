import React from 'react';

import { Layout } from 'antd';
const {Content } = Layout;


import "@components/content/content.css"



import ContentActions from '@components/content/ContentActions';
import ContentWrap from '@components/content/ContentWrap';
import ContentCards from '@components/content/ContentCards';
import FooterBox from '@components/footer/FooterBox';
 const ContentBar: React.FC = () => { 
 
   return (
     <Content>
        <div className='content'>
        <ContentActions/>
        <ContentWrap/>
        <ContentCards/>
        </div>
        <div className="foot">
          <FooterBox/>
        </div>
        
     </Content>
    );
};
export default ContentBar;