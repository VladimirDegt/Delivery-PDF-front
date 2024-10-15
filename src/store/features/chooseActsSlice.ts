import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
    nameActs: string[];
    files: File[];
}

const initialState: InitialState = {
    nameActs: [],
    files: []
};

const chooseActsSlice = createSlice({
    name: 'chooseActs',
    initialState,
    reducers: {
        setActs: (state, { payload }: PayloadAction<File[]>) => {
            state.files = payload;
            state.nameActs = payload.map((file) => file.name);
        },
        clearActs: (state) => {
            state.nameActs = [];
            state.files = [];
        }
    },
    selectors: {
        getNameActs: (state) => state.nameActs,
        getFiles: (state) => state.files
    }
});

export const chooseActsReducer = chooseActsSlice.reducer;
export const { setActs, clearActs } = chooseActsSlice.actions;
export const { getNameActs, getFiles } = chooseActsSlice.selectors;
