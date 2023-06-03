import { setupStore } from '@redux/store'
import '@styles/globals.scss'
import NextNProgress from 'nextjs-progressbar'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    const store = setupStore()

    useEffect(() => {
        console.log(
            '%c Desarrollado por',
            'font-weight: bold; font-size: 12px;color: #00113f; text-shadow: 3px 3px 0 #01df94',
        )
        console.log(
            '%c Camilo Mujica',
            'font-weight: bold; font-size: 14px;color: #00113f; text-shadow: 3px 3px 0 #01df94',
        )
        console.log(
            '%c https://camilomujica.one',
            'font-weight: bold; font-size: 14px;color: #00113f; text-shadow: 3px 3px 0 #01df94',
        )
        console.log('Repositorio: https://github.com/camilo-mujica/google-next')
    }, [])

    return (
        <Provider store={store}>
            <>
                <NextNProgress color="#4285f4" />
                <Component {...pageProps} />
            </>
        </Provider>
    )
}
