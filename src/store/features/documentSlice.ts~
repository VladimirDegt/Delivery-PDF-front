import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { documentApi } from '@/store/services/document';

interface IDocument {
    _id: string;
    user: string;
    emailTo: string;
    emailFrom: string;
    fileName: string;
    result: string;
    createdAt: string;
    updatedAt: string;
}

interface DocumentType {
    document: IDocument[];
    resultFind: string;
}

type Order = 'asc' | 'desc';

enum Message {
    NO_DOCUMENT_CURRENT_DATE = 'NO_DOCUMENT_CURRENT_DATE',
    NO_DOCUMENT_FIND = 'NO_DOCUMENT_FIND',
    THERE_IS_DOCUMENT = ''
}

const initialState: DocumentType = {
    document: [],
    resultFind: Message.NO_DOCUMENT_CURRENT_DATE
};

const documentSlice = createSlice({
    name: 'document',
    initialState,
    reducers: {
        sortDocumentsByResult: (state, action: PayloadAction<Order>) => {
            const order = action.payload;
            state.document.sort((a, b) => {
                if (order === 'asc') {
                    return a.result.localeCompare(b.result);
                } else {
                    return b.result.localeCompare(a.result);
                }
            });
        }
    },
    selectors: {
        getDocuments: (state) => state.document,
        getResultFind: (state) => state.resultFind
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            documentApi.endpoints.getLastDocument.matchFulfilled,
            (state, { payload }: PayloadAction<IDocument[]>) => {
                state.document = payload;
                if (payload.length !== 0) {
                    state.resultFind = Message.THERE_IS_DOCUMENT;
                }
            }
        );

        builder.addMatcher(
            documentApi.endpoints.getDocumentByDate.matchFulfilled,
            (state, { payload }: PayloadAction<IDocument[]>) => {
                state.document = payload;
                if (payload.length === 0) {
                    state.resultFind = Message.NO_DOCUMENT_FIND;
                } else {
                    state.resultFind = Message.THERE_IS_DOCUMENT;
                }
            }
        );
    }
});

export const documentReducer = documentSlice.reducer;
export const { sortDocumentsByResult } = documentSlice.actions;
export const { getDocuments, getResultFind } = documentSlice.selectors;
