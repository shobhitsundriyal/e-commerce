import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductFeed from '../components/ProductFeed'

export default function Home({ products /**from SSR */ }) {
	return (
		<div>
			<Head>
				<title>HomePage</title>
			</Head>
			<Header />
			<main className='max-w-7xl mx-auto bg-gray-100'>
				{/**banner */}
				<Banner />
				{/**products */}

				<ProductFeed products={products} />
			</main>
		</div>
	)
}

export async function getServerSideProps(context) {
	const products = await fetch('https://fakestoreapi.com/products').then(
		(res) => res.json()
	)

	return {
		props: {
			products, //shorthand for products:products
		},
	}
}
