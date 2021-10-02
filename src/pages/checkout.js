import React from 'react'
import Header from '../components/Header'

function cart() {
	return (
		<div>
			<Header />
			<main className='main_area'>
				{/**Left */}
				<div className='flex-grow m-5'>
					<div className='flex flex-col p-5 space-y-5 bg-white border-b-2'>
						<h1 className='text-3xl'>Your cart</h1>
					</div>
				</div>

				{/**Right */}
				<div></div>
			</main>
		</div>
	)
}

export default cart
