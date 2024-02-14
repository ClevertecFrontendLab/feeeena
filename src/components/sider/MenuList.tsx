import React from 'react';
import { Menu } from 'antd';
import {CalendarTwoTone, 
  HeartFilled, 
  TrophyFilled, 
  IdcardOutlined} from '@ant-design/icons';

const MenuList: React.FC = () => {
  const items = [
    {
      key: '1',
      icon: <CalendarTwoTone className="menu-icon" />,
      label: 'Календарь',
    },
    {
      key: '2',
      icon: <HeartFilled className="menu-icon" />,
      label: 'Тренировки',
    },
    {
      key: '3',
      icon: <TrophyFilled className="menu-icon" />,
      label: 'Достижения',
    },
    {
      key: '4',
      icon: <IdcardOutlined className="menu-icon" />,
      label: 'Профиль',
    },
  ];
  return (
    <Menu mode="inline" className="menu-items" style={{ width: '100%', fontStyle: 'normal' }}>
      {items.map(item => (
        <Menu.Item key={item.key} icon={item.icon}>{item.label}</Menu.Item>
      ))}
    </Menu>
   
  );
};

export default MenuList;