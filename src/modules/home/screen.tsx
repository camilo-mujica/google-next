import { Footer, Searchbar } from '@components'
import { ROUTES } from '@constants'
import GoogleLogo from '@images/google-logo.svg'
import { PrimaryLayout } from '@layouts'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { HomeNavbar, styles } from './internals'
/* eslint-disable @next/next/no-img-element */

const HomeScreen = () => {
    const router = useRouter()
    const [search, setSearch] = useState('')

    const handleSearch = (value: string) => {
        setSearch(value)
    }

    const handleSubmit = () => {
        if (!search) return
        router.push(`${ROUTES.results}?q=${search}`)
    }

    return (
        <PrimaryLayout>
            <HomeNavbar></HomeNavbar>
            <main className={styles.main}>
                <section className={styles.searchbar_container}>
                    <img
                        src={GoogleLogo.src}
                        alt="google logo"
                        className={styles.google_logo}
                    ></img>
                    <Searchbar
                        search={search}
                        handleSearch={handleSearch}
                        handleSubmit={handleSubmit}
                    ></Searchbar>
                    <div className={styles.button_container}>
                        <button
                            className={styles.search_button}
                            disabled={!search}
                            onClick={handleSubmit}
                        >
                            Buscar
                        </button>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </PrimaryLayout>
    )
}

export default HomeScreen
