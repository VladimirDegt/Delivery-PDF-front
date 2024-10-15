import { CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClimbingBoxLoader';
import cls from './Loader.module.scss';

const override: CSSProperties = {
    display: 'block',
    margin: '0 auto'
};

export const Loader = () => {
    return (
        <div className={cls['sweet-loading']}>
            <ClipLoader
                color='#6377e2'
                cssOverride={override}
                size={18}
                aria-label='Loading Spinner'
                data-testid='loader'
            />
        </div>
    );
};
