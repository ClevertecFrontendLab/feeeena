import React from 'react';

import '@components/errorsLog/errors.css';

interface ErrorInner {
    children: React.ReactNode;
}
const ErrorInner: React.FC<ErrorInner> = ({ children }) => {
    return <div className='error'>{children}</div>;
};

export default ErrorInner;
