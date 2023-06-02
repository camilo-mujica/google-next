import { AnimalSearch } from '@types'
import React from 'react'
import styles from './result-card.module.scss'

interface Props {
    result: AnimalSearch
    handleDetail: (result: AnimalSearch) => void
}
const ResultCard = ({ result, handleDetail }: Props) => {
    return (
        <article
            className={styles.result_card}
            onClick={() => {
                handleDetail(result)
            }}
        >
            <h3 className={styles.result_url}>{result.url}</h3>
            <h2 className={styles.result_title}>{result.title}</h2>
            <p>{result.description}</p>
        </article>
    )
}

export const ResultCardSkeleton = () => {
    return (
        <article className={styles.result_card_skeleton}>
            <h3 className={styles.result_url}>url</h3>
            <h2 className={styles.result_title}>title</h2>
            <p>description</p>
        </article>
    )
}

export default ResultCard
