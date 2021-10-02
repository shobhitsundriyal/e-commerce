import React from 'react'
import Product from './Product'

function ProductFeed({ products }) {
	return (
		<div className='grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-40 mx-auto'>
			{products
				.slice(1, 4)
				.map(
					({
						id,
						title,
						description,
						price,
						category,
						image,
						rating,
					}) => (
						<Product
							key={id}
							id={id}
							title={title}
							description={description}
							price={price}
							category={category}
							image={image}
							rating={rating}
						/>
					)
				)}

			<div className='lg:col-span-2'>
				{products
					.slice(4, 5)
					.map(
						({
							id,
							title,
							description,
							price,
							category,
							image,
							rating,
						}) => (
							<Product
								key={id}
								id={id}
								title={title}
								description={description}
								price={price}
								category={category}
								image={image}
								rating={rating}
							/>
						)
					)}
			</div>

			<div className='flex items-center justify-center relative col-span-full bg-white bg-gradient-to-r from-[#ED0101] to-[#850100] h-20 md:h-40'>
				<div className='h-2 md:h-5 w-full bg-white ' />
				<img
					src='https://cdn-ds.com/blogs-media/sites/231/2017/11/20084525/When-Do-Stores-Open-for-Black-Friday-in-Janesville-WI-A_B.jpg'
					className='h-20 md:h-40 absolute '
				/>
			</div>

			{products
				.slice(5, products.length)
				.map(
					({
						id,
						title,
						description,
						price,
						category,
						image,
						rating,
					}) => (
						<Product
							key={id}
							id={id}
							title={title}
							description={description}
							price={price}
							category={category}
							image={image}
							rating={rating}
						/>
					)
				)}
		</div>
	)
}

export default ProductFeed
