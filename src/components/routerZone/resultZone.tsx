import { authPath } from '@components/configFile/authPath';
import { ReactElement } from 'react';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router-dom';

type ResultZoneProps = {
    children: ReactElement;
};

export const ResultZone = ({ children }: ResultZoneProps) => {
    const { pathname, state } = useLocation();

    if (pathname.includes(authPath.LOGIN) || pathname.includes(authPath.RESULT)) {
        if (state?.result === 'result') {
            return children;
        }
        if (state?.forgot === 'step_one') {
            return children;
        }
        if (state?.forgot === 'step_two') {
            return children;
        }
    }

    return <Navigate to={authPath.LOGIN} />;
};
