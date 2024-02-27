import React from 'react';

import './errInner.css';

type ErrorInner = {
    children: React.ReactNode;
};
export const ErrorInner: React.FC<ErrorInner> = ({ children }) => (
    <div className='error'>{children}</div>
);
