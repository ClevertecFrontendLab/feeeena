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
            icon: <CalendarTwoTone />,
            label: 'Календарь',
          },
          {
            key: '2',
            icon: <HeartFilled />,
            label: 'Тренировки',
          },
          {
            key: '3',
            icon: <TrophyFilled />,
            label: 'Достижения',
          },
          {
            key: '4',
            icon: <IdcardOutlined />,
            label: 'Профиль',
          },
        ]}
      />
    
    );
  };

  export default MenuList;