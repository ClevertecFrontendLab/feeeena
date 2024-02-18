import React from 'react';
import '@components/enter/login.css';
interface FormEl {
    children: React.ReactNode;
}
const FormEl: React.FC<FormEl> = ({ children }) => {
    return <div className='form'>{children}</div>;
};

export default FormEl;
