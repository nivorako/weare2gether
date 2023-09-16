import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import DrawerReducer from "./features/drawerSlice";
import pageReducer from "./features/pageSlice";
import backgroundReducer from "./features/homeBackgroundSlice";
import toolbarReducer from "./features/toolbarSlice";
import persistAuthReducer from "./features/authSlice";
import blogFilterReducer from "./features/blogFilterSlice";
import blogCardReducer from "./features/blogCardSlice";
import persistAdminReducer from "./features/adminSlice";

const persistConfig = {
    key : "root",
    storage
}

const rotReducer = combineReducers({
    drawer: DrawerReducer,
    page: pageReducer,
    background: backgroundReducer,
    toolbar: toolbarReducer,
    auth: persistAuthReducer,
    blogFilter: blogFilterReducer,
    blogCard: blogCardReducer,
    admin: persistAdminReducer,
});

const persistRdcr = persistReducer(persistConfig, rotReducer);


export const store = configureStore({
    reducer: persistRdcr,
});

const persistor = persistStore(store);

export { persistor };