import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    drawer: false,
};

export const drawerSlice = createSlice({
    name: "drawer",
    initialState,
    reducers: {
        setDrawer: (state) => {
            state.drawer = !state.drawer;
        },
    },
});

export const { setDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
