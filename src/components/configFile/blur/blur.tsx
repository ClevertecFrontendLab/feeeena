import React from 'react';
import '@components/enter/login.css';
interface BlurProps {
    children: React.ReactNode;
}
const Blur: React.FC<BlurProps> = ({ children }) => {
    return <div className='blur'>{children}</div>;
};

export default Blur;
