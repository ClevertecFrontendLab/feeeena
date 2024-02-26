import React from 'react';
import '@components/enter/login.css';

interface FormElProps {
    children: React.ReactNode;
}

export const FormEl: React.FC<FormElProps> = ({ children }) => (
    <div className='form'>{children}</div>
);
