import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import "./header.css";

interface HeaderProps {
  
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__main">
            <a href="#!">Главная</a>
          </div>
          <div className="header__blocks">
           <div className="header__heading-left">
            <p>Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!</p>
           </div>
           <div className="header__heading-extra">
            <button> <SettingOutlined/>Настройки</button>
           </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;