import React from 'react';
import '@components/errorsLog/errors.css';
import getErrorDetails from '@components/configFile/getError.ts';

interface ErrorMessageProps {
    errorType: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorType }) => {
    const { title, message } = getErrorDetails(errorType);

    return (
        <div className='message_text'>
            <h1 className='title_error'>{title}</h1>
            <p className='message_error'>{message}</p>
        </div>
    );
};

export default ErrorMessage;
