import React from 'react';
import '@constants/layoutEnter/layoutEnter.css';
interface LayoutProps {
    children: React.ReactNode;
}
export const LayoutEnter: React.FC<LayoutProps> = ({ children }) => (
    <div className='layout'>{children}</div>
);
