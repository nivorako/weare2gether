import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    parse:null,
    currentUser: null,
    loading: false,
};

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setCurrentUser : (state, action) => {
            state.currentUser = action.payload;
        },
        setLoading : (state, action) => {
            state.loading = action.payload;
        },
        setParse : (state, action) => {
            state.parse = action.payload;
        }
    }
});

export const { setCurrentUser, setLoading, setParse } = authSlice.actions;


export default authSlice.reducer