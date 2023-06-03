import { Footer } from '@components'
import { emptyPaginatedData, ROUTES } from '@constants'
import NoResultsImage from '@images/no_results.svg'
import { PrimaryLayout } from '@layouts'
import { AnimalSearch, Links, Metadata } from '@types'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {
    ResultsList,
    ResultsNavbar,
    styles,
    ResultDetailCard,
    ResultDetailModal,
    ResultsPagination,
    useGetResultsQuery,
} from './internals'
/* eslint-disable @next/next/no-img-element */

interface Props {
    initialSearch?: string
    page?: number
}
const ResultsScreen = ({ initialSearch = '', page }: Props) => {
    const router = useRouter()
    const [search, setSearch] = useState(initialSearch)
    const [pageQuery, setPageQuery] = useState(page)
    const [results, setResults] = useState<AnimalSearch[]>([])
    const [detail, setDetail] = useState<AnimalSearch | null>(null)
    const { data, isLoading, isFetching } = useGetResultsQuery(
        {
            search,
            page: pageQuery || 1,
        },
        { refetchOnMountOrArgChange: true },
    )
    const [showNoResults, setShowNoResults] = useState(false)

    const [metadata, setMetadata] = useState<Metadata>(emptyPaginatedData.meta)
    const [links, setLinks] = useState<Links>(emptyPaginatedData.links)

    useEffect(() => {
        if (data && data.data?.items) {
            setResults(data.data.items)
            setShowNoResults(data.data.items.length === 0)
            setMetadata(data.data.meta)
            setLinks(data.data.links)
        } else {
            setResults([])
            setShowNoResults(false)
            setMetadata(emptyPaginatedData.meta)
            setLinks(emptyPaginatedData.links)
        }
    }, [data])

    useEffect(() => {
        if (search) {
            if (pageQuery && pageQuery > 1) {
                router.push(
                    `${ROUTES.results}?q=${search}&page=${pageQuery}`,
                    undefined,
                    {
                        shallow: true,
                    },
                )
            } else {
                router.push(`${ROUTES.results}?q=${search}`, undefined, {
                    shallow: true,
                })
            }
        } else {
            setDetail(null)
            setShowNoResults(false)
            setResults([])
            router.push(`${ROUTES.results}`, undefined, { shallow: true })
        }

        setDetail(null)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, pageQuery])

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
                                    links={links}
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
