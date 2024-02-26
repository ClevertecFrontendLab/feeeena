import React from 'react';
import '@components/enter/login.css';

type FormElProps = {
    children: React.ReactNode;
};

export const FormEl: React.FC<FormElProps> = ({ children }) => (
    <div className='form'>{children}</div>
);
