import React from 'react';
import '@components/enter/login.css';
interface BlureProps {
    children: React.ReactNode;
}
export const Blure: React.FC<BlureProps> = ({ children }) => {
    return <div className='blure'>{children}</div>;
};
