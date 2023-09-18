// import { createSlice } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const initialState = {
//     currentAdmin: {
//         username: "",
//         id: "",
//     },
//     loading: false,
// };

// const adminSlice = createSlice({
//     name: "admin",
//     initialState,
//     reducers: {
//         setCurrentAdmin: (state, action) => {
//             state.currentAdmin = action.payload;
//         },
//         setLoading: (state, action) => {
//             state.loading = action.payload;
//         },
//     },
// });

// const adminPersistConfig = {
//     key: "admin",
//     storage
// }

// const persistAdminReducer = persistReducer(adminPersistConfig, adminSlice.reducer);

// export const { setCurrentAdmin, setLoading } = adminSlice.actions;

// export default persistAdminReducer;