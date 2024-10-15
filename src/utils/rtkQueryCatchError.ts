import { isRejectedWithValue, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '@/store/store';

import { clearToken } from '@/store/features/profileSlice';

export const rtkQueryCatchError: Middleware =
    (store: MiddlewareAPI<AppDispatch, RootState>) => (next) => (action) => {
        if (isRejectedWithValue(action)) {
            const { payload } = action;

            if (payload && typeof payload === 'object' && 'status' in payload) {
                const { status } = payload as { status: number };

                if (status === 401) store.dispatch(clearToken());
            }
        }

        return next(action);
    };
