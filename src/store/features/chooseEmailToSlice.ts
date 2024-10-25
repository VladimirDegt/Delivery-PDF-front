import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    emailTo: ''
};

const chooseEmailToSlice = createSlice({
    name: 'chooseEmailTo',
    initialState,
    reducers: {
        setEmailTo: (state, { payload }: PayloadAction<string>) => {
            state.emailTo = payload;
        },
        clearEmailTo: (state) => {
            state.emailTo = '';
        }
    },
    selectors: {
        getEmailTo: (state) => state.emailTo
    }
});

export const chooseEmailToReducer = chooseEmailToSlice.reducer;
export const { setEmailTo, clearEmailTo } = chooseEmailToSlice.actions;
export const { getEmailTo } = chooseEmailToSlice.selectors;
