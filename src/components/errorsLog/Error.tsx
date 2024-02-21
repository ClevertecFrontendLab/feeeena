import React from 'react';

import LayoutEnter from '@constants/layoutEnter/layoutEnter';
import ErrCont from '@constants/errorss/errCont.tsx';
import ErrorInner from '@constants/errorss/errorInner.tsx';
import ErrorIcon from '@constants/errorss/errorIcon.tsx';
import ErrorMessage from '@constants/errorss/errorMesage.tsx';
import ErrorButton from '@constants/errorss/errButton';

interface ErrorProps {
    errorType: string;
}

const Error: React.FC<ErrorProps> = ({ errorType }) => {
    return (
        <LayoutEnter>
            <ErrCont>
                <ErrorInner>
                    <ErrorIcon errorType={errorType} />
                    <ErrorMessage errorType={errorType} />
                    <ErrorButton errorType={errorType} />
                </ErrorInner>
            </ErrCont>
        </LayoutEnter>
    );
};

export default Error;
