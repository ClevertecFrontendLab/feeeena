import React from 'react';
import { Menu } from 'antd';
import {CalendarTwoTone, HeartFilled, TrophyFilled, IdcardOutlined} from '@ant-design/icons';




const MenuList: React.FC = () => {
    return (
        <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <CalendarTwoTone className="menu-icon"/>,
            label: 'Календарь',
          },
          {
            key: '2',
            icon: <HeartFilled className="menu-icon"/>,
            label: 'Тренировки',
          },
          {
            key: '3',
            icon: <TrophyFilled className="menu-icon"/>,
            label: 'Достижения',
          },
          {
            key: '4',
            icon: <IdcardOutlined className="menu-icon"/>,
            label: 'Профиль',
          },
        ]}
      />
    
    );
  };

  export default MenuList;