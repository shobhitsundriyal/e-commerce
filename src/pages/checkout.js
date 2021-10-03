import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/cartSlice'
import CheckoutProduct from '../components/CheckoutProduct'
import Image from 'next/dist/client/image'

function cart() {
	const items = useSelector(selectItems) //getting items from cart state in store
	return (
		<div>
			<Head>
				<title>Checkout</title>
			</Head>
			<Header />
			<main className='main_area'>
				{/**Left */}
				<div className='flex-grow m-5'>
					<div className='flex flex-col p-5 space-y-5 bg-white border-b-2'>
						<h1 className='text-3xl'>
							{items.length
								? 'Your cart'
								: 'Your cart seems to be empty'}
						</h1>
					</div>
					{items.length ? (
						items.map((item, i) => (
							<CheckoutProduct
								key={i}
								id={item.id}
								title={item.title}
								description={item.description}
								price={item.price}
								category={item.category}
								image={item.image}
								rating={item.rating}
							/>
						))
					) : (
						<div className='flex justify-center w-full'>
							<Image
								src='https://firebasestorage.googleapis.com/v0/b/ji-drive.appspot.com/o/Files%2Fpngkey.com-empty-basket-png-3654131.png?alt=media&token=d3b368a6-7495-47fa-b547-ce72927b9d7a'
								height={500}
								width={700}
								objectFit='contain'
								className='my-auto'
							/>
						</div>
					)}
				</div>

				{/**Right */}
				<div></div>
			</main>
		</div>
	)
}

export default cart
