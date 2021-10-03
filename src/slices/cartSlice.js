import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [], //global items slice
}
//Global cart store
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.items = [...state.items, action.payload]
		},
		removeFromCart: (state, action) => {
			state.items = []
		},
		emptyTheCart: (state, action) => {
			state.items = []
		},
	},
})

export const { addToCart, removeFromCart } = cartSlice.actions

// Selectors - This is how we pull information from the Global store slice
//dont know why basket is working ant not cart  ↓... fixed is store.js
export const selectItems = (state) => state.cart.items

export default cartSlice.reducer
