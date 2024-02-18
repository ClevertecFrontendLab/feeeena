import React from 'react';
import '@components/enter/login.css';
interface ContForm {
    children: React.ReactNode;
}
const ContForm: React.FC<ContForm> = ({ children }) => {
    return <div className='contForm'>{children}</div>;
};

export default ContForm;
