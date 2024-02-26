import { Blure } from '@components/configFile/blure/blure';
import loader from './loader.json';
import Lottie from 'lottie-react';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { selectIsLoadingn } from '@store/slice/session';

export function Loader() {
    const isLoading = useAppSelector(selectIsLoadingn);
    return (
        <>
            {isLoading ? (
                <Blure>
                    <Lottie
                        animationData={loader}
                        loop={true}
                        className='spinner'
                        data-test-id='loader'
                    />
                </Blure>
            ) : null}
        </>
    );
}
