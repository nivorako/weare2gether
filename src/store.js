import { configureStore } from "@reduxjs/toolkit";

import DrawerReducer from "./features/drawerSlice";
import pageReducer from "./features/pageSlice";

export const store = configureStore({
    reducer: {
        drawer: DrawerReducer,
        page: pageReducer
    },
})