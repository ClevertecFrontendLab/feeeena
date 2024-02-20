import React from 'react';

import '@components/errorsLog/errors.css';
import '@constants/recovery/recoveryCont.css';

interface RecoveryContProps {
    children: React.ReactNode;
}
const RecoveryCont: React.FC<RecoveryContProps> = ({ children }) => {
    return <div className='recovery_cont'>{children}</div>;
};

export default RecoveryCont;
