import { Footer } from '@components'
import { generateAnimalDataArray } from '@helpers'
import { PrimaryLayout } from '@layouts'
import { AnimalSearch } from '@types'
import React, { useState } from 'react'
import {
    ResultsList,
    ResultsNavbar,
    styles,
    ResultDetailCard,
    ResultDetailModal,
    ResultsPagination,
} from './internals'
/* eslint-disable @next/next/no-img-element */

const initialData: AnimalSearch[] = generateAnimalDataArray(20)

const ResultsScreen = () => {
    const [search, setSearch] = useState('')
    const [data, setData] = useState<AnimalSearch[]>([])
    const [detail, setDetail] = useState<AnimalSearch | null>(null)

    const handleSearch = (value: string) => {
        setSearch(value)
    }

    const handleSubmit = () => {
        if (!search) return
    }

    React.useEffect(() => {
        setData(initialData)
    }, [])

    return (
        <PrimaryLayout>
            <ResultsNavbar
                search={search}
                handleSearch={handleSearch}
                handleSubmit={handleSubmit}
            ></ResultsNavbar>
            <main className={styles.main}>
                <section className={styles.results_container}>
                    <section className={styles.results_section}>
                        <ResultsList
                            results={data}
                            loading={false}
                            handleDetail={setDetail}
                        />

                        <section
                            className={styles.results_pagination_container}
                        >
                            <ResultsPagination></ResultsPagination>
                        </section>
                    </section>
                    <div className={styles.result_details_container}>
                        <ResultDetailCard result={detail} />
                    </div>
                </section>
            </main>
            <ResultDetailModal result={detail}></ResultDetailModal>
            <Footer></Footer>
        </PrimaryLayout>
    )
}

export default ResultsScreen
