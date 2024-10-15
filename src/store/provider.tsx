'use client';

import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.min.css';

import { persistor, store } from '@/store/store';
import { Loader } from '@/shared/Loader/Loader';
import { Toast } from '@/shared/Toast/Toast';

export const ReduxProvider = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<Loader />}>
                <Toast />
                {children}
            </PersistGate>
        </Provider>
    );
};
