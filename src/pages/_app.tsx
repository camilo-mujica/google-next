import { store } from '@redux/store'
import '@styles/globals.scss'
import NextNProgress from 'nextjs-progressbar'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <>
                <NextNProgress color="#4285f4" />
                <Component {...pageProps} />
            </>
        </Provider>
    )
}
