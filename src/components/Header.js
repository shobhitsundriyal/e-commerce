import React from 'react'
import Image from 'next/image'
import {
	SearchIcon,
	MenuAlt4Icon,
	ShoppingCartIcon,
} from '@heroicons/react/outline'
import { useSession, signIn, signOut } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/cartSlice'

function Header() {
	const [session] = useSession()
	const router = useRouter()
	const itemsInCart = useSelector(selectItems)

	return (
		<div className='bg-amazon_blue p-1 flex flex-grow py-2 items-center'>
			{/**Using nextjs Image instead of html img coz it optimises sizeof img without losing quality */}
			<div
				className='flex flex-grow items-center mt-2 sm:flex-grow-0'
				onClick={() => router.push('/')}
			>
				<Image
					src='https://firebasestorage.googleapis.com/v0/b/ji-drive.appspot.com/o/Files%2Fthisamzone.png?alt=media&token=d458f075-5919-4746-b1f9-acb15b87fa05'
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
				<div className='link' onClick={session ? signOut : signIn}>
					<p>{session ? 'Hello' : ''}</p>
					<p className='font-extrabold md:text-sm'>
						{session
							? `${session.user.name.split(' ')[0]}`
							: 'Login'}
					</p>
				</div>
				<div className='link'>
					{' '}
					<p>Your</p>
					<p className='font-extrabold md:text-sm'>Orders</p>
				</div>
				{/**cart */}
				<div
					className='link relative flex items-center'
					onClick={() => router.push('/checkout')}
				>
					<span className='absolute top-0 right-0 md:right-7 h-4 w-4 bg-yellow-400 items-center rounded-full text-center text-black font-bold'>
						{itemsInCart.length}
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
