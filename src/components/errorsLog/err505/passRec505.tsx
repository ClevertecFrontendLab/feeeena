import React from 'react';
import { Button } from 'antd';
import LayoutEnter from '@constants/layoutEnter.tsx';
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
                        <h1>Что-то пошло не так</h1>
                        <p>Произошла ошибка, попробуйте отправить форму ещё раз.</p>
                    </div>
                    <Button className='button_err_505'>Назад</Button>;
                </div>
            </div>
        </LayoutEnter>
    );
};

export default PassRec505;
