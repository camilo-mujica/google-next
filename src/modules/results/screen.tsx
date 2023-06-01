import { Footer } from '@components'
import { PrimaryLayout } from '@layouts'
import React, { useState } from 'react'
import { ResultsNavbar, styles } from './internals'
/* eslint-disable @next/next/no-img-element */

const ResultsScreen = () => {
    const [search, setSearch] = useState('')

    const handleSearch = (value: string) => {
        setSearch(value)
    }

    const handleSubmit = () => {
        if (!search) return
    }

    return (
        <PrimaryLayout>
            <ResultsNavbar
                search={search}
                handleSearch={handleSearch}
                handleSubmit={handleSubmit}
            ></ResultsNavbar>
            <main className={styles.main}></main>
            <Footer></Footer>
        </PrimaryLayout>
    )
}

export default ResultsScreen
