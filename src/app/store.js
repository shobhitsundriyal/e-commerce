import { configureStore } from '@reduxjs/toolkit'
import basketReducer from '../slices/cartSlice'

export const store = configureStore({
	reducer: {
		basket: basketReducer,
	},
})
