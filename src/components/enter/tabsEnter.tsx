import '@components/enter/login.css';

import { Tabs } from 'antd';
import Login from '@components/enter/login';
import Registration from '@components/enter/regist';
const TabsEnter = () => {
    return (
        <Tabs
            centered
            tabBarStyle={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Tabs.TabPane tab='Вход' key='1'>
                <Login />
            </Tabs.TabPane>
            <Tabs.TabPane tab='Регистрация' key='2'>
                <Registration />
            </Tabs.TabPane>
        </Tabs>
    );
};

export default TabsEnter;
