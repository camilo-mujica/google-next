import { ROUTES } from '@constants'
import { generateArray } from '@helpers'
import { Links, Metadata } from '@types'
import React, { useEffect, useState } from 'react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import styles from './results-pagination.module.scss'

interface Props {
    search: string
    meta: Metadata
    links: Links
}
const ResultsPagination = ({ search, meta, links }: Props) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(10)
    const [totalResults, setTotalResults] = useState(0)
    const [previousPageLink, setPreviousPageLink] = useState('')
    const [nextPageLink, setNextPageLink] = useState('')

    useEffect(() => {
        if (meta) {
            setCurrentPage(meta.currentPage)
            setTotalPages(meta.totalPages)
            setTotalResults(meta.totalItems)
        }
    }, [meta, links])

    useEffect(() => {
        const previousPage = currentPage > 1 ? currentPage - 1 : ''
        const nextPage = currentPage + 1 <= totalPages ? currentPage + 1 : ''

        setPreviousPageLink(
            previousPage !== ''
                ? `${ROUTES.results}?q=${search}&page=${previousPage}`
                : '',
        )

        setNextPageLink(
            nextPage !== ''
                ? `${ROUTES.results}?q=${search}&page=${nextPage}`
                : '',
        )
    }, [currentPage, search, totalPages])

    return (
        <div className={styles.parent_container}>
            <div className={styles.initial_container}>
                <a
                    className={`${styles.arrow_button} ${
                        !previousPageLink && styles.hidden_link
                    }`}
                    href={previousPageLink || undefined}
                >
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
                <a
                    className={`${styles.arrow_button} ${
                        !nextPageLink && styles.hidden_link
                    }`}
                    href={nextPageLink}
                >
                    <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>
                </a>
            </div>
            <div className={styles.secondary_container}>
                <a
                    className={`${styles.link} ${
                        !previousPageLink && styles.hidden_link
                    }`}
                    href={previousPageLink}
                >
                    Anterior
                </a>

                <a
                    className={`${styles.link}  ${
                        !nextPageLink && styles.hidden_link
                    }`}
                    href={nextPageLink}
                >
                    Siguiente
                </a>
            </div>
        </div>
    )
}

export default ResultsPagination
