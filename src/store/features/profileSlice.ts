import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { profileApi } from '@/store/services/profile';

interface ProfileType {
    token: string;
    userName: string;
}

const initialState = {
    token: '',
    userName: ''
};

const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        clearToken: (state) => {
            state.token = '';
        }
    },
    selectors: {
        getToken: (state) => state.token
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            profileApi.endpoints.login.matchFulfilled,
            (state, { payload }: PayloadAction<ProfileType>) => {
                state.token = payload.token;
                state.userName = payload.userName;
            }
        );
        builder.addMatcher(profileApi.endpoints.logout.matchFulfilled, (state) => {
            state.token = '';
        });
    }
});

export const profileReducer = ProfileSlice.reducer;
export const { clearToken } = ProfileSlice.actions;
export const { getToken } = ProfileSlice.selectors;
