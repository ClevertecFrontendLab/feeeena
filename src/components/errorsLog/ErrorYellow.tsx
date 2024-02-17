import React from 'react';
import { Button } from 'antd';
import './errors.css';

import { ErrorType } from '../configFile/errors.tsx';
import { images } from '../configFile/images.tsx';

const ErrorYellow: React.FC = () => {
    return (
        <div className='enter'>
            <div className='err_cont'>
                <div className='error'>
                    <div className='error_icon_cont'>
                        <img src={images.YELLOW} alt='ERROR' className='error_icon' />
                    </div>

                    <div className='message_text'>
                        <h1 className='title_error'>{ErrorType.LOGIN_FAILED_TITLE}</h1>
                        <p className='message_error'>{ErrorType.LOGIN_FAILED_MESSAGE}</p>
                    </div>
                    <Button className='error-button'>{ErrorType.FAILED_REPEAT}</Button>
                </div>
            </div>
        </div>
    );
};

export default ErrorYellow;
