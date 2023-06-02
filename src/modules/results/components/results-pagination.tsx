import { generateArray } from '@helpers'
import React from 'react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import styles from './results-pagination.module.scss'

interface Props {
    currentPage?: number
    totalPages?: number
}
const ResultsPagination = ({ currentPage = 1, totalPages = 6 }: Props) => {
    return (
        <div className={styles.parent_container}>
            <div className={styles.initial_container}>
                <a className={styles.arrow_button}>
                    <MdOutlineArrowBackIos></MdOutlineArrowBackIos>
                </a>
                <div>
                    <span className={`${styles.google_letter} ${styles.g}`}>
                        G
                    </span>
                    {generateArray(totalPages >= 10 ? 10 : totalPages).map(
                        (page, index) => {
                            const isActive = !!(currentPage === index + 1)

                            return (
                                <span
                                    key={index}
                                    className={styles.pagination_option}
                                >
                                    <a
                                        className={`${styles.google_letter} ${
                                            isActive
                                                ? styles.active_letter
                                                : styles.o
                                        }`}
                                    >
                                        o
                                    </a>
                                    <a
                                        key={index}
                                        className={`${styles.numeric_link} ${
                                            isActive && styles.active_link
                                        }`}
                                    >
                                        {index + 1}
                                    </a>
                                </span>
                            )
                        },
                    )}
                    {totalPages === 1 && (
                        <span className={styles.pagination_option}>
                            <span
                                className={`${styles.google_letter} ${styles.o}`}
                            >
                                o
                            </span>
                        </span>
                    )}
                    <span className={`${styles.google_letter} ${styles.g}`}>
                        g
                    </span>
                    <span className={`${styles.google_letter} ${styles.l}`}>
                        l
                    </span>
                    <span className={`${styles.google_letter} ${styles.e}`}>
                        e
                    </span>
                </div>
                <a className={styles.arrow_button}>
                    <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>
                </a>
            </div>
            <div className={styles.secondary_container}>
                <a className={styles.link}>Anterior </a>

                <a className={styles.link}>Siguiente</a>
            </div>
        </div>
    )
}

export default ResultsPagination
