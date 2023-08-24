import { configureStore } from "@reduxjs/toolkit";

import DrawerReducer from "./features/drawerSlice";
import pageReducer from "./features/pageSlice";
import backgroundReducer from "./features/homeBackgroundSlice";
import toolbarReducer from "./features/toolbarSlice";
import authReducer from "./features/authSlice";
import blogFilterReducer from "./features/blogFilterSlice";

export const store = configureStore({
    reducer: {
        drawer: DrawerReducer,
        page: pageReducer,
        background: backgroundReducer,
        toolbar: toolbarReducer,
        auth: authReducer,
        blogFilter: blogFilterReducer,
    },
});
