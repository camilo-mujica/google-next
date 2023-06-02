import { AnimalSearch } from '@types'
import React from 'react'
import styles from './result-detail-card.module.scss'
/* eslint-disable @next/next/no-img-element */

interface Props {
    result: AnimalSearch | null
}
const ResultDetailCard = ({ result }: Props) => {
    return (
        <article
            className={`${styles.result_detail_card} ${
                result && styles.card_border
            }`}
        >
            {result && (
                <>
                    <img
                        src={result.image}
                        alt={result.title}
                        className={styles.result_image}
                    />
                    <a className={styles.result_url} href={result.url}>
                        {result.url}
                    </a>
                    <a className={styles.result_title} href={result.url}>
                        {result.title}
                    </a>
                    <p>{result.description}</p>
                </>
            )}
        </article>
    )
}

export default ResultDetailCard
