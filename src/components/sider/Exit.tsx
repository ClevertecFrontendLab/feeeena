import React from 'react';

import { Button } from 'antd';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { sessionActions } from '@store/slice/session';
import { push } from 'redux-first-history';
import { authPath } from '@components/configFile/authPath';

interface ExitProps {
    collapsed: boolean;
}

const Exit: React.FC<ExitProps> = ({ collapsed }) => {
    const dispatch = useAppDispatch();

    const onClick = () => {
        localStorage.removeItem('token');
        dispatch(sessionActions.setAuthorized(false));
        dispatch(push(authPath.LOGIN));
    };

    return (
        <div className='exit-divide'>
            {collapsed ? (
                <Button type='text' className='exit-button' onClick={onClick}>
                    <img src='./public/Exit-icon.png' alt='exit icon' className='exit-icon' />
                </Button>
            ) : (
                <Button type='text' className='exit-button' onClick={onClick}>
                    <img src='./public/Exit-icon.png' alt='exit icon' className='exit-icon' />
                    Выход
                </Button>
            )}
        </div>
    );
};

export default Exit;
