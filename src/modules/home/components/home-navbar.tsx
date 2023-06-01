import { NavbarUser } from '@components'
import React from 'react'
import styles from './home-navbar.module.scss'
/* eslint-disable @next/next/no-img-element */

const HomeNavbar = () => {
    return (
        <nav className={styles.home_navbar}>
            <div>
                <h2 className={styles.title}>
                    <span>Agile Content</span>
                    Frontend test
                </h2>
                <NavbarUser></NavbarUser>
            </div>
        </nav>
    )
}

export default HomeNavbar
