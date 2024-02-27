import React from 'react';

import './errCont.css';

type ErrCont = {
    children: React.ReactNode;
};
export const ErrCont: React.FC<ErrCont> = ({ children }) => (
    <div className='err_cont'>{children}</div>
);
