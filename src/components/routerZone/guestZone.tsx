import { authPath } from '@components/configFile/authPath';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { selectIsAuthorized } from '@store/slice/session';
import { ReactElement } from 'react';
import { Navigate } from 'react-router';

type GuestZoneProps = {
    children: ReactElement;
};

export const GuestZone = ({ children }: GuestZoneProps) => {
    const isAuthorized = useAppSelector(selectIsAuthorized) || localStorage.getItem('token');

    if (isAuthorized) {
        return <Navigate to={authPath.MAIN} />;
    }

    return children;
};
