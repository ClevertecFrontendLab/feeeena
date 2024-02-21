import React, { useState } from 'react';
import { message, Input } from 'antd';
import LayoutEnter from '@constants/layoutEnter/layoutEnter';
import '@components/passRecovery/passRecovery.css';
import RecoveryCont from '@constants/recovery/recoveryCont';

const PassRecovery: React.FC = () => {
    const [email, setEmail] = useState('');
    const [headerText, setHeaderText] = useState('Введите код для восстановления аккаунта');
    const [paragraphText, setParagraphText] = useState(
        'Мы отправили вам на e-mail ' + email + ' шестизначный код. Введите его в поле ниже.',
    );
    const [iconSrc, setIconSrc] = useState('./public/Blue.png');
    const [inputColor, setInputColor] = useState('');

    const handleCodeSubmit = () => {
        if (email) {
        } else {
            setHeaderText('Неверный код. Введите код для восстановления аккауанта');
            setParagraphText(
                ' Мы отправили вам на e-mail ' +
                    email +
                    'шестизначный код. Введите его в поле ниже.',
            );
            setIconSrc('./public/Red.png');
            setInputColor('red');
        }
    };

    return (
        <LayoutEnter>
            <RecoveryCont>
                <div className='recovery_content'>
                    <div className='result'>
                        <div className='icon_cont_rec'>
                            <img src={iconSrc} alt='icon' className='recovery_icon' />
                        </div>

                        <div className='text'>
                            <h1>{headerText}</h1>
                            <p>{paragraphText}</p>
                        </div>
                    </div>

                    <div className='group_inputs'>
                        <Input.Group compact className='group_inputs'>
                            {[...Array(6)].map((_, index) => (
                                <Input
                                    key={index}
                                    className='custom-input'
                                    maxLength={1}
                                    style={{ borderColor: inputColor }}
                                />
                            ))}
                        </Input.Group>
                    </div>
                    <p className='subtitle_rec'>Не пришло письмо? Проверьте папку Спам.</p>
                </div>
            </RecoveryCont>
        </LayoutEnter>
    );
};

export default PassRecovery;
