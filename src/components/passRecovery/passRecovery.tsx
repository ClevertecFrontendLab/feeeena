import React from 'react';
import { useState } from 'react';
import { message, Input } from 'antd';
import LayoutEnter from '@constants/layoutEnter/layoutEnter';
import '@components/passRecovery/passRecovery.css';
import RecoveryCont from '@constants/recovery/recoveryCont';

const PassRecovery: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleCodeSubmit = () => {
        if (email) {
            message.success('Код отправлен на ' + email);
        } else {
            message.error('Введите корректный email');
        }
    };
    return (
        <LayoutEnter>
            <RecoveryCont>
                <div className='recovery_content'>
                    <div className='result'>
                        <div className='icon_cont_rec'>
                            <img src='./public/Blue.png' alt='icon' className='recovery_icon' />
                        </div>

                        <div className='text'>
                            <h1>
                                Введите код <br /> для восстановления аккауанта
                            </h1>
                            <p>
                                Мы отправили вам на e-mail <span className='email'>{email}</span>{' '}
                                <br />
                                шестизначный код. Введите его в поле ниже.
                            </p>
                        </div>
                    </div>
                    <div className='group_inputs'>
                        <Input.Group compact className='group_inputs'>
                            <Input className='custom-input' maxLength={1} />
                            <Input className='custom-input' maxLength={1} />
                            <Input className='custom-input' maxLength={1} />
                            <Input className='custom-input' maxLength={1} />
                            <Input className='custom-input' maxLength={1} />
                            <Input className='custom-input' maxLength={1} />
                        </Input.Group>
                    </div>
                    <p className='subtitle_rec'>Не пришло письмо? Проверьте папку Спам.</p>
                </div>
            </RecoveryCont>
        </LayoutEnter>
    );
};

export default PassRecovery;
