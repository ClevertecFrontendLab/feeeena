import '@components/enter/login.css';
const LogoEnter = () => {
    const isSmallScreen = window.innerWidth <= 360;
    return (
        <div className='logo_cont'>
            <img
                src={isSmallScreen ? './public/logo-enter-small.png' : './public/logo-enter.png'}
                alt='logo'
                className='logo_enter'
            />
        </div>
    );
};

export default LogoEnter;
