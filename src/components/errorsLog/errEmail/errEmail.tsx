import React from 'react';
import { Button } from 'antd';
import LayoutEnter from '@constants/layoutEnter/layoutEnter';
import { ErrorsRec } from '@components/configFile/errorRec.tsx';

import './errEmail.css';

const ErrEmail: React.FC = () => {
    return (
        <LayoutEnter>
            <div className='err_Email'>
                <div className='err_Email_inner'>
                    <div className='img_cont'>
                        <img src='./public/Red.png' alt='img' />
                    </div>
                    <div className='text_cont'>
                        <h1>{ErrorsRec.EMAIL_NOT_FOUND}</h1>
                        <p>{ErrorsRec.EMAIL_NOT_FOUND_MESSAGE}</p>
                    </div>
                    <Button className='button_err_Email'>{ErrorsRec.REAPIT}</Button>;
                </div>
            </div>
        </LayoutEnter>
    );
};

export default ErrEmail;
