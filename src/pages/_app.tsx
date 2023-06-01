import '@styles/globals.scss'
import NextNProgress from 'nextjs-progressbar'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextNProgress color="#4285f4" />
            <Component {...pageProps} />
        </>
    )
}
