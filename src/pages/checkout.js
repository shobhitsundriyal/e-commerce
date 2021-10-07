import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/cartSlice'
import CheckoutProduct from '../components/CheckoutProduct'
import Image from 'next/dist/client/image'
import { emptyTheCart } from '../slices/cartSlice'
import { TrashIcon } from '@heroicons/react/outline'
import { motion, AnimatePresence } from 'framer-motion'
import Currency from 'react-currency-formatter'
import { useSession } from 'next-auth/client'
import { loadStrip } from '@stripe/stripe-js'

const stripePromise = loadStrip()

function cart() {
	const items = useSelector(selectItems) //getting items from cart state in store
	const total = useSelector(selectTotal)
	const dispatch = useDispatch()

	const session = useSession()

	const areItemsPresent = items.length > 0 ? true : false

	const createCheckoutSessoion = () => {
		;``
	}

	return (
		<div>
			<Head>
				<title>Checkout</title>
			</Head>
			<Header />
			<main className='main_area md:flex'>
				{/**Left */}
				<div className='flex-grow m-5'>
					<div className='flex flex-col p-5 space-y-5 bg-white border-b-2'>
						<h1 className='text-3xl'>
							{items.length ? (
								<div className='flex'>
									Your cart
									<button
										className='button ml-5 flex bg-gradient-to-b from-red-700 to-red-900 active:from-red-800 text-white'
										onClick={() => {
											dispatch(emptyTheCart())
										}}
									>
										<TrashIcon className='h-5' />
										Clear the cart
									</button>
								</div>
							) : (
								'Your cart seems to be empty'
							)}
						</h1>
					</div>
					<AnimatePresence exitBeforeEnter>
						{areItemsPresent &&
							items.map((item, i) => (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0, x: -100 }}
									transition={{ duration: 0.2 }}
								>
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
								</motion.div>
							))}
					</AnimatePresence>
					{!areItemsPresent && (
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
				<div className='bg-white my-6 mx-5 md:mx-0 space-y-5 p-3 flex flex-col'>
					{areItemsPresent && (
						<>
							<h2 className='text-xl'>Total: {'  '}</h2>
							<span className='text-xl font-bold'>
								<Currency quantity={total} currency='bsd' />
							</span>
							<button
								role='link'
								onClick={createCheckoutSessoion}
								disabled={!session[0]}
								className={`button w-44 ${
									!session[0] &&
									'bg-gradient-to-b from-gray-400 to-gray-600 text-gray-50 hover:cursor-not-allowed'
								}`}
							>
								{console.log(session)}
								{!session[0]
									? 'SignIn to checkout'
									: 'Checkout'}
							</button>
						</>
					)}
				</div>
			</main>
		</div>
	)
}

export default cart
