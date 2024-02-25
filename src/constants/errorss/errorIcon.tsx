import React from 'react';
import '@components/errorsLog/errors.css';
import getErrorDetails from '@components/configFile/result/getError';

interface ErrorIconProps {
    errorType: string;
}

const ErrorIcon: React.FC<ErrorIconProps> = ({ errorType }) => {
    const { icon } = getErrorDetails(errorType);

    return (
        <div className='error_icon_cont'>
            <img src={icon} alt='ERROR' className='error_icon' />
        </div>
    );
};

export default ErrorIcon;
