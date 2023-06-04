import { AnimalSearch } from '@types'
import React from 'react'
import { ResultCard, ResultCardSkeleton } from '../internals'
import styles from './results-list.module.scss'

interface Props {
    results: AnimalSearch[]
    loading: boolean
    handleDetail: (result: AnimalSearch) => void
}

const ResultsList = ({ results, loading, handleDetail }: Props) => {
    return (
        <div className={styles.results_list}>
            {loading ? (
                <>
                    {Array.from({ length: 20 }, (_, index) => index + 1).map(
                        (result, index) => {
                            return (
                                <ResultCardSkeleton
                                    key={index}
                                ></ResultCardSkeleton>
                            )
                        },
                    )}
                </>
            ) : (
                <>
                    {results.map((result, index) => {
                        return (
                            <ResultCard
                                key={index}
                                result={result}
                                handleDetail={handleDetail}
                            ></ResultCard>
                        )
                    })}
                </>
            )}
        </div>
    )
}

export default ResultsList
