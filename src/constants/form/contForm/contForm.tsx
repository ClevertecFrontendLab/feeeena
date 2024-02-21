import React from 'react';
import '@constants/form/contForm/contForm.css';

interface ContForm {
    children: React.ReactNode;
}
const ContForm: React.FC<ContForm> = ({ children }) => {
    return <div className='contForm'>{children}</div>;
};

export default ContForm;
