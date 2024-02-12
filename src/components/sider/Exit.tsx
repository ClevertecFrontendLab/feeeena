import React from 'react';
import "./sider.css";
import { Button } from 'antd';

interface ExitProps {
    collapsed: boolean;
}

const Exit: React.FC<ExitProps> = ({ collapsed }) => {
    return (
        <div className="exit-divide">
            {collapsed ? (
                <Button type='text' className='exit-button'>
                    <img src="./public/Exit-icon.png" alt="exit icon" className='exit-icon' />
                </Button>
            ) : (
                <Button type='text' className='exit-button'>
                    <img src="./public/Exit-icon.png" alt="exit icon" className='exit-icon' />
                    Выход
                </Button>
            )}
        </div>
    );
};

export default Exit;