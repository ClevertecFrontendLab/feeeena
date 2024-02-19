import React from 'react';

import '@components/errorsLog/errors.css';

interface ErrCont {
    children: React.ReactNode;
}
const ErrCont: React.FC<ErrCont> = ({ children }) => {
    return <div className='err_cont'>{children}</div>;
};

export default ErrCont;
