import React from 'react'
import Image from 'next/dist/client/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import {
	addToCart,
	removeFromCart,
	selectItems,
	decreaseCount,
} from '../slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'

function CheckoutProduct({
	key,
	id,
	title,
	description,
	price,
	category,
	image,
	rating,
}) {
	const stars = Math.round(rating.rate)
	const dispatch = useDispatch()

	// for counter of each item
	const items = useSelector(selectItems)
	const index = items.findIndex((cartItem) => cartItem.id === id)
	//
	var itemCount = 0
	if (items.length) {
		itemCount = items[index].count
	}

	function addItemToCart() {
		const product = {
			id,
			title,
			description,
			price,
			category,
			image,
			rating,
		}
		dispatch(addToCart(product))
	}

	function removeItemFromCart() {
		dispatch(removeFromCart(id))
	}

	return (
		<AnimatePresence>
			<motion.div
				className='sm:grid sm:grid-cols-5 my-5 border-2 bg-gray-50 p-2 flex flex-col'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0, x: 100 }}
				transition={{ duration: 0.2 }}
			>
				<Image
					src={image}
					height={200}
					width={200}
					objectFit='contain'
				/>

				{/**Middle */}
				<div className=' col-span-3 mx-5 my-3'>
					<p className='font-semibold'>{title}</p>

					<div className='flex'>
						{Array(stars) //sahihai
							.fill()
							.map((_, i) => (
								<StarIcon className='h-5 text-yellow-500' />
							))}
					</div>

					<p className='text-xs md:text-sm line-clamp-3 my-2'>
						{description}
					</p>

					<Currency quantity={price} className=' font-semibold' />
				</div>

				{/**Right part */}
				<div className='flex flex-col m-auto space-y-3'>
					<div className='flex justify-center'>
						<button
							onClick={() => dispatch(decreaseCount(id))}
							className='button px-3 w-full'
						>
							-
						</button>
						<div className='bg-gray-100 border-2 border-blue-400 rounded-md items-center flex px-5 justify-center w-full'>
							{itemCount}
						</div>
						<button
							onClick={addItemToCart}
							className='button px-3 w-full'
						>
							+
						</button>
					</div>
					<button
						className='button bg-gradient-to-b from-red-500 to-red-600 outline-none active:from-red-500'
						onClick={removeItemFromCart}
					>
						Remove from Cart
					</button>
					<div className='font-semibold self-end items-end'>
						Subtotal:{' '}
						<Currency quantity={price * itemCount} currency='bsd' />
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	)
}

export default CheckoutProduct
