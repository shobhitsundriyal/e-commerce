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
		removeFromCart: (state, action) => {},
	},
})

export const { addToCart, removeFromCart } = cartSlice.actions

// Selectors - This is how we pull information from the Global store slice
//dont know why basket is working ant not cart  ↓
export const selectItems = (state) => state.basket.items

export default cartSlice.reducer
