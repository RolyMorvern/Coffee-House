import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cartSlice",
	initialState: {
		items: [],
	},
	reducers: {
		addItem: (state, action) => {
		  state.items = [...state.items, action.payload];
		},
		removeItem: (state, action) => {
			state.items.splice(action.payload, 1);
		}
	},
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
