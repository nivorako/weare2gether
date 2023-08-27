import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAdmin: {
        username: "",
        id: "",
    },
    loading: false,
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setCurrentAdmin: (state, action) => {
            state.currentAdmin = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setCurrentAdmin, setLoading } = adminSlice.actions;

export default adminSlice.reducer;