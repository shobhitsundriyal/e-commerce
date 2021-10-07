import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [
		{
			id: 11,
			title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
			description:
				'3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
			price: 109,
			category: 'electronics',
			image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
			rating: {
				rate: 4.8,
				count: 319,
			},
			count: 1,
		},
	], //global items slice
}
//Global cart store
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const index = state.items.findIndex(
				(cartItem) => cartItem.id === action.payload.id
			)

			if (index >= 0) {
				state.items[index].count += 1
				//console.log(state.items[index].count)
			} else {
				state.items = [...state.items, action.payload]
				state.items.at(-1).count = 1
				//console.log(state.items.at(-1).count)
			}
		},
		removeFromCart: (state, action) => {
			//index of array on whcih remove button is pressed... findIndex is es6()
			const index = state.items.findIndex(
				(cartItem) => cartItem.id === action.payload
			)
			// if idex found its >=0 else it return -1
			let newCart = [...state.items]

			if (index >= 0) {
				//item is in cart... hence remove it
				newCart.splice(index, 1) //remove 1item starting from index
			} else {
				console.warn(`${action.payload} is not in the basket`)
			}
			state.items = newCart
		},
		emptyTheCart: (state, action) => {
			state.items = []
		},
		decreaseCount: (state, action) => {
			const index = state.items.findIndex(
				(cartItem) => cartItem.id === action.payload
			)
			var count = state.items[index].count
			if (count > 1) {
				state.items[index].count -= 1
			}
		},
	},
})

export const { addToCart, removeFromCart, emptyTheCart, decreaseCount } =
	cartSlice.actions

// Selectors - This is how we pull information from the Global store slice
//dont know why basket is working ant not cart  ↓... fixed is store.js...ok fixed
export const selectItems = (state) => state.cart.items
export const selectTotal = (state) =>
	state.cart.items.reduce((total, item) => total + item.price * item.count, 0) //good function

export default cartSlice.reducer
