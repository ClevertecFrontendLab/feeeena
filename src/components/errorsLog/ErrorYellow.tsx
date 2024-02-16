import React from 'react';
import { Button } from 'antd';
import './errors.css';

const ErrorYellow: React.FC = () => {
    return (
        <div className='enter'>
            <div className='err_cont'>
                <div className='error'>
                    <div className='error_icon_cont'>
                        <img src='./public/Yellow.png' alt='ERROR' className='error_icon' />
                    </div>

                    <div className='message_text'>
                        <h1 className='title_error'>Вход не выполнен</h1>
                        <p className='message_error'>Что-то пошло не так. Попробуйте еще раз</p>
                    </div>
                    <Button className='error-button'>Повторить</Button>
                </div>
            </div>
        </div>
    );
};

export default ErrorYellow;
