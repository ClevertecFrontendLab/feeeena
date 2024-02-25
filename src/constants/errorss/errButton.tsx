import React from 'react';
import '@components/errorsLog/errors.css';
import { Button } from 'antd';

import getErrorDetails from '@components/configFile/result/getError';
import { useButtonClick } from '@components/configFile/result/useButtonClick';

interface ErrorButtonProps {
    errorType: string;
}

const ErrorButton: React.FC<ErrorButtonProps> = ({ errorType }) => {
    const { buttonLabel, dataTest } = getErrorDetails(errorType);
    const onClick = useButtonClick(errorType);

    return (
        <Button className='error-button' onClick={onClick} data-test-id={dataTest}>
            {buttonLabel}
        </Button>
    );
};

export default ErrorButton;
