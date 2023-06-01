import { ROUTES } from '@constants'
import UserImage from '@images/user.jpg'
import React from 'react'
import { IoApps } from 'react-icons/io5'
import styles from './navbar-user.module.scss'
/* eslint-disable @next/next/no-img-element */

const NavbarUser = () => {
    return (
        <div className={styles.navbar_container}>
            <span className={styles.nav_icon}>
                <IoApps></IoApps>
            </span>
            <a href={ROUTES.googleAccount} target="_blank" rel="noreferrer">
                <img
                    src={UserImage.src}
                    alt="user"
                    className={styles.user_image}
                />
            </a>
        </div>
    )
}

export default NavbarUser
