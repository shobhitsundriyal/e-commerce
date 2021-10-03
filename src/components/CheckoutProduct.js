import React from 'react'
import Image from 'next/dist/client/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { addToCart, removeFromCart } from '../slices/cartSlice'
import { useDispatch } from 'react-redux'

function CheckoutProduct({
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
		const id = { id }
		dispatch(removeFromCart(id))
	}

	return (
		<div className='grid grid-cols-5 my-5 border-2 bg-gray-50 p-2'>
			<Image src={image} height={200} width={200} objectFit='contain' />

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
				<button onClick={addItemToCart} className='button'>
					Add more to Cart
				</button>
				<button
					className='button bg-gradient-to-b from-red-500 to-red-600 outline-none active:from-red-500'
					onClick={removeItemFromCart}
				>
					Remove from Cart
				</button>
			</div>
		</div>
	)
}

export default CheckoutProduct
