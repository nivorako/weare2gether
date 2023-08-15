import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   
    currentUser: {
        username: "",
        id: ""
    },
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
       
    }
});

export const { setCurrentUser, setLoading } = authSlice.actions;


export default authSlice.reducer