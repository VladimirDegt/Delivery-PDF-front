import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    text: ''
};

const textEmailSlice = createSlice({
    name: 'textEmail',
    initialState,
    reducers: {
        setTextEmail: (state, { payload }: PayloadAction<string>) => {
            state.text = payload;
        },
        clearTextEmail: (state) => {
            state.text = '';
        }
    },
    selectors: {
        getTextEmail: (state) => state.text
    }
});

export const textEmailReducer = textEmailSlice.reducer;
export const { setTextEmail, clearTextEmail } = textEmailSlice.actions;
export const { getTextEmail } = textEmailSlice.selectors;
