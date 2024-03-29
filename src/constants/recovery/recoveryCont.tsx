import React from 'react';

import './recoveryCont.css';

type RecoveryContProps = {
    children: React.ReactNode;
};
export const RecoveryCont: React.FC<RecoveryContProps> = ({ children }) => (
    <div className='recovery_cont'>{children}</div>
);
