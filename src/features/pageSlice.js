import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activePage: ""
};

const pageSlice = createSlice({
    name:"page",
    initialState,
    reducers: {
        setActivePage: (state, action) => {
            state.activePage = action.payload;
        }
    }
});

export const { setActivePage } = pageSlice.actions;
export default pageSlice.reducer;