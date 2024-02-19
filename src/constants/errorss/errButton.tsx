import React from 'react';
import '@components/errorsLog/errors.css';
import { Button } from 'antd';
import getErrorDetails from '@components/configFile/getError.ts';

interface ErrorButtonProps {
    errorType: string;
}

const ErrorButton: React.FC<ErrorButtonProps> = ({ errorType }) => {
    const { buttonLabel } = getErrorDetails(errorType);

    return <Button className='error-button'>{buttonLabel}</Button>;
};

export default ErrorButton;
