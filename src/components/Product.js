import React from 'react'
import Image from 'next/dist/client/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'

export default function Product({
	id,
	title,
	description,
	price,
	category,
	image,
	rating,
}) {
	const stars = Math.round(rating.rate)
	const hasFreeDelivry = price > 60 ? true : false
	return (
		<div className='relative flex flex-col bg-white m-5 p-10 rounded-lg z-20 hover:shadow-xl'>
			<p className='absolute top-2 right-2 text-xs text-gray-600'>
				{category}
			</p>

			<Image src={image} objectFit='contain' height={200} width={200} />

			<p
				className='font-semibold my-3
      '
			>
				{title}
			</p>

			<div className='flex'>
				{Array(stars) //sahihai
					.fill()
					.map((_, i) => (
						<StarIcon className='h-5 text-yellow-500' />
					))}
			</div>

			<p className='text-sm my-2 line-clamp-2'>{description}</p>

			<div>
				<Currency quantity={price} currency='Bsd' />
			</div>

			{hasFreeDelivry && (
				<div className='mb-2'>
					<p className='text-xs bg-[#1998e7] text-gray-50 rounded-sm p-1 w-20'>
						Free Delivery
					</p>
				</div>
			)}

			<button className='mt-auto button'>Add to Cart</button>
		</div>
	)
}
