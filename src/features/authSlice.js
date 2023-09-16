import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
    currentUser: {
        username: "",
        id: "",  
    },
    isAuthenticated: false,
    token: null,
    loading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setAuth: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload;
        },
        clearAuth: (state) => {
            state.isAuthenticated = false;
            state.token = null;
        },
    },
});

const authPersistConfig = {
    key: "auth",
    storage
}

const persistAuthReducer = persistReducer(authPersistConfig, authSlice.reducer);

export const { setCurrentUser, setLoading, setAuth, clearAuth } = authSlice.actions;

export default persistAuthReducer;
