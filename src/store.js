import { configureStore } from "@reduxjs/toolkit";

import DrawerReducer from "./features/drawerSlice";
import pageReducer from "./features/pageSlice";
import backgroundReducer from "./features/homeBackgroundSlice";
import toolbarReducer from "./features/toolbarSlice";

export const store = configureStore({
    reducer: {
        drawer: DrawerReducer,
        page: pageReducer,
        background: backgroundReducer,
        toolbar : toolbarReducer,
    },
})