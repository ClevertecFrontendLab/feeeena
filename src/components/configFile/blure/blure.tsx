import '@components/enter/login.css';
import { ReactNode } from 'react';

type BlureProps = {
    children: ReactNode;
};

export const Blure: React.FC<BlureProps> = ({ children }) => {
    return <div className='blure'>{children}</div>;
};
