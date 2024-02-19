import React from 'react';
import '@components/enter/login.css';

interface FormElProps {
    children: React.ReactNode;
    onLoginSuccess: () => void;
    onLoginError: () => void;
}

const FormEl: React.FC<FormElProps> = ({ children, onLoginSuccess, onLoginError }) => {
    return <div className='form'>{children}</div>;
};

export default FormEl;
