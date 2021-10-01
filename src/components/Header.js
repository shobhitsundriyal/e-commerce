import React from 'react'
import Image from 'next/image'
import {
	SearchIcon,
	MenuAlt4Icon,
	ShoppingCartIcon,
} from '@heroicons/react/outline'

function Header() {
	return (
		<div className='bg-amazon_blue p-1 flex flex-grow py-2 items-center'>
			{/**Using nextjs Image instead of html img coz it optimises sizeof img without losing quality */}
			<div className='flex flex-grow items-center mt-2 sm:flex-grow-0'>
				<Image
					src='https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png'
					height={40}
					width={120}
					objectFit='contain'
					className='cursor-pointer'
				/>
			</div>
			{/**Search bar */}
			{/**config needed hover bg */}
			<div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer ml-5 transition-all duration-500 bg-gradient-to-tl to-yellow-300 via-yellow-400 from-yellow-500 bg-size-200 bg-pos-0 hover:bg-pos-100 '>
				<input
					type='text'
					className='h-full flex-grow flex-shrink outline-none rounded-l-md '
				/>
				<SearchIcon className='h-12 p-4' />
			</div>

			{/**Right part */}
			<div className='text-white flex text-xs space-x-7 mx-5 items-center'>
				<div className='link'>
					<p>Hello</p>
					<p className='font-extrabold md:text-sm'>**User</p>
				</div>
				<div className='link'>
					{' '}
					<p>Your</p>
					<p className='font-extrabold md:text-sm'>Orders</p>
				</div>
				<div className='link relative flex items-center'>
					<span className='absolute top-0 right-0 md:right-7 h-4 w-4 bg-yellow-400 items-center rounded-full text-center text-black font-bold'>
						0
					</span>
					<ShoppingCartIcon className='h-10' />
					<p className='font-extrabold hidden md:inline mt-2 md:text-sm'>
						Cart{' '}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Header
