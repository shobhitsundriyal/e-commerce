import { Provider } from 'react-redux'
import { store, persistor } from '../app/store'
import { PersistGate } from 'redux-persist/integration/react'
import '../styles/globals.css'
import { Provider as AuthProvider } from 'next-auth/client'

const MyApp = ({ Component, pageProps }) => {
	return (
		<AuthProvider session={pageProps.session}>
			{/**Now whole app has access to nextAuth authentication state; use by useSession */}
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		</AuthProvider>
	)
}

export default MyApp
