import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: "",
};

export const homeBackgroundSlice = createSlice({
    name: "homeBackground",
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state.color = action.payload;
        },
    },
});

export const { changeColor } = homeBackgroundSlice.actions;

export default homeBackgroundSlice.reducer;
