import React, { useState } from 'react';

import LayoutEnter from '@constants/layoutEnter/layoutEnter';

import RecoveryCont from '@constants/recovery/recoveryCont';
import clsn from 'classnames';

import { authPath } from '@components/configFile/authPath';
import VerificationInput from 'react-verification-input';
import iconPassRecovery from '@public/Blue.png';
import iconPassRecoveryRed from '@public/Red.png';
import { useConfirmEmailMutation } from '@redux/api/session/apiSession';
import { SessionConfirmEmail } from '@redux/api/session/types';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';

const PassRecovery: React.FC = () => {
    const email = sessionStorage.getItem('email');
    const dispatch = useAppDispatch();
    const [confirmEmail] = useConfirmEmailMutation();

    const [headerText, setHeaderText] = useState('Введите код для восстановления аккаунта');
    const [paragraphText, setParagraphText] = useState(
        'Мы отправили вам на e-mail ' + email + ' шестизначный код. Введите его в поле ниже.',
    );
    const [iconSrc, setIconSrc] = useState(iconPassRecovery);
    const [valueVerification, setValueVarification] = useState('');
    const [isError, setIsError] = useState(false);

    const responseResult = (
        result: { data: SessionConfirmEmail } | { error: FetchBaseQueryError | SerializedError },
    ) => {
        if ('error' in result) {
            console.log('result', result);
            const error = result.error;
            if (typeof error === 'object' && error !== null && 'status' in error) {
                setHeaderText('Неверный код. Попробуйте еще раз.');
                setParagraphText(
                    ' Мы отправили вам на e-mail ' +
                        email +
                        'шестизначный код. Введите его в поле ниже.',
                );
                setIconSrc(iconPassRecoveryRed);
                setIsError(true);
                setValueVarification('');
            }
            return;
        }
        dispatch(push(authPath.NEW_PASS, { forgot: 'step_two' }));
    };

    const onComplete = (event: unknown) => {
        if (email && typeof event === 'string') {
            const confirmEmailForm = {
                email: email,
                code: event,
            };

            confirmEmail(confirmEmailForm).then((result) => {
                responseResult(result);
            });
        }
    };

    const onChange = (event: string) => {
        setValueVarification(event);
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
                        <VerificationInput
                            classNames={{
                                container: 'container-verif',
                                character: clsn('character-verif', {
                                    ['character--error']: isError,
                                }),
                                characterInactive: 'character--inactive',
                            }}
                            placeholder=''
                            value={valueVerification}
                            onChange={onChange}
                            onComplete={onComplete}
                            inputProps={{ 'data-test-id': 'verification-input' }}
                        />
                    </div>
                    <p className='subtitle_rec'>Не пришло письмо? Проверьте папку Спам.</p>
                </div>
            </RecoveryCont>
        </LayoutEnter>
    );
};

export default PassRecovery;
