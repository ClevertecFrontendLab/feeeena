import Blur from '@components/configFile/blur/blur';
import loader from './loader.json';
import Lottie from 'lottie-react';
export function Loader() {
    return (
        <div className='loader'>
            <Blur>
                <Lottie animationData={loader} loop={true} className='loader_spin' />
            </Blur>
        </div>
    );
}
