import React from 'react';
import { Menu } from 'antd';
import {CalendarTwoTone, 
  HeartFilled, 
  TrophyFilled, 
  IdcardOutlined} from '@ant-design/icons';
import "./sider.css";
import Exit from './Exit';



const MenuList: React.FC = () => {
  return (
    <Menu mode="inline" className="menu-items">
      <Menu.Item key="1" icon={<CalendarTwoTone className="menu-icon" />}>
        Календарь
      </Menu.Item>
      <Menu.Item key="2" icon={<HeartFilled className="menu-icon" />}>
        Тренировки
      </Menu.Item>
      <Menu.Item key="3" icon={<TrophyFilled className="menu-icon" />}>
        Достижения
      </Menu.Item>
      <Menu.Item key="4" icon={<IdcardOutlined className="menu-icon" />}>
        Профиль
      </Menu.Item>
      <Menu.Item key="spacer" style={{ height: '635px' }} disabled></Menu.Item>
      <Menu.Item key="5" icon={<Exit />} className='exit'>
        Выход
      </Menu.Item>
    </Menu>
  );
};

  export default MenuList;