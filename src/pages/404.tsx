import { PageHead } from '@components'
import GoogleLogo from '@images/google-logo.svg'
import RobotImage from '@images/robot.png'
import styles from '@styles/not-found.module.scss'
import Link from 'next/link'
import React from 'react'
/* eslint-disable @next/next/no-img-element */

const NotFoundPage = () => {
    return (
        <>
            <PageHead title="Error 404 (Not Found)!!1"></PageHead>

            <section className={styles.container}>
                <div className={styles.innerContainer}>
                    <div className={styles.contentContainer}>
                        <Link href="/">
                            <img
                                src={GoogleLogo.src}
                                alt="Google logo"
                                className={styles.logo}
                            />
                        </Link>
                        <p>
                            <span className={styles.heading}>404.</span>{' '}
                            {`That's an
                        error.`}
                        </p>
                        <p>
                            The requested URL /404 was not found on this server.
                        </p>
                        <p>That’s all we know.</p>
                    </div>
                    <img
                        src={RobotImage.src}
                        alt="Error 404"
                        className={styles.image}
                    />
                </div>
            </section>
        </>
    )
}

export default NotFoundPage
