import { useState, useEffect } from 'react';
import '@components/enter/login.css';

export const LogoEnter = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 360);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 360);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='logo_cont'>
            <img
                src={isSmallScreen ? '/public/logo-enter-small.png' : '/public/logo-enter.png'}
                alt='logo'
                className='logo_enter'
            />
        </div>
    );
};
