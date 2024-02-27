import '@components/enter/login.css';

import { Tabs } from 'antd';

import { authPath } from '@components/configFile/authPath';
import { useLocation } from 'react-router-dom';
import { push } from 'redux-first-history';
import { useAppDispatch } from '@hooks/index';

const tabsAuthConfig = [
    {
        key: `${authPath.LOGIN}`,
        tab: 'Вход',
    },
    {
        key: `${authPath.REGISTER}`,
        tab: 'Регистрация',
    },
];

export const TabsEnter = () => {
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();

    const onTabClick = (activeKey: string) => {
        if (pathname !== activeKey) {
            dispatch(push(activeKey));
        }
    };

    return (
        <Tabs
            defaultActiveKey={pathname}
            centered
            onTabClick={onTabClick}
            items={tabsAuthConfig.map((tab) => ({
                label: tab.tab,
                key: tab.key,
            }))}
            className='tabs_cont'
        />
    );
};
