import React from 'react';

import './errInner.css';

interface ErrorInner {
    children: React.ReactNode;
}
const ErrorInner: React.FC<ErrorInner> = ({ children }) => {
    return <div className='error'>{children}</div>;
};

export default ErrorInner;
