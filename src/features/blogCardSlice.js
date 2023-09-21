import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCard: null,
};

const blogCardSlice = createSlice({
    name: "blogCard",
    initialState,
    reducers: {
        setSelectedCard: (state, action) => {
            console.log("Setting selectedCard to:", action.payload);
            state.selectedCard = action.payload;
        },
    },
});

export const { setSelectedCard } = blogCardSlice.actions;

export default blogCardSlice.reducer;
