import { NavbarUser } from '@components'
import { ROUTES } from '@constants'
import GoogleLogo from '@images/google-logo.svg'
import { Searchbar } from '@modules/search'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './results-navbar.module.scss'

/* eslint-disable @next/next/no-img-element */

interface Props {
    handleSearchQuery: (value: string) => void
}
const ResultsNavbar = ({ handleSearchQuery }: Props) => {
    const [search, setSearch] = useState('')
    const [showNavbarShadow, setShowNavbarShadow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrollingTop = window.scrollY === 0
            setShowNavbarShadow(!isScrollingTop)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleSearch = () => {
        handleSearchQuery(search)
    }

    const handleReset = () => {
        setSearch('')
        handleSearchQuery('')
    }

    return (
        <nav
            className={`${styles.results_navbar} ${
                showNavbarShadow && styles.navbar_shadow
            }`}
        >
            <div>
                <div className={styles.navbar_search_container}>
                    <Link href={ROUTES.home} className={styles.google_logo}>
                        <img src={GoogleLogo.src} alt="google logo"></img>
                    </Link>
                    <Searchbar
                        search={search}
                        handleSearch={setSearch}
                        handleSubmit={handleSearch}
                        handleReset={handleReset}
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
