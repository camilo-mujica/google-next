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
    const [previousPageLink, setPreviousPageLink] = useState('')
    const [nextPageLink, setNextPageLink] = useState('')

    useEffect(() => {
        console.log('meta', meta)
    }, [meta])

    useEffect(() => {
        if (meta) {
            setCurrentPage(meta.currentPage)
            setTotalPages(meta.totalPages)
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
                    <InnerPagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        search={search}
                    ></InnerPagination>
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

interface InnerPaginationProps {
    totalPages: number
    currentPage: number
    search: string
}

function InnerPagination({
    totalPages,
    currentPage,
    search,
}: InnerPaginationProps) {
    const MAX_DISPLAY_PAGES = 10 // Máximo número de páginas a mostrar

    let startPage = 1
    let endPage = totalPages

    if (totalPages > MAX_DISPLAY_PAGES) {
        const middlePages = MAX_DISPLAY_PAGES - 2 // Páginas intermedias excluyendo el primer y último número
        const sidePages = Math.floor(middlePages / 2) // Páginas a cada lado de la página actual

        if (currentPage <= sidePages + 1) {
            // Estamos en las primeras páginas
            endPage = MAX_DISPLAY_PAGES - 1
        } else if (currentPage >= totalPages - sidePages) {
            // Estamos en las últimas páginas
            startPage = totalPages - MAX_DISPLAY_PAGES + 2
        } else {
            // Estamos en páginas intermedias
            startPage = currentPage - sidePages
            endPage = currentPage + sidePages
        }
    }

    return (
        <>
            {generateArray(endPage - startPage + 1).map((page, index) => {
                const pageNumber = startPage + index
                const isActive = currentPage === pageNumber

                return (
                    <span key={index} className={styles.pagination_option}>
                        <a
                            className={`${styles.google_letter} ${
                                isActive ? styles.active_letter : styles.o
                            }`}
                            href={`${ROUTES.results}?q=${search}&page=${pageNumber}`} // Agrega el href con la ruta adecuada
                        >
                            o
                        </a>
                        <a
                            key={index}
                            className={`${styles.numeric_link} ${
                                isActive && styles.active_link
                            }`}
                            href={`${ROUTES.results}?q=${search}&page=${pageNumber}`} // Agrega el href con la ruta adecuada
                        >
                            {pageNumber}
                        </a>
                    </span>
                )
            })}
        </>
    )
}

export default ResultsPagination
