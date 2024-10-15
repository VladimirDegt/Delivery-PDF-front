import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { profileReducer } from '@/store/features/profileSlice';
import { profileApi } from '@/store/services/profile';
import { deliveryPDFApi } from '@/store/services/deliveryPDF';
import { documentApi } from '@/store/services/document';
import { chooseActsReducer } from '@/store/features/chooseActsSlice';
import { documentReducer } from '@/store/features/documentSlice';
import { chooseEmailToReducer } from '@/store/features/chooseEmailToSlice';
import { rtkQueryCatchError } from '@/utils/rtkQueryCatchError';

const profilePersistConfig = {
    key: 'SendMyPDF_profile',
    storage,
    whitelist: ['token']
};

const rootReducer = combineReducers({
    profile: persistReducer(profilePersistConfig, profileReducer),
    chooseEmailTo: chooseEmailToReducer,
    chooseActs: chooseActsReducer,
    document: documentReducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [deliveryPDFApi.reducerPath]: deliveryPDFApi.reducer,
    [documentApi.reducerPath]: documentApi.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
            .concat(profileApi.middleware)
            .concat(deliveryPDFApi.middleware)
            .concat(documentApi.middleware)
            .concat(rtkQueryCatchError)
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
