import { createSlice } from "@reduxjs/toolkit";

import User from "../assets/user4.svg";
import ShopBskt from "../assets/shopBskt.svg";
import menuW from "../assets/menuWhite.svg";

const initialState = {
    backgroundColor: "var(--primary)",
    color: "white",
    user: User,
    shopBskt: ShopBskt,
    boxShadow: "var(--primary)",
    menu: menuW,
    usernameColor: "white",
};

export const toolbarSlice = createSlice({
    name: "toolbar",
    initialState,
    reducers: {
        changeToolbarColor: (state, action) => {
            state.backgroundColor = action.payload;
        },
        changeColor: (state, action) => {
            state.color = action.payload;
        },
        changeUser: (state, action) => {
            state.user = action.payload;
        },
        changeShopBskt: (state, action) => {
            state.shopBskt = action.payload;
        },
        changeMenu: (state, action) => {
            state.menu = action.payload;
        },
        changeBoxShadow: (state, action) => {
            state.boxShadow = action.payload;
        },
        changeUsernameColor: (state, action) => {
            state.usernameColor = action.payload;
        },
    },
});

export const {
    changeToolbarColor,
    changeColor,
    changeUser,
    changeShopBskt,
    changeMenu,
    changeBoxShadow,
    changeUsernameColor,
} = toolbarSlice.actions;

export default toolbarSlice.reducer;
