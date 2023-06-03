import { Footer } from '@components'
import NoResultsImage from '@images/no_results.svg'
import { PrimaryLayout } from '@layouts'
import React, { useState } from 'react'
import {
    ResultsList,
    ResultsNavbar,
    styles,
    ResultDetailCard,
    ResultDetailModal,
    ResultsPagination,
    useSearchResults,
} from './internals'
/* eslint-disable @next/next/no-img-element */

interface Props {
    initialSearch?: string
    page?: number
}
const ResultsScreen = ({ initialSearch = '', page }: Props) => {
    const [search, setSearch] = useState(initialSearch)
    const [pageQuery, setPageQuery] = useState(page)
    const {
        results,
        isLoading,
        isFetching,
        detail,
        setDetail,
        metadata,
        showNoResults,
    } = useSearchResults({ search, page: pageQuery || 1 })

    return (
        <PrimaryLayout>
            <section className={styles.navbar_container}>
                <ResultsNavbar
                    initialSearch={initialSearch}
                    handleSearchQuery={(value) => {
                        setSearch(value)
                        setPageQuery(1)
                    }}
                ></ResultsNavbar>
            </section>
            <main className={styles.main}>
                <section className={styles.results_container}>
                    <section className={styles.results_section}>
                        <section className={styles.results_list_container}>
                            {search && (
                                <ResultsList
                                    results={results}
                                    loading={isLoading || isFetching}
                                    handleDetail={setDetail}
                                />
                            )}

                            {showNoResults && (
                                <>
                                    <p className={styles.no_search}>
                                        No results found for{' '}
                                        <span>{`'${search}'`}</span>
                                    </p>
                                    <p className={styles.no_search}>
                                        Try looking for:{' '}
                                        <span>
                                            insect, fish, horse, crocodilia,
                                            bear, cetacean, cow, lion, rabbit,
                                            cat, snake, dog, bird.
                                        </span>
                                    </p>

                                    <img
                                        src={NoResultsImage.src}
                                        alt="Sin resultados"
                                        className={styles.no_results_image}
                                    />
                                </>
                            )}

                            {!search && (
                                <p className={styles.no_search}>
                                    Try looking for:{' '}
                                    <span>
                                        insect, fish, horse, crocodilia, bear,
                                        cetacean, cow, lion, rabbit, cat, snake,
                                        dog, bird.
                                    </span>
                                </p>
                            )}
                        </section>

                        {!isLoading && results.length > 0 && (
                            <section
                                className={styles.results_pagination_container}
                            >
                                <ResultsPagination
                                    meta={metadata}
                                    search={search}
                                />
                            </section>
                        )}
                    </section>
                    <div className={styles.result_details_container}>
                        <div className={styles.result_details_card_container}>
                            <ResultDetailCard result={detail} />
                        </div>
                    </div>
                </section>
            </main>
            <ResultDetailModal result={detail}></ResultDetailModal>
            <Footer></Footer>
        </PrimaryLayout>
    )
}

export default ResultsScreen
