import React from 'react';
import { Menu } from 'antd';
import {CalendarOutlined, 
  HeartOutlined, 
  TrophyOutlined, 
  IdcardOutlined} from '@ant-design/icons';
import "./sider.css";
import Exit from './Exit';
interface MenuListProps {
  style?: string; 
}


const MenuList: React.FC<MenuListProps> = ({style}) => {
    return (
        <Menu 
       className='menu-items'
        mode="inline"
        items={[
          {
            key: '1',
            icon: <CalendarOutlined className="menu-icon"/>,
            label: 'Календарь',
          },
          {
            key: '2',
            icon: <HeartOutlined className="menu-icon"/>,
            label: 'Тренировки',
          },
          {
            key: '3',
            icon: <TrophyOutlined className="menu-icon"/>,
            label: 'Достижения',
          },
          {
            key: '4',
            icon: <IdcardOutlined className="menu-icon"/>,
            label: 'Профиль',
          },
          {
            key: '5',
            icon: <Exit style="box-shadow: inset 0 1px 0 0 #f0f0f0;"/>,
            label: 'Выход',
          },
        ]}
      />
    
    );
  };

  export default MenuList;