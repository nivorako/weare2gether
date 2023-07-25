import { configureStore } from "@reduxjs/toolkit";

import DrawerReducer from "./features/drawerSlice";

export const store = configureStore({
    reducer: {
        drawer: DrawerReducer
    },
})