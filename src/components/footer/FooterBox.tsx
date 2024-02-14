import React from 'react';

import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { Button } from 'antd';

const Footer: React.FC = () => {
  return (
    <div className="cont">
      <div className="footer-container">
         <Button type="text" className="button-reviews">Смотреть отзывы</Button>
       <div className="footer-right">
        <div className="footer-row">
          <p className="download">Скачать на телефон</p>
          <p className="pro">Доступно в PRO-тарифе</p>
          </div>
          
          <div className="footer-buttons">
          <button className="button-black android"><AndroidFilled /> Android OS</button>
          <button className="button-black aplle"><AppleFilled /> Apple IOS</button>
        </div>
      </div>
      </div>
    </div>
    
  );
};

export default Footer;