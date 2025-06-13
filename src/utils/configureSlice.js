import { createSlice } from "@reduxjs/toolkit";

const configureSlice = createSlice({
    name: "configure",
    initialState: {
        language: "en"
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
        }
    }
});

export default configureSlice.reducer;
export const { changeLanguage } = configureSlice.actions;
