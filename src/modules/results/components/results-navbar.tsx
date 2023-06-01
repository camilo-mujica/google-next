import { NavbarUser, Searchbar } from '@components'
import { ROUTES } from '@constants'
import GoogleLogo from '@images/google-logo.svg'
import Link from 'next/link'
import React from 'react'
import styles from './results-navbar.module.scss'

/* eslint-disable @next/next/no-img-element */

interface Props {
    search: string
    handleSearch: (value: string) => void
    handleSubmit: () => void
}
const ResultsNavbar = ({ search, handleSearch, handleSubmit }: Props) => {
    return (
        <nav className={styles.results_navbar}>
            <div>
                <div className={styles.navbar_search_container}>
                    <Link href={ROUTES.home} className={styles.google_logo}>
                        <img src={GoogleLogo.src} alt="google logo"></img>
                    </Link>
                    <Searchbar
                        search={search}
                        handleSearch={handleSearch}
                        handleSubmit={handleSubmit}
                        fixedShadow
                    ></Searchbar>
                </div>
                <div className={styles.navbar_secondary_container}>
                    <Link href={ROUTES.home} className={styles.google_logo}>
                        <img src={GoogleLogo.src} alt="google logo"></img>
                    </Link>
                    <NavbarUser></NavbarUser>
                </div>
            </div>
        </nav>
    )
}

export default ResultsNavbar
