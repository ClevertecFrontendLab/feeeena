import React from 'react';

import './errInner.css';

interface ErrorInner {
    children: React.ReactNode;
}
export const ErrorInner: React.FC<ErrorInner> = ({ children }) => (
    <div className='error'>{children}</div>
);
