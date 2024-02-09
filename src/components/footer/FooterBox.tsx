import React from 'react';

import { AndroidFilled, AppleFilled } from '@ant-design/icons';

import "./footer.css";

const FooterBox: React.FC = () => {
  return (
    <div className="footer-container">
      <button className="button-reviews">Смотреть отзывы</button>
      <div className="footer-right">
        <div className="footer-row">
          <button className="button-download">Скачать на телефон</button>
        </div>
        <div className="footer-row">
          <p>Доступно в PRO-тарифе</p>
          <hr className="footer-line" /> 
        </div>
        <div className="footer-button">
          <button className="button-gray"><AndroidFilled /> Android OS</button>
          <button className="button-gray"><AppleFilled /> Apple IOS</button>
        </div>
      </div>
    </div>
  );
};

export default FooterBox;