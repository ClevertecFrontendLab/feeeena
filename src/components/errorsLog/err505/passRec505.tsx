import React from 'react';
import { Button } from 'antd';
import LayoutEnter from '@constants/layoutEnter/layoutEnter';
import { ErrorsRec } from '@components/configFile/errorRec.tsx';
import './passRec505.css';

const PassRec505: React.FC = () => {
    return (
        <LayoutEnter>
            <div className='err_505_cont'>
                <div className='err_505_inner'>
                    <div className='img_cont'>
                        <img src='./public/image.png' alt='img' />
                    </div>
                    <div className='text_cont'>
                        <h1>{ErrorsRec.SMTH_HAPP}</h1>
                        <p>{ErrorsRec.SMTH_HAPP_MESSAGE}</p>
                    </div>
                    <Button className='button_err_505'>{ErrorsRec.BACK}</Button>;
                </div>
            </div>
        </LayoutEnter>
    );
};

export default PassRec505;
