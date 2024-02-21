import React from 'react';
import '@components/enter/login.css';

interface FormElProps {
    children: React.ReactNode;
}

const FormEl: React.FC<FormElProps> = ({ children }) => {
    return <div className='form'>{children}</div>;
};

export default FormEl;
