import React from 'react'
import styles from './load-more-results.module.scss'

interface Props {
    loading: boolean
    hasMoreResults: boolean
    handleNextPage: () => void
}
const LoadMoreResults = ({
    loading,
    hasMoreResults,
    handleNextPage,
}: Props) => {
    return (
        <>
            {hasMoreResults ? (
                <button
                    onClick={handleNextPage}
                    className={styles.load_more_button}
                    disabled={loading}
                >
                    {!loading && <span>Cargar más</span>}
                    {loading && <span className={styles.spinner}></span>}
                </button>
            ) : (
                <span className={styles.end}>Fin de los resultados</span>
            )}
        </>
    )
}

export default LoadMoreResults
