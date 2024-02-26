import React from 'react';
import '@constants/form/contForm/contForm.css';

interface ContForm {
    children: React.ReactNode;
}
export const ContForm: React.FC<ContForm> = ({ children }) => (
    <div className='contForm'>{children}</div>
);
