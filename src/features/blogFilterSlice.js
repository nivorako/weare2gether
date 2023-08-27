import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: null,
};

const blogFilterSlice = createSlice({
    name: "blogFilter",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { setFilter } = blogFilterSlice.actions;

export default blogFilterSlice.reducer;
